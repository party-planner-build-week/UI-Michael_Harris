class Member {
  constructor(element){
    this.element = element;
    this.info = element.querySelector('.team-member-description');
    this.showMore = element.querySelector('.show-more');
    this.showMore.addEventListener('click', () => this.showInfo());
  }

  showInfo(){
    this.info.classList.toggle('show');
  }
}
class Modal extends Member {
  constructor(info){
    super(info)
  }
}

document.querySelectorAll('.team-member').forEach(member => new Member(member));
//document.querySelectorAll('.team-member-description').forEach(member => new Modal(member));