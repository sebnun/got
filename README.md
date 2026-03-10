
# GoT

By Pablo Núñez

## Run locally


1) Clone this repo
2)  ```cd got```
3)  ```npm i```
4)  ```npm run dev```
5) Open in your browser ```http://localhost:3000```

  

## About the task
The task's readme mentions "A Game of Thrones character and continent information service." but there is no continent information shown in the mockups, so I ignored continents.

I completed this in about 3 hours.

## Ideation, architecture

Game of Thrones is over, so no new characters will be added. All of the data is fairly small, small enough to be served by a CDN and deployed as part of the bundle as JSON. So I started thinking of just building a full SPA with just a JSON  file as data source, without any network request for the API. The benefits for the user in terms of UX is very fast interactions (everything client side), and we don't depend on an external service anymore (except for the character images), we reduce the number of things that can go wrong. But I saw on the readme it explicitly mentions "app that fetches" so I started worked with the API request in mind.

The drawback of an SPA is that it is not SEO friendly, and this type of task is not very interaction heavy, so it really makes more sense to build it as a "content" type of website. The detail page, for example, can be shipped without using any javascript if we build the pages using static generation at build time with NextJs. The small data size makes it ideal for that. So I chose to use NextJs to scaffold the app.
  
Given the small amount of data, I did not use virtual lists, I think it is overkill for the dataset.

## The elephant in the room

This task could be done with an LLM, I did not use an LLM to generate code as I think it is more useful for the discussion to show code written "manually".  

The only external tool I used is squoosh.app to reduce the size of the background image.