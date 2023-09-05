"use strict"

// VIDEO 3 - CLASSES & INHERITANCE

class User{
    constructor(username, email, password, age){
    this.username = username;
    this.email = email;
    this.password = password;
    this.age = age;
    }

    static countUsers(){
        console.log('There are 10 Users');
    }

    register(){
        console.log(this.username +' is now registered');
        }
    }

    let ardi = new User('arrdix', 'ardi@mail.com', '123123', '17');
    // let momo = new User('momomo', 'momo@mail.com', '123123', '19');

    ardi.register();
    // User.countUsers();

    class Member extends User{
        constructor(username, email, password, age, memberPackage){
            super(username, email, password, age);
            this.package = memberPackage;
        }

        getPackage(){
            console.log(this.username +' is subscribed to '+this.package+' package');
        }
    }

    let momo = new Member('momomo', 'momo@mail.com', '123123', '19', 'Deluxe');

    momo.getPackage();