# Miekeuyt Professional Website

This is the source code for my professional website. The site showcases my skills as a software engineer, includes testimonials, and details my work experience.

## Tech Stack

The website is built with Vue 3 and TypeScript, utilizing axios and AWS services. It is optimized for desktop viewing. It also uses [Masonryjs](https://masonry.desandro.com).

## Development

The main branch contains the latest code for miekeuyt.com.
It is not intended for local development but you're welcome to explore the code to understand its structure and functionalities.

The base of this project was developed over a course of 4 days. This initial version can be seen at [4days.miekeuyt.com](https://4days.miekeuyt.com) and the initial source code can be seen [on the 4days branch](https://github.com/miekeuytofficial/miekeuytsite/tree/4days).

## Deployment

The website is hosted on AWS using services:

- S3 for storage
- Route53 for DNS management
- CloudFront for content delivery
- DynamoDB for data
- Lambda + API Gateway for APIs

The deployment process involves building the project for production (`npm run build`) and uploading the resulting `dist` directory to the AWS S3 hosting service.
