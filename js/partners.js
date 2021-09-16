const speakers = [
  {
    images: {
      imagesUrl: './images/spk1.png',
      imagesAlt: 'Ajay',
    },
    name: 'Ajay Pangarkar, CTDP, FCPA, FCMA',
    shortDescription: 'Award-Winning Author & Workplace Performance Strategist | Globally Recognized Strategist',
    profile: 'performance strategist, President of CentralKnowledge. Start a “Workplace Revolution” (blog.centralknowledge.com) Twitter: @BizLearningDude.',
  },

  {
    images: {
      imagesUrl: './images/spk2.png',
      imagesAlt: 'zsolt',
    },
    name: 'Zsolt Olah',
    shortDescription: 'Engage the WORL&D! Speaker & Doer: Learn | Reflect | Innovate | Perform | Critical Game Design Think',
    profile: `Zsolt Olah is a Manager, Digital Learning & Experience at Amazon Web Services (AWS). Previously, he worked as a creative learning consultant at Kineo. Zsolt has over 15 years of L&D experience. He is a frequent speaker at learning conferences on the intersection of digital learning, engagement, and game thinking for L&D. Author of the book, Engage the WORL&D!.`,
  },

  {
    images: {
      imagesUrl: './images/spk3.png',
      imagesAlt: 'Patti Shank',
    },
    name: 'Patti Shank',
    shortDescription: 'Founder, Learning Peaks, LLC',
    profile: ` Patti Shank PhD is listed as one of the Top 10 Most Influential People in eLearning internationally. She has written numerous books and her articles are found all over the Internet . You can find out more about her at www.pattishank.com.`,
  },

  {
    images: {
      imagesUrl: './images/spk4.png',
      imagesAlt: 'Michael Hansen',
    },
    name: 'Michael Hansen',
    shortDescription: 'Bringing Learning to Life',
    profile: 'With an instinctive consulting ability, along with his passion to help others succeed, Michael has been successfully helping small to Fortune 500 companies across the globe for over 15 years. When Michael is not serving EdgePoint existing and soon to be clients, he enjoys the outdoors, learning and new experiences.',
  },

  {
    images: {
      imagesUrl: './images/spk5.png',
      imagesAlt: 'Asha Pandey',
    },
    name: 'Asha Pandey',
    shortDescription: 'Chief Learning Strategist',
    profile: 'Asha Pandey is the Chief Learning Strategist at EI Design. She brings her rich 18 years’ experience into play to help EI Design customers transform their learning and keep pace with the changing dynamics in the Learning industry',
  },

  {
    images: {
      imagesUrl: './images/spk7.png',
      imagesAlt: 'Steve Penfold',
    },
    name: 'Christopher Pappas',
    shortDescription: 'Empowering organisations to author more effective elearning, faster',
    profile: 'Steve Penfold is Customer Success Director at Elucidat.',
  },
];

function showGuests(guest) {
  const guestCard = `<div class="guest">
  <div class="image_design">
    <img src="${guest.images.imagesUrl}" alt="${guest.images.imagesAlt}">
  </div>

  <aside>
    <div>
      <h4>${guest.name}</h4>
      <p>${guest.shortDescription}</p>

      <hr width="30">
    </div>
    <span>${guest.profile}</span>
  </aside>
</div>`;
  return guestCard;
}

const sectionForGuests = document.querySelector('.guest_list');

function showMyGuests() {
  const guestKeys = Object.keys(speakers);
  const guestKeysLength = Object.keys(speakers).length;
  for (let i = 0; i < guestKeysLength; i += 1) {
    sectionForGuests.innerHTML += showGuests(speakers[guestKeys[i]], i);
  }
}

sectionForGuests.onresize = showMyGuests();