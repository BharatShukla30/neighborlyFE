import {useState} from 'react';

const FAQS = () => {
    const [faqs, setFaqs] = useState([
        {
          question: "Why should I use Neighborly when I already have Facebook Groups, WhatsApp, or Reddit?",
          answer: "Neighborly is a hyper-localized social media app specifically designed to connect you with your immediate neighborhood. Unlike broader platforms, Neighborly focuses entirely on local engagement, fostering meaningful connections, and promoting community involvement. It also offers anonymous posting, community rewards, and features tailored to neighborhood interactions that global platforms can't replicate.",
          open: false
        },
        {
          question: "How is Neighborly’s dynamic feed different from other social media platforms?",
          answer: "While most social media feeds are dynamic, Neighborly’s feed is uniquely hyper-localized. This means all content is directly relevant to your neighborhood, making it more meaningful and useful for community building, unlike broader platforms where content can be from anywhere.",
          open: false
        },
        {
          question: "If I’ve already created a WhatsApp group with my neighborhood tribe, why should I return to Neighborly?",
          answer: "Neighborly offers a broader community experience beyond just your immediate group. It helps you connect with more neighbors, discover local events, and engage in organized content tailored to your neighborhood. It also provides anonymous interaction and rewards for community contributions, enhancing your local experience.",
          open: false
        },
        {
          question: "How does Neighborly manage trolls and bad users?",
          answer: "Neighborly uses AI-driven content moderation, community reporting tools, and clear community guidelines to handle trolls and bad actors. It also combines anonymous posting with accountability and offers positive reinforcement through gamification, ensuring a safe and constructive environment.",
          open: false
        },
        {
          question: "How is Neighborly different from Reddit, and isn’t it just a less popular version?",
          answer: "Unlike Reddit, which is global and topic-based, Neighborly is purpose-built for local communities. It focuses on hyper-local engagement, ensuring every interaction is relevant to your neighborhood. Neighborly emphasizes real-world impact, helping to organize events and initiatives that directly benefit your local community. While Reddit’s scale is vast, Neighborly’s strength lies in fostering deeper, more meaningful connections within a smaller, more focused community.",
          open: false
        }
      ]);
    
      function handleFaqOpen(index) {
        setFaqs((prevFaqs) =>
          prevFaqs.map((faq, i) => 
            i === index ? { ...faq, open: true } : { ...faq, open: false }
          )
        );
      }
    
      return (
        <div className='p-2 m-3'>
          
          <h1 className='text-lg font-semibold text-gray-800 py-3'>Frequently Asked Questions:</h1> 
          {faqs.map((faq, index) => (
            <div
              key={index}
              onClick={() => handleFaqOpen(index)}
              className="rounded-sm bg-indigo-300 border-b-2 mb-1 cursor-pointer"
            >
              <div className="text-base font-semibold p-2 border-b-2 ">
                {faq.question}
              </div>
              {faq.open && (
                <div className="text-base p-2 bg-indigo-100">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      );
}

export default FAQS;