const teamPage = document.querySelector('.team-page .team-container');
const closeBtn = document.querySelector('.close');
const modal = document.querySelector('.info-modal');
const roles = Array.from(document.querySelectorAll('.tab-link'));


class Role{
  constructor(element){
    this.element = element;
    this.data = element.dataset.role;
    if(this.data === 'all'){
      this.role = document.querySelectorAll(`.team-container .team-member`)
    } else {
      this.role = document.querySelectorAll(`.team-container .team-member[data-role="${this.data}"]`)
    }
    this.role.forEach(member => member.style.display = 'block');

    this.element.addEventListener('click', () => this.selectRole());
  }

  selectRole(){
    const all = document.querySelectorAll(`.team-container .team-member`);
    const team = Array.from(this.role);
    all.forEach(member => member.style.display = 'none');
    team.forEach(member => member.style.display = 'block');
  }
}

class Member {
  constructor(element){
    this.element = element;
    console
  }
}

class MemberLink {
  constructor(element){
    this.element = element;
    //get team member number
    this.data = element.dataset.member;
    //this.itemElement = documen.querySelector(``)
    this.modal = new MemberModal(element);
    
    this.info = element.querySelector('.team-member-description');
    this.showMore = element.querySelector('.show-more');
    this.showMore.addEventListener('click', () => this.showInfo());
  }

  showInfo(){
    this.modal.show();
  }
}

class MemberModal {
  constructor(element){
    this.element = element;
    //variable to get info 
    //const gather = element.querySelector('.team-member-').textContent;
    this.name = element.querySelector('.team-member-name').textContent;
    this.role = element.querySelector('.team-member-role').textContent;
    this.info = element.querySelector('.team-member-description').textContent;
    this.close = document.querySelector('.close');
    this.close.addEventListener('click', () => this.closeBox());
  }
  show(){
    modal.querySelector('.name').textContent = this.name;
    modal.querySelector('.role').textContent = this.role;
    modal.querySelector('.info').textContent = this.info
    modal.classList.toggle('show');
    teamPage.style.filter = 'blur(5px)';
  }
  closeBox(){
    if(modal.classList.contains('show')){
      modal.classList.toggle('show');
      teamPage.style.filter = 'none';
    } 
  }
}

const closeModal = (event) => {
  console.log(event.target);
  if(modal.classList.contains('show')){
    modal.classList.toggle('show');
    teamPage.style.filter = 'none';
  } 
}

const roleFilter = (event) => {
  console.log(roles.filter(role => {
    return event.target.dataset.role === role;
  }))
  //console.log(event.target.dataset.role);
}

// closeBtn.addEventListener('click', closeModal);
// teamPage.addEventListener('click', closeModal);
roles.forEach(role => new Role(role));
//roles.forEach(role => role.addEventListener('click', roleFilter));
document.querySelectorAll('.team-member').forEach(member => new MemberLink(member));
//document.querySelectorAll('.team-member-description').forEach(member => new Modal(member));