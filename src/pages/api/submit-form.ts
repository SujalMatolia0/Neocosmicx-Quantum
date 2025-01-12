import { DisHook, EmbedBuilder } from '@folie/dishook';
import { NextApiRequest, NextApiResponse } from 'next';

const myDisHook = new DisHook({
  name: 'Contact Form',
  url: 'https://discord.com/api/webhooks/1327535547068977173/kanLYZA1cJVC24vweNLfeRVsFS_1639FkPr05FHni6JR_JmEnJhfPidid2aJm4zbQcBh',
  bot: {
    username: 'Spidey Bot',
  },
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { fullName, email, message } = req.body;

    if (!fullName || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
      const payload = [
        new EmbedBuilder()
          .setTitle('New Contact Form Submission')
          .addFields(
            { name: 'Full Name', value: fullName },
            { name: 'Email', value: email },
            { name: 'Message', value: message }
          ),
      ];

      const response = await myDisHook.send({
        type: 'complex',
        value: payload,
      });

      console.log('Discord webhook response:', response);
      return res.status(200).json({ success: true, response });
    } catch (error: any) {
      console.error('Failed to send form data to Discord:', error);
      return res.status(500).json({ success: false, error: error.message });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
