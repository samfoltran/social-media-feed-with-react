'use strict';

const users = [
    {
        name: 'Samuel',
        posts: [
            {
                title: 'Hello! This is my first post!',
                text: "I'm really happy i can talk to you!",
                likes: 0,
                comments: [
                    {
                        text: "Welcome to the world!",
                        likes: 0
                    }
                ]
            },
            {
                title: 'Broh, I love pizza!',
                text: "I Really want to share to you that pizza is the best food",
                likes: 0,
                comments: [
                    {
                        text: "Really man, it is!",
                        likes: 0
                    },
                    {
                        text: "I'm not sure...",
                        likes: 0
                    }
                ]
            }
        ]
    }
];

export default users;