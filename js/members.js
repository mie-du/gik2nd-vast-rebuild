function memberThumbnail(member) {
  const thumbnail = `
  <li class="thumbnail">
    <a href="#" title="Link to ${member.first_name} ${member.last_name}">
      <div class="thumbnail__image">
        <img srcset="
                ./img/members/${member.id}/${member.id}_256.webp 256w,
                ./img/members/${member.id}/${member.id}_512.webp 512w,
                ./img/members/${member.id}/${member.id}_1024.webp 1024w,
                ./img/members/${member.id}/${member.id}_2048.webp 2048w" sizes="
                (min-width: 1600px) calc((100vw - 26.6vw) / 5),
                (min-width: 1200px) calc((100vw - 20vw) / 4),
                (min-width: 992px) calc((100vw - 14vw) / 3),
                (min-width: 480px) calc((100vw - 30px) / 2), 
                calc((100vw - 30px)" src="./img/members/0/0.jpg" alt="Image of ${member.first_name} ${member.last_name}" />
      </div>
    </a>
    <div class="thumbnail__caption">
      <h4 class="thumbnail__title thumbnail__title--tertiary">${member.first_name} ${member.last_name}</h4>
      <p class="thumbnail__text t-right"><a href="#" title="Mail ${member.first_name} ${member.last_name}">address@mail.com</a></p>
    </div>
  </li>
  `;
  return thumbnail;
}

function addMemberThumbnails(members) {
  const gallery = document.querySelector(".gallery");
  let output = "";
  members.forEach(function (member) {
    console.log(member);
    output += memberThumbnail(member);
  });
  gallery.insertAdjacentHTML("beforeend", output);
}

members = [
  {
    id: "1",
    first_name: "Robin",
    last_name: "Vredeskog",
  },
  {
    id: "2",
    first_name: "Jane",
    last_name: "Sarani",
  },
  {
    id: "3",
    first_name: "Nynaeve",
    last_name: "Al'Meara",
  },
  {
    id: "4",
    first_name: "Ida",
    last_name: "Olsen",
  },
  {
    id: "5",
    first_name: "Jonathan",
    last_name: "Eriksson",
  },
  {
    id: "6",
    first_name: "Isak",
    last_name: "Rapp",
  },
  {
    id: "7",
    first_name: "Min",
    last_name: "Farshaw",
  },
  {
    id: "8",
    first_name: "Filippa",
    last_name: "Masonei",
  },
  {
    id: "9",
    first_name: "Elayne",
    last_name: "Trakand",
  },
  {
    id: "10",
    first_name: "Perrin",
    last_name: "Aybara",
  },
  {
    id: "11",
    first_name: "Tuon",
    last_name: "Athaem",
  },
  {
    id: "12",
    first_name: "Kamarile",
    last_name: "Maradim",
  },
  {
    id: "13",
    first_name: "Fail",
    last_name: "Bashere",
  },
  {
    id: "14",
    first_name: "Tom",
    last_name: "Bombadill",
  },
  {
    id: "15",
    first_name: "Elan",
    last_name: "Morin Tedronai",
  },
  {
    id: "16",
    first_name: "Mierin",
    last_name: "Eronaile",
  },
  {
    id: "17",
    first_name: "Barid Bel",
    last_name: "Medar",
  },
];

addMemberThumbnails(members);
