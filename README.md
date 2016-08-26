#shortly-deploy
This is a project I completed as a student at [hackreactor](http://hackreactor.com). This project was worked on with a pair.

How to create a digital ocean server: 

create ssh and get it set up as a profile on digital ocean

create droplet server, do not create password (just press enter when prompted to input one)

in terminal: ssh root@[serverIPaddress]

clone your git repo to /var/[repo name] var is located in the directory above root

mkdir repo && cd repo
mkdir site.git && cd site.git
git init --bare

cd hooks

cat > post-receive 

(can also use nano or whatever)

save this to post-receive: 
#!/bin/sh
git --work-tree=/var/[repo name] --git-dir=/var/repo/site.git checkout -f

after saving

chmod +x post-receive

now add the server as an remote on your local git

git remote add live ssh://user@mydomain.com/var/repo/site.git

now you can push to server 

make sure if you want to do so on another device you get a copy of your ssh file. 

see the package.json and Gruntfile.js for automation with server pushes. 