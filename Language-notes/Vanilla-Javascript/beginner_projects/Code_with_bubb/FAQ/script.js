const dataArray = [
    {
        title: 'Why is JavaScript cool?',
        detail: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur soluta veniam facere? Accusamus harum, quam ratione odio nesciunt deserunt eum rerum sit ut neque esse praesentium deleniti itaque, eveniet suscipit.'
    },
    {
        title: 'What is JavaScript',
        detail: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur soluta veniam facere? Accusamus harum, quam ratione odio nesciunt deserunt eum rerum sit ut neque esse praesentium deleniti itaque, eveniet suscipit.'
    },
    {
        title: 'How can I learn JavaScript',
        detail: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur soluta veniam facere? Accusamus harum, quam ratione odio nesciunt deserunt eum rerum sit ut neque esse praesentium deleniti itaque, eveniet suscipit.'
    },
    {
        title: 'Does JavaScript know who the Muffin Man is?',
        detail: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur soluta veniam facere? Accusamus harum, quam ratione odio nesciunt deserunt eum rerum sit ut neque esse praesentium deleniti itaque, eveniet suscipit.'
    },
];

const makeHTML = data => { // since there is only one arguement this arrow function won't need a set of parenthesis
    return `<details>
        <summary>${data.title}</summary>
        <p>${data.detail}<p/>
    </details>`
}

const containerElement = document.getElementById('faq-container')

containerElement.innerHTML = dataArray.map(dataItem => makeHTML(dataItem)).join('');