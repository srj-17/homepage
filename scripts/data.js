export const projects = [
    {
        img: {
            src: "img/project-photos/djs_overall.jpg",
            alt: "Distributed Job Scheduler worker metrics and dashboard logs"
        },
        title: "Distributed Job Scheduler",
        links: {
            github: "https://github.com/sandeshkhadka/distributed-job-scheduler",
            live: "https://github.com/sandeshkhadka/distributed-job-scheduler"
        },
        description: "A client-server platform that distributes computational jobs across a cluster of remote worker nodes. A central scheduler manages job queues and assigns work to workers that run each job in an isolated Linux cgroups v2 environment, while a custom eBPF monitor provides real-time, kernel-level metrics on CPU, memory, I/O, network usage, and system calls."
    },
    {
        img: {
            src: "img/project-photos/multi-client-chat-server.png",
            alt: "Multi-client chat server running in a terminal"
        },
        title: "Multi-client Chat Server",
        links: {
            github: "https://github.com/srj-17/multi-client-chat-server",
            live: "https://github.com/srj-17/multi-client-chat-server"
        },
        description: "A multi-client TCP chat server and client written in C, using a single poll() event loop to broadcast messages between connected clients without threads."
    },
    {
        img: {
            src: "img/project-photos/battleship.png",
            alt: "Battleship screenshot"
        },
        title: "Battleship",
        links: {
            github: "https://github.com/srj-17/battleship",
            live: "https://srj-17.github.io/battleship/"
        },
        description: "An implementation of classic battleship game."
    },
    {
        img: {
            src: "img/project-photos/blogging-website.png",
            alt: "Blogging Website screenshot"
        },
        title: "Blogging Website",
        links: {
            github: "https://www.github.com/srj-17/blog-api",
            live: "https://srj-17-blog.netlify.app/"
        },
        description: "A blog website made with express backend exposing REST API and 2 frontends for editing and viewing."
    },
]

export const personalInfo = {
    name: "Saugat Rijal",
    photo: "img/person.jpg",
    description: `Hi! My name is Saugat Rijal.
                  When I'm not building things or solving problems, 
                  you can find me playing my guitar, or football.`,
    socialLinks: {
        github: "https://github.com/srj-17",
        linkedin: "https://np.linkedin.com/in/saugatrj17",
        twitter: "https://x.com/ranhoodlum"
    },
    contact: {
        message: "Please get in touch if you think our work could be mutually benificial!",
        address: "Macchapokhari, Kathmandu",
        phone: "+977 9766137156",
        mail: "saugatrijal17@gmail.com"
    }
}
