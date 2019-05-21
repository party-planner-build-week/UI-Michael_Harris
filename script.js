const teamPage = document.querySelector('.team-page');
const closeBtn = document.querySelector('.close');
const modal = document.querySelector('.info-modal');

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
  }
  show(){
    modal.querySelector('.name').textContent = this.name;
    modal.querySelector('.role').textContent = this.role;
    modal.querySelector('.info').textContent = this.info
    modal.classList.toggle('show');
    teamPage.style.filter = 'blur(5px)';
  }
}

const closeModal = (event) => {
  if(modal.classList.contains('show')){
    modal.classList.toggle('show');
    teamPage.style.filter = 'none';
  } else {
    
  }
  event.stopPropagation();
}

closeBtn.addEventListener('click', closeModal);
//teamPage.addEventListener('click', closeModal);

document.querySelectorAll('.team-member').forEach(member => new MemberLink(member));
//document.querySelectorAll('.team-member-description').forEach(member => new Modal(member));