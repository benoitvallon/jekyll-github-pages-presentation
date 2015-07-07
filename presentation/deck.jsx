import React from "react/addons";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";

import Interactive from "./interactive";

const images = {
  awesome: require("./awesome.png")
};

preloader([images.awesome]);

export default class extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={800}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps textColor="black">
            Github pages
          </Heading>
          <Heading size={1} fit caps textColor="black">
            Workshop
          </Heading>
          <Heading size={1} fit>
            Run your blog in minutes for free
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="black">
          <Heading size={1} fit caps textColor="primary">
            Why hosting a website on github
          </Heading>
          <List>
            <ListItem textColor="primary"><Appear>Convenient</Appear></ListItem>
            <ListItem textColor="primary"><Appear>Free</Appear></ListItem>
            <ListItem textColor="primary"><Appear>Fast</Appear></ListItem>
            <ListItem textColor="primary"><Appear>Easy to setup and generate generate from scratch</Appear></ListItem>
            <ListItem textColor="primary"><Appear>A lot of templates already exist</Appear></ListItem>
            <ListItem textColor="primary"><Appear>Many examples</Appear></ListItem>
          </List>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps textColor="black">
            The Basics
          </Heading>
          <List>
            <ListItem>It is a static website</ListItem>
            <ListItem>Based on build by Jekyll</ListItem>
          </List>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="black">
          <Heading size={1} fit caps textColor="primary">
            What is Jekyll
          </Heading>
          <BlockQuote fit>
            <Quote textSize="3em">Jekyll is a static site generator. It takes a template directory containing text files, runs it through a converter, and spits out a complete ready-to-publish website.</Quote>
            <Cite>From the website (http://jekyllrb.com/docs/home)</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps textColor="black">
            Install and build our first website
          </Heading>
          <CodePane
            textSize="2em"
            lang="bash"
            source="$ gem install jekyll"
            margin="20px auto"/>
          <CodePane
            textSize="2em"
            lang="bash"
            source={require("raw!./install.txt")}
            margin="20px auto"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="black">
          <Heading size={1} fit caps textColor="primary">
            Github pages
          </Heading>
          <Heading size={1} fit caps textColor="primary">
            Your website is contained in a github repo
          </Heading>
          <List>
            <ListItem textColor="primary">1 repo = 1 website</ListItem>
            <ListItem textColor="primary">Different type of github pages/websites</ListItem>
            <ListItem textColor="primary">1. User/Organisation website</ListItem>
            <ListItem textColor="primary">2. Project website</ListItem>
          </List>
        </Slide>
        <Slide transition={["zoom", 'slide']} bgColor="primary">
          <Heading size={1} fit caps textColor="black" margin="30px 0">
            Github pages conventions
          </Heading>
          <Heading size={1} textSize="2em" textColor="black">
            User/Organization website
          </Heading>
          <List>
            <ListItem textColor="black">Code in the master branch</ListItem>
            <ListItem textColor="black">Only 1 per User/organisation</ListItem>
            <ListItem textColor="black">username.github.io or orgname.github.io</ListItem>
          </List>
          <Heading size={1} textSize="2em" textColor="black">
            Project website
          </Heading>
          <List>
            <ListItem textColor="black">Code in the gh-pages branch</ListItem>
            <ListItem textColor="black">Only 1 per repository</ListItem>
            <ListItem textColor="black">username.github.io/projectname or orgname.github.io/projectname</ListItem>
          </List>
        </Slide>
        <Slide transition={["slide", "spin"]} bgColor="black">
          <Heading size={1} fit caps textColor="primary">
            If I want my own domain name
          </Heading>
          <Heading size={1} textSize="2em" textColor="primary">
            On your DNS provider side
          </Heading>
          <List>
            <ListItem textColor="primary">Buy your domain name</ListItem>
            <ListItem textColor="primary">Configure a CNAME record to your github url (username.github.io)</ListItem>
          </List>
          <CodePane
            textSize="1.35em"
            lang="bash"
            source={require("raw!./digcmd.txt")}
            margin="20px auto"/>
        </Slide>
        <Slide transition={["zoom"]} bgColor="black">
          <Heading size={1} fit caps textColor="primary">
            If I want my own domain name
          </Heading>
          <Heading size={1} textSize="2em" textColor="primary">
            On the Github side
          </Heading>
          <List>
            <ListItem textColor="primary">Push a file named CNAME containing your domain name</ListItem>
          </List>
          <CodePane
            textSize="2em"
            lang="bash"
            source="blog.example.com"
            margin="20px auto"/>
        </Slide>
        <Slide transition={["spin", "slide"]} bgColor="primary">
          <Image src={images.awesome.replace("/", "")} margin="0px auto 40px" height="293px"/>
          <Heading size={1} fit caps textColor="black">
            Your new blog is ready
          </Heading>
          <Heading size={1}>
            Thank you
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
