export const DynamicHeaderMenuConfig = {
  items: [
    {
      title: 'Dashboards',
      root: true,
      alignment: 'left',
      page: '/dashboard',
      translate: 'MENU.DASHBOARD',
    },
    {
      title: 'Profiles',
      root: true,
      alignment: 'left',
      page: '/profiles',
    },
    {
      title: 'Campaigns',
      bullet: 'dot',
      page: '/campaigns',
      icon: 'flaticon-interface-7',
      submenu: [
        {
          title: 'Form Controls',
          bullet: 'dot',
          svg: './assets/media/svg/icons/Design/PenAndRuller.svg',
          page: '/material/form-controls',
          submenu: [
            {
              title: 'Auto Complete',
              page: '/material/form-controls/autocomplete',
              permission: 'accessToECommerceModule'
            },
            {
              title: 'Checkbox',
              page: '/material/form-controls/checkbox'
            },
            {
              title: 'Radio Button',
              page: '/material/form-controls/radiobutton'
            },
            {
              title: 'Datepicker',
              page: '/material/form-controls/datepicker'
            },
            {
              title: 'Form Field',
              page: '/material/form-controls/formfield'
            },
            {
              title: 'Input',
              page: '/material/form-controls/input'
            },
            {
              title: 'Select',
              page: '/material/form-controls/select'
            },
            {
              title: 'Slider',
              page: '/material/form-controls/slider'
            },
            {
              title: 'Slider Toggle',
              page: '/material/form-controls/slidertoggle'
            }
          ],
        },
      ]
    }
  ]
};
