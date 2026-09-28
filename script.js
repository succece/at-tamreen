document.getElementById('subForm').addEventListener('submit', function (e) {
  e.preventDefault();
  var cn = document.getElementById('childName').value.trim();
  var fn = document.getElementById('fatherName').value.trim();
  var ph = document.getElementById('phone').value.trim();
  var pl = document.getElementById('planPick').value;
  var tx = document.getElementById('txnId').value.trim();
  var box = document.getElementById('confirmBox');

  box.innerHTML =
    '<b>ধন্যবাদ, ' + cn + '!</b><br>' +
    'পিতার নাম: ' + fn + '<br>' +
    'মোবাইল: ' + ph + '<br>' +
    'প্ল্যান: ' + pl + '<br>' +
    'ট্রানজেকশন আইডি: ' + tx + '<br><br>' +
    'আপনার তথ্য গ্রহণ করা হয়েছে। দয়া করে এই স্ক্রিনশটটি আমাদের ফেসবুক পেজে (Quran Education) মেসেজ করুন, আমরা দ্রুত যোগাযোগ করব ইনশাআল্লাহ।';

  box.classList.add('show');
  document.getElementById('formMsg').textContent = 'সাবমিট সম্পন্ন হয়েছে ✓';
  box.scrollIntoView({ behavior: 'smooth', block: 'center' });
});
