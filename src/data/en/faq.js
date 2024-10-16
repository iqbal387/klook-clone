import { setCurrency } from '@helpers/methods/currency';

const general = [
  {
    title: 'What is peer-to-peer financing?',
    description:
      'Peer-to-peer financing is a financing service for a project through digital platform which bridges the Funders and Project Owners as Beneficiary.',
  },
  {
    title:
      'What is the difference between <span class="text-primary-main dark:text-primary-surface">ETHIS</span> Sharia Peer-to-peer financing and other digital financing platforms?',
    description:
      'Sharia peer-to-peer financing, in <span class="text-primary-main dark:text-primary-surface">ETHIS</span>, applies sharia based agreements and does not apply interest (riba). The fund is channeled to a project with social impact on a big scale. Peer-to-peer is also a crowdfunding activity with a small amount of money for a purpose. The applicant for a crowdfunding must state the reason for funding need.',
  },
  {
    title:
      'What are the benefits of joining peer-to-peer <span class="text-primary-main dark:text-primary-surface">ETHIS</span>?',
    description:
      'Peer-to-peer <span class="text-primary-main dark:text-primary-surface">ETHIS</span> provides services for the Users to grow the money or apply financing to grow the business. All services provided by <span class="text-primary-main dark:text-primary-surface">ETHIS</span> is based on Sharia concept which prioritizes fairness in financing and gives social impact.',
  },
  {
    title:
      'What are the sharia contracts applied in <span class="text-primary-main dark:text-primary-surface">ETHIS</span>?',
    description:
      '<span class="text-primary-main dark:text-primary-surface">ETHIS</span> uses Musyarakah as a profit sharing system for Funders and Beneficiary and also Wakalah for <span class="text-primary-main dark:text-primary-surface">ETHIS</span> as an agent/platform which bridges the two parties in a website.',
  },
  {
    title:
      'How <span class="text-primary-main dark:text-primary-surface">ETHIS</span> “bridges” the agreement between the parties involved?',
    description:
      'All agreements will be sent through a digital signature apps to the email of <span class="text-primary-main dark:text-primary-surface">ETHIS</span> Funders. It is an electronic signature which has similar legal force.',
  },
  {
    title: 'Can a User create more than one account?',
    description:
      'Each financing allows one account only in <span class="text-primary-main dark:text-primary-surface">ETHIS</span> platform. This is for secured transactions which has been regulated by the government. ',
  },
];

