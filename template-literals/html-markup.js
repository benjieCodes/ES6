const person = {
    name: 'Benjie',
    job: 'Web Developer',
    city: 'ATL',
    bio: 'Benjie is the cooliest!'
}

const markup = `
<div class="person">
    <h2>
        ${person.name}
    </h2>
    <span class="job">${person.job}</span>
    <p class="location">${person.city}</p>
    <p class="bio">${person.bio}</p>
</div>
`
console.log(markup);

const fam = [{
        relationship: 'wife',
        name: 'Anna'
    },
    {
        relationship: 'dad',
        name: 'Dad'
    },
    {
        relationship: 'mom',
        name: 'Mama'
    }
];

const markupArray = `
<ul class="fam">
    ${fam.map(fam => `<li>My ${fam.relationship}'s name is ${fam.name}.</li>` ).join('')}
</ul>
`



const song = {
    name: 'The Greatest Show',
    artist: 'Hugh Jackman',
    featuring: 'Wolverine'
}

const markupIF =
    `
<div class="song">
    <p>
        ${song.name} - ${song.artist}
        ${song.featuring ? `(Featuring ${song.featuring})` : ''}
    </p>
</div>
`

const guitar = {
    build: 'American',
    brand: 'Fender',
    category: ['left-handed', 'semi-hollow', 'thinline', 'solid-body', 'signature']
}

function renderCategory(category) {
    return `
    <ul>
        ${category.map(category => `<li>${category}</li>`).join('')}
    </ul>
`
}

const markupRender = `
<div class="guitar">
    <h2>${guitar.brand}</h2>
    <p class="build">${guitar.build}</p>
    ${renderCategory(guitar.category)}
</div>
`
document.body.innerHTML = markup + markupArray + markupIF + markupRender;;