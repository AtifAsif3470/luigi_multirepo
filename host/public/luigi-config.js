//you can now use ES6 goodies here
Luigi.setConfig({
  navigation: {
    contextSwitcher: false,
    nodes: () => [
      {
        pathSegment: 'home',
        label: 'Home',
        icon: 'home',
        viewUrl: '/views/home.html',
        children: [
          {
            pathSegment: 'sample1',
            label: 'First',
            icon: 'nutrition-activity',
            viewUrl: '/views/sample1.html',
            loadingIndicator: {
              enabled: false
            }
          },
          {
            pathSegment:'reactrepo',
            label: 'reactrepo',
            viewUrl: 'http://localhost:3001/sampleapp.html#/sample1'
          },
          {
            pathSegment:'vuerepo',
            label: 'vuerepo',
            viewUrl: 'http://localhost:8080/sampleapp.html#/sample1'
          },
        ]
      }
    ]
  },
  routing: {
    /**
     * Development:
     * For path routing, set to false
     * For hash routing, set to true
     */
    useHashRouting: true
  },
  settings: {
    header: {
      title: 'Luigi JavaScript',
      logo: '/logo.png',
      favicon: '/favicon.ico'
    },
    responsiveNavigation: 'simpleMobileOnly',
    appLoadingIndicator: {
      hideAutomatically: true
    }
  }
});
