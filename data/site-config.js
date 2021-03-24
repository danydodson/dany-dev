const siteConfig = {
  /* Site
  ========================================= */
  title: 'dany dodson',
  description: 'This is my blog',
  maxWidth: 768,
  enableAbout: true,
  siteUrl: 'https://danys.art',
  useScrollIndicator: true,

  /* Profile
  ========================================= */
  author: 'Dany Dodson',
  profileDescription: '{ Full Stack Developer }',
  profileImageName: 'profile.jpg',
  location: 'Evansville, IN',
  footerLink: 'about',

  /* Social Media Links
  ========================================= */
  socialMediaLinks: {
    email: {
      emailAddress: 'hello@danydodson.dev',
      showHeaderIcon: true
    },
    github: {
      accountName: 'danydodson',
      showHeaderIcon: true
    },
    devto: {
      accountName: 'danydodson',
      showHeaderIcon: false
    },
    codepen: {
      accountName: 'danydodson',
      showHeaderIcon: true
    },
    hashnode: {
      accountName: 'dany',
      showHeaderIcon: false
    },
    facebook: {
      accountName: 'danydodson',
      showHeaderIcon: false
    },
    instagram: {
      accountName: 'ugly_casanova',
      showHeaderIcon: false
    },
    twitter: {
      accountName: 'dany_dodson',
      showHeaderIcon: false
    },
    linkedIn: {
      accountName: 'in/danydodson',
      showHeaderIcon: false
    },
    medium: {
      accountName: 'danydodson',
      showHeaderIcon: false
    }
  },

  /* Patreon
  ========================================= */
  patreonSetup: {
    patreon: {
      patreonName: 'https://www.patreon.com/danydodson',
      publicView: 'https://www.patreon.com/danydodson?fan_landing=true',
      showHeaderIcon: true
    },
    nonceCast: {
      accountName: 'https://shows.acast.com/6045df1ab353eb47301f68e4',
      showHeaderIcon: true
    }
  },

  /* Share Buttons
  ========================================= */
  shareButtons: {
    email: true,
    facebook: true,
    twitter: true,
    reddit: true,
    linkedIn: true
  },

  /* Comments
  ========================================= */
  comments: {
    facebook: {
      enabled: false,
      appId: process.env.FB_APP_ID
    },
    utterances: {
      enabled: true,
      repoUrl: 'danydodson/danys-art'
    }
  },

  /* More Custom Settings
  ========================================= */
  defaultTheme: 'light',
  showScrollbar: 'none',
  breakCodeLines: false,
  showTimeToRead: true,
  faviconSrc: 'static/icons/favicon.png',
  gaTrackingId: `${process.env.GOOGLE_TRACKING_ID}`,
  googleAdSenseId: process.env.GOOGLE_AD_SENSE_ID
}

module.exports = siteConfig
