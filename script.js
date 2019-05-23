const teamPage = document.querySelector(".team-page .team-container");
const closeBtn = document.querySelector(".close");
const modal = document.querySelector(".info-modal");
const roles = Array.from(document.querySelectorAll(".tab-link"));

class Role {
  constructor(element) {
    this.element = element;
    this.data = element.dataset.role;
    if (this.data === "all") {
      this.role = document.querySelectorAll(`.team-container .team-member`);
    } else {
      this.role = document.querySelectorAll(
        `.team-container .team-member[data-role="${this.data}"]`
      );
    }
    this.role.forEach(member => {
      member.style.display = "flex";
      member.style.justifyContent = "center";
      member.style.flexDirection = "column";
      member.style.alignItems = "center";
    });

    this.element.addEventListener("click", () => this.selectRole());
  }

  selectRole() {
    const all = document.querySelectorAll(`.team-container .team-member`);
    const team = Array.from(this.role);
    all.forEach(member => (member.style.display = "none"));
    //console.log(team[0].childNodes[1].textContent);
    const names = team.sort((a, b) => {
      return a > b.childNodes[1].textContent;
    })
    names.forEach(member => (member.style.display = "flex"));
    console.log(names);
  }
}

class MemberLink {
  constructor(element) {
    this.element = element;
    //get team member number
    this.data = element.dataset.member;
    this.modal = new MemberModal(element);

    this.info = element.querySelector(".team-member-description");
    this.showMore = element.querySelector(".show-more");
    this.element.addEventListener("click", () => this.showInfo());
  }

  showInfo() {
    this.modal.show();
  }
}

class MemberModal {
  constructor(element) {
    this.element = element;
    this.name = element.querySelector(".team-member-name").textContent;
    this.role = element.querySelector(".team-member-role").textContent;
    this.info = element.querySelector(".team-member-description").textContent;
    this.img = element.querySelector("img").src;
    this.github = element.querySelector(".github").href;
    this.close = document.querySelector(".close");
    this.close.addEventListener("click", () => this.closeBox());
  }
  show() {
    modal.querySelector(".name").textContent = this.name;
    modal.querySelector(".role").textContent = this.role;
    modal.querySelector(".info").textContent = this.info;
    modal.querySelector(".info-modal img").src = this.img;
    modal.querySelector("a").href = this.github;
    modal.classList.toggle("show");
    teamPage.style.filter = "blur(5px)";
  }
  closeBox() {
    if (modal.classList.contains("show")) {
      modal.classList.toggle("show");
      teamPage.style.filter = "none";
    }
  }
}

const closeModal = event => {
  if (modal.classList.contains("show")) {
    modal.classList.toggle("show");
    teamPage.style.filter = "none";
  }
};

roles.forEach(role => new Role(role));

document
  .querySelectorAll(".team-member")
  .forEach(member => new MemberLink(member));
