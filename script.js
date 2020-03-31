
document.addEventListener('DOMContentLoaded', function(){

    //Store the body in a variable
    const theBody = document.querySelector('BODY');

    //Create elements
    const header = document.createElement('HEADER');
    const mainHeading = document.createElement('DIV');
    const tagLine = document.createElement('DIV');
    const mainNav = document.createElement('UL');
    const listItemHome = document.createElement('LI');
    const listItemAbout = document.createElement('LI');
    const listItemContact = document.createElement('LI');
    const logo = document.createElement('span');
    const button = document.createElement('BUTTON');
    const content = document.createElement('MAIN');
    const footer = document.createElement('FOOTER');
    const linkHome = document.createElement('A');
    const linkAbout = document.createElement('A');
    const linkContact = document.createElement('A');
    
    //Add content
    mainHeading.innerHTML = '<h1>This is a Javascript Website!</h1>';
    tagLine.innerHTML = '<p>This is a tagline</p>';
    logo.innerText = 'Logo';
    button.innerHTML = 'Click me';
    linkHome.innerText = 'Home';
    linkAbout.innerText = 'About';
    linkContact.innerText = 'Contact';
    content.innerHTML = '<p> This is some content Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt consequatur, consectetur in, reprehenderit aut dignissimos repellendus deserunt minus asperiores nulla, accusantium maxime provident aliquid rerum corrupti. Possimus consequatur nihil delectus!Minus deleniti ea ipsa illo saepe rem, amet quas exercitationem quam, consectetur cumque optio adipisci. Aut ut iusto corporis officia veniam necessitatibus ducimus beatae, ipsum totam? Dolorum eos quibusdam quia? </p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quod aut iusto exercitationem quas laudantium rem non minus a saepe quos, rerum facilis eligendi officiis iure dolore harum sit id?</p>';
    

    //Attach elements
    theBody.appendChild(header);
    theBody.appendChild(content);
    theBody.appendChild(footer);
    header.appendChild(logo);
    header.appendChild(mainHeading);
    header.appendChild(mainNav);
    header.appendChild(tagLine);
    header.appendChild(mainNav);
    mainNav.appendChild(listItemHome);
    mainNav.appendChild(listItemAbout);
    mainNav.appendChild(listItemContact);
    listItemHome.appendChild(linkHome);
    listItemAbout.appendChild(linkAbout);
    listItemContact.appendChild(linkContact);
    
    //Add styles
    theBody.style.minHeight = '100%';
    theBody.style.background = '#eee';
    theBody.style.margin = '0';
    theBody.style.padding = '0';
    header.style.height = '400px';
    header.style.background = "url('https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60')center/cover no-repeat";
    header.style.textAlign = 'center';
    header.style.margin = '0';
    header.style.padding = '20px';
    
    footer.style.minHeight = '100px';
    footer.style.background = 'grey';
    listItemHome.style.listStyle = 'none';
    listItemAbout.style.listStyle = 'none';
    listItemContact.style.listStyle = 'none';
    listItemAbout.style.margin = '20px';
    linkHome.style.color = '#222';
    linkAbout.style.color = '#222';
    linkContact.style.color = '#222';
    mainNav.style.padding = '0';
    content.style.width = '90%';
    content.style.maxWidth = '1000px';
    content.style.margin = '0 auto';
    

    //add Attributes
    linkHome.setAttribute('href','index.html' );
    linkAbout.setAttribute('href','index.html' );
    linkContact.setAttribute('href','index.html' );
});