const funding = (minimumInvesment = 0) => [
  {
    title:
      'What are the financing products offered by <span class="text-primary-main dark:text-primary-surface">ETHIS</span>?',
    description:
      '<span class="text-primary-main dark:text-primary-surface">ETHIS</span> offer project financing for property’s construction and development, infrastructure and SME.',
  },
  {
    title:
      'Who and what are the requirements for financing applications in <span class="text-primary-main dark:text-primary-surface">ETHIS</span>?',
    description:
      'Each individual who has been registered as a User in <span class="text-primary-main dark:text-primary-surface">ETHIS</span> may apply for financing. The requirements are attachment of personal data and company, and legal documents of submitted projects.',
  },
  {
    title:
      'What kind of projects are approved for financing by <span class="text-primary-main dark:text-primary-surface">ETHIS</span>?',
    description:
      'At this time, we accept SMC project financing from many sectors with portfolios or good track records for business growth. Whereas in property projects, we focus on affordable housing development to support in providing homes for mid-low income families.',
  },
  {
    title:
      'How to apply project financing to <span class="text-primary-main dark:text-primary-surface">ETHIS</span>?',
    description:
      'Financing can be applied online by selecting menu Financing Application, after being registered as a User for <span class="text-primary-main dark:text-primary-surface">ETHIS</span> services. Choose your business type accordingly, fill in the data completely as in Pre-Onboarding Form as for being analysed by Business and Analyst <span class="text-primary-main dark:text-primary-surface">ETHIS</span>. Then you will be contacted by our team for the due diligence result.',
  },
  {
    title: 'How long will the application process take?',
    description:
      'Selection process will be around 2-4 weeks with complete documents and requirements, and fundraising will take 45 days.',
  },
  {
    title:
      'Is there any guarantee security for the financing in <span class="text-primary-main dark:text-primary-surface">ETHIS</span>?',
    description:
      'Besides the result of a tight project analysis done by the analyst team in <span class="text-primary-main dark:text-primary-surface">ETHIS</span>, the project owner gives his cooperation in providing guarantee upon <span class="text-primary-main dark:text-primary-surface">ETHIS</span> approval and <span class="text-primary-main dark:text-primary-surface">ETHIS</span> will work with third parties for sharia credit protection.',
  },
  {
    title:
      'Are there any charges for this fundraising service through <span class="text-primary-main dark:text-primary-surface">ETHIS</span> website which will be used to fulfil the needs of funds from the project owner?',
    description:
      '<span class="text-primary-main dark:text-primary-surface">ETHIS</span> charges platform fee differently based on project value and repayment period, with profit margin which will be distributed for Funders.',
  },
  {
    title: 'Is there any fine for overdue repayment?',
    description:
      'No. Sharia does not allow additional fees in debt and financing. Guarantee provided by the project owner has been calculated based on the fund needed and can be used to settle accounts payable. If the value is more than the fund proposed, we will return the balance to the beneficiary. If the problem continues, the signed agreement has a legal force and will be resolved accordingly.',
  },
  {
    title:
      'Can Financing <span class="text-primary-main dark:text-primary-surface">ETHIS</span> used for consumtive purposes, like online loan (Pinjol)?',
    description:
      'No. <span class="text-primary-main dark:text-primary-surface">ETHIS</span> only provides financing for property and SME projects which needs to provide valid documents.',
  },
  {
    title:
      'How to be an <span class="text-primary-main dark:text-primary-surface">ETHIS</span> Funder?',
    description:
      "To be an <span class='text-primary-main dark:text-primary-surface'>ETHIS</span> Funder, you may register yourself through this website and fill in the profile accordingly.  If your account has been successfully verified, you may start your first funding on available campaigns as in the user's dashboard.",
  },
  {
    title: 'Is there any limited age to be a Funder?',
    description:
      '<span class="text-primary-main dark:text-primary-surface">ETHIS</span> facilitates to be a Funder, where all people with national ID (KTP/Passport) can participate to fund a project.',
  },
  {
    title: 'Are there any required documents for a Funder?',
    description:
      "You should provide your active national ID (KTP/Passport) and taxpayer number (NPWP) which is acknowledged by Indonesia or other countrie's governments.",
  },
  {
    title:
      'What is the minimum amount of funding and is it refundable for a running project?',
    description: `Until today, <span class="text-primary-main dark:text-primary-surface">ETHIS</span> facilitates funding as low as ${setCurrency(
      minimumInvesment
    )}, as in peer-to-peer platform, will be channelled directly to the Beneficiary. Funding that has been transferred is not refundable until the due date or project has been accomplished.`,
  },
  {
    title: 'How can a Funder monitor the project?',
    description:
      'Funders can monitor the project development using the project dashboard at least monthly, moreover for a significant update.',
  },
];

const riskManagement = [
  {
    title:
      'Does funding on a property/SME project in a peer-to-peer platform have risk?',
    description:
      'It is important to notice that all funding platforms including peer-to-peer in property and SME sectors may have possibility in capital loss. It is suggested to use additional funds and diversify in different published projects.',
  },
  {
    title:
      'May I possibly lose my money in funding through <span class="text-primary-main dark:text-primary-surface">ETHIS</span>?',
    description:
      'In a worst case, your capital fund may not be returned. If failure happens, all your funds may be lost.',
  },
  {
    title:
      'How does <span class="text-primary-main dark:text-primary-surface">ETHIS</span> manage or minimize a risk?',
    description:
      'Islamic finance has a function in risk sharing instead of transferring risk. However, the guarantee will be strong if Beneficiary providing the strong one. <span class="text-primary-main dark:text-primary-surface">ETHIS</span> has a tight and careful filtering system to minimize the risk of funders and projects, also market and other external risks. <span class="text-primary-main dark:text-primary-surface">ETHIS</span> also emphasizes due diligence before publication of fundraising.',
  },
];

const socialImpact = [
  {
    title:
      'How can property and SME funding projects contribute social impact?',
    description:
      'Other than to increase the economy in Indonesia through SME funding, <span class="text-primary-main dark:text-primary-surface">ETHIS</span> also facilitates Funders to get involved in the real estate or property market which has real and secured assets. For them who earn average income, property sector in <span class="text-primary-main dark:text-primary-surface">ETHIS</span> becomes affordable. With a small amount of money, you can get involved in property project funding which contributes a huge scale of social impact such as affordable housing, or subsidized homes. Therefore, <span class="text-primary-main dark:text-primary-surface">ETHIS</span> Funders may earn profit and contribute to social impact in one time.',
  },
  {
    title:
      'Is <span class="text-primary-main dark:text-primary-surface">ETHIS</span> a social company?',
    description:
      '<span class="text-primary-main dark:text-primary-surface">ETHIS</span> is a financial technology platform with the aims of boosting the social impact in the community. The fundraised is directly channeled to the project owner to accelerate their business development so the social economy keeps dynamic.',
  },
  {
    title:
      'Why does <span class="text-primary-main dark:text-primary-surface">ETHIS</span> also offer a property financing project which is, in common, known as exclusive/high market?',
    description:
      'In <span class="text-primary-main dark:text-primary-surface">ETHIS</span>, funding in the property sector is focused on giving more social impact. Especially building affordable houses in Indonesia, which are still needed in a large number of houses. We are proud to be among them to help low income people to own a home. In this matter, the fund will be used for property development and real estate construction.',
  },
];

