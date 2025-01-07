export interface MembershipType {
  id: number;
  bg_image?: string;
  hero_heading?: string;
  title?: string;
  text?: string[];
  membership_name?: string;
  membership_type_2_image?: string;
  membership_type_1_image?: string;
  membership_type?: string;
  membership_points?: string[];
  membership_price_1?: string;
  membership_type_2?: string;
  point_title_2?: string[];
  membership_price_2?: string;
  button?: string[];
  faq?: { question: string; answer: string }[];
}

export const MainMembershipData: MembershipType[] = [
  {
    id: 1,
    bg_image: '/membership.jpeg',
    hero_heading: 'Memberships',
    title: "Join the world's leading Quantum professional community",
    text: [
      'The membership will renew automatically after a year. Post your payment, your account will start receiving membership benefits. Membership once paid, shall not be refunded, You will be able to cancel the subscription anytime',
      'For more information or incase of any queries please drop a mail to memberships@neocosmicx.in',
    ],
    button: ['Individual', 'Student', 'Enterprise'],
  },
];

export const MembershipData: MembershipType[] = [
  {
    id: 1,
    bg_image: '/individual_hero.jpeg',
    hero_heading: 'Individual Membership',
    title: "Join the world's leading Quantum professional community",
    text: [
      'The Individual Membership at Neocosmicx is your gateway to a world of quantum possibilities. Designed for professionals, students, researchers, and enthusiasts, this membership connects you to a vibrant global community of quantum innovators, offering unparalleled resources and opportunities to grow your expertise and make an impact in the quantum field.',
      'For more information or incase of any queries please drop a mail to memberships@neocosmicx.in',
    ],
    membership_name: 'Individual Memberships',
    membership_type: 'General Membership',
    membership_points: [
      'If you’re passionate about quantum computing and eager to explore its potential, this membership is your starting point.',
      'Get hands-on experience with curated learning materials, and white papers.',
      'Connect with a global network of quantum experts.',
      'Explore job boards, internship opportunities, and career guidance tailored to the quantum field.',
      'Tailor your quantum journey with resources and programs suited to your expertise and interests.',
    ],
    membership_price_1: 'Get it For $10/Month',
    membership_type_2: 'Premium Membership',
    membership_type_2_image: '/individual_premium.jpeg',
    membership_type_1_image: '/individual_general.jpeg',
    point_title_2: [
      'Everything in General Membership.',
      'Get recognized as the member of the premier global professional body.',
      'Get recognized as the member of the premier global professional body.',
      'Get recognized as the member of the premier global professional body.',
      'Get recognized as the member of the premier global professional body.',
      'Get recognized as the member of the premier global professional body.',
    ],
    membership_price_2: 'Get it For $15/Month',
    faq: [
      {
        question: 'how long are your memberships? ',
        answer: 'we offer annual memberships only',
      },
      {
        question: 'how long are your memberships? ',
        answer: 'we offer annual memberships only',
      },
      {
        question: 'how long are your memberships? ',
        answer: 'we offer annual memberships only',
      },
      {
        question: 'how long are your memberships? ',
        answer: 'we offer annual memberships only',
      },
      {
        question: 'how long are your memberships? ',
        answer: 'we offer annual memberships only',
      },
      {
        question: 'how long are your memberships? ',
        answer: 'we offer annual memberships only',
      },
    ],
  },
  {
    id: 2,
    bg_image: '/quantum-27.jpg',
    hero_heading: ' Corporate Membership',
    title: "Join the world's leading Quantum professional community",
    text: [
      'The Corporate Membership at Neocosmicx is designed to empower organizations with the tools, resources, and expertise to harness the transformative power of quantum computing. Whether you are exploring quantum solutions for the first time or advancing your organizations quantum strategy, this membership connects you to cutting-edge technology, global experts, and industry-specific applications tailored to your business needs.',
      'For more information or incase of any queries please drop a mail to memberships@neocosmicx.in',
    ],
    membership_name: 'Corporate Memberships',
    membership_type: 'What you get?',
    membership_type_1_image: '/quantum-corporate.jpg',
    membership_points: [
      'Access bespoke quantum tools and resources that address your organizations unique challenges and objectives.',
      'Collaborate with world-class quantum scientists, engineers, and consultants who provide guidance and support for your projects.',
      'Equip your team with the skills and knowledge to lead quantum initiatives through custom training sessions and workshops.',
      'Be the first to access Neocosmicx latest quantum technologies, tools, and research findings.',
      'Connect with other industry leaders and innovators to share insights and foster collaborations.',
    ],
    membership_price_1: 'Get a Quote!',
    faq: [
      {
        question: 'how long are your memberships? ',
        answer: 'we offer annual memberships only',
      },
      {
        question: 'how long are your memberships? ',
        answer: 'we offer annual memberships only',
      },
      {
        question: 'how long are your memberships? ',
        answer: 'we offer annual memberships only',
      },
      {
        question: 'how long are your memberships? ',
        answer: 'we offer annual memberships only',
      },
      {
        question: 'how long are your memberships? ',
        answer: 'we offer annual memberships only',
      },
      {
        question: 'how long are your memberships? ',
        answer: 'we offer annual memberships only',
      },
    ],
  },
  {
    id: 3,
    bg_image: '/student_hero.jpeg',
    hero_heading: ' Student Membership',
    title: "Join the world's leading Quantum professional community",
    text: [
      'The Student Membership at Neocosmicx is your first step toward building a successful career in quantum computing. Designed specifically for students passionate about exploring the quantum realm, this membership provides access to exclusive resources, mentorship, and opportunities to connect with global leaders in the field. Empower yourself with the tools and knowledge to become a pioneer in the quantum revolution.',
      'For more information or incase of any queries please drop a mail to memberships@neocosmicx.in',
    ],
    membership_name: 'Student Memberships',
    membership_type_1_image: '/student_section.jpeg',

    membership_type: 'General Membership',
    membership_points: [
      'Gain access to beginner-friendly tutorials, advanced quantum programming guides, and white papers to fuel your academic and personal growth.',
      'Explore internship programs, career fairs, and job boards tailored to quantum computing and related fields.',
      'Earn certifications in quantum programming, quantum algorithms, and more to showcase your expertise and enhance your resume.',
      'Receive guidance from experienced quantum scientists and engineers who can help you navigate your journey in this transformative field.',
      'Applicable with proof of your student status.',
    ],
    membership_price_1: 'Get it for Free!',
    faq: [
      {
        question: 'how long are your memberships? ',
        answer: 'we offer annual memberships only',
      },
      {
        question: 'how long are your memberships? ',
        answer: 'we offer annual memberships only',
      },
      {
        question: 'how long are your memberships? ',
        answer: 'we offer annual memberships only',
      },
      {
        question: 'how long are your memberships? ',
        answer: 'we offer annual memberships only',
      },
      {
        question: 'how long are your memberships? ',
        answer: 'we offer annual memberships only',
      },
      {
        question: 'how long are your memberships? ',
        answer: 'we offer annual memberships only',
      },
    ],
  },
];
