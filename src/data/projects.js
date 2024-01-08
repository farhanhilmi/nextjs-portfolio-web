const projects = [
    {
        title: 'Maze Path Finder',
        description:
            'Navigate the intricate world of mazes with our <b>Maze Path Finding</b> application, where cutting-edge technologies blend seamlessly to provide an interactive and visually appealing experience.<br><br>The algorithm used for pathfinding in this project is <b>Depth-First Search (DFS)</b>. DFS explores a maze by moving as far as possible along each branch before backtracking. It is a recursive algorithm that systematically explores all paths of the maze until it finds the exit.<br><br>Technologies used in this project include <b>Go</b> for the backend, <b>ReactJS</b> for the frontend, and <b>TailwindCSS</b> for styling. <br><br><b>Check out the project:</b> <br> <ul><li class="linkParse">* <a target="__blank" href="https://github.com/farhanhilmi/go-reactjs-maze-path-finding">Github Repository</a> </li> <li class="linkParse">* <a target="__blank" href="https://maze.path-finding.farhanhilmi.com/">Demo</a> </li></ul>',
        tags: ['Go', 'ReactJS', 'DFS', 'TypeScript', 'TailwindCSS'],
        images: [
            'https://github.com/farhanhilmi/go-reactjs-maze-path-finding/raw/master/screenshots/maze-home.jpeg',
            'https://github.com/farhanhilmi/go-reactjs-maze-path-finding/raw/master/screenshots/maze-home-demo.gif',
            'https://github.com/farhanhilmi/go-reactjs-maze-path-finding/raw/master/screenshots/maze-create-demo.gif',
        ],
        type: 'Personal Project',
        priority: 1,
    },

    {
        title: 'API Generator ~ Easy way to generate API',
        description:
            'A simple API generator that can be used to generate API for your project. This project is built using <b>NextJS</b> and <b>NodeJS</b>. User just need to fill the form fieds like API name, API description, and API fields. After that, user can download the API as a zip file. <br><br><b>Check out the project:</b> <br> <ul><li class="linkParse">* <a target="__blank" href="https://github.com/farhanhilmi/nextjs-api-generator">Github Repository</a> </li> <li class="linkParse">* <a target="__blank" href="https://api-generator.farhanhilmi.com">Demo</a> </li></ul>',
        tags: ['NodeJS', 'NextJS', 'API'],
        images: [
            'https://github.com/farhanhilmi/nextjs-api-generator/blob/main/screenshoots/screenshot_1704705648426.png?raw=true',
            'https://github.com/farhanhilmi/nextjs-api-generator/blob/main/screenshoots/screenshot_1704705868917.png?raw=true',
        ],
        type: 'Personal Project',
        priority: 2,
    },
];

const sortedProjects = projects.sort((a, b) => a.priority - b.priority);
export default sortedProjects;