const shariaBase = [
  {
    title: 'What is Sharia? And what does Islamic Finance mean?',
    description:
      'Islam is not only a religion; but it is also a way of life which contains of law and ethic code related to social matters, economy and politics. A Moslem should live according to Islamic principles in life aspects. Sharia regulates finance and financing which can be practiced by Moslems. Islamic finance is defined as a contract finance and regulation which are adopted from scientific research heritage in Fiqh Muamalat (Islamic transaction principles) and modified to comply with the rules of modern banking, but follows Islamic principles. in Islam, funds should be utilized productively, and the profit is earned through a trading and financing approved by Islam. A collective financing should include risk sharing elements and ideally verified that Beneficiary will use the fund for the activities approved by Islam. If an interest applied in funding, this is assumed in misusing the agreement and not permitted in Islam. Sharia also disallows trading or financing for unethical industry or commodity, such as: weapons, gamblings, alcohols, conventional banking or insurance, non-halal foods and beverages, and many more.',
  },
  {
    title:
      'Is <span class="text-primary-main dark:text-primary-surface">ETHIS</span> business in accordance to Islamic principles?',
    description:
      'All agreements applied in <span class="text-primary-main dark:text-primary-surface">ETHIS</span> are based on Islamic rules. Our documents are professionally prepared by the legal team with experience in Shariah matters and also Sharia supervisors certified by the National Sharia Council (DSN-MUI). By this, <span class="text-primary-main dark:text-primary-surface">ETHIS</span> platform is also granted by DSN-MUI certification as an peer-to-peer financing technology platform.',
  },
  {
    title: 'How does sharia financing differ from conventional financing?',
    description:
      'One of the main objectives of Islamic principles is to create fairness/balance in society. Sharia system gives more concerns in economy, society and environment. In this case, <span class="text-primary-main dark:text-primary-surface">ETHIS</span> attend more to the activities which contributes to those aspects. Conversely, conventional has less consideration in ethical values, environment, or social since the objective is to earn more profit.',
  },
  {
    title: 'Is shariah funding riskier than conventional?',
    description:
      'Every funding/financing is definitely risky. It is similar to conventional funding, sharia financing needs evaluation as a risk management method, such as: business planning analysis, financial management for Beneficiary, understanding repayment history, and etc. However, to make sure that funding is Islamic, there are more analyses to ensure that the business is sharia compliance. Financing in non-sharia compliance such as weapons trading/production, gamblings, alcohols, conventional banking or insurance, non-halal foods and beverages, non-halal entertainment, and others which are not allowed in Islam.',
  },
];

const other = [
  {
    title:
      'How if the project is sharia compliance while in the financing process, but it turns into non-compliance after repayment?',
    description:
      "After repayment and profit sharing, Funder is not related anymore to the project. Sharia compliance is the Beneficiary's responsibility.",
  },
  {
    title:
      'Why does not <span class="text-primary-main dark:text-primary-surface">ETHIS</span> appoint a person or third party to monitor and supervise the business owner to escape?',
    description:
      'At this time, <span class="text-primary-main dark:text-primary-surface">ETHIS</span> is working with a third party which is affiliated and delegates us to be a partner so we may directly monitor the project and have a similar function as a custodian.',
  },
  {
    title:
      'Why does the Beneficiary decide to apply financing to <span class="text-primary-main dark:text-primary-surface">ETHIS</span> rather than to a bank?',
    description:
      'Our application process and services is shorter and more practicable to the bank’s, as similar to the terms and conditions (see previous questions).',
  },
];

const faq = (minimumInvesment) => [
  {
    label: 'General',
    data: general,
  },
  {
    label: 'Financing',
    data: funding(minimumInvesment),
  },
  {
    label: 'Risk Management',
    data: riskManagement,
  },
  {
    label: 'Social Impact',
    data: socialImpact,
  },
  {
    label: 'Basic of Shariah',
    data: shariaBase,
  },
  {
    label: 'Others',
    data: other,
  },
];

export default faq;
