import { Webhook } from 'svix';
import User from '../models/User.js';
import dotenv from 'dotenv';

dotenv.config();

export const handleWebhook = async (req, res) => {
    try {
        const svixSecret = process.env.SVIX_WEBHOOK_SECRET;

        if (!svixSecret) {
            return res.status(500).json({ error: 'Webhook secret not configured' });
        }

        const headers = {
            'svix-id': req.headers['svix-id'],
            'svix-timestamp': req.headers['svix-timestamp'],
            'svix-signature': req.headers['svix-signature']
        };

        const payload = JSON.stringify(req.body);
        const wh = new Webhook(svixSecret);

        // Verify the webhook signature
        await wh.verify(payload, headers);

        const { data, type } = req.body;

        switch (type) {
            case 'user.created':
                await User.create({
                    _id: data.id,
                    name: `${data.name.first_name} ${data.name.last_name}`,
                    email: data.email_address[0]?.email_address,
                    resume: data.resume || '',
                    image: data.image_url
                });
                console.log('✅ User created:', data.email_address[0]?.email_address);
                break;

            case 'user.updated':
                await User.findByIdAndUpdate(data.id, {
                    name: `${data.name.first_name} ${data.name.last_name}`,
                    email: data.email_address[0]?.email_address,
                    image: data.image_url
                });
                console.log('🔄 User updated:', data.email_address[0]?.email_address);
                break;

            case 'user.deleted':
                await User.findByIdAndDelete(data.id);
                console.log('🗑️ User deleted:', data.id);
                break;

            default:
                console.log('⚠️ Unhandled event type:', type);
        }

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error('❌ Webhook error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
