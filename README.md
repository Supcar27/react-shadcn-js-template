
# React Javascript shadcn/ui starter 

Get started using shadcn/ui without using typescript 


## Steps to create your own
To create your react shadcn project you can either clone this repo or you can follow these steps to create the project yourself

1. start by going to https://ui.shadcn.com/docs/installation/manual and complete steps 1-4
2. create a tsconfig.json file (don't worry your still not using typescript )
3. paste the following into the tsconfig.json file
```javascript
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```
4. continue steps outlined in the above manual
5. you can now run the following if you are using npm
```
npx shadcn-ui@latest init
```
you will be prompted with a few questions and mark no for typescript

thats it your all set!





## Usage/Examples using the button component

```javascript
npx shadcn-ui@latest add button

```
will add button to components folder (if you check it out you will see the file extension .jsx)

