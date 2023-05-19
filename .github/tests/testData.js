module.exports = [
    {
      name: 'head',
      test: ($) => $('head').length > 0
    },
    {
      name: 'body',
      test: ($) => $('body').length > 0
    },
    {
      name: 'script',
      test: ($) => $('script').length > 0
    },
    {
      name: 'link',
      test: ($) => $('link[rel="stylesheet"][href]').length > 0
    },
    {
      name: 'script.js',
      test: ($) => $('script[src="js/scripts.js"]').length > 0
    },
    {
      name: 'form',
      test: ($) => {
        const $form = $('form');
        if ($form.length === 0) {
          return false;
        }
          
        const $inputs = $form.find('input[type="text"]');
        if ($inputs.length < 3) {
          return false;
        }
          
        const weight = parseFloat($inputs.eq(0).val());
        const height = parseFloat($inputs.eq(2).val());
        if (isNaN(weight) || isNaN(height)) {
          return false;
        }
        const bmi = weight / (height * height);
        const $output = $form.find('#bmi_output');
        if ($output.length === 0) {
          return false;
        }
        $output.val(bmi);
        return true;
      }
    },
    {
      name: 'styles.css',
      test: ($) => {
        const $link = $('link[rel="stylesheet"][href$="styles.css"]');
        if ($link.length === 0) {
          return false;
        }
        const cssContent = $link.html();
        return cssContent.includes('@media');
      }
    },
    {
      name: 'sisi-keliling',
      test: ($) => {
        const $sisiKelilingInput = $('input[name="sisi-keliling"]');
        if ($sisiKelilingInput.length === 0) {
          return false;
        }
        const $hitungKelilingButton = $('button[name="hitung-keliling"]');
        if ($hitungKelilingButton.length === 0) {
          return false;
        }
        $sisiKelilingInput.val('5');
        $hitungKelilingButton.trigger('click');
        const $output = $('#keliling_output');
        const circumference = parseFloat($output.val());
        return circumference === 20; // Assuming the expected circumference is 20
      }
    },
  
    // Test case for sisi-luas input form
    {
      name: 'sisi-luas',
      test: ($) => {
        const $sisiLuasInput = $('input[name="sisi-luas"]');
        if ($sisiLuasInput.length === 0) {
          return false;
        }
        const $hitungLuasButton = $('button[name="hitung-luas"]');
        if ($hitungLuasButton.length === 0) {
          return false;
        }
        $sisiLuasInput.val('5');
        $hitungLuasButton.trigger('click');
        const $output = $('#luas_output');
        const area = parseFloat($output.val());
        return area === 25; // Assuming the expected area is 25
      }
    }
  ];
