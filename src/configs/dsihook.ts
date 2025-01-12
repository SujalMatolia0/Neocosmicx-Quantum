import { getLatestFormData } from '@/components/pages/coming_soon/solutionHero';
import { DisHook } from '@folie/dishook';

const myDisHook = new DisHook({
  name: 'Contact Form',
  url: 'https://discord.com/api/webhooks/1327535547068977173/kanLYZA1cJVC24vweNLfeRVsFS_1639FkPr05FHni6JR_JmEnJhfPidid2aJm4zbQcBh',
  bot: {
    username: 'Spidey Bot',
  },
});

async () => {
  const formData = getLatestFormData();

  const payload = {
    name: formData.fullName,
    email: formData.email,
    message: 'Form submission',
  };

  console.log(payload)

  const response = await myDisHook.send({
    type: 'simple',
    value: payload,
  });

  console.log('Form data sent to Discord:', response);
};
