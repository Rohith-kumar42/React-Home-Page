import './App.css';

const Footer = () => {
  // Define the data for each section as arrays of objects
  const sections = [
    {
      title: 'Useful links',
      items: [
        { name: 'About Us', url: '#about' },
        { name: 'Features', url: '#features' },
        { name: 'Terms and Conditions', url: '#terms' }
      ]
    },
    {
      title: 'Contact Us',
      items: [
        { name: 'Email', url: 'mailto:dandelions@spotknack.com' },
        { name: 'Phone', url: 'tel:+919874561230' },
        { name: 'Website', url: '#website' }
      ]
    },
    {
      title: 'Content',
      items: [
        { name: 'FAQ', url: '#faq' },
        { name: 'Sponsor Us', url: '#sponsor' }
      ]
    }
  ];

  return (
    <footer style={{ display: 'flex'}}>
      <di>
      <img src="./logo1.png"></img>
      <h2 className="para">
      Collect your components under variant sections<br/>for developers to access them during development<br/>developers to access them during development
      </h2></di>
      {sections.map((section, index) => (
        <div key={index}>
          <h3>{section.title}</h3>
          <ul>
            {section.items.map((item, subIndex) => (
              <li key={subIndex}>
                <a href={item.url}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </footer>
  );
};

export default Footer;
