const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("should return a new engineer object which contains properties of name,id, email and Github username when called with the 'new' keyword", () => {
      const engineer = new Engineer();
      expect("name" in engineer).toEqual(true);
      expect("id" in engineer).toEqual(true);
      expect("email" in engineer).toEqual(true);
      expect("github" in engineer).toEqual(true);
    });
    it("should set 'name','id','email' and 'github' when created", () => {
      const name = "Bob";
      const id = 1;
      const email = "bob@gmail.com";
      const github = "git";
      const engineer = new Engineer(name, id, email, github);
      expect(engineer.name).toEqual(name);
      expect(engineer.id).toEqual(id);
      expect(engineer.email).toEqual(email);
      expect(engineer.github).toEqual(github);
    });
  });

  describe("getName", () => {
    it("should return the name of engineer", () => {
      const name = "Bob";
      const id = 1;
      const email = "bob@gmail.com";
      const github = "git";
      const engineer = new Engineer(name, id, email, github);
      expect(engineer.getName()).toEqual(name);
    });
  });

  describe("getId", () => {
    it("should return the id of engineer", () => {
      const name = "Bob";
      const id = 1;
      const email = "bob@gmail.com";
      const github = "git";
      const engineer = new Engineer(name, id, email, github);
      expect(engineer.getId()).toEqual(id);
    });
  });

  describe("getEmail", () => {
    it("should return the email of engineer", () => {
      const name = "Bob";
      const id = 1;
      const email = "bob@gmail.com";
      const github = "git";
      const engineer = new Engineer(name, id, email, github);
      expect(engineer.getEmail()).toEqual(email);
    });
  });

  describe("getGithub", () => {
    it("should return the github username of engineer", () => {
      const name = "Bob";
      const id = 1;
      const email = "bob@gmail.com";
      const github = "git";
      const engineer = new Engineer(name, id, email, github);
      expect(engineer.getGithub()).toEqual(github);
    });
  });

  describe("getRole", () => {
    it("should return 'Engineer'", () => {
      const name = "Bob";
      const id = 1;
      const email = "bob@gmail.com";
      const github = "git";
      const engineer = new Engineer(name, id, email, github);
      expect(engineer.getRole()).toEqual("Engineer");
    });
  });
});
