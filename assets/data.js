/* E9-Bridge — 지식베이스 (RAG-lite)
   ------------------------------------------------------------------
   · NOTICES : 최신 제도 페이지에 올라가는 제도 요약.
   · KB      : 질문 답변 엔진이 참고하는 유일한 근거 묶음.
               keywords 는 언어를 가리지 않고 한 배열에 모아 둡니다.
   · 답변은 반드시 src(근거)를 함께 가집니다. 근거가 없으면 답하지 않습니다.
   · review:true 인 항목은 답변 위에 "실무자 검수" 표시가 붙습니다.
   ------------------------------------------------------------------

   ■ 제도 제목(title) 쓰는 규칙 — 새 제도를 추가할 때도 지켜 주세요

   제목은 목록에서 훑어보는 자리입니다. 문장이 아니라 **명사형 한 덩어리**로
   짧게 씁니다. 자세한 설명은 아래 points 에 넣으면 됩니다.

     ○ 비수도권 제조업 고용 한도 확대
     ✗ 비수도권 제조업의 고용 한도가 늘었습니다

     ○ 2026년 최저임금 시급 10,320원
     ✗ 2026년 최저임금은 시간당 10,320원입니다

   · "~합니다 / ~됩니다 / ~입니다" 같은 서술어로 끝내지 않습니다.
   · 무엇이 어떻게 바뀌었는지가 드러나게 씁니다 (확대 · 축소 · 강화 · 추가 · 논의 중).
   · 숫자가 핵심이면 제목에 넣습니다.
   · 다섯 언어 모두 같은 방식으로 짧게 씁니다. 번역투로 늘어지지 않게 하세요.
   ------------------------------------------------------------------ */

const NOTICES = [
  {
    key: 'n-e9tier-2026',
    tagKey: 'eps',
    source: '언론 보도(세계일보 2026-10-18) · 고용노동부',
    sourceL: { en: 'News report (Segye Ilbo, 2026-10-18) · Ministry of Employment and Labor', vi: 'Báo chí (Segye Ilbo, 2026-10-18) · Bộ Việc làm và Lao động', id: 'Pemberitaan media (Segye Ilbo, 2026-10-18) · Kementerian Ketenagakerjaan', km: 'របាយការណ៍សារព័ត៌មាន (Segye Ilbo, 2026-10-18) · ក្រសួងការងារកូរ៉េ', ne: 'समाचार रिपोर्ट (Segye Ilbo, 2026-10-18) · रोजगार तथा श्रम मन्त्रालय' },
    url: 'https://www.moel.go.kr',
    date: '2026-10-18',
    checked: '2026-10-28',
    ko: { title: 'E-9 숙련도별 3단계 개편안 논의 중',
      points: [
        '고용노동부가 E-9을 숙련도에 따라 3단계로 나누는 안을 냈다고 보도됐습니다. 단계별 최장 체류는 6년, 12년, 기한 없음입니다.',
        '법무부가 반대 의견을 내면서 정부의 외국인력 로드맵 발표가 늦어지고 있습니다. 고용노동부는 올해 안에 발표하겠다는 입장입니다.',
        '아직 확정된 제도가 아닙니다. 지금은 최장 4년 10개월을 기준으로 계획하세요.',
        '정해지면 이 쪽에 다시 올리겠습니다. 소문만 듣고 움직이지 마세요.'
      ] },
    en: { title: 'Three-tier E-9 reform by skill level under discussion',
      points: [
        'The Ministry of Employment and Labor is reported to have proposed splitting E-9 into three tiers by skill level, with maximum stays of 6 years, 12 years and no fixed limit.',
        'The Ministry of Justice has objected, so the government\'s foreign workforce roadmap is delayed. The labor ministry says it aims to announce it within this year.',
        'This is not decided yet. For now, plan around the current maximum of 4 years and 10 months.',
        'We will post here once it is decided. Do not act on rumours alone.'
      ] },
    vi: { title: 'Đang thảo luận chia E-9 thành 3 cấp theo tay nghề',
      points: [
        'Có tin Bộ Việc làm và Lao động đề xuất chia E-9 thành 3 cấp theo tay nghề, với thời gian cư trú tối đa là 6 năm, 12 năm và không giới hạn.',
        'Bộ Tư pháp phản đối nên lộ trình nhân lực nước ngoài của chính phủ bị chậm lại. Bộ Lao động cho biết sẽ công bố trong năm nay.',
        'Đây chưa phải quy định chính thức. Hiện tại hãy lên kế hoạch theo thời hạn tối đa 4 năm 10 tháng.',
        'Khi có quyết định chúng tôi sẽ đăng lại ở đây. Đừng hành động chỉ vì tin đồn.'
      ] },
    id: { title: 'Pembahasan pembagian E-9 menjadi 3 tingkat keahlian',
      points: [
        'Kementerian Ketenagakerjaan dilaporkan mengusulkan pembagian E-9 menjadi 3 tingkat menurut keahlian, dengan masa tinggal maksimal 6 tahun, 12 tahun, dan tanpa batas.',
        'Kementerian Hukum menolak, sehingga peta jalan tenaga kerja asing pemerintah tertunda. Kementerian Ketenagakerjaan menargetkan pengumuman tahun ini.',
        'Ini belum keputusan resmi. Untuk sekarang, rencanakan berdasarkan batas maksimal 4 tahun 10 bulan.',
        'Kami akan memuatnya di sini setelah diputuskan. Jangan bertindak hanya berdasarkan desas-desus.'
      ] },
    km: { title: 'កំពុងពិភាក្សាផែនការកែទម្រង់ E-9 ជា 3 កម្រិតតាមជំនាញ',
      points: [
        'មានការរាយការណ៍ថា ក្រសួងការងារកូរ៉េ (고용노동부) បានដាក់ស្នើផែនការបែងចែក E-9 ជា 3 កម្រិតតាមកម្រិតជំនាញ។ រយៈពេលស្នាក់នៅយូរបំផុតតាមកម្រិតនីមួយៗ គឺ 6 ឆ្នាំ 12 ឆ្នាំ និងគ្មានកំណត់។',
        'ដោយសារក្រសួងយុត្តិធម៌ (법무부) បានបញ្ចេញមតិប្រឆាំង ការប្រកាសផែនការកម្លាំងពលកម្មបរទេសរបស់រដ្ឋាភិបាលកំពុងយឺតយ៉ាវ។ ក្រសួងការងារបញ្ជាក់ថា នឹងប្រកាសក្នុងឆ្នាំនេះ។',
        'នេះមិនទាន់ជាប្រព័ន្ធដែលបានសម្រេចនៅឡើយទេ។ សម្រាប់ពេលនេះ សូមរៀបចំផែនការដោយផ្អែកលើរយៈពេលយូរបំផុត 4 ឆ្នាំ 10 ខែ។',
        'ពេលសម្រេចហើយ យើងនឹងដាក់ព័ត៌មាននៅទីនេះម្តងទៀត។ កុំធ្វើអ្វីដោយគ្រាន់តែឮពាក្យចចាមអារ៉ាម។'
      ] },
    ne: { title: 'E-9 लाई सीपअनुसार 3 चरणमा बाँड्ने प्रस्तावबारे छलफल हुँदै',
      points: [
        'रोजगार तथा श्रम मन्त्रालयले E-9 लाई सीपको स्तरअनुसार 3 चरणमा बाँड्ने प्रस्ताव ल्याएको समाचार आएको छ। चरणअनुसार बढीमा बस्न पाउने अवधि 6 वर्ष, 12 वर्ष र कुनै सीमा नभएको हो।',
        'न्याय मन्त्रालयले विरोध गरेकाले सरकारको विदेशी कामदारसम्बन्धी योजना (रोडम्याप) सार्वजनिक हुन ढिलो भइरहेको छ। रोजगार तथा श्रम मन्त्रालयले यो वर्षभित्रै सार्वजनिक गर्ने बताएको छ।',
        'यो अझै पक्का भएको नियम होइन। अहिलेलाई बढीमा 4 वर्ष 10 महिनालाई आधार मानेर योजना बनाउनुहोस्।',
        'पक्का भएपछि यहीँ फेरि राख्नेछौँ। हल्ला मात्र सुनेर कुनै कदम नचाल्नुहोस्।'
      ] }
  },
  {
    key: 'n-construction-2026',
    tagKey: 'eps',
    source: '관할 고용센터 안내(2026-09-10) · 언론 보도',
    sourceL: { en: 'Local Employment Center notice (2026-09-10) · News reports', vi: 'Thông báo của Trung tâm việc làm khu vực (2026-09-10) · Báo chí', id: 'Pemberitahuan Pusat Ketenagakerjaan setempat (2026-09-10) · Pemberitaan media', km: 'សេចក្តីជូនដំណឹងរបស់មជ្ឈមណ្ឌលការងារក្នុងតំបន់ (2026-09-10) · របាយការណ៍សារព័ត៌មាន', ne: 'स्थानीय रोजगार केन्द्रको सूचना (2026-09-10) · समाचार रिपोर्ट' },
    url: 'https://www.eps.go.kr',
    date: '2026-09-10',
    checked: '2026-10-28',
    ko: { title: '건설업 E-9 현장 간 이동 제한 폐지',
      points: [
        '2026년 4회차 고용허가부터 건설업 E-9 근로자가 같은 회사의 다른 공사 현장으로 옮겨 일할 수 있게 됐다고 안내됐습니다.',
        '전에는 고용허가가 공사 현장 하나에 묶여 있어서, 그 공사가 끝나기 전에는 다른 현장으로 가기 어려웠습니다.',
        '회사를 바꾸는 사업장 변경과는 다른 이야기입니다. 회사를 바꾸려면 지금처럼 고용센터에 신청해야 합니다.',
        '세부 기준은 지역마다 안내가 다를 수 있으니 관할 고용센터에 확인하세요.'
      ] },
    en: { title: 'Construction E-9 site-to-site move limit lifted',
      points: [
        'From the 4th 2026 permit round, construction E-9 workers are reported to be allowed to work at another construction site of the same company.',
        'Before, the permit was tied to one construction site, so moving to another site was hard until that project ended.',
        'This is different from a workplace change. To change to another company you still apply at the Employment Center, as before.',
        'Details may differ by region, so check with your local Employment Center.'
      ] },
    vi: { title: 'Bỏ giới hạn di chuyển giữa công trường cho E-9 ngành xây dựng',
      points: [
        'Từ đợt cấp phép thứ 4 năm 2026, lao động E-9 ngành xây dựng được thông báo là có thể chuyển sang làm ở công trường khác của cùng công ty.',
        'Trước đây giấy phép gắn với một công trường, nên khó chuyển sang công trường khác khi công trình chưa xong.',
        'Việc này khác với đổi nơi làm việc. Muốn đổi sang công ty khác bạn vẫn phải nộp đơn tại Trung tâm việc làm như trước.',
        'Chi tiết có thể khác nhau theo từng khu vực, hãy hỏi Trung tâm việc làm nơi bạn ở.'
      ] },
    id: { title: 'Batas pindah antar-lokasi untuk E-9 konstruksi dihapus',
      points: [
        'Mulai putaran izin ke-4 tahun 2026, pekerja E-9 konstruksi diberitahukan boleh bekerja di lokasi proyek lain milik perusahaan yang sama.',
        'Sebelumnya izin terikat pada satu lokasi proyek, sehingga sulit pindah lokasi sebelum proyek itu selesai.',
        'Ini berbeda dengan pindah tempat kerja. Untuk pindah ke perusahaan lain Anda tetap harus mengajukan di Pusat Ketenagakerjaan seperti biasa.',
        'Rinciannya bisa berbeda tiap daerah, jadi tanyakan ke Pusat Ketenagakerjaan setempat.'
      ] },
    km: { title: 'លុបចោលការហាមប្តូរការដ្ឋាន សម្រាប់ E-9 វិស័យសំណង់',
      points: [
        'គេបានជូនដំណឹងថា ចាប់ពីការអនុញ្ញាតជួលលើកទី 4 ឆ្នាំ 2026 កម្មករ E-9 វិស័យសំណង់ អាចផ្លាស់ទៅធ្វើការនៅការដ្ឋានសំណង់ផ្សេងទៀតរបស់ក្រុមហ៊ុនដដែលបាន។',
        'ពីមុន ការអនុញ្ញាតជួលត្រូវបានភ្ជាប់នឹងការដ្ឋានសំណង់តែមួយ ដូច្នេះពិបាកទៅការដ្ឋានផ្សេង មុនពេលការងារសំណង់នោះចប់។',
        'នេះខុសពីការប្តូរកន្លែងធ្វើការ (ប្តូរក្រុមហ៊ុន)។ បើចង់ប្តូរក្រុមហ៊ុន ត្រូវដាក់ពាក្យនៅមជ្ឈមណ្ឌលការងារ (고용센터) ដូចសព្វថ្ងៃ។',
        'លក្ខខណ្ឌលម្អិតអាចខុសគ្នាតាមតំបន់ ដូច្នេះសូមសួរមជ្ឈមណ្ឌលការងារដែលទទួលបន្ទុកតំបន់របស់អ្នក។'
      ] },
    ne: { title: 'निर्माण क्षेत्रका E-9 कामदारलाई साइटबीच सर्ने रोक हटाइयो',
      points: [
        '2026 को 4 औँ चरणको रोजगार अनुमतिदेखि निर्माण क्षेत्रका E-9 कामदारले एउटै कम्पनीको अर्को निर्माण साइटमा गएर काम गर्न पाउने सूचना दिइएको छ।',
        'पहिले रोजगार अनुमति एउटा मात्र निर्माण साइटमा बाँधिएको हुन्थ्यो, त्यसैले त्यो काम नसकिँदासम्म अर्को साइटमा जान गाह्रो थियो।',
        'यो कम्पनी नै बदल्ने \'कार्यस्थल परिवर्तन\' भन्दा फरक कुरा हो। कम्पनी बदल्न अहिलेजस्तै रोजगार केन्द्रमा निवेदन दिनुपर्छ।',
        'विस्तृत मापदण्डको जानकारी क्षेत्रअनुसार फरक हुन सक्छ, त्यसैले आफ्नो क्षेत्रको रोजगार केन्द्रमा सोध्नुहोस्।'
      ] }
  },
  {
    key: 'n-minwage-2027',
    tagKey: 'eps',
    source: '고용노동부 고시(2026-08-05) · 최저임금위원회',
    sourceL: { en: 'Ministry of Employment and Labor notice (2026-08-05) · Minimum Wage Commission', vi: 'Thông báo của Bộ Việc làm và Lao động (2026-08-05) · Ủy ban Lương tối thiểu', id: 'Pengumuman Kementerian Ketenagakerjaan (2026-08-05) · Komisi Upah Minimum', km: 'សេចក្តីប្រកាសរបស់ក្រសួងការងារកូរ៉េ (2026-08-05) · គណៈកម្មការប្រាក់ឈ្នួលអប្បបរមា', ne: 'रोजगार तथा श्रम मन्त्रालयको सूचना (2026-08-05) · न्यूनतम पारिश्रमिक आयोग' },
    url: 'https://www.minimumwage.go.kr',
    date: '2026-08-05',
    checked: '2026-10-28',
    ko: { title: '2027년 최저임금 시급 10,700원',
      points: [
        '2027년 1월 1일부터 시간급 10,700원이 적용됩니다. 2026년(10,320원)보다 380원(3.7%) 오릅니다.',
        '주 40시간·월 209시간 기준 월 환산액은 2,236,300원입니다.',
        '업종 구분 없이 모든 사업장에 같게 적용되며, 외국인도 한국인과 똑같이 적용받습니다.',
        '2026년 12월 31일까지는 지금 금액(10,320원)이 그대로입니다. 2027년 1월분 급여 명세서에 바뀐 금액이 반영됐는지 확인하세요.'
      ] },
    en: { title: '2027 minimum wage: 10,700 KRW per hour',
      points: [
        'From 1 January 2027 the hourly minimum wage is 10,700 KRW, 380 KRW (3.7%) more than in 2026 (10,320 KRW).',
        'Converted to a month at 40 hours a week and 209 hours a month, that is 2,236,300 KRW.',
        'It applies equally to every workplace regardless of industry, and to foreign workers exactly as to Korean workers.',
        'Until 31 December 2026 the current rate (10,320 KRW) stays. Check that your January 2027 payslip uses the new rate.'
      ] },
    vi: { title: 'Lương tối thiểu 2027: 10.700 won/giờ',
      points: [
        'Từ ngày 1/1/2027, lương tối thiểu theo giờ là 10.700 won, tăng 380 won (3,7%) so với năm 2026 (10.320 won).',
        'Quy đổi theo tháng với 40 giờ/tuần và 209 giờ/tháng là 2.236.300 won.',
        'Áp dụng như nhau cho mọi nơi làm việc, không phân biệt ngành, và cho người nước ngoài giống hệt người Hàn Quốc.',
        'Đến hết ngày 31/12/2026 vẫn giữ mức hiện tại (10.320 won). Hãy kiểm tra bảng lương tháng 1/2027 đã áp dụng mức mới chưa.'
      ] },
    id: { title: 'Upah minimum 2027: 10.700 won/jam',
      points: [
        'Mulai 1 Januari 2027 upah minimum per jam adalah 10.700 won, naik 380 won (3,7%) dari 2026 (10.320 won).',
        'Jika dihitung per bulan dengan 40 jam per minggu dan 209 jam per bulan, jumlahnya 2.236.300 won.',
        'Berlaku sama untuk semua tempat kerja tanpa membedakan sektor, dan untuk pekerja asing sama persis dengan pekerja Korea.',
        'Sampai 31 Desember 2026 tetap berlaku tarif sekarang (10.320 won). Periksa apakah slip gaji Januari 2027 sudah memakai tarif baru.'
      ] },
    km: { title: 'ប្រាក់ឈ្នួលអប្បបរមាឆ្នាំ 2027៖ 10,700 វ៉ុន ក្នុងមួយម៉ោង',
      points: [
        'ចាប់ពីថ្ងៃទី 1 ខែ 1 ឆ្នាំ 2027 ប្រាក់ឈ្នួល 10,700 វ៉ុន ក្នុងមួយម៉ោងនឹងត្រូវអនុវត្ត។ ឡើង 380 វ៉ុន (3.7%) ពីឆ្នាំ 2026 (10,320 វ៉ុន)។',
        'គិតលើ 40 ម៉ោងក្នុងមួយសប្តាហ៍ និង 209 ម៉ោងក្នុងមួយខែ ប្រាក់ខែប្រចាំខែគឺ 2,236,300 វ៉ុន។',
        'អនុវត្តដូចគ្នាចំពោះគ្រប់កន្លែងធ្វើការ មិនថាវិស័យណាទេ ហើយជនបរទេសក៏ទទួលបានដូចជនជាតិកូរ៉េដែរ។',
        'រហូតដល់ថ្ងៃទី 31 ខែ 12 ឆ្នាំ 2026 ចំនួនទឹកប្រាក់បច្ចុប្បន្ន (10,320 វ៉ុន) នៅដដែល។ សូមពិនិត្យមើលថា តារាងប្រាក់ខែសម្រាប់ខែ 1 ឆ្នាំ 2027 បានប្រើចំនួនថ្មីឬនៅ។'
      ] },
    ne: { title: '2027 को न्यूनतम ज्याला प्रतिघण्टा 10,700 वन',
      points: [
        '2027 जनवरी 1 देखि प्रतिघण्टा 10,700 वन लागू हुन्छ। यो 2026 (10,320 वन) भन्दा 380 वन (3.7%) बढी हो।',
        'हप्तामा 40 घण्टा·महिनामा 209 घण्टाको आधारमा मासिक रकम 2,236,300 वन हुन्छ।',
        'कुनै पनि उद्योगको भेद नगरी सबै कार्यस्थलमा एउटै दर लागू हुन्छ, र विदेशीलाई पनि कोरियालीलाई जस्तै लागू हुन्छ।',
        '2026 डिसेम्बर 31 सम्म अहिलेकै रकम (10,320 वन) कायम रहन्छ। 2027 जनवरी को तलब विवरण (पेस्लिप) मा नयाँ रकम राखिएको छ कि छैन जाँच गर्नुहोस्।'
      ] }
  },
  {
    key: 'n-kz-2026',
    tagKey: 'eps',
    source: '외국인력정책위원회 · 고용노동부',
    sourceL: { en: 'Foreign Workforce Policy Committee · Ministry of Employment and Labor', vi: 'Ủy ban Chính sách Nhân lực Nước ngoài · Bộ Việc làm và Lao động', id: 'Komite Kebijakan Tenaga Kerja Asing · Kementerian Ketenagakerjaan', km: 'គណៈកម្មាធិការគោលនយោបាយកម្លាំងពលកម្មបរទេស · ក្រសួងការងារកូរ៉េ', ne: 'विदेशी जनशक्ति नीति समिति · रोजगार तथा श्रम मन्त्रालय' },
    url: 'https://www.moel.go.kr',
    date: '2026-08-14',
    checked: '2026-10-28',
    ko: { title: '카자흐스탄 송출국 추가',
      points: [
        '제49차 외국인력정책위원회에서 카자흐스탄을 새 송출국으로 지정했습니다.',
        '이로써 E-9 송출국은 17개국에서 18개국으로 늘어납니다.',
        '중앙아시아에서는 우즈베키스탄·키르기스스탄·타지키스탄에 이어 네 번째입니다.'
      ] },
    en: { title: 'Kazakhstan added as sending country',
      points: [
        'The 49th Foreign Workforce Policy Committee designated Kazakhstan as a new sending country.',
        'The number of E-9 sending countries rises from 17 to 18.',
        'It is the fourth in Central Asia, after Uzbekistan, Kyrgyzstan and Tajikistan.'
      ] },
    vi: { title: 'Bổ sung Kazakhstan làm nước phái cử',
      points: [
        'Ủy ban Chính sách Nhân lực Nước ngoài lần thứ 49 đã chỉ định Kazakhstan là nước phái cử mới.',
        'Số nước phái cử E-9 tăng từ 17 lên 18.',
        'Đây là nước thứ tư ở Trung Á, sau Uzbekistan, Kyrgyzstan và Tajikistan.'
      ] },
    id: { title: 'Penambahan Kazakhstan sebagai negara pengirim',
      points: [
        'Komite Kebijakan Tenaga Kerja Asing ke-49 menetapkan Kazakhstan sebagai negara pengirim baru.',
        'Jumlah negara pengirim E-9 bertambah dari 17 menjadi 18.',
        'Ini negara keempat di Asia Tengah, setelah Uzbekistan, Kirgistan, dan Tajikistan.'
      ] },
    km: { title: 'បន្ថែមប្រទេសកាហ្សាក់ស្ថាន ជាប្រទេសបញ្ជូនពលករ',
      points: [
        'គណៈកម្មាធិការគោលនយោបាយកម្លាំងពលកម្មបរទេស លើកទី 49 បានកំណត់ប្រទេសកាហ្សាក់ស្ថាន ជាប្រទេសបញ្ជូនពលករថ្មី។',
        'ដូច្នេះ ប្រទេសបញ្ជូនពលករ E-9 កើនពី 17 ទៅ 18 ប្រទេស។',
        'នៅអាស៊ីកណ្តាល នេះជាប្រទេសទីបួន បន្ទាប់ពីអ៊ូសបេគីស្ថាន គៀហ្ស៊ីស៊ីស្ថាន និងតាជីគីស្ថាន។'
      ] },
    ne: { title: 'कजाखस्तान कामदार पठाउने देशमा थपियो',
      points: [
        '49 औँ विदेशी कामदार नीति समितिले कजाखस्तानलाई नयाँ कामदार पठाउने देश तोकेको छ।',
        'यसले गर्दा E-9 कामदार पठाउने देश 17 बाट 18 वटा पुग्नेछन्।',
        'मध्य एसियामा उज्बेकिस्तान, किर्गिस्तान र ताजिकिस्तानपछि यो चौथो देश हो।'
      ] }
  },
  {
    key: 'n-control-2026',
    tagKey: 'eps',
    source: '고용노동부 · 언론 보도',
    sourceL: { en: 'Ministry of Employment and Labor · News reports', vi: 'Bộ Việc làm và Lao động · Báo chí', id: 'Kementerian Ketenagakerjaan · Pemberitaan media', km: 'ក្រសួងការងារកូរ៉េ · របាយការណ៍សារព័ត៌មាន', ne: 'रोजगार तथा श्रम मन्त्रालय · समाचार रिपोर्ट' },
    url: 'https://www.moel.go.kr',
    date: '2026-08-14',
    checked: '2026-10-28',
    ko: { title: '체류·사업장 관리 강화',
      points: [
        'E-9으로 들어온 근로자의 체류와 사업장 관리가 한층 엄격해졌습니다.',
        '무단 이탈과 불법체류 단속이 늘어납니다.',
        '허락 없이 근무처를 벗어나면 불이익이 커집니다. 사업장을 옮길 때는 반드시 고용센터를 거치세요.'
      ] },
    en: { title: 'Stay and workplace controls tightened',
      points: [
        'Management of stay and workplaces for E-9 workers has become stricter.',
        'Crackdowns on leaving without permission and on overstaying are increasing.',
        'Leaving your workplace without approval now carries heavier consequences. Always go through the Employment Center to move.'
      ] },
    vi: { title: 'Siết chặt quản lý cư trú và nơi làm việc',
      points: [
        'Việc quản lý cư trú và nơi làm việc đối với lao động E-9 đã chặt chẽ hơn.',
        'Việc kiểm tra tình trạng tự ý bỏ việc và cư trú bất hợp pháp tăng lên.',
        'Rời nơi làm việc khi chưa được phép sẽ chịu bất lợi lớn hơn. Khi chuyển nơi làm việc hãy luôn qua Trung tâm việc làm.'
      ] },
    id: { title: 'Pengetatan izin tinggal dan tempat kerja',
      points: [
        'Pengelolaan izin tinggal dan tempat kerja bagi pekerja E-9 menjadi lebih ketat.',
        'Razia terhadap kaburnya pekerja dan tinggal melebihi izin meningkat.',
        'Meninggalkan tempat kerja tanpa izin kini berakibat lebih berat. Selalu lewat Pusat Ketenagakerjaan saat pindah.'
      ] },
    km: { title: 'ពង្រឹងការគ្រប់គ្រងការស្នាក់នៅ និងកន្លែងធ្វើការ',
      points: [
        'ការគ្រប់គ្រងការស្នាក់នៅ និងកន្លែងធ្វើការរបស់កម្មករដែលចូលមកដោយ E-9 កាន់តែតឹងរ៉ឹងជាងមុន។',
        'ការត្រួតពិនិត្យការរត់ចេញពីកន្លែងធ្វើការដោយគ្មានការអនុញ្ញាត និងការស្នាក់នៅខុសច្បាប់ នឹងកើនឡើង។',
        'បើចាកចេញពីកន្លែងធ្វើការដោយគ្មានការអនុញ្ញាត ផលវិបាកនឹងកាន់តែធ្ងន់។ ពេលប្តូរកន្លែងធ្វើការ ត្រូវតែឆ្លងកាត់មជ្ឈមណ្ឌលការងារ (고용센터)។'
      ] },
    ne: { title: 'बसाइ र कार्यस्थलको व्यवस्थापन कडा',
      points: [
        'E-9 मा आएका कामदारको बसाइ र कार्यस्थलको व्यवस्थापन अझ कडा भएको छ।',
        'अनुमति बिना काम छोडेर भाग्ने र अवैध बसाइको धरपकड बढ्नेछ।',
        'अनुमति बिना कार्यस्थल छोडे हुने नोक्सानी अझ ठूलो हुन्छ। कार्यस्थल सर्दा अनिवार्य रूपमा रोजगार केन्द्र मार्फत जानुहोस्।'
      ] }
  },
  {
    key: 'n-minwage-2026',
    tagKey: 'eps',
    source: '고용노동부 고시 · 최저임금위원회',
    sourceL: { en: 'Ministry of Employment and Labor notice · Minimum Wage Commission', vi: 'Thông báo của Bộ Việc làm và Lao động · Ủy ban Lương tối thiểu', id: 'Pengumuman Kementerian Ketenagakerjaan · Komisi Upah Minimum', km: 'សេចក្តីប្រកាសរបស់ក្រសួងការងារកូរ៉េ · គណៈកម្មការប្រាក់ឈ្នួលអប្បបរមា', ne: 'रोजगार तथा श्रम मन्त्रालयको सूचना · न्यूनतम पारिश्रमिक आयोग' },
    url: 'https://www.moel.go.kr',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '2026년 최저임금 시급 10,320원',
      points: [
        '2026년 1월 1일부터 12월 31일까지 시간급 10,320원이 적용됩니다.',
        '주 40시간·월 209시간 기준 월 환산액은 2,156,880원입니다.',
        '업종 구분 없이 모든 사업장에 같게 적용되며, 외국인도 한국인과 똑같이 적용받습니다.',
        '이보다 적게 받고 있다면 임금 체불입니다. 고용노동부 1350으로 상담하세요.'
      ] },
    en: { title: '2026 minimum wage: 10,320 KRW per hour',
      points: [
        'From 1 January to 31 December 2026 the hourly minimum wage is 10,320 KRW.',
        'Converted to a month at 40 hours a week and 209 hours a month, that is 2,156,880 KRW.',
        'It applies equally to every workplace regardless of industry, and to foreign workers exactly as to Korean workers.',
        'If you are paid less than this, it is unpaid wages. Call the Ministry of Employment and Labor on 1350.'
      ] },
    vi: { title: 'Lương tối thiểu 2026: 10.320 won/giờ',
      points: [
        'Từ ngày 1/1 đến 31/12/2026, lương tối thiểu theo giờ là 10.320 won.',
        'Quy đổi theo tháng với 40 giờ/tuần và 209 giờ/tháng là 2.156.880 won.',
        'Áp dụng như nhau cho mọi nơi làm việc, không phân biệt ngành, và cho người nước ngoài giống hệt người Hàn Quốc.',
        'Nếu bạn nhận ít hơn mức này thì đó là nợ lương. Hãy gọi Bộ Việc làm và Lao động số 1350.'
      ] },
    id: { title: 'Upah minimum 2026: 10.320 won/jam',
      points: [
        'Mulai 1 Januari sampai 31 Desember 2026 upah minimum per jam adalah 10.320 won.',
        'Dikonversi per bulan dengan 40 jam seminggu dan 209 jam sebulan menjadi 2.156.880 won.',
        'Berlaku sama untuk semua tempat kerja tanpa membedakan sektor, dan bagi pekerja asing sama seperti pekerja Korea.',
        'Jika Anda dibayar kurang dari ini, itu tunggakan upah. Hubungi Kementerian Ketenagakerjaan di 1350.'
      ] },
    km: { title: 'ប្រាក់ឈ្នួលអប្បបរមាឆ្នាំ 2026៖ 10,320 វ៉ុន ក្នុងមួយម៉ោង',
      points: [
        'ចាប់ពីថ្ងៃទី 1 ខែ 1 ដល់ថ្ងៃទី 31 ខែ 12 ឆ្នាំ 2026 ប្រាក់ឈ្នួល 10,320 វ៉ុន ក្នុងមួយម៉ោងត្រូវបានអនុវត្ត។',
        'គិតលើ 40 ម៉ោងក្នុងមួយសប្តាហ៍ និង 209 ម៉ោងក្នុងមួយខែ ប្រាក់ខែប្រចាំខែគឺ 2,156,880 វ៉ុន។',
        'អនុវត្តដូចគ្នាចំពោះគ្រប់កន្លែងធ្វើការ មិនថាវិស័យណាទេ ហើយជនបរទេសក៏ទទួលបានដូចជនជាតិកូរ៉េដែរ។',
        'បើអ្នកទទួលបានតិចជាងនេះ នោះជាការជំពាក់ប្រាក់ឈ្នួល។ សូមទូរស័ព្ទប្រឹក្សាក្រសួងការងារ តាមលេខ 1350។'
      ] },
    ne: { title: '2026 को न्यूनतम ज्याला प्रतिघण्टा 10,320 वन',
      points: [
        '2026 जनवरी 1 देखि डिसेम्बर 31 सम्म प्रतिघण्टा 10,320 वन लागू हुन्छ।',
        'हप्तामा 40 घण्टा·महिनामा 209 घण्टाको आधारमा मासिक रकम 2,156,880 वन हुन्छ।',
        'कुनै पनि उद्योगको भेद नगरी सबै कार्यस्थलमा एउटै दर लागू हुन्छ, र विदेशीलाई पनि कोरियालीलाई जस्तै लागू हुन्छ।',
        'यो भन्दा कम पाइरहनुभएको छ भने त्यो तलब नतिरिएको (बाँकी तलब) अवस्था हो। रोजगार तथा श्रम मन्त्रालयको 1350 मा परामर्श लिनुहोस्।'
      ] }
  },
  {
    key: 'n-quota-2026',
    tagKey: 'eps',
    source: '외국인력정책위원회 · 고용노동부',
    sourceL: { en: 'Foreign Workforce Policy Committee · Ministry of Employment and Labor', vi: 'Ủy ban Chính sách Nhân lực Nước ngoài · Bộ Việc làm và Lao động', id: 'Komite Kebijakan Tenaga Kerja Asing · Kementerian Ketenagakerjaan', km: 'គណៈកម្មាធិការគោលនយោបាយកម្លាំងពលកម្មបរទេស · ក្រសួងការងារកូរ៉េ', ne: 'विदेशी जनशक्ति नीति समिति · रोजगार तथा श्रम मन्त्रालय' },
    url: 'https://www.moel.go.kr',
    date: '2025-12-22',
    checked: '2026-10-28',
    ko: { title: '2026년 신규 도입 인원 축소 (8만 명)',
      points: [
        '2026년 고용허가제(E-9) 쿼터가 8만 명으로 정해졌습니다.',
        '2025년 13만 명에서 약 38% 줄어든 규모입니다.',
        '새로 들어오는 사람이 줄어드는 대신, 이미 한국에 있는 사람의 자리를 두고 경쟁이 커질 수 있습니다.',
        '사업장을 옮길 계획이라면 구직 기간 3개월을 더 넉넉히 잡고 준비하세요.'
      ] },
    en: { title: '2026 intake cut to 80,000',
      points: [
        'The 2026 Employment Permit System (E-9) quota is set at 80,000 people.',
        'That is about 38% lower than the 130,000 of 2025.',
        'Fewer new arrivals may mean more competition for places among those already in Korea.',
        'If you plan to change workplace, prepare early — the 3-month job-search period may feel tighter.'
      ] },
    vi: { title: 'Chỉ tiêu 2026 giảm còn 80.000 người',
      points: [
        'Chỉ tiêu Chương trình cấp phép việc làm (E-9) năm 2026 được ấn định là 80.000 người.',
        'Con số này thấp hơn khoảng 38% so với 130.000 của năm 2025.',
        'Người mới nhập cảnh ít đi có thể khiến cạnh tranh giữa những người đã ở Hàn Quốc tăng lên.',
        'Nếu định đổi nơi làm việc, hãy chuẩn bị sớm — 3 tháng tìm việc có thể trở nên eo hẹp hơn.'
      ] },
    id: { title: 'Kuota 2026 turun jadi 80.000',
      points: [
        'Kuota Sistem Izin Kerja (E-9) tahun 2026 ditetapkan 80.000 orang.',
        'Angka itu sekitar 38% lebih rendah dari 130.000 pada 2025.',
        'Pendatang baru yang lebih sedikit dapat meningkatkan persaingan di antara yang sudah di Korea.',
        'Jika berencana pindah tempat kerja, bersiaplah lebih awal — masa 3 bulan mencari kerja bisa terasa lebih sempit.'
      ] },
    km: { title: 'ឆ្នាំ 2026 កាត់បន្ថយចំនួនពលករថ្មី (8 ម៉ឺននាក់)',
      points: [
        'កូតាប្រព័ន្ធអនុញ្ញាតការងារ (E-9) ឆ្នាំ 2026 ត្រូវបានកំណត់ត្រឹម 8 ម៉ឺននាក់។',
        'នេះថយចុះប្រហែល 38% ពី 13 ម៉ឺននាក់ ក្នុងឆ្នាំ 2025។',
        'ពលករថ្មីចូលមកតិចជាងមុន ប៉ុន្តែការប្រកួតប្រជែងរកកន្លែងធ្វើការ ក្នុងចំណោមអ្នកដែលនៅកូរ៉េរួចហើយ អាចកើនឡើង។',
        'បើអ្នកមានគម្រោងប្តូរកន្លែងធ្វើការ សូមរៀបចំខ្លួនដោយគិតពេលឲ្យបានទូលាយ ក្នុងរយៈពេលស្វែងរកការងារ 3 ខែ។'
      ] },
    ne: { title: '2026 मा नयाँ आउने कामदारको संख्या घटाइयो (80,000 जना)',
      points: [
        '2026 को रोजगार अनुमति प्रणाली (E-9) को कोटा 80,000 जना तोकिएको छ।',
        'यो 2025 को 130,000 जना भन्दा करिब 38% कम हो।',
        'नयाँ आउने मान्छे घट्ने भएकाले, कोरियामा पहिल्यै भएका मान्छेबीच कामका लागि प्रतिस्पर्धा बढ्न सक्छ।',
        'कार्यस्थल सर्ने योजना छ भने 3 महिनाको काम खोज्ने अवधिलाई अझ बढी समय लाग्ने गरी सोचेर तयारी गर्नुहोस्।'
      ] }
  },
  {
    key: 'n-nonmetro-2026',
    tagKey: 'eps',
    source: '외국인력정책위원회 · 고용노동부',
    sourceL: { en: 'Foreign Workforce Policy Committee · Ministry of Employment and Labor', vi: 'Ủy ban Chính sách Nhân lực Nước ngoài · Bộ Việc làm và Lao động', id: 'Komite Kebijakan Tenaga Kerja Asing · Kementerian Ketenagakerjaan', km: 'គណៈកម្មាធិការគោលនយោបាយកម្លាំងពលកម្មបរទេស · ក្រសួងការងារកូរ៉េ', ne: 'विदेशी जनशक्ति नीति समिति · रोजगार तथा श्रम मन्त्रालय' },
    url: 'https://www.moel.go.kr',
    date: '2025-12-22',
    checked: '2026-10-28',
    ko: { title: '비수도권 제조업 고용 한도 확대',
      points: [
        '비수도권 제조업체가 외국인을 추가로 고용할 수 있는 한도가 내국인 대비 20%에서 30%로 올랐습니다.',
        '비수도권 유턴기업은 규모와 상관없이 외국인 고용이 가능해지고, 추가 고용 상한 50명도 없어집니다.',
        '수도권 밖에서 일자리를 찾는다면 선택지가 조금 넓어질 수 있습니다.'
      ] },
    en: { title: 'Higher hiring limits outside the capital area',
      points: [
        'Manufacturers outside the capital region may now hire foreign workers up to 30% of their Korean workforce, up from 20%.',
        'Returning companies outside the capital area can hire regardless of size, and the extra cap of 50 workers is removed.',
        'If you are looking for work outside the capital region, there may be a few more options.'
      ] },
    vi: { title: 'Nâng hạn mức tuyển dụng ngoài vùng thủ đô',
      points: [
        'Doanh nghiệp sản xuất ngoài vùng thủ đô nay được tuyển lao động nước ngoài tới 30% so với lao động Hàn Quốc, tăng từ 20%.',
        'Doanh nghiệp hồi hương ngoài vùng thủ đô được tuyển bất kể quy mô, và trần bổ sung 50 người bị bãi bỏ.',
        'Nếu bạn tìm việc ngoài vùng thủ đô, lựa chọn có thể rộng hơn một chút.'
      ] },
    id: { title: 'Kenaikan batas perekrutan di luar ibu kota',
      points: [
        'Pabrik di luar wilayah ibu kota kini boleh mempekerjakan pekerja asing hingga 30% dari pekerja Korea, naik dari 20%.',
        'Perusahaan yang kembali dan berlokasi di luar ibu kota bisa merekrut tanpa memandang ukuran, dan batas tambahan 50 orang dihapus.',
        'Jika Anda mencari kerja di luar wilayah ibu kota, pilihannya mungkin sedikit lebih luas.'
      ] },
    km: { title: 'បង្កើនកម្រិតជួលពលករបរទេស សម្រាប់រោងចក្រនៅក្រៅតំបន់រាជធានី',
      points: [
        'កម្រិតដែលរោងចក្រផលិតកម្មនៅក្រៅតំបន់រាជធានី (សេអ៊ូល និងតំបន់ជុំវិញ) អាចជួលជនបរទេសបន្ថែម បានកើនពី 20% ទៅ 30% ធៀបនឹងចំនួនបុគ្គលិកកូរ៉េ។',
        'ក្រុមហ៊ុនដែលត្រឡប់មកពីបរទេសវិញ (유턴기업) នៅក្រៅតំបន់រាជធានី អាចជួលជនបរទេសបាន មិនថាធំឬតូច ហើយកម្រិតជួលបន្ថែមអតិបរមា 50 នាក់ ក៏ត្រូវលុបចោលដែរ។',
        'បើអ្នករកការងារនៅក្រៅតំបន់រាជធានី ជម្រើសរបស់អ្នកអាចទូលាយជាងមុនបន្តិច។'
      ] },
    ne: { title: 'राजधानी क्षेत्र बाहिरका उत्पादन उद्योगमा रोजगार सीमा बढाइयो',
      points: [
        'राजधानी क्षेत्र (सिउल वरपर) बाहिरका उत्पादन कम्पनीले थप विदेशी राख्न पाउने सीमा कोरियाली कामदारको तुलनामा 20% बाट 30% पुगेको छ।',
        'राजधानी क्षेत्र बाहिर फर्किएका (U-turn) कम्पनीले आकार जस्तोसुकै भए पनि विदेशी राख्न पाउनेछन्, र थप रोजगारीको 50 जनाको सीमा पनि हट्नेछ।',
        'राजधानी क्षेत्र बाहिर काम खोज्दै हुनुहुन्छ भने छनोट अलि बढी हुन सक्छ।'
      ] }
  },
  {
    key: 'n-longstay-2026',
    tagKey: 'eps',
    source: '외국인력정책위원회 발표 · 언론 보도',
    sourceL: { en: 'Foreign Workforce Policy Committee announcement · News reports', vi: 'Công bố của Ủy ban Chính sách Nhân lực Nước ngoài · Báo chí', id: 'Pengumuman Komite Kebijakan Tenaga Kerja Asing · Pemberitaan media', km: 'សេចក្តីប្រកាសរបស់គណៈកម្មាធិការគោលនយោបាយកម្លាំងពលកម្មបរទេស · របាយការណ៍សារព័ត៌មាន', ne: 'विदेशी जनशक्ति नीति समितिको घोषणा · समाचार रिपोर्ट' },
    url: 'https://www.moel.go.kr',
    date: '2026-08-03',
    checked: '2026-10-28',
    ko: { title: '10년 이상 장기 체류 방안 논의 중',
      points: [
        'E-9 근로자의 장기 체류를 넓히는 방안이 논의 중이라고 알려졌습니다.',
        '아직 확정된 제도가 아니므로, 지금의 체류 기간(최장 4년 10개월)을 기준으로 계획하세요.',
        '확정되면 이 쪽에 다시 올리겠습니다. 소문만 듣고 움직이지 마세요.'
      ] },
    en: { title: '10-year stay scheme under discussion',
      points: [
        'Ways to extend long-term stay for E-9 workers are reported to be under discussion.',
        'Nothing is decided yet, so plan around the current limit of 4 years and 10 months.',
        'We will post here once it is confirmed. Do not act on rumours alone.'
      ] },
    vi: { title: 'Đang thảo luận cư trú dài hạn 10 năm',
      points: [
        'Có thông tin rằng các phương án mở rộng cư trú dài hạn cho lao động E-9 đang được thảo luận.',
        'Chưa có gì được quyết định, vì vậy hãy lên kế hoạch theo thời hạn hiện tại là 4 năm 10 tháng.',
        'Chúng tôi sẽ đăng lại ở đây khi có quyết định. Đừng hành động chỉ vì tin đồn.'
      ] },
    id: { title: 'Pembahasan tinggal panjang 10 tahun',
      points: [
        'Dikabarkan sedang dibahas cara memperluas masa tinggal panjang bagi pekerja E-9.',
        'Belum ada keputusan, jadi rencanakan berdasarkan batas saat ini yaitu 4 tahun 10 bulan.',
        'Kami akan memuatnya di sini bila sudah dipastikan. Jangan bertindak hanya berdasarkan desas-desus.'
      ] },
    km: { title: 'កំពុងពិភាក្សាផែនការស្នាក់នៅរយៈពេលវែង លើសពី 10 ឆ្នាំ',
      points: [
        'មានព័ត៌មានថា កំពុងពិភាក្សាផែនការពង្រីកការស្នាក់នៅរយៈពេលវែង សម្រាប់កម្មករ E-9។',
        'នេះមិនទាន់ជាប្រព័ន្ធដែលបានសម្រេចនៅឡើយទេ ដូច្នេះសូមរៀបចំផែនការដោយផ្អែកលើរយៈពេលស្នាក់នៅបច្ចុប្បន្ន (យូរបំផុត 4 ឆ្នាំ 10 ខែ)។',
        'ពេលសម្រេចហើយ យើងនឹងដាក់ព័ត៌មាននៅទីនេះម្តងទៀត។ កុំធ្វើអ្វីដោយគ្រាន់តែឮពាក្យចចាមអារ៉ាម។'
      ] },
    ne: { title: '10 वर्षभन्दा लामो बसाइको उपायबारे छलफल हुँदै',
      points: [
        'E-9 कामदारको लामो बसाइ बढाउने उपायबारे छलफल भइरहेको खबर आएको छ।',
        'यो अझै पक्का भएको नियम होइन, त्यसैले अहिलेको बसाइ अवधि (बढीमा 4 वर्ष 10 महिना) लाई आधार मानेर योजना बनाउनुहोस्।',
        'पक्का भएपछि यहीँ फेरि राख्नेछौँ। हल्ला मात्र सुनेर कुनै कदम नचाल्नुहोस्।'
      ] }
  }
];

/* ---------------- 인터뷰 ----------------

   실제로 사업장을 옮겨 본 사람의 이야기와, 이 사이트를 써 본 소감을 담습니다.

   ■ 지금은 비어 있습니다.
     인터뷰를 하기 전에는 아무것도 넣지 마세요. 지어낸 사람 이야기를 올리면
     읽는 사람이 그 경험을 근거로 자기 일을 결정합니다. 빈 화면이 가짜보다 낫습니다.
     비어 있으면 화면에 "인터뷰를 준비하고 있습니다" 안내만 나옵니다.

   ■ 올리기 전에 반드시 지울 것
     이름 · 회사명 · 공장 이름 · 정확한 지역 · 입국 연도.
     이 다섯 가지 중 두세 개만 겹쳐도 사업주는 누구인지 알아냅니다.
     "경기 남부 금속 공장" 정도로 뭉뚱그리고, 이름은 가명을 쓰세요.
     본인 동의를 받았더라도 마찬가지입니다 — 동의한 사람은 자기가 특정될
     위험을 다 알기 어렵습니다.

   ■ 항목 하나 예시 (실제 인터뷰를 하고 나서 이 모양으로 채우세요)

   {
     key: 'itv-01',
     alias: 'A',                    // 가명 또는 이니셜
     country: 'vi',                 // 국적 — 국기·라벨 표시에 씁니다
     years: 3,                      // 한국에서 일한 햇수
     field: 'metal',                // 업종 (자세한 회사명 대신)
     date: '2026-09-01',            // 인터뷰한 날
     ko: {
       intro: '한 줄 소개',
       qa: [
         { q: '사업장을 옮길 때 가장 힘들었던 것은?', a: '...' },
         { q: '이 사이트가 도움이 됐나요?',           a: '...' }
       ],
       useQuote: '이 사이트를 쓴 소감 한 줄 (선택)'   // 있으면 인터뷰 카드 맨 아래에 인용문으로 이어 붙습니다.
                                                       // 예전에는 이걸 모아 "이 사이트를 써 본 사람들"이라는
                                                       // 별도 섹션에 따로 보였지만, 지금은 그 섹션 없이
                                                       // 각 인터뷰 카드 안에 바로 싣습니다.
     },
     en: { ... }, vi: { ... }, th: { ... }, id: { ... }
   }
   ------------------------------------------------------------------ */

const INTERVIEWS = [
  {
    key: 'itv-asad',
    alias: '무함마드 아사드',
    country: 'pk',
    age: 42,
    years: 11,
    field: 'rest',
    date: '2026-08-28',
    photo: 'assets/itv-asad.jpg',
    photoAlt: '이태원 가게에서 인터뷰를 마친 무함마드 아사드 님',
    aliasL: { en: 'Muhammad Asad', vi: 'Muhammad Asad', id: 'Muhammad Asad', km: 'មូហាំម៉ាត់ អាសាដ (Muhammad Asad)', ne: 'मुहम्मद असद (Muhammad Asad)' },
    photoAltL: { en: 'Muhammad Asad after the interview at his shop in Itaewon', vi: 'Anh Muhammad Asad sau buổi phỏng vấn tại cửa hàng ở Itaewon', id: 'Muhammad Asad setelah wawancara di tokonya di Itaewon', km: 'លោក Muhammad Asad បន្ទាប់ពីបទសម្ភាសន៍នៅហាងរបស់គាត់ក្នុង Itaewon', ne: 'इटेवोनको पसलमा अन्तर्वार्तापछि मुहम्मद असद' },
    ko: {
      intro: '파키스탄에서 온 42세. 2015년에 고용허가제로 입국해 경기도의 공장에서 일하다 사업장을 한 번 옮겼습니다. 지금은 이태원에서 파키스탄·인도 음식점을 직접 운영한 지 2년째입니다.',
      qa: [
        { q: '여러 나라 중에 왜 한국이었나요?',
          a: '처음에는 사우디아라비아나 말레이시아도 알아봤습니다. 그런데 한국은 E-9 비자로 들어오면 최저임금이 법으로 확실히 보장되고, 월급이 밀리는 일도 상대적으로 적다고 들었습니다. 그 점이 컸습니다.' },
        { q: '결정적인 계기가 있었나요?',
          a: '솔직히 말하면 아들이 태어난 것이 제일 컸습니다. 고향에서 벌던 돈으로는 아이 미래가 어려워 보였습니다. 그때 마침 동네 친구가 한국 이야기를 해줬고, 그날 밤에 아내와 이야기하고 바로 결심했습니다.' },
        { q: '언제 한국에 오셨나요?',
          a: '2015년입니다. 올해로 11년째가 됐습니다.' },
        { q: '사업장을 옮기신 적이 있으신가요?',
          a: '네, 한 번 있습니다. 경기도의 작은 공장에서 일했는데 야근 수당을 제대로 받지 못했습니다. 고용센터에 상담하고 사업장 변경을 신청했습니다.' },
        { q: '그 과정에서 가장 힘들었던 것은 무엇이었나요?',
          a: '서류를 준비하고 사유를 증명하는 과정이 복잡하고 오래 걸렸습니다. 제일 큰 문제는 언어였습니다. 서류가 전부 한국어라 혼자서는 힘들었습니다.' },
        { q: '그럼 어떻게 해결하셨나요?',
          a: '먼저 한국에 자리를 잡은 파키스탄 지인들, 이태원에서 장사하는 다른 외국인 사장님들에게 직접 물어보는 것이 제일 확실했습니다. 관공서보다 그쪽이 빨랐습니다.' },
        { q: '옮긴 뒤에는 어떻게 되셨나요?',
          a: '마침 이태원의 파키스탄 식당에서 일손이 필요하다고 해서 그쪽으로 옮겼습니다. 거기서 요리와 가게 운영을 하나씩 배웠습니다.' },
        { q: '지금도 제도나 절차가 궁금할 때는 어떻게 하시나요?',
          a: '여전히 먼저 겪어본 지인들에게 먼저 물어봅니다. 이태원 안에 파키스탄·방글라데시 사장님들끼리 만든 단톡방이 있어서, 거기에 "이거 어떻게 처리했냐"고 묻는 것이 제일 간단합니다.' },
        { q: '지금은 어떤 일을 하고 계신가요?',
          a: '이태원에서 파키스탄·인도 음식 전문점을 운영하고 있습니다. 직원으로 일하다가 제 가게를 연 지는 이제 2년째입니다.' },
        { q: '앞으로의 계획은 어떻게 되시나요?',
          a: '가게가 좀 더 자리를 잡는 것, 그리고 아들이 바르게 자라는 것입니다.' }
      ]
    },
    en: {
      intro: 'Aged 42, from Pakistan. He came under the Employment Permit System in 2015, worked at a small factory in Gyeonggi-do and changed workplace once. He has now been running his own Pakistani and Indian restaurant in Itaewon for two years.',
      qa: [
        { q: 'Of all the countries, why Korea?',
          a: 'At first I also looked into Saudi Arabia and Malaysia. But I heard that in Korea, if you come on an E-9 visa, the minimum wage is guaranteed by law and wages are less often delayed. That mattered a lot.' },
        { q: 'Was there a decisive moment?',
          a: 'Honestly, my son being born was the biggest thing. What I earned back home did not look like enough for his future. Around that time a friend from my neighbourhood told me about Korea, and that same night I talked it over with my wife and decided.' },
        { q: 'When did you come to Korea?',
          a: 'In 2015. This is my eleventh year.' },
        { q: 'Have you ever changed workplace?',
          a: 'Yes, once. I worked at a small factory in Gyeonggi-do but was not properly paid for overtime. I went to the Employment Center for advice and applied to change workplace.' },
        { q: 'What was hardest about that process?',
          a: 'Preparing the documents and proving the reason was complicated and took a long time. The biggest problem was language. Everything was in Korean, so I could not manage alone.' },
        { q: 'How did you solve it, then?',
          a: 'Asking Pakistani acquaintances who had settled here earlier, and other foreign shop owners in Itaewon, was the most reliable way. It was faster than the government offices.' },
        { q: 'What happened after you moved?',
          a: 'A Pakistani restaurant in Itaewon happened to need help, so I went there. That is where I learned cooking and how to run a shop, one thing at a time.' },
        { q: 'When you have a question about rules or procedures now, what do you do?',
          a: 'I still ask the people who went through it first. There is a group chat among Pakistani and Bangladeshi owners here in Itaewon, and asking there — "how did you handle this?" — is the simplest way.' },
        { q: 'What work do you do now?',
          a: 'I run a Pakistani and Indian restaurant in Itaewon. I worked as an employee first, and it has been two years since I opened my own place.' },
        { q: 'What are your plans from here?',
          a: 'To get the restaurant more settled, and for my son to grow up well.' }
      ]
    },
    vi: {
      intro: '42 tuổi, người Pakistan. Anh sang Hàn theo Chương trình cấp phép việc làm năm 2015, làm việc tại một nhà máy nhỏ ở Gyeonggi-do và đã một lần chuyển nơi làm việc. Hiện anh tự mở nhà hàng Pakistan và Ấn Độ ở Itaewon được hai năm.',
      qa: [
        { q: 'Trong nhiều nước, vì sao anh chọn Hàn Quốc?',
          a: 'Ban đầu tôi cũng tìm hiểu Ả Rập Xê Út và Malaysia. Nhưng tôi nghe nói ở Hàn Quốc, nếu sang bằng visa E-9 thì lương tối thiểu được luật bảo đảm và ít khi bị chậm lương. Điều đó rất quan trọng.' },
        { q: 'Có điều gì mang tính quyết định không?',
          a: 'Thật lòng mà nói, việc con trai tôi ra đời là điều lớn nhất. Số tiền kiếm được ở quê không đủ cho tương lai của cháu. Đúng lúc đó một người bạn cùng xóm kể cho tôi nghe về Hàn Quốc, và ngay tối hôm ấy tôi bàn với vợ rồi quyết định.' },
        { q: 'Anh sang Hàn khi nào?',
          a: 'Năm 2015. Năm nay là năm thứ mười một.' },
        { q: 'Anh đã từng chuyển nơi làm việc chưa?',
          a: 'Có, một lần. Tôi làm ở một nhà máy nhỏ tại Gyeonggi-do nhưng không được trả đủ tiền tăng ca. Tôi đến Trung tâm việc làm để được tư vấn rồi nộp đơn xin chuyển nơi làm việc.' },
        { q: 'Điều gì khó nhất trong quá trình đó?',
          a: 'Chuẩn bị giấy tờ và chứng minh lý do rất phức tạp và mất nhiều thời gian. Vấn đề lớn nhất là ngôn ngữ. Giấy tờ toàn bằng tiếng Hàn nên tôi không tự làm được.' },
        { q: 'Vậy anh đã giải quyết thế nào?',
          a: 'Hỏi trực tiếp những người Pakistan đã ổn định ở đây trước, và các ông chủ nước ngoài khác buôn bán ở Itaewon, là cách chắc chắn nhất. Nhanh hơn cơ quan nhà nước.' },
        { q: 'Sau khi chuyển thì thế nào?',
          a: 'Đúng lúc một nhà hàng Pakistan ở Itaewon cần người nên tôi sang đó. Ở đó tôi học nấu ăn và cách vận hành cửa hàng, từng chút một.' },
        { q: 'Bây giờ khi thắc mắc về chế độ hay thủ tục thì anh làm gì?',
          a: 'Tôi vẫn hỏi những người đã trải qua trước. Ở Itaewon có một nhóm chat của các ông chủ người Pakistan và Bangladesh, hỏi trong đó "việc này xử lý sao?" là đơn giản nhất.' },
        { q: 'Hiện anh làm công việc gì?',
          a: 'Tôi mở nhà hàng chuyên món Pakistan và Ấn Độ ở Itaewon. Trước tôi làm nhân viên, còn mở quán riêng thì đến nay là hai năm.' },
        { q: 'Anh có dự định gì sắp tới?',
          a: 'Để cửa hàng ổn định hơn, và để con trai tôi lớn lên nên người.' }
      ]
    },
    id: {
      intro: 'Usia 42 tahun, asal Pakistan. Ia datang lewat Sistem Izin Kerja pada 2015, bekerja di sebuah pabrik kecil di Gyeonggi-do, dan pernah sekali pindah tempat kerja. Kini ia sudah dua tahun menjalankan restoran Pakistan dan India miliknya sendiri di Itaewon.',
      qa: [
        { q: 'Dari sekian negara, mengapa Korea?',
          a: 'Awalnya saya juga mencari tahu soal Arab Saudi dan Malaysia. Tetapi saya dengar di Korea, kalau masuk dengan visa E-9, upah minimum dijamin undang-undang dan gaji jarang tertunda. Itu sangat berarti.' },
        { q: 'Adakah momen yang menentukan?',
          a: 'Sejujurnya, kelahiran anak laki-laki saya adalah yang terbesar. Penghasilan di kampung terasa tidak cukup untuk masa depannya. Saat itu seorang teman sekampung bercerita tentang Korea, dan malam itu juga saya berbicara dengan istri lalu memutuskan.' },
        { q: 'Kapan Anda datang ke Korea?',
          a: 'Tahun 2015. Tahun ini tahun kesebelas.' },
        { q: 'Pernahkah Anda pindah tempat kerja?',
          a: 'Pernah, sekali. Saya bekerja di pabrik kecil di Gyeonggi-do tetapi upah lemburnya tidak dibayar dengan benar. Saya berkonsultasi ke Pusat Ketenagakerjaan lalu mengajukan pindah tempat kerja.' },
        { q: 'Apa yang paling sulit dalam prosesnya?',
          a: 'Menyiapkan dokumen dan membuktikan alasannya rumit dan makan waktu. Masalah terbesar adalah bahasa. Semua dokumen berbahasa Korea, jadi saya tidak sanggup sendirian.' },
        { q: 'Lalu bagaimana Anda mengatasinya?',
          a: 'Bertanya langsung kepada kenalan Pakistan yang lebih dulu mapan di sini, dan kepada pemilik usaha asing lain di Itaewon, adalah cara yang paling pasti. Lebih cepat daripada kantor pemerintah.' },
        { q: 'Bagaimana setelah pindah?',
          a: 'Kebetulan sebuah restoran Pakistan di Itaewon butuh tenaga, jadi saya pindah ke sana. Di situ saya belajar memasak dan mengelola toko, sedikit demi sedikit.' },
        { q: 'Kalau sekarang ada pertanyaan soal aturan atau prosedur, Anda bagaimana?',
          a: 'Saya tetap bertanya lebih dulu kepada mereka yang sudah mengalaminya. Di Itaewon ada grup obrolan sesama pemilik usaha Pakistan dan Bangladesh, dan bertanya di sana — "ini dulu diurus bagaimana?" — paling gampang.' },
        { q: 'Sekarang Anda bekerja apa?',
          a: 'Saya menjalankan restoran khusus masakan Pakistan dan India di Itaewon. Dulu saya karyawan, dan membuka usaha sendiri sudah dua tahun.' },
        { q: 'Apa rencana Anda ke depan?',
          a: 'Agar restoran lebih mapan, dan agar anak saya tumbuh dengan baik.' }
      ]
    },
    km: {
      intro: 'បុរសអាយុ 42 ឆ្នាំ មកពីប៉ាគីស្ថាន។ គាត់បានចូលមកកូរ៉េតាមប្រព័ន្ធអនុញ្ញាតការងារ នៅឆ្នាំ 2015 ធ្វើការនៅរោងចក្រមួយក្នុងខេត្តគីយ៉ុងហ្គី ហើយបានប្តូរកន្លែងធ្វើការម្តង។ ឥឡូវនេះ គាត់បើកភោជនីយដ្ឋានម្ហូបប៉ាគីស្ថាន និងឥណ្ឌាដោយខ្លួនឯង នៅអ៊ីតែវ៉ុន បានឆ្នាំទី 2 ហើយ។',
      qa: [
        { q: 'ក្នុងចំណោមប្រទេសជាច្រើន ហេតុអ្វីបានជាជ្រើសរើសកូរ៉េ?',
          a: 'ដំបូងខ្ញុំក៏បានស្វែងរកព័ត៌មានពីអារ៉ាប៊ីសាអូឌីត និងម៉ាឡេស៊ីដែរ។ ប៉ុន្តែខ្ញុំឮថា នៅកូរ៉េ បើចូលមកដោយទិដ្ឋាការ E-9 ប្រាក់ឈ្នួលអប្បបរមាត្រូវបានធានាច្បាស់លាស់ដោយច្បាប់ ហើយការយឺតបើកប្រាក់ខែក៏កើតមានតិចជាង។ ចំណុចនោះសំខាន់ណាស់។' },
        { q: 'តើមានហេតុការណ៍សំខាន់អ្វី ដែលធ្វើឲ្យលោកសម្រេចចិត្តទេ?',
          a: 'និយាយឲ្យត្រង់ទៅ ការកើតមករបស់កូនប្រុសខ្ញុំ គឺជាហេតុផលធំជាងគេ។ ប្រាក់ដែលខ្ញុំរកបាននៅស្រុកកំណើត ហាក់ដូចជាមិនគ្រប់គ្រាន់សម្រាប់អនាគតកូនទេ។ ពេលនោះចំពេលមិត្តភក្តិនៅភូមិបានប្រាប់រឿងពីកូរ៉េ ហើយយប់នោះ ខ្ញុំបាននិយាយជាមួយប្រពន្ធ រួចសម្រេចចិត្តភ្លាម។' },
        { q: 'តើលោកមកដល់កូរ៉េនៅពេលណា?',
          a: 'ឆ្នាំ 2015។ ឆ្នាំនេះគឺជាឆ្នាំទី 11 ហើយ។' },
        { q: 'តើលោកធ្លាប់ប្តូរកន្លែងធ្វើការទេ?',
          a: 'បាទ ធ្លាប់ម្តង។ ខ្ញុំធ្វើការនៅរោងចក្រតូចមួយក្នុងខេត្តគីយ៉ុងហ្គី ប៉ុន្តែមិនបានទទួលប្រាក់ធ្វើការថែមម៉ោងពេលយប់ឲ្យបានត្រឹមត្រូវទេ។ ខ្ញុំបានទៅប្រឹក្សានៅមជ្ឈមណ្ឌលការងារ ហើយដាក់ពាក្យសុំប្តូរកន្លែងធ្វើការ។' },
        { q: 'ក្នុងដំណើរការនោះ តើអ្វីដែលពិបាកបំផុត?',
          a: 'ការរៀបចំឯកសារ និងការបញ្ជាក់ហេតុផល ស្មុគស្មាញ ហើយចំណាយពេលយូរ។ បញ្ហាធំបំផុតគឺភាសា។ ឯកសារទាំងអស់ជាភាសាកូរ៉េ ដូច្នេះធ្វើតែម្នាក់ឯងពិបាកណាស់។' },
        { q: 'ចុះលោកដោះស្រាយយ៉ាងដូចម្តេច?',
          a: 'ការសួរដោយផ្ទាល់ទៅអ្នកស្គាល់គ្នាជាជនជាតិប៉ាគីស្ថាន ដែលបានរស់នៅកូរ៉េមុនខ្ញុំ និងម្ចាស់ហាងជនបរទេសផ្សេងទៀតដែលរកស៊ីនៅអ៊ីតែវ៉ុន គឺច្បាស់ជាងគេ។ ពួកគេឆ្លើយលឿនជាងការិយាល័យរដ្ឋ។' },
        { q: 'បន្ទាប់ពីប្តូរហើយ តើមានអ្វីកើតឡើង?',
          a: 'ចំពេលនោះ ភោជនីយដ្ឋានប៉ាគីស្ថានមួយនៅអ៊ីតែវ៉ុនត្រូវការកម្មករ ដូច្នេះខ្ញុំបានប្តូរទៅទីនោះ។ នៅទីនោះ ខ្ញុំបានរៀនធ្វើម្ហូប និងរបៀបគ្រប់គ្រងហាង ម្តងបន្តិចៗ។' },
        { q: 'សព្វថ្ងៃ ពេលចង់ដឹងអំពីប្រព័ន្ធ ឬនីតិវិធី តើលោកធ្វើយ៉ាងណា?',
          a: 'ខ្ញុំនៅតែសួរអ្នកស្គាល់គ្នាដែលធ្លាប់ជួបរឿងនោះមុនគេ។ នៅអ៊ីតែវ៉ុន មានក្រុមជជែកដែលម្ចាស់ហាងប៉ាគីស្ថាន និងបង់ក្លាដែសបង្កើតឡើង ដូច្នេះការសួរក្នុងក្រុមនោះថា «តើអ្នកដោះស្រាយរឿងនេះយ៉ាងម៉េច?» គឺងាយស្រួលបំផុត។' },
        { q: 'បច្ចុប្បន្ន តើលោកកំពុងធ្វើការងារអ្វី?',
          a: 'ខ្ញុំកំពុងបើកហាងម្ហូបប៉ាគីស្ថាន និងឥណ្ឌា នៅអ៊ីតែវ៉ុន។ ពីធ្វើជាបុគ្គលិក រហូតបើកហាងផ្ទាល់ខ្លួន ឥឡូវបានឆ្នាំទី 2 ហើយ។' },
        { q: 'តើលោកមានគម្រោងអ្វីសម្រាប់ពេលអនាគត?',
          a: 'ចង់ឲ្យហាងរឹងមាំជាងនេះបន្តិចទៀត ហើយចង់ឲ្យកូនប្រុសខ្ញុំធំឡើងជាមនុស្សល្អ។' }
      ]
    },
    ne: {
      intro: 'पाकिस्तानबाट आएका 42 वर्षका। 2015 मा रोजगार अनुमति प्रणालीबाट आएर ग्योङगी प्रान्तको कारखानामा काम गर्दै एक पटक कार्यस्थल सरे। अहिले इतेवोनमा आफ्नै पाकिस्तानी·भारतीय खानाको रेस्टुरेन्ट चलाएको 2 वर्ष भयो।',
      qa: [
        { q: 'धेरै देशमध्ये किन कोरिया रोज्नुभयो?',
          a: 'सुरुमा साउदी अरब र मलेसिया पनि हेरेको थिएँ। तर कोरियामा E-9 भिसामा आएपछि न्यूनतम ज्याला कानुनले पक्का दिलाउँछ, र तलब रोकिने कुरा पनि अरूभन्दा कम हुन्छ भन्ने सुनेँ। त्यो कुरा मेरा लागि ठूलो थियो।' },
        { q: 'निर्णय गर्ने खास कारण थियो?',
          a: 'साँचो भन्नुपर्दा छोरा जन्मिनु नै सबैभन्दा ठूलो कारण थियो। घरमा कमाउने पैसाले बच्चाको भविष्य गाह्रो देखिन्थ्यो। त्यही बेला गाउँको साथीले कोरियाको कुरा सुनायो, र त्यही रात श्रीमतीसँग कुरा गरेर तुरुन्तै निर्णय गरेँ।' },
        { q: 'कोरिया कहिले आउनुभयो?',
          a: '2015 मा। यो वर्ष 11 औँ वर्ष भयो।' },
        { q: 'कहिल्यै कार्यस्थल सर्नुभएको छ?',
          a: 'हो, एक पटक। ग्योङगी प्रान्तको सानो कारखानामा काम गर्थेँ, तर राति काम गरेको (ओभरटाइम) भत्ता राम्ररी पाइनँ। रोजगार केन्द्रमा परामर्श लिएर कार्यस्थल परिवर्तनको निवेदन दिएँ।' },
        { q: 'त्यो बेला सबैभन्दा गाह्रो के थियो?',
          a: 'कागजात तयार गर्ने र कारण प्रमाणित गर्ने काम झन्झटिलो थियो र धेरै समय लाग्यो। सबैभन्दा ठूलो समस्या भाषा थियो। सबै कागजात कोरियाली भाषामा भएकाले एक्लै गर्न गाह्रो भयो।' },
        { q: 'त्यसो भए कसरी समाधान गर्नुभयो?',
          a: 'कोरियामा पहिल्यै जमिसकेका पाकिस्तानी चिनजानका मान्छे र इतेवोनमा व्यापार गर्ने अरू विदेशी साहुहरूलाई सिधै सोध्नु नै सबैभन्दा भरपर्दो थियो। सरकारी कार्यालयभन्दा उनीहरूबाट छिटो हुन्थ्यो।' },
        { q: 'सरेपछि के भयो?',
          a: 'त्यही बेला इतेवोनको एउटा पाकिस्तानी रेस्टुरेन्टमा कामदार चाहिएको थियो, त्यसैले त्यहाँ सरेँ। त्यहाँ खाना पकाउन र पसल चलाउन बिस्तारै सिकेँ।' },
        { q: 'अहिले पनि नियम वा प्रक्रियाबारे जान्न मन लाग्दा के गर्नुहुन्छ?',
          a: 'अहिले पनि पहिले भोगिसकेका चिनजानका मान्छेलाई नै पहिले सोध्छु। इतेवोनमा पाकिस्तानी·बंगलादेशी साहुहरूले बनाएको ग्रुप च्याट छ, त्यहाँ "यो कसरी मिलायौ?" भनेर सोध्नु नै सबैभन्दा सजिलो हो।' },
        { q: 'अहिले के काम गर्दै हुनुहुन्छ?',
          a: 'इतेवोनमा पाकिस्तानी·भारतीय खानाको रेस्टुरेन्ट चलाइरहेको छु। कर्मचारी भएर काम गर्दागर्दै आफ्नै पसल खोलेको अब 2 वर्ष भयो।' },
        { q: 'अबको योजना के छ?',
          a: 'पसल अझ राम्ररी जमोस्, र छोरा असल भएर हुर्कोस् — यही हो।' }
      ]
    }
  },
  {
    key: 'itv-sohee',
    alias: '박소희 (Luong Thi Luong)',
    country: 'vi',
    years: 17,
    field: 'rest',
    date: '2026-08-27',
    photo: 'assets/itv-sohee.jpg',
    photoAlt: '인터뷰를 마치고 악수하는 박소희 님',
    aliasL: { en: 'Park So-hee (Luong Thi Luong)', vi: 'Park So-hee (Lương Thị Lương)', id: 'Park So-hee (Luong Thi Luong)', km: 'ប៉ាក សូហេ (Luong Thi Luong)', ne: 'पार्क सो-ही (Luong Thi Luong)' },
    photoAltL: { en: 'Park So-hee shaking hands after the interview', vi: 'Chị Park So-hee bắt tay sau buổi phỏng vấn', id: 'Park So-hee berjabat tangan setelah wawancara', km: 'Park So-hee ចាប់ដៃបន្ទាប់ពីបទសម្ភាសន៍', ne: 'अन्तर्वार्तापछि हात मिलाउँदै पार्क सो-ही' },
    ko: {
      intro: '베트남에서 온 1973년생. 고용허가제로 입국해 17년을 지냈고, 그 사이 사업장을 한 번 옮겼습니다. 지금은 한국 국적을 얻어 직접 베트남 음식점을 운영합니다.',
      qa: [
        { q: '한국에 관심을 갖게 된 계기는 무엇이었나요?',
          a: '베트남에서 방영된 한국 드라마를 보면서 한국이라는 나라가 좋아지기 시작했습니다. 그러다 이것저것 알아가면서, 언젠가 직접 가서 살아보고 싶다는 마음이 커졌습니다.' },
        { q: '한국에 오기로 결정하는 데 결정적이었던 계기가 있었나요?',
          a: '가까운 지인이 한국행을 권해준 것이 계기가 되었습니다. 드라마로 막연히 좋아하던 나라였는데, 그 권유를 듣고 나서 실제로 가야겠다고 마음을 굳혔습니다.' },
        { q: '사업장을 옮기신 적이 있으신가요?',
          a: '네, E-9으로 일하던 중 한 번 옮긴 적이 있습니다. 그때 한국어로 된 안내문을 혼자 읽고 이해하기가 쉽지 않아 많이 답답했습니다.' },
        { q: '그 어려운 순간을 어떻게 헤쳐나가셨나요?',
          a: '한국어를 잘하는 지인이 곁에 있어 준 덕분입니다. 무엇을 준비해야 하는지, 서류에 뭐라고 쓰여 있는지, 기한이 언제까지인지 — 막막할 때마다 먼저 물어볼 사람이 있다는 게 정말 큰 힘이 되었습니다.' },
        { q: '지금도 제도나 절차가 궁금할 때는 어떻게 하시나요?',
          a: '지금도 가장 먼저 찾는 건 관공서 상담 전화가 아니라 그 지인입니다. 어려운 일이 생겼을 때도 마찬가지로 그분을 통해 해결해 왔습니다.' },
        { q: '현재 어떤 일을 하고 계신가요?',
          a: '지금은 제가 직접 베트남 음식점을 운영하고 있습니다. 고용허가제로 시작해서 한국 국적을 얻고 사장이 되기까지, 긴 시간이 걸렸습니다.' },
        { q: '앞으로의 계획이 있으신가요?',
          a: '지금 하는 음식점을 계속 잘 꾸려나가면서, 한국에서 안정적으로 지내고 싶습니다.' },
        { q: '비슷한 어려움을 겪고 있는 분들께 하고 싶은 말씀이 있다면요?',
          a: '혼자 해결하려고 애쓰지 마세요. 믿을 만한 사람에게 먼저 물어보는 게 훨씬 빠르고, 마음도 편해집니다. 저도 그렇게 17년을 버텨왔습니다.' }
      ],
      useQuote: '이런 정보를 자기 나라 말로 미리 정리해서 볼 수 있는 사이트가 있다면 훨씬 편할 것 같습니다. 지인에게 매번 물어보지 않아도 스스로 먼저 확인해볼 수 있으니까요.'
    },
    en: {
      intro: 'Born in 1973, from Vietnam. She came under the Employment Permit System and has spent 17 years in Korea, changing workplace once along the way. She now holds Korean citizenship and runs her own Vietnamese restaurant.',
      qa: [
        { q: 'What first drew you to Korea?',
          a: 'I started to like Korea while watching Korean dramas back in Vietnam. As I learned more about the country, the wish to go and live there myself grew stronger.' },
        { q: 'Was there a moment that decided it for you?',
          a: 'Someone close to me suggested I go. Korea had been a country I vaguely liked from dramas, but after that suggestion I made up my mind to actually go.' },
        { q: 'Have you ever changed workplace?',
          a: 'Yes, once while I was working on an E-9 visa. Reading and understanding the Korean-language guidance on my own was not easy, and it was very frustrating.' },
        { q: 'How did you get through that?',
          a: 'Because someone who spoke Korean well was there beside me. What to prepare, what the documents said, when the deadline was — having someone to ask first, whenever I was lost, made an enormous difference.' },
        { q: 'When you have a question about rules or procedures now, what do you do?',
          a: 'Even now the first person I turn to is not a government helpline but that same acquaintance. Whenever something difficult comes up, I have solved it through her.' },
        { q: 'What work do you do now?',
          a: 'I run my own Vietnamese restaurant. From starting under the Employment Permit System to gaining Korean citizenship and becoming an owner, it took a long time.' },
        { q: 'What are your plans from here?',
          a: 'To keep running the restaurant well and to go on living steadily in Korea.' },
        { q: 'What would you say to people facing similar difficulties?',
          a: 'Do not try to solve everything alone. Asking someone you trust is far faster, and it is much easier on your mind. That is how I got through 17 years.' }
      ],
      useQuote: 'It would be so much easier if there were a site where this was laid out in your own language beforehand. You could check for yourself first instead of asking someone every time.'
    },
    vi: {
      intro: 'Sinh năm 1973, người Việt Nam. Chị sang Hàn theo Chương trình cấp phép việc làm và đã ở 17 năm, trong đó một lần chuyển nơi làm việc. Hiện chị đã có quốc tịch Hàn Quốc và tự mở nhà hàng Việt.',
      qa: [
        { q: 'Điều gì khiến chị quan tâm đến Hàn Quốc?',
          a: 'Tôi bắt đầu thích Hàn Quốc khi xem phim Hàn ở Việt Nam. Càng tìm hiểu về đất nước đó, mong muốn được sang sống thử càng lớn dần.' },
        { q: 'Có điều gì quyết định để chị sang Hàn không?',
          a: 'Một người thân quen khuyên tôi nên đi. Trước đó tôi chỉ thích Hàn Quốc một cách mơ hồ qua phim, nhưng sau lời khuyên ấy tôi quyết tâm sang thật.' },
        { q: 'Chị đã từng chuyển nơi làm việc chưa?',
          a: 'Có, một lần khi đang làm theo visa E-9. Lúc đó tự đọc và hiểu tờ hướng dẫn bằng tiếng Hàn không hề dễ, tôi thấy rất bí bách.' },
        { q: 'Chị đã vượt qua lúc khó khăn đó thế nào?',
          a: 'Nhờ có người quen giỏi tiếng Hàn ở bên cạnh. Phải chuẩn bị gì, giấy tờ viết gì, hạn đến khi nào — mỗi lúc bối rối mà có người để hỏi trước thì thật sự là chỗ dựa rất lớn.' },
        { q: 'Bây giờ khi thắc mắc về chế độ hay thủ tục thì chị làm thế nào?',
          a: 'Đến giờ người tôi tìm đầu tiên vẫn không phải tổng đài cơ quan nhà nước mà là người quen đó. Có việc khó tôi cũng giải quyết qua chị ấy.' },
        { q: 'Hiện chị đang làm công việc gì?',
          a: 'Bây giờ tôi tự mở nhà hàng Việt. Từ lúc bắt đầu theo Chương trình cấp phép việc làm đến khi có quốc tịch Hàn Quốc và làm chủ, mất một thời gian rất dài.' },
        { q: 'Chị có dự định gì sắp tới không?',
          a: 'Tôi muốn tiếp tục lo cho nhà hàng thật tốt và sống ổn định ở Hàn Quốc.' },
        { q: 'Chị muốn nói gì với những người đang gặp khó khăn tương tự?',
          a: 'Đừng cố tự mình giải quyết tất cả. Hỏi người mình tin tưởng trước thì nhanh hơn nhiều, mà lòng cũng nhẹ hơn. Tôi đã trụ qua 17 năm như vậy.' }
      ],
      useQuote: 'Nếu có một trang web sắp xếp sẵn những thông tin này bằng tiếng nước mình thì tiện hơn nhiều. Mình có thể tự kiểm tra trước thay vì lần nào cũng phải hỏi người quen.'
    },
    id: {
      intro: 'Lahir tahun 1973, dari Vietnam. Ia datang lewat Sistem Izin Kerja dan telah 17 tahun di Korea, dengan sekali berpindah tempat kerja. Kini ia berkewarganegaraan Korea dan menjalankan restoran Vietnam miliknya sendiri.',
      qa: [
        { q: 'Apa yang awalnya menarik Anda ke Korea?',
          a: 'Saya mulai menyukai Korea saat menonton drama Korea di Vietnam. Semakin saya mengenal negara itu, keinginan untuk pergi dan tinggal di sana semakin besar.' },
        { q: 'Adakah hal yang membuat Anda mantap berangkat?',
          a: 'Seorang kenalan dekat menyarankan saya pergi. Sebelumnya saya hanya menyukai Korea secara samar lewat drama, tetapi setelah saran itu saya bertekad benar-benar berangkat.' },
        { q: 'Pernahkah Anda pindah tempat kerja?',
          a: 'Pernah, sekali saat bekerja dengan visa E-9. Waktu itu membaca dan memahami panduan berbahasa Korea sendirian tidak mudah, rasanya sangat sesak.' },
        { q: 'Bagaimana Anda melewati masa sulit itu?',
          a: 'Karena ada kenalan yang fasih berbahasa Korea di sisi saya. Apa yang harus disiapkan, apa isi dokumennya, kapan batas waktunya — punya orang untuk ditanya lebih dulu setiap kali buntu itu sangat besar artinya.' },
        { q: 'Kalau sekarang ada pertanyaan soal aturan atau prosedur, apa yang Anda lakukan?',
          a: 'Sampai sekarang orang pertama yang saya cari bukan layanan telepon pemerintah, melainkan kenalan itu. Kalau ada kesulitan pun saya selesaikan lewat dia.' },
        { q: 'Sekarang Anda bekerja apa?',
          a: 'Sekarang saya menjalankan restoran Vietnam sendiri. Dari mulai lewat Sistem Izin Kerja sampai memperoleh kewarganegaraan Korea dan menjadi pemilik, butuh waktu yang panjang.' },
        { q: 'Apa rencana Anda ke depan?',
          a: 'Terus mengurus restoran ini dengan baik dan hidup dengan mantap di Korea.' },
        { q: 'Apa pesan Anda bagi yang mengalami kesulitan serupa?',
          a: 'Jangan berusaha menyelesaikan semuanya sendirian. Bertanya pada orang yang Anda percaya jauh lebih cepat, dan hati pun lebih ringan. Begitulah saya bertahan 17 tahun.' }
      ],
      useQuote: 'Akan jauh lebih mudah kalau ada situs yang merangkum ini dalam bahasa sendiri lebih dulu. Kita bisa memeriksa sendiri tanpa harus bertanya setiap kali.'
    },
    km: {
      intro: 'កើតឆ្នាំ 1973 មកពីវៀតណាម។ គាត់បានចូលមកកូរ៉េតាមប្រព័ន្ធអនុញ្ញាតការងារ ហើយរស់នៅទីនេះ 17 ឆ្នាំ ក្នុងរយៈពេលនោះ បានប្តូរកន្លែងធ្វើការម្តង។ ឥឡូវនេះ គាត់បានសញ្ជាតិកូរ៉េ ហើយបើកភោជនីយដ្ឋានម្ហូបវៀតណាមដោយខ្លួនឯង។',
      qa: [
        { q: 'តើអ្វីដែលធ្វើឲ្យអ្នកចាប់អារម្មណ៍លើកូរ៉េ?',
          a: 'ខ្ញុំចាប់ផ្តើមចូលចិត្តប្រទេសកូរ៉េ ពេលមើលរឿងភាគកូរ៉េដែលចាក់ផ្សាយនៅវៀតណាម។ បន្ទាប់មក ពេលស្គាល់រឿងនេះរឿងនោះកាន់តែច្រើន ខ្ញុំកាន់តែចង់ទៅរស់នៅទីនោះដោយខ្លួនឯង នៅថ្ងៃណាមួយ។' },
        { q: 'តើមានហេតុការណ៍សំខាន់អ្វី ដែលធ្វើឲ្យអ្នកសម្រេចចិត្តមកកូរ៉េទេ?',
          a: 'អ្នកស្គាល់គ្នាជិតស្និទ្ធម្នាក់ បានណែនាំឲ្យខ្ញុំទៅកូរ៉េ។ ពីមុនខ្ញុំគ្រាន់តែចូលចិត្តប្រទេសនេះតាមរយៈរឿងភាគ ប៉ុន្តែក្រោយពីឮការណែនាំនោះ ខ្ញុំបានសម្រេចចិត្តយ៉ាងមុតមាំថា ត្រូវទៅមែនទែន។' },
        { q: 'តើអ្នកធ្លាប់ប្តូរកន្លែងធ្វើការទេ?',
          a: 'ចាស ខ្ញុំធ្លាប់ប្តូរម្តង ពេលធ្វើការជា E-9។ ពេលនោះ ការអាន និងយល់សេចក្តីណែនាំជាភាសាកូរ៉េតែម្នាក់ឯង មិនងាយស្រួលទេ ខ្ញុំពិបាកចិត្តណាស់។' },
        { q: 'តើអ្នកឆ្លងកាត់ពេលវេលាដ៏លំបាកនោះ ដោយរបៀបណា?',
          a: 'ដោយសារមានអ្នកស្គាល់គ្នាម្នាក់ ដែលចេះភាសាកូរ៉េច្បាស់ នៅក្បែរខ្ញុំ។ ត្រូវរៀបចំអ្វីខ្លះ ឯកសារសរសេរថាម៉េច ថ្ងៃផុតកំណត់ដល់ពេលណា — រាល់ពេលដែលខ្ញុំងងឹតមុខ ការមានមនុស្សម្នាក់ដែលខ្ញុំអាចសួរមុនគេ ពិតជាជួយខ្ញុំបានច្រើនណាស់។' },
        { q: 'សព្វថ្ងៃ ពេលចង់ដឹងអំពីប្រព័ន្ធ ឬនីតិវិធី តើអ្នកធ្វើយ៉ាងណា?',
          a: 'សព្វថ្ងៃ អ្វីដែលខ្ញុំរកមុនគេ មិនមែនជាលេខទូរស័ព្ទប្រឹក្សារបស់ការិយាល័យរដ្ឋទេ គឺអ្នកស្គាល់គ្នានោះ។ ពេលមានរឿងពិបាក ខ្ញុំក៏តែងតែដោះស្រាយតាមរយៈគាត់ដូចគ្នា។' },
        { q: 'បច្ចុប្បន្ន តើអ្នកកំពុងធ្វើការងារអ្វី?',
          a: 'ឥឡូវនេះ ខ្ញុំបើកភោជនីយដ្ឋានម្ហូបវៀតណាមដោយខ្លួនឯង។ ចាប់ពីចូលមកតាមប្រព័ន្ធអនុញ្ញាតការងារ រហូតដល់បានសញ្ជាតិកូរ៉េ និងក្លាយជាម្ចាស់ហាង ចំណាយពេលយូរណាស់។' },
        { q: 'តើអ្នកមានគម្រោងអ្វីសម្រាប់ពេលអនាគតទេ?',
          a: 'ខ្ញុំចង់បន្តដំណើរការភោជនីយដ្ឋាននេះឲ្យបានល្អ ហើយរស់នៅកូរ៉េដោយស្ថិរភាព។' },
        { q: 'តើអ្នកមានពាក្យអ្វីចង់ផ្តាំផ្ញើ ដល់អ្នកដែលកំពុងជួបការលំបាកស្រដៀងគ្នាទេ?',
          a: 'កុំព្យាយាមដោះស្រាយតែម្នាក់ឯង។ ការសួរមនុស្សដែលអាចទុកចិត្តបានជាមុន លឿនជាងច្រើន ហើយចិត្តក៏ស្រាលដែរ។ ខ្ញុំក៏បានស៊ូទ្រាំរហូតមក 17 ឆ្នាំ ដោយរបៀបនេះដែរ។' }
      ],
      useQuote: 'បើមានគេហទំព័រដែលរៀបចំព័ត៌មានបែបនេះ ជាភាសាកំណើតរបស់ខ្លួនទុកជាមុន ខ្ញុំគិតថាស្រួលជាងច្រើន។ ព្រោះយើងអាចពិនិត្យមើលដោយខ្លួនឯងមុន ដោយមិនចាំបាច់សួរអ្នកស្គាល់គ្នារាល់ដង។'
    },
    ne: {
      intro: 'भियतनामबाट आएकी, 1973 मा जन्मिएकी। रोजगार अनुमति प्रणालीबाट आएर 17 वर्ष बिताइन्, त्यसबीच एक पटक कार्यस्थल सरिन्। अहिले कोरियाको नागरिकता पाएर आफैँ भियतनामी खानाको रेस्टुरेन्ट चलाउँछिन्।',
      qa: [
        { q: 'कोरियाप्रति चासो कसरी जाग्यो?',
          a: 'भियतनाममा देखाइने कोरियाली टेलिसिरियल हेर्दा कोरिया भन्ने देश मन पर्न थाल्यो। अनि यता-उता जान्दै जाँदा, एक दिन आफैँ गएर बसेर हेर्ने इच्छा बढ्दै गयो।' },
        { q: 'कोरिया आउने निर्णय गर्न कुनै खास कारण थियो?',
          a: 'नजिकको चिनजानको मान्छेले कोरिया जान सल्लाह दिनु नै कारण बन्यो। टेलिसिरियल हेरेर मात्र मन पराएको देश थियो, तर त्यो सल्लाह सुनेपछि साँच्चै जानुपर्छ भनेर मन पक्का गरेँ।' },
        { q: 'कहिल्यै कार्यस्थल सर्नुभएको छ?',
          a: 'हो, E-9 मा काम गर्दा एक पटक सरेकी थिएँ। त्यो बेला कोरियाली भाषामा लेखिएको सूचना एक्लै पढेर बुझ्न सजिलो थिएन, धेरै छटपटी भयो।' },
        { q: 'त्यो गाह्रो समय कसरी पार गर्नुभयो?',
          a: 'कोरियाली भाषा राम्रो जान्ने चिनजानको मान्छे साथमा भएकाले। के तयार गर्नुपर्छ, कागजातमा के लेखिएको छ, म्याद कहिलेसम्म हो — अलमल पर्दा पहिले सोध्ने मान्छे हुनु साँच्चै ठूलो बल भयो।' },
        { q: 'अहिले पनि नियम वा प्रक्रियाबारे जान्न मन लाग्दा के गर्नुहुन्छ?',
          a: 'अहिले पनि सबैभन्दा पहिले खोज्ने भनेको सरकारी परामर्श फोन होइन, उहाँ नै हो। गाह्रो पर्दा पनि त्यसैगरी उहाँको सहयोगले समाधान गर्दै आएँ।' },
        { q: 'अहिले के काम गर्दै हुनुहुन्छ?',
          a: 'अहिले आफैँ भियतनामी खानाको रेस्टुरेन्ट चलाइरहेकी छु। रोजगार अनुमति प्रणालीबाट सुरु गरेर कोरियाको नागरिकता पाई साहु बन्नसम्म, धेरै लामो समय लाग्यो।' },
        { q: 'अबको योजना के छ?',
          a: 'अहिलेको रेस्टुरेन्ट राम्ररी चलाउँदै, कोरियामा ढुक्कसँग बस्न चाहन्छु।' },
        { q: 'उस्तै गाह्रो भोगिरहेका मान्छेलाई केही भन्न चाहनुहुन्छ?',
          a: 'एक्लै समाधान गर्न नखोज्नुहोस्। भरोसा गर्न सकिने मान्छेलाई पहिले सोध्दा धेरै छिटो हुन्छ, मन पनि हलुका हुन्छ। म पनि त्यसैगरी 17 वर्ष टिकेँ।' }
      ],
      useQuote: 'यस्तो जानकारी आफ्नै भाषामा पहिल्यै मिलाएर हेर्न सकिने साइट भए धेरै सजिलो हुन्थ्यो जस्तो लाग्छ। हरेक पटक चिनजानलाई नसोधी आफैँ पहिले जाँच्न सकिन्थ्यो।'
    }
  },
  {
    key: 'itv-tilo',
    alias: 'Tilo',
    country: 'ph',
    age: 21,
    field: 'rest',
    date: '2026-08-27',
    photo: 'assets/itv-tilo.jpg',
    photoAlt: '주방에서 일하는 Tilo 님과 인터뷰하는 모습',
    photoAltL: { en: 'Interviewing Tilo while he works in the kitchen', vi: 'Phỏng vấn Tilo khi anh đang làm việc trong bếp', id: 'Mewawancarai Tilo saat bekerja di dapur', km: 'កំពុងសម្ភាសន៍ Tilo ពេលគាត់ធ្វើការក្នុងផ្ទះបាយ', ne: 'भान्सामा काम गर्दै गरेका Tilo सँग अन्तर्वार्ता' },
    ko: {
      intro: '필리핀에서 온 스물한 살. 음식점 주방에서 일하며 한식 조리를 배우고 있습니다. 언젠가 필리핀에서 한식당을 여는 것이 목표입니다.',
      qa: [
        { q: '현재 어떤 일을 하고 계신가요?',
          a: '음식점 주방에서 보조로 일하고 있습니다. 재료를 손질하고 밑준비를 하고, 바쁠 때는 조리도 함께 거듭니다.' },
        { q: '언제 일이 재미있거나 보람 있다고 느끼시나요?',
          a: '처음에는 재료 이름도 몰랐는데, 이제는 무엇을 어떻게 준비해야 하는지 알고 손이 먼저 움직일 때가 있습니다. 그럴 때 늘고 있다는 게 느껴져서 좋습니다.' },
        { q: '한국에 오게 된 계기는 무엇인가요?',
          a: '한국에서 일하면 기술을 배우면서 돈도 모을 수 있다고 들었습니다. 요리에 관심이 있었기 때문에 음식점에서 일할 수 있다는 점이 마음에 들었습니다.' },
        { q: '고용허가제(E-9)로 오셨는데, 오기 전에 제도에 대해 얼마나 알고 계셨나요?',
          a: '일할 수 있다는 것 정도만 알았습니다. 몇 년까지 있을 수 있는지, 회사를 옮길 수 있는지 같은 건 오고 나서야 조금씩 알게 됐습니다.' },
        { q: '사업장을 옮길 수 있다는 건 알고 계셨나요?',
          a: '처음에는 몰랐습니다. 같이 일하는 형들이 이야기해 줘서 알게 됐는데, 횟수나 기한 같은 자세한 건 아직 잘 모릅니다.' },
        { q: '근로계약서 같은 한국어 서류는 어떻게 이해하시나요?',
          a: '휴대폰으로 번역해서 봅니다. 그런데 어려운 말은 번역해도 무슨 뜻인지 모를 때가 많습니다. 그럴 때는 사장님이나 형들에게 물어봅니다.' },
        { q: '임금이나 근로조건이 궁금할 때는 어디에 물어보시나요?',
          a: '먼저 같은 나라에서 온 형들에게 물어봅니다. 어디에 전화하면 되는지도 잘 몰라서, 웬만하면 아는 사람에게 먼저 묻게 됩니다.' },
        { q: '일하면서 가장 어려운 점은 무엇인가요?',
          a: '한국어입니다. 주방에서 쓰는 말은 빠르고 줄임말이 많아서, 처음에는 무엇을 시키는지 알아듣기 어려웠습니다. 지금도 모르는 말이 나오면 그 자리에서 다시 물어봅니다.' },
        { q: '앞으로의 목표는 무엇인가요?',
          a: '여기서 한식 조리를 제대로 배운 뒤, 필리핀으로 돌아가 한식당을 여는 것이 목표입니다. 필리핀에도 한국 음식을 좋아하는 사람이 많습니다.' },
        { q: '한국에 오려는 후배들에게 조언한다면요?',
          a: '한국어를 조금이라도 배우고 오세요. 그리고 모르는 것은 부끄러워하지 말고 물어보세요. 묻지 않고 넘어가면 나중에 더 곤란해집니다.' }
      ],
      useQuote: '이런 걸 내 나라 말로 볼 수 있으면 좋겠다고 늘 생각했습니다.'
    },
    en: {
      intro: 'Twenty-one, from the Philippines. He works in a restaurant kitchen and is learning Korean cooking. One day he wants to open a Korean restaurant back home.',
      qa: [
        { q: 'What work do you do now?',
          a: 'I work as an assistant in a restaurant kitchen. I prepare ingredients and do the prep work, and when it gets busy I help with the cooking too.' },
        { q: 'When does your work feel enjoyable or worthwhile?',
          a: 'At first I did not even know the names of the ingredients. Now there are moments when my hands move before I think, because I know what to prepare and how. That is when I feel I am getting better.' },
        { q: 'What brought you to Korea?',
          a: 'I heard that in Korea you can learn a skill and save money at the same time. I was interested in cooking, so being able to work in a restaurant appealed to me.' },
        { q: 'You came under the Employment Permit System. How much did you know about it before you came?',
          a: 'Only that I could work. How many years I could stay, whether I could move to another workplace — I learned those bit by bit after I arrived.' },
        { q: 'Did you know you were allowed to change workplace?',
          a: 'Not at first. The older guys I work with told me. But the details, like how many times or by when, I still do not really know.' },
        { q: 'How do you handle Korean documents such as your labour contract?',
          a: 'I translate them on my phone. But even translated, difficult words often still make no sense to me. Then I ask the owner or the older workers.' },
        { q: 'Where do you ask when you have a question about pay or working conditions?',
          a: 'I ask the older guys from my country first. I do not really know where to call, so I end up asking someone I know before anything else.' },
        { q: 'What is the hardest part of the work?',
          a: 'Korean. The language used in a kitchen is fast and full of short forms, so at first I could not follow what I was being asked to do. Even now, when a word comes up that I do not know, I ask again right there.' },
        { q: 'What is your goal from here?',
          a: 'To learn Korean cooking properly, then go back to the Philippines and open a Korean restaurant. A lot of people there love Korean food.' },
        { q: 'What would you say to people who are about to come to Korea?',
          a: 'Learn at least a little Korean before you come. And do not be embarrassed to ask about what you do not know. If you let it pass without asking, it causes bigger trouble later.' }
      ],
      useQuote: 'I always wished I could read this kind of thing in my own language.'
    },
    vi: {
      intro: 'Hai mươi mốt tuổi, đến từ Philippines. Anh làm trong bếp một nhà hàng và đang học nấu món Hàn. Mục tiêu là sau này mở một nhà hàng Hàn Quốc ở quê nhà.',
      qa: [
        { q: 'Hiện tại bạn đang làm công việc gì?',
          a: 'Tôi làm phụ bếp trong một nhà hàng. Tôi sơ chế nguyên liệu và chuẩn bị trước, lúc đông khách thì phụ nấu luôn.' },
        { q: 'Khi nào bạn thấy công việc thú vị hoặc đáng làm?',
          a: 'Lúc đầu tôi còn không biết tên nguyên liệu. Bây giờ có những lúc tay tự động làm trước khi kịp nghĩ, vì đã biết phải chuẩn bị cái gì và làm thế nào. Những lúc đó tôi thấy mình đang tiến bộ.' },
        { q: 'Điều gì đưa bạn đến Hàn Quốc?',
          a: 'Tôi nghe nói ở Hàn Quốc vừa học được nghề vừa tích cóp được tiền. Tôi vốn thích nấu ăn nên việc được làm trong nhà hàng rất hợp với tôi.' },
        { q: 'Bạn sang theo Chương trình cấp phép việc làm (E-9). Trước khi sang bạn biết gì về chế độ này?',
          a: 'Tôi chỉ biết là được đi làm thôi. Được ở mấy năm, có được đổi công ty hay không thì sang rồi mới dần dần biết.' },
        { q: 'Bạn có biết mình được phép chuyển nơi làm việc không?',
          a: 'Ban đầu tôi không biết. Mấy anh làm cùng nói cho tôi biết, nhưng chi tiết như được đổi mấy lần hay hạn đến khi nào thì tôi vẫn chưa rõ.' },
        { q: 'Bạn xử lý giấy tờ tiếng Hàn như hợp đồng lao động thế nào?',
          a: 'Tôi dịch bằng điện thoại. Nhưng những từ khó thì dịch xong vẫn không hiểu nghĩa. Lúc đó tôi hỏi chủ quán hoặc các anh.' },
        { q: 'Khi thắc mắc về lương hay điều kiện làm việc, bạn hỏi ở đâu?',
          a: 'Tôi hỏi mấy anh cùng nước trước. Tôi cũng không rõ phải gọi đến đâu, nên thường cứ hỏi người quen trước đã.' },
        { q: 'Điều khó khăn nhất khi làm việc là gì?',
          a: 'Tiếng Hàn. Trong bếp người ta nói nhanh và hay nói tắt, ban đầu tôi không hiểu người ta sai mình làm gì. Giờ gặp từ không biết tôi vẫn hỏi lại ngay tại chỗ.' },
        { q: 'Mục tiêu sắp tới của bạn là gì?',
          a: 'Học nấu món Hàn cho thật thạo, rồi về Philippines mở một nhà hàng Hàn Quốc. Ở đó cũng có rất nhiều người thích món Hàn.' },
        { q: 'Bạn muốn nói gì với những người sắp sang Hàn Quốc?',
          a: 'Hãy học một chút tiếng Hàn trước khi sang. Và đừng ngại hỏi những gì mình chưa biết. Bỏ qua không hỏi thì về sau càng rắc rối hơn.' }
      ],
      useQuote: 'Tôi luôn ước có thể đọc những thông tin như thế này bằng tiếng nước mình.'
    },
    id: {
      intro: 'Dua puluh satu tahun, dari Filipina. Ia bekerja di dapur sebuah restoran dan sedang belajar memasak masakan Korea. Suatu hari ia ingin membuka restoran Korea di kampung halamannya.',
      qa: [
        { q: 'Sekarang Anda bekerja apa?',
          a: 'Saya bekerja sebagai asisten di dapur restoran. Saya menyiapkan bahan dan melakukan persiapan awal, dan saat ramai saya ikut memasak juga.' },
        { q: 'Kapan Anda merasa pekerjaan ini menyenangkan atau berarti?',
          a: 'Awalnya saya bahkan tidak tahu nama bahan-bahannya. Sekarang ada saat tangan saya bergerak lebih dulu sebelum berpikir, karena sudah tahu apa yang harus disiapkan dan bagaimana caranya. Saat itulah saya merasa berkembang.' },
        { q: 'Apa yang membawa Anda ke Korea?',
          a: 'Saya dengar di Korea bisa belajar keterampilan sekaligus menabung. Saya memang tertarik memasak, jadi bisa bekerja di restoran terasa cocok untuk saya.' },
        { q: 'Anda datang lewat Sistem Izin Kerja (E-9). Seberapa banyak Anda tahu tentang sistem itu sebelum berangkat?',
          a: 'Hanya tahu bahwa saya bisa bekerja. Berapa tahun boleh tinggal, boleh pindah perusahaan atau tidak — itu baru saya ketahui sedikit demi sedikit setelah sampai.' },
        { q: 'Apakah Anda tahu boleh pindah tempat kerja?',
          a: 'Awalnya tidak tahu. Kakak-kakak yang bekerja bersama saya yang memberi tahu. Tapi detailnya, seperti berapa kali atau sampai kapan, saya masih belum paham.' },
        { q: 'Bagaimana Anda memahami dokumen berbahasa Korea seperti kontrak kerja?',
          a: 'Saya terjemahkan lewat ponsel. Tapi kata-kata sulit sering tetap tidak saya mengerti walau sudah diterjemahkan. Kalau begitu saya tanya pemilik atau kakak-kakak.' },
        { q: 'Ke mana Anda bertanya kalau ada pertanyaan soal upah atau syarat kerja?',
          a: 'Saya tanya kakak-kakak sesama orang senegara dulu. Saya juga kurang tahu harus menelepon ke mana, jadi biasanya bertanya pada orang yang saya kenal lebih dulu.' },
        { q: 'Apa bagian paling sulit dari pekerjaan ini?',
          a: 'Bahasa Korea. Bahasa di dapur cepat dan banyak singkatan, awalnya saya tidak paham apa yang diminta. Sekarang pun kalau ada kata yang tidak saya tahu, saya langsung bertanya di tempat.' },
        { q: 'Apa tujuan Anda ke depan?',
          a: 'Belajar masakan Korea sampai benar-benar bisa, lalu pulang ke Filipina dan membuka restoran Korea. Di sana juga banyak orang menyukai makanan Korea.' },
        { q: 'Apa pesan Anda untuk yang akan datang ke Korea?',
          a: 'Pelajari sedikit bahasa Korea sebelum berangkat. Dan jangan malu bertanya soal yang belum Anda ketahui. Kalau dibiarkan tanpa bertanya, nanti malah lebih repot.' }
      ],
      useQuote: 'Saya selalu berharap bisa membaca hal seperti ini dalam bahasa saya sendiri.'
    },
    km: {
      intro: 'យុវជនអាយុម្ភៃមួយឆ្នាំ មកពីហ្វីលីពីន។ គាត់ធ្វើការក្នុងផ្ទះបាយភោជនីយដ្ឋាន ហើយកំពុងរៀនធ្វើម្ហូបកូរ៉េ។ គោលដៅរបស់គាត់ គឺបើកភោជនីយដ្ឋានម្ហូបកូរ៉េនៅហ្វីលីពីន នៅថ្ងៃណាមួយ។',
      qa: [
        { q: 'បច្ចុប្បន្ន តើអ្នកកំពុងធ្វើការងារអ្វី?',
          a: 'ខ្ញុំធ្វើការជាជំនួយការក្នុងផ្ទះបាយភោជនីយដ្ឋាន។ ខ្ញុំសម្អាត និងកាត់គ្រឿងផ្សំ រៀបចំទុកជាមុន ហើយពេលរវល់ ខ្ញុំក៏ជួយចម្អិនដែរ។' },
        { q: 'តើពេលណាដែលអ្នកមានអារម្មណ៍ថា ការងារសប្បាយ ឬមានតម្លៃ?',
          a: 'ដំបូងឡើយ ខ្ញុំមិនស្គាល់សូម្បីតែឈ្មោះគ្រឿងផ្សំ ប៉ុន្តែឥឡូវនេះ ខ្ញុំដឹងថាត្រូវរៀបចំអ្វី និងរបៀបណា ហើយពេលខ្លះ ដៃខ្ញុំធ្វើមុនពេលគិតទៀត។ ពេលនោះ ខ្ញុំមានអារម្មណ៍ថាខ្លួនឯងកំពុងរីកចម្រើន ហើយខ្ញុំសប្បាយចិត្ត។' },
        { q: 'តើអ្វីដែលធ្វើឲ្យអ្នកមកកូរ៉េ?',
          a: 'ខ្ញុំឮថា បើធ្វើការនៅកូរ៉េ អាចរៀនជំនាញ ហើយសន្សំលុយបានផង។ ខ្ញុំចាប់អារម្មណ៍លើការធ្វើម្ហូប ដូច្នេះខ្ញុំពេញចិត្ត ដែលអាចធ្វើការនៅភោជនីយដ្ឋានបាន។' },
        { q: 'អ្នកមកតាមប្រព័ន្ធអនុញ្ញាតការងារ (E-9)។ មុនពេលមក តើអ្នកដឹងអំពីប្រព័ន្ធនេះប៉ុណ្ណា?',
          a: 'ខ្ញុំដឹងត្រឹមតែថា អាចធ្វើការបាន។ រឿងដូចជា អាចនៅបានប៉ុន្មានឆ្នាំ ឬអាចប្តូរក្រុមហ៊ុនបានឬអត់ ខ្ញុំទើបតែដឹងបន្តិចម្តងៗ ក្រោយពីមកដល់។' },
        { q: 'តើអ្នកដឹងទេថា អាចប្តូរកន្លែងធ្វើការបាន?',
          a: 'ដំបូងខ្ញុំមិនដឹងទេ។ ខ្ញុំដឹងដោយសារបងៗដែលធ្វើការជាមួយគ្នាប្រាប់ ប៉ុន្តែព័ត៌មានលម្អិត ដូចជាចំនួនដង ឬថ្ងៃផុតកំណត់ ខ្ញុំនៅមិនទាន់ដឹងច្បាស់ទេ។' },
        { q: 'តើអ្នកយល់ឯកសារភាសាកូរ៉េ ដូចជាកិច្ចសន្យាការងារ ដោយរបៀបណា?',
          a: 'ខ្ញុំបកប្រែដោយទូរស័ព្ទដៃ។ ប៉ុន្តែពាក្យពិបាកៗ ទោះបកប្រែហើយ ច្រើនតែនៅមិនយល់ន័យដដែល។ ពេលនោះ ខ្ញុំសួរម្ចាស់ហាង ឬបងៗ។' },
        { q: 'ពេលចង់ដឹងអំពីប្រាក់ឈ្នួល ឬលក្ខខណ្ឌការងារ តើអ្នកសួរនៅឯណា?',
          a: 'ខ្ញុំសួរបងៗដែលមកពីប្រទេសជាមួយគ្នាមុនគេ។ ខ្ញុំមិនសូវដឹងថាត្រូវទូរស័ព្ទទៅណាផង ដូច្នេះភាគច្រើន ខ្ញុំសួរអ្នកដែលខ្ញុំស្គាល់មុន។' },
        { q: 'ក្នុងការងារ តើអ្វីដែលពិបាកបំផុត?',
          a: 'ភាសាកូរ៉េ។ ពាក្យដែលប្រើក្នុងផ្ទះបាយលឿន ហើយមានពាក្យកាត់ច្រើន ដូច្នេះដំបូង ពិបាកស្តាប់យល់ថាគេប្រាប់ឲ្យធ្វើអ្វី។ សព្វថ្ងៃ បើឮពាក្យដែលមិនយល់ ខ្ញុំសួរម្តងទៀតភ្លាមៗ នៅនឹងកន្លែង។' },
        { q: 'តើគោលដៅរបស់អ្នកនៅពេលអនាគតជាអ្វី?',
          a: 'គោលដៅរបស់ខ្ញុំ គឺរៀនធ្វើម្ហូបកូរ៉េនៅទីនេះឲ្យបានច្បាស់ រួចត្រឡប់ទៅហ្វីលីពីនវិញ ដើម្បីបើកភោជនីយដ្ឋានម្ហូបកូរ៉េ។ នៅហ្វីលីពីន ក៏មានមនុស្សច្រើនចូលចិត្តម្ហូបកូរ៉េដែរ។' },
        { q: 'បើផ្តល់ដំបូន្មានដល់ប្អូនៗដែលចង់មកកូរ៉េ តើអ្នកនឹងនិយាយអ្វី?',
          a: 'សូមរៀនភាសាកូរ៉េបន្តិចបន្តួច មុននឹងមក។ ហើយអ្វីដែលមិនដឹង កុំខ្មាស់ សូមសួរ។ បើមិនសួរ ហើយរំលងចោល ក្រោយមកនឹងកាន់តែពិបាក។' }
      ],
      useQuote: 'ខ្ញុំតែងតែគិតថា បើអាចមើលរឿងទាំងនេះជាភាសាកំណើតរបស់ខ្ញុំបាន នោះល្អណាស់។'
    },
    ne: {
      intro: 'फिलिपिन्सबाट आएका 21 वर्षका युवा। रेस्टुरेन्टको भान्सामा काम गर्दै कोरियाली खाना पकाउन सिकिरहेका छन्। एक दिन फिलिपिन्समा कोरियाली रेस्टुरेन्ट खोल्ने उनको लक्ष्य हो।',
      qa: [
        { q: 'अहिले के काम गर्दै हुनुहुन्छ?',
          a: 'रेस्टुरेन्टको भान्सामा सहायक भएर काम गर्छु। सामग्री काटकुट गर्छु, पहिलेको तयारी गर्छु, र व्यस्त बेला पकाउन पनि सघाउँछु।' },
        { q: 'कहिले काममा रमाइलो वा सन्तोष लाग्छ?',
          a: 'सुरुमा सामग्रीको नाम पनि जान्दिनथेँ, तर अहिले के कसरी तयार गर्ने थाहा भएर हात आफैँ चल्ने बेला हुन्छ। त्यस्तो बेला सिक्दै गएको महसुस हुन्छ, अनि खुसी लाग्छ।' },
        { q: 'कोरिया आउने कारण के थियो?',
          a: 'कोरियामा काम गर्दा सीप सिक्दै पैसा पनि जम्मा गर्न सकिन्छ भन्ने सुनेँ। खाना पकाउनमा रुचि भएकाले रेस्टुरेन्टमा काम गर्न पाइने कुरा मन पर्यो।' },
        { q: 'रोजगार अनुमति प्रणाली (E-9) बाट आउनुभयो, आउनुअघि यो प्रणालीबारे कति थाहा थियो?',
          a: 'काम गर्न पाइन्छ भन्ने मात्र थाहा थियो। कति वर्षसम्म बस्न पाइन्छ, कम्पनी बदल्न पाइन्छ कि पाइँदैन जस्ता कुरा यहाँ आएपछि मात्र बिस्तारै थाहा पाएँ।' },
        { q: 'कार्यस्थल सर्न पाइन्छ भन्ने थाहा थियो?',
          a: 'सुरुमा थाहा थिएन। सँगै काम गर्ने दाइहरूले भनेपछि थाहा पाएँ, तर कति पटक, कहिलेसम्म जस्ता विस्तृत कुरा अझै राम्ररी थाहा छैन।' },
        { q: 'श्रम सम्झौताजस्ता कोरियाली कागजात कसरी बुझ्नुहुन्छ?',
          a: 'मोबाइलमा अनुवाद गरेर हेर्छु। तर गाह्रो शब्द अनुवाद गर्दा पनि के अर्थ हो थाहा नहुने बेला धेरै हुन्छ। त्यस्तो बेला साहु वा दाइहरूलाई सोध्छु।' },
        { q: 'तलब वा कामका सर्तबारे जान्न मन लाग्दा कहाँ सोध्नुहुन्छ?',
          a: 'पहिले आफ्नै देशबाट आएका दाइहरूलाई सोध्छु। कहाँ फोन गर्ने भन्ने पनि राम्ररी थाहा नभएकाले, प्रायः चिनेको मान्छेलाई नै पहिले सोध्ने गर्छु।' },
        { q: 'काम गर्दा सबैभन्दा गाह्रो कुरा के हो?',
          a: 'कोरियाली भाषा। भान्सामा बोलिने भाषा छिटो हुन्छ र छोटकरी शब्द धेरै हुन्छन्, त्यसैले सुरुमा के गर्न लगाएको हो बुझ्न गाह्रो भयो। अहिले पनि नबुझेको शब्द आयो भने त्यहीँ फेरि सोध्छु।' },
        { q: 'अबको लक्ष्य के हो?',
          a: 'यहाँ कोरियाली खाना राम्ररी पकाउन सिकेपछि फिलिपिन्स फर्केर कोरियाली रेस्टुरेन्ट खोल्ने मेरो लक्ष्य हो। फिलिपिन्समा पनि कोरियाली खाना मन पराउने मान्छे धेरै छन्।' },
        { q: 'कोरिया आउन लागेका भाइबहिनीलाई के सल्लाह दिनुहुन्छ?',
          a: 'थोरै भए पनि कोरियाली भाषा सिकेर आउनुहोस्। अनि थाहा नभएको कुरा लाज नमानी सोध्नुहोस्। नसोधी छोडिदिए पछि झन् गाह्रो हुन्छ।' }
      ],
      useQuote: 'यस्ता कुरा आफ्नै भाषामा हेर्न पाए हुन्थ्यो भनेर सधैँ सोच्थेँ।'
    }
  }
,
{
    key: 'itv-owner',
    alias: '베트남 음식점 사장 (익명)',
    country: 'vi',
    years: 16,
    field: 'rest',
    date: '2026-08-27',
    photo: 'assets/itv-owner.jpg',
    photoAlt: '가게에서 인터뷰를 마치고 함께 앉은 모습',
    aliasL: { en: 'Vietnamese restaurant owner (anonymous)', vi: 'Chủ quán ăn Việt Nam (ẩn danh)', id: 'Pemilik restoran Vietnam (anonim)', km: 'ម្ចាស់ភោជនីយដ្ឋានវៀតណាម (អនាមិក)', ne: 'भियतनामी रेस्टुरेन्टका मालिक (नाम नखुलाइएको)' },
    photoAltL: { en: 'Sitting together at the shop after the interview', vi: 'Ngồi cùng nhau tại quán sau buổi phỏng vấn', id: 'Duduk bersama di toko setelah wawancara', km: 'អង្គុយជាមួយគ្នានៅហាងបន្ទាប់ពីបទសម្ភាសន៍', ne: 'अन्तर्वार्तापछि पसलमा सँगै बसेको' },
    ko: {
      intro: '2010년에 한국에 오셨습니다. 자녀를 공부시키려고 오셨고, 지금은 베트남 음식점을 운영하며 일한 지 5년째입니다.',
      qa: [
        { q: '한국에 오신 지 얼마나 되셨나요?',
          a: '2010년에 왔습니다.' },
        { q: '왜 한국을 선택하셨나요?',
          a: '아이들을 공부시키려고 왔습니다.' },
        { q: '지금 어떤 일을 하고 계신가요?',
          a: '베트남 음식점을 하고 있습니다. 일한 지는 5년째 되었습니다.' },
        { q: '제도나 근로 문제가 생기면 보통 어디에 물어보시나요?',
          a: '한국말이 힘들어서, 한국말을 잘하시는 분이 도와주십니다. 그런데 그런 도움을 못 받는 사람이 많습니다. 해결 방법을 찾는 것 자체가 어렵습니다.' },
        { q: '고용센터나 다문화가족센터에 전화해 보신 적은요?',
          a: '전화를 하면 사람이 아니라 AI가 받습니다. 질문을 해도 잘 해결이 안 되고, 설명이 무슨 말인지 이해가 안 됩니다. 그래서 전화를 잘 안 하게 됩니다. 사람이 직접 필요합니다.' },
        { q: '주변에서 도움을 못 받는 경우도 보셨나요?',
          a: '허가 없이 들어온 사람들은 문제가 생겨도 조용히 일해야 해서 도움을 받기 어렵습니다. 임금을 못 받아 경찰을 부르면 돈은 받지만, 본국으로 돌아가야 합니다.' },
        { q: '서류를 보다가 몰라서 곤란하셨던 적이 있나요?',
          a: '모를 때가 많습니다.' },
        { q: '저희 서비스를 보시니 어떠세요?',
          a: '좋습니다. 다만 더 많은 사람이 알게 하려면 전단지로 알리는 것이 필요할 것 같습니다.' }
      ],
      useQuote: '전화하면 AI가 받는데 무슨 말인지 이해가 안 됩니다. 이런 건 글로 내 언어로 볼 수 있으면 좋겠습니다.'
    },
    en: {
      intro: 'She came to Korea in 2010 so that her children could study. She now runs a Vietnamese restaurant and is in her fifth year of work.',
      qa: [
        { q: 'How long have you been in Korea?',
          a: 'I came in 2010.' },
        { q: 'Why did you choose Korea?',
          a: 'I came so that my children could study.' },
        { q: 'What work do you do now?',
          a: 'I run a Vietnamese restaurant. I have been working for five years now.' },
        { q: 'When a problem comes up with the rules or with work, where do you usually ask?',
          a: 'Korean is hard for me, so someone who speaks it well helps me. But many people do not have that kind of help. Finding a way to solve things is itself difficult.' },
        { q: 'Have you tried calling the Employment Center or a multicultural family centre?',
          a: 'When you call, an AI answers instead of a person. Even when you ask, it does not really get resolved, and I cannot understand the explanation. So I end up not calling. A real person is needed.' },
        { q: 'Have you seen people around you who cannot get help?',
          a: 'People who came without permission have to keep working quietly even when something goes wrong, so it is hard for them to get help. If wages go unpaid and the police are called, they get the money but have to return to their country.' },
        { q: 'Have you been stuck on documents you did not understand?',
          a: 'There are many times I do not understand.' },
        { q: 'What do you think of our service?',
          a: 'It is good. But to let more people know about it, I think leaflets would be needed.' }
      ],
      useQuote: 'When I call, an AI answers and I cannot understand it. I wish I could read this kind of thing in my own language instead.'
    },
    vi: {
      intro: 'Chị sang Hàn Quốc năm 2010 để lo cho các con ăn học. Hiện chị mở nhà hàng Việt và đã làm được năm năm.',
      qa: [
        { q: 'Chị sang Hàn Quốc được bao lâu rồi?',
          a: 'Tôi sang năm 2010.' },
        { q: 'Vì sao chị chọn Hàn Quốc?',
          a: 'Tôi sang để lo cho các con được ăn học.' },
        { q: 'Hiện chị đang làm công việc gì?',
          a: 'Tôi mở nhà hàng Việt. Làm được năm năm rồi.' },
        { q: 'Khi có vấn đề về chế độ hay công việc, chị thường hỏi ở đâu?',
          a: 'Tiếng Hàn khó với tôi nên có người giỏi tiếng Hàn giúp. Nhưng nhiều người không có được sự giúp đỡ như vậy. Ngay cả việc tìm cách giải quyết cũng đã khó.' },
        { q: 'Chị từng gọi đến Trung tâm việc làm hay trung tâm gia đình đa văn hóa chưa?',
          a: 'Gọi đến thì không phải người mà là AI nghe máy. Hỏi cũng không giải quyết được, mà lời giải thích thì tôi không hiểu. Nên rốt cuộc tôi ít gọi. Cần có người thật.' },
        { q: 'Chị có thấy những người xung quanh không nhận được giúp đỡ không?',
          a: 'Những người sang không có phép thì dù gặp chuyện cũng phải làm lặng lẽ nên khó nhận giúp đỡ. Bị nợ lương mà gọi công an thì lấy được tiền nhưng phải về nước.' },
        { q: 'Chị từng lúng túng vì không hiểu giấy tờ chưa?',
          a: 'Nhiều lúc không hiểu lắm.' },
        { q: 'Chị thấy dịch vụ của chúng tôi thế nào?',
          a: 'Tốt. Nhưng để nhiều người biết đến thì chắc cần phát tờ rơi.' }
      ],
      useQuote: 'Gọi điện thì AI nghe máy mà tôi không hiểu gì. Những thứ như thế này đọc bằng tiếng nước mình thì tốt hơn.'
    },
    id: {
      intro: 'Ia datang ke Korea pada 2010 agar anak-anaknya bisa bersekolah. Kini ia menjalankan rumah makan Vietnam dan sudah lima tahun bekerja.',
      qa: [
        { q: 'Sudah berapa lama Anda di Korea?',
          a: 'Saya datang tahun 2010.' },
        { q: 'Mengapa memilih Korea?',
          a: 'Saya datang agar anak-anak saya bisa bersekolah.' },
        { q: 'Sekarang Anda bekerja apa?',
          a: 'Saya menjalankan rumah makan Vietnam. Sudah lima tahun bekerja.' },
        { q: 'Kalau ada masalah soal aturan atau pekerjaan, biasanya bertanya ke mana?',
          a: 'Bahasa Korea sulit bagi saya, jadi ada orang yang fasih membantu. Tapi banyak orang tidak punya bantuan seperti itu. Mencari cara menyelesaikannya saja sudah sulit.' },
        { q: 'Pernah menelepon Pusat Ketenagakerjaan atau pusat keluarga multikultural?',
          a: 'Kalau menelepon, yang menjawab bukan orang melainkan AI. Sudah bertanya pun tidak terselesaikan, dan penjelasannya tidak saya mengerti. Akhirnya saya jarang menelepon. Perlu orang sungguhan.' },
        { q: 'Apakah Anda melihat orang di sekitar yang tidak bisa mendapat bantuan?',
          a: 'Orang yang datang tanpa izin harus tetap bekerja diam-diam meski ada masalah, jadi sulit mendapat bantuan. Kalau upah tidak dibayar lalu polisi dipanggil, uangnya didapat tapi harus pulang ke negaranya.' },
        { q: 'Pernah bingung karena tidak paham dokumen?',
          a: 'Sering tidak paham.' },
        { q: 'Bagaimana pendapat Anda tentang layanan kami?',
          a: 'Bagus. Tapi supaya lebih banyak orang tahu, sepertinya perlu dibagikan selebaran.' }
      ],
      useQuote: 'Kalau menelepon, AI yang menjawab dan saya tidak mengerti. Hal seperti ini lebih baik bisa dibaca dalam bahasa sendiri.'
    },
    km: {
      intro: 'គាត់បានមកកូរ៉េនៅឆ្នាំ 2010។ គាត់មកដើម្បីឲ្យកូនៗបានរៀនសូត្រ ហើយឥឡូវនេះ គាត់បើកភោជនីយដ្ឋានម្ហូបវៀតណាម ធ្វើការបានឆ្នាំទី 5 ហើយ។',
      qa: [
        { q: 'តើអ្នកមកកូរ៉េបានប៉ុន្មានឆ្នាំហើយ?',
          a: 'ខ្ញុំមកនៅឆ្នាំ 2010។' },
        { q: 'ហេតុអ្វីបានជាអ្នកជ្រើសរើសកូរ៉េ?',
          a: 'ខ្ញុំមកដើម្បីឲ្យកូនៗបានរៀនសូត្រ។' },
        { q: 'បច្ចុប្បន្ន តើអ្នកកំពុងធ្វើការងារអ្វី?',
          a: 'ខ្ញុំបើកភោជនីយដ្ឋានម្ហូបវៀតណាម។ ធ្វើការបានឆ្នាំទី 5 ហើយ។' },
        { q: 'ពេលមានបញ្ហាអំពីប្រព័ន្ធ ឬការងារ ជាធម្មតាអ្នកសួរនៅឯណា?',
          a: 'ភាសាកូរ៉េពិបាកសម្រាប់ខ្ញុំ ដូច្នេះមានអ្នកដែលចេះភាសាកូរ៉េច្បាស់ ជួយខ្ញុំ។ ប៉ុន្តែមានមនុស្សច្រើន ដែលមិនបានទទួលជំនួយបែបនេះទេ។ សូម្បីតែការរកវិធីដោះស្រាយ ក៏ពិបាកដែរ។' },
        { q: 'តើអ្នកធ្លាប់ទូរស័ព្ទទៅមជ្ឈមណ្ឌលការងារ ឬមជ្ឈមណ្ឌលគ្រួសារពហុវប្បធម៌ទេ?',
          a: 'ពេលទូរស័ព្ទទៅ មិនមែនមនុស្សទេដែលលើកទូរស័ព្ទ គឺ AI។ ទោះសួរក៏មិនសូវបានដោះស្រាយ ហើយការពន្យល់ ក៏ខ្ញុំមិនយល់ថាចង់និយាយអ្វីដែរ។ ដូច្នេះខ្ញុំមិនសូវទូរស័ព្ទទេ។ យើងត្រូវការមនុស្សពិតៗផ្ទាល់។' },
        { q: 'តើអ្នកធ្លាប់ឃើញអ្នកនៅជុំវិញខ្លួន ដែលមិនបានទទួលជំនួយទេ?',
          a: 'អ្នកដែលចូលមកដោយគ្មានការអនុញ្ញាត ទោះមានបញ្ហា ក៏ត្រូវធ្វើការស្ងាត់ៗ ដូច្នេះពិបាកទទួលបានជំនួយ។ បើមិនបានប្រាក់ឈ្នួល ហើយហៅប៉ូលិស គេបានប្រាក់មែន ប៉ុន្តែត្រូវត្រឡប់ទៅប្រទេសកំណើតវិញ។' },
        { q: 'តើអ្នកធ្លាប់មានបញ្ហា ព្រោះមើលឯកសារមិនយល់ទេ?',
          a: 'ច្រើនដងដែលខ្ញុំមិនយល់។' },
        { q: 'ពេលឃើញសេវារបស់យើង តើអ្នកគិតយ៉ាងណា?',
          a: 'ល្អណាស់។ ប៉ុន្តែដើម្បីឲ្យមនុស្សកាន់តែច្រើនដឹង ខ្ញុំគិតថាត្រូវការចែកខិត្តប័ណ្ណផ្សព្វផ្សាយ។' }
      ],
      useQuote: 'ពេលទូរស័ព្ទទៅ AI ជាអ្នកលើក ហើយខ្ញុំមិនយល់ថាវានិយាយអ្វីទេ។ រឿងបែបនេះ បើអាចអានជាអក្សរ ជាភាសារបស់ខ្ញុំ នោះល្អណាស់។'
    },
    ne: {
      intro: '2010 मा कोरिया आउनुभएको। छोराछोरीलाई पढाउन आउनुभएको हो, र अहिले भियतनामी खानाको रेस्टुरेन्ट चलाउँदै काम गरेको 5 वर्ष भयो।',
      qa: [
        { q: 'कोरिया आउनुभएको कति भयो?',
          a: '2010 मा आएँ।' },
        { q: 'किन कोरिया रोज्नुभयो?',
          a: 'छोराछोरीलाई पढाउन आएँ।' },
        { q: 'अहिले के काम गर्दै हुनुहुन्छ?',
          a: 'भियतनामी खानाको रेस्टुरेन्ट चलाउँछु। काम गरेको 5 वर्ष भयो।' },
        { q: 'नियम वा कामसम्बन्धी समस्या आयो भने प्रायः कहाँ सोध्नुहुन्छ?',
          a: 'कोरियाली भाषा गाह्रो भएकाले, कोरियाली राम्रो बोल्ने एक जना मान्छेले मद्दत गर्नुहुन्छ। तर त्यस्तो मद्दत नपाउने मान्छे धेरै छन्। समाधानको बाटो खोज्नु नै गाह्रो छ।' },
        { q: 'रोजगार केन्द्र वा बहुसांस्कृतिक परिवार केन्द्रमा फोन गरेर हेर्नुभएको छ?',
          a: 'फोन गर्दा मान्छेले होइन, AI ले उठाउँछ। प्रश्न सोधे पनि राम्ररी समाधान हुँदैन, र बताएको कुरा के हो बुझ्दिनँ। त्यसैले फोन गर्न छोडेँ। सिधै मान्छे चाहिन्छ।' },
        { q: 'वरपर मद्दत नपाएको अवस्था पनि देख्नुभयो?',
          a: 'अनुमति बिना आएका मान्छेले समस्या आए पनि चुपचाप काम गर्नुपर्छ, त्यसैले मद्दत पाउन गाह्रो हुन्छ। तलब नपाएर प्रहरी बोलाए पैसा त पाइन्छ, तर आफ्नो देश फर्कनुपर्छ।' },
        { q: 'कागजात हेर्दा नबुझेर अप्ठ्यारो परेको बेला छ?',
          a: 'नबुझ्ने बेला धेरै हुन्छ।' },
        { q: 'हाम्रो सेवा हेर्दा कस्तो लाग्यो?',
          a: 'राम्रो छ। तर धेरै मान्छेलाई थाहा दिन पर्चा बाँडेर प्रचार गर्नु जरुरी होला जस्तो लाग्छ।' }
      ],
      useQuote: 'फोन गर्दा AI ले उठाउँछ, के भनेको हो बुझ्दिनँ। यस्ता कुरा आफ्नै भाषामा लेखेर हेर्न पाए हुन्थ्यो।'
    }
  },
  {
    key: 'itv-boss',
    alias: '음식점 사장 (익명)',
    field: 'rest',
    date: '2026-08-27',
    photo: 'assets/itv-boss.jpg',
    photoAlt: '가게에서 화면을 함께 보며 인터뷰하는 모습',
    aliasL: { en: 'Restaurant owner (anonymous)', vi: 'Chủ quán ăn (ẩn danh)', id: 'Pemilik restoran (anonim)', km: 'ម្ចាស់ភោជនីយដ្ឋាន (អនាមិក)', ne: 'रेस्टुरेन्टका मालिक (नाम नखुलाइएको)' },
    photoAltL: { en: 'Looking at the screen together during the interview at the shop', vi: 'Cùng xem màn hình trong buổi phỏng vấn tại quán', id: 'Melihat layar bersama saat wawancara di toko', km: 'មើលអេក្រង់ជាមួយគ្នាពេលសម្ភាសន៍នៅហាង', ne: 'पसलमा अन्तर्वार्ताको क्रममा सँगै स्क्रिन हेर्दै' },
    ko: {
      intro: '음식점을 운영하며 아내와 함께 장사합니다. 외국인 근로자를 곁에서 지켜본 자리에서, 계약과 서류 문제를 자주 본다고 하셨습니다.',
      qa: [
        { q: '현재 어떤 일을 하고 계신가요?',
          a: '음식점을 하고 있습니다. 아내와 둘이서 함께 가게를 꾸려 갑니다.' },
        { q: '한국에서 일하면서 계약 문제로 곤란했던 적이 있나요?',
          a: '계약이 끝날 때가 가장 조심스럽습니다. 기간이 끝난 뒤에 연장을 해준다고 했다가 갑자기 안 된다고 하면, 그때부터 준비할 시간이 거의 없습니다.' },
        { q: '그런 일이 생기면 어디에 물어보시나요?',
          a: '한국어를 잘하는 사람에게 먼저 물어봅니다. 어디에 전화해야 하는지, 무엇을 준비해야 하는지 혼자서는 알기 어렵습니다.' },
        { q: '한국어로 된 서류를 볼 때는 어떠신가요?',
          a: '계약서나 안내문에 모르는 말이 많습니다. 대충 알겠다 싶어도, 정확히 무슨 뜻인지 확신이 안 서면 그냥 넘어가게 됩니다.' },
        { q: '사업장을 옮기는 제도에 대해서는 알고 계셨나요?',
          a: '있다는 건 들었지만 자세히는 모릅니다. 몇 번까지 되는지, 언제까지 신청해야 하는지 같은 건 물어봐야 알 수 있습니다.' },
        { q: '이런 정보를 미리 볼 수 있다면 어떨 것 같으세요?',
          a: '도움이 될 것 같습니다. 문제가 생긴 다음에 찾는 것보다, 미리 알고 있으면 마음이 놓입니다.' }
      ],
      useQuote: '계약이 끝날 때가 가장 불안합니다. 미리 알 수 있으면 좋겠습니다.'
    },
    en: {
      intro: 'He runs a restaurant together with his wife. From that vantage point he sees contract and paperwork problems among foreign workers often.',
      qa: [
        { q: 'What work do you do now?',
          a: 'I run a restaurant. My wife and I keep the place going between the two of us.' },
        { q: 'Have you had trouble over a contract while working in Korea?',
          a: 'The end of a contract is the most delicate time. If you are told the term will be extended and then suddenly it is not, you are left with almost no time to prepare.' },
        { q: 'When that happens, where do you ask?',
          a: 'I ask someone who speaks Korean well first. Which number to call, what to prepare — it is hard to work that out alone.' },
        { q: 'How is it when you have to read Korean documents?',
          a: 'There are many words I do not know in contracts and notices. Even when I roughly get it, if I am not sure of the exact meaning I tend to just let it pass.' },
        { q: 'Did you know about the workplace change system?',
          a: 'I had heard it exists, but not the details. How many times it is allowed, by when you have to apply — I have to ask someone to find out.' },
        { q: 'How would it be if you could check this kind of information in advance?',
          a: 'It would help. Knowing beforehand puts your mind at ease, rather than looking it up after something has already gone wrong.' }
      ],
      useQuote: 'The end of a contract is when I feel most uneasy. It would be good to know in advance.'
    },
    vi: {
      intro: 'Anh điều hành một nhà hàng cùng vợ. Ở vị trí đó, anh thường thấy những rắc rối về hợp đồng và giấy tờ của người lao động nước ngoài.',
      qa: [
        { q: 'Hiện tại anh đang làm công việc gì?',
          a: 'Tôi mở nhà hàng. Hai vợ chồng tôi cùng nhau lo liệu quán.' },
        { q: 'Anh từng gặp rắc rối về hợp đồng khi làm việc ở Hàn Quốc chưa?',
          a: 'Lúc hợp đồng sắp hết là lúc phải cẩn thận nhất. Nếu được hứa gia hạn rồi đột nhiên bảo không được, thì gần như không còn thời gian để chuẩn bị.' },
        { q: 'Khi xảy ra chuyện đó anh hỏi ở đâu?',
          a: 'Tôi hỏi người giỏi tiếng Hàn trước. Phải gọi đến đâu, cần chuẩn bị gì, một mình rất khó biết.' },
        { q: 'Khi phải đọc giấy tờ tiếng Hàn thì thế nào?',
          a: 'Trong hợp đồng và thông báo có nhiều từ tôi không biết. Dù hiểu đại khái, nếu không chắc nghĩa chính xác thì tôi hay bỏ qua luôn.' },
        { q: 'Anh có biết về chế độ chuyển nơi làm việc không?',
          a: 'Tôi nghe nói là có, nhưng không rõ chi tiết. Được mấy lần, phải nộp trước khi nào — phải hỏi mới biết.' },
        { q: 'Nếu xem trước được những thông tin này thì sao?',
          a: 'Chắc sẽ giúp ích. Biết trước thì yên tâm hơn là đợi có chuyện rồi mới đi tìm.' }
      ],
      useQuote: 'Lúc hợp đồng sắp hết là lúc tôi bất an nhất. Biết trước được thì tốt.'
    },
    id: {
      intro: 'Ia menjalankan rumah makan bersama istrinya. Dari posisi itu ia sering melihat masalah kontrak dan dokumen yang dialami pekerja asing.',
      qa: [
        { q: 'Sekarang Anda bekerja apa?',
          a: 'Saya menjalankan rumah makan. Saya dan istri berdua mengurus tempat ini.' },
        { q: 'Pernahkah Anda kesulitan soal kontrak selama bekerja di Korea?',
          a: 'Menjelang kontrak berakhir adalah masa paling rawan. Kalau dijanjikan diperpanjang lalu tiba-tiba dibatalkan, hampir tidak ada waktu untuk bersiap.' },
        { q: 'Kalau itu terjadi, ke mana Anda bertanya?',
          a: 'Saya tanya orang yang fasih berbahasa Korea dulu. Harus menelepon ke mana, harus menyiapkan apa — sendirian sulit tahu.' },
        { q: 'Bagaimana rasanya membaca dokumen berbahasa Korea?',
          a: 'Banyak kata yang tidak saya tahu dalam kontrak dan surat pemberitahuan. Meski kira-kira paham, kalau tidak yakin arti persisnya saya cenderung membiarkannya.' },
        { q: 'Apakah Anda tahu tentang sistem pindah tempat kerja?',
          a: 'Saya dengar ada, tapi detailnya tidak tahu. Boleh berapa kali, harus mengajukan sampai kapan — harus bertanya dulu baru tahu.' },
        { q: 'Bagaimana kalau informasi seperti ini bisa dilihat lebih dulu?',
          a: 'Pasti membantu. Tahu lebih dulu membuat tenang, daripada mencari setelah masalah terlanjur terjadi.' }
      ],
      useQuote: 'Menjelang kontrak berakhir adalah saat saya paling cemas. Kalau bisa tahu lebih dulu tentu bagus.'
    },
    km: {
      intro: 'គាត់បើកភោជនីយដ្ឋាន ហើយរកស៊ីជាមួយប្រពន្ធ។ គាត់និយាយថា ដោយសារបានមើលឃើញកម្មករបរទេសពីជិត គាត់តែងតែឃើញបញ្ហាទាក់ទងនឹងកិច្ចសន្យា និងឯកសារ។',
      qa: [
        { q: 'បច្ចុប្បន្ន តើអ្នកកំពុងធ្វើការងារអ្វី?',
          a: 'ខ្ញុំបើកភោជនីយដ្ឋាន។ ខ្ញុំ និងប្រពន្ធ គ្រប់គ្រងហាងជាមួយគ្នាពីរនាក់។' },
        { q: 'ពេលធ្វើការនៅកូរ៉េ តើអ្នកធ្លាប់មានបញ្ហាទាក់ទងនឹងកិច្ចសន្យាទេ?',
          a: 'ពេលកិច្ចសន្យាជិតចប់ គឺជាពេលដែលត្រូវប្រុងប្រយ័ត្នបំផុត។ បើគេប្រាប់ថានឹងបន្តកិច្ចសន្យាឲ្យ ក្រោយផុតកំណត់ ហើយស្រាប់តែប្រាប់ថាមិនបាន នោះស្ទើរតែគ្មានពេលរៀបចំខ្លួនទាល់តែសោះ។' },
        { q: 'ពេលមានរឿងបែបនេះ តើអ្នកសួរនៅឯណា?',
          a: 'ខ្ញុំសួរអ្នកដែលចេះភាសាកូរ៉េច្បាស់មុនគេ។ ត្រូវទូរស័ព្ទទៅណា ត្រូវរៀបចំអ្វីខ្លះ គឺពិបាកដឹងតែម្នាក់ឯង។' },
        { q: 'ពេលមើលឯកសារជាភាសាកូរ៉េ តើយ៉ាងណាដែរ?',
          a: 'ក្នុងកិច្ចសន្យា ឬសេចក្តីជូនដំណឹង មានពាក្យច្រើនដែលខ្ញុំមិនយល់។ ទោះគិតថាយល់សង្ខេបៗក៏ដោយ បើមិនប្រាកដថាមានន័យយ៉ាងណាពិតប្រាកដ ខ្ញុំក៏រំលងចោលតែម្តង។' },
        { q: 'តើអ្នកដឹងអំពីប្រព័ន្ធប្តូរកន្លែងធ្វើការទេ?',
          a: 'ខ្ញុំធ្លាប់ឮថាមាន ប៉ុន្តែមិនដឹងលម្អិតទេ។ រឿងដូចជា អាចប្តូរបានប៉ុន្មានដង ឬត្រូវដាក់ពាក្យត្រឹមពេលណា ត្រូវតែសួរទើបដឹង។' },
        { q: 'បើអាចមើលព័ត៌មានបែបនេះជាមុនបាន តើអ្នកគិតយ៉ាងណា?',
          a: 'ខ្ញុំគិតថាវានឹងជួយបាន។ ជាជាងរកមើលក្រោយពេលមានបញ្ហា បើដឹងជាមុន ចិត្តនឹងស្ងប់ជាង។' }
      ],
      useQuote: 'ពេលកិច្ចសន្យាជិតចប់ គឺជាពេលដែលខ្ញុំព្រួយបារម្ភបំផុត។ បើអាចដឹងជាមុន នោះល្អណាស់។'
    },
    ne: {
      intro: 'श्रीमतीसँग मिलेर रेस्टुरेन्ट चलाउनुहुन्छ। विदेशी कामदारलाई नजिकबाट हेर्दा सम्झौता र कागजातका समस्या धेरै देख्ने गरेको बताउनुभयो।',
      qa: [
        { q: 'अहिले के काम गर्दै हुनुहुन्छ?',
          a: 'रेस्टुरेन्ट चलाउँछु। श्रीमती र म दुई जना मिलेर पसल चलाउँछौँ।' },
        { q: 'कोरियामा काम गर्दा सम्झौताका कारण अप्ठ्यारो परेको बेला छ?',
          a: 'सम्झौता सकिने बेला सबैभन्दा होसियार हुनुपर्छ। म्याद थपिदिन्छु भनेको, अवधि सकिएपछि अचानक हुँदैन भन्यो भने, त्यसपछि तयारी गर्ने समय नै हुँदैन।' },
        { q: 'त्यस्तो भयो भने कहाँ सोध्नुहुन्छ?',
          a: 'कोरियाली भाषा राम्रो जान्ने मान्छेलाई पहिले सोध्छु। कहाँ फोन गर्ने, के तयार गर्ने भन्ने कुरा एक्लै थाहा पाउन गाह्रो छ।' },
        { q: 'कोरियाली भाषाका कागजात हेर्दा कस्तो हुन्छ?',
          a: 'सम्झौता वा सूचनामा नबुझ्ने शब्द धेरै हुन्छन्। अलि-अलि बुझेँ जस्तो लागे पनि ठ्याक्कै के अर्थ हो भन्नेमा ढुक्क नभए त्यसै छोडिदिन्छु।' },
        { q: 'कार्यस्थल सर्ने नियमबारे थाहा थियो?',
          a: 'छ भन्ने सुनेको थिएँ, तर विस्तारमा थाहा छैन। कति पटकसम्म हुन्छ, कहिलेसम्म निवेदन दिनुपर्छ जस्ता कुरा सोधेर मात्र थाहा हुन्छ।' },
        { q: 'यस्तो जानकारी पहिल्यै हेर्न पाए कस्तो होला जस्तो लाग्छ?',
          a: 'काम लाग्ला जस्तो लाग्छ। समस्या आएपछि खोज्नुभन्दा पहिल्यै थाहा भए मन ढुक्क हुन्छ।' }
      ],
      useQuote: 'सम्झौता सकिने बेला सबैभन्दा चिन्ता लाग्छ। पहिल्यै थाहा पाउन सके हुन्थ्यो।'
    }
  }
];


/* ---------------- 질문 답변 지식베이스 ---------------- */

const KB = [
  {
    key: 'apply-deadline',
    keywords: ['기한','신청','1개월','한달','마감','며칠','deadline','apply','month','days','hạn','nộp đơn','bao nhiêu ngày','กี่วัน','ยื่น','กำหนด','berapa hari','mengajukan','batas','ផុតកំណត់ដាក់ពាក្យ','ថ្ងៃផុតកំណត់','ដាក់ពាក្យពេលណា','ត្រឹមពេលណា','ប៉ុន្មានថ្ងៃ','1 ខែ','មួយខែ','កិច្ចសន្យាចប់','បង្កាន់ដៃ','कहिलेसम्म','म्याद','निवेदन कहिले','1 महिना','एक महिना','कति दिन','आवेदन','रसिद','kahilesamma','myad'],
    src: '외국인근로자의 고용 등에 관한 법률 제25조 · 확인일 2026-08-10',
    ko: '근로계약이 끝난 날부터 1개월 안에 고용센터에 사업장 변경을 신청해야 합니다. 신청한 날짜가 그 다음 3개월 구직 기간의 시작점이 되므로, 접수증을 꼭 받아 두세요.',
    en: 'You have 1 month from the end of your contract to apply at the Employment Center. The date you apply starts the following 3-month job-search period, so keep your receipt.',
    vi: 'Bạn có 1 tháng kể từ ngày hợp đồng kết thúc để nộp đơn tại Trung tâm việc làm. Ngày nộp đơn là mốc bắt đầu của 3 tháng tìm việc, nên hãy giữ giấy tiếp nhận.',
    id: 'Anda punya 1 bulan sejak kontrak berakhir untuk mengajukan di Pusat Ketenagakerjaan. Tanggal pengajuan menjadi awal masa 3 bulan mencari kerja, jadi simpan tanda terimanya.',
    km: 'ត្រូវដាក់ពាក្យសុំប្តូរកន្លែងធ្វើការ នៅមជ្ឈមណ្ឌលការងារ (고용센터) ក្នុងរយៈពេល 1 ខែ គិតពីថ្ងៃដែលកិច្ចសន្យាការងារបានបញ្ចប់។ ថ្ងៃដែលអ្នកដាក់ពាក្យ គឺជាថ្ងៃចាប់ផ្តើមនៃរយៈពេលស្វែងរកការងារ 3 ខែបន្ទាប់ ដូច្នេះត្រូវយកបង្កាន់ដៃទទួលពាក្យទុកជានិច្ច។',
    ne: 'श्रम सम्झौता सकिएको दिनदेखि 1 महिनाभित्र रोजगार केन्द्र (고용센터) मा कार्यस्थल परिवर्तनको निवेदन दिनुपर्छ। निवेदन दिएको दिनबाटै त्यसपछिको 3 महिने काम खोज्ने अवधि सुरु हुन्छ, त्यसैले निवेदन बुझाएको रसिद अवश्य लिएर राख्नुहोस्।'
  },
  {
    key: 'job-period',
    keywords: ['3개월','구직','못 구하면','출국','취업','기간','three months','3 months','job','find','leave the country','deport','3 tháng','tìm việc','xuất cảnh','không tìm được','3 เดือน','หางาน','ออกนอกประเทศ','3 bulan','cari kerja','keluar','tidak dapat','3 ខែ','បីខែ','រកការងារមិនបាន','រកមិនបាន','រកការងារថ្មី','រកកន្លែងថ្មី','រយៈពេលរកការងារ','ត្រូវចាកចេញ','3 महिना','तीन महिना','काम पाइनँ','काम नपाए','काम खोज्','नयाँ कम्पनी','देश फर्कनु','3 mahina','kaam paina'],
    src: '외국인근로자의 고용 등에 관한 법률 제25조 제3항 · 확인일 2026-08-10',
    ko: '사업장 변경을 신청한 날부터 3개월 안에 새 근무처를 정하고 허가를 받아야 하며, 그렇지 못하면 원칙적으로 출국해야 합니다. 병이나 사고처럼 본인 책임이 아닌 사정이 있으면 그 기간을 빼 달라고 요청할 수 있고, 증빙 서류가 필요합니다.',
    en: 'From the day you apply you have 3 months to secure a new workplace and get approval; otherwise you must in principle leave Korea. If illness or an accident made this impossible, you can request that the period be excluded, with documents to prove it.',
    vi: 'Kể từ ngày nộp đơn, bạn có 3 tháng để tìm nơi làm việc mới và được cấp phép; nếu không, về nguyên tắc bạn phải xuất cảnh. Nếu do bệnh tật hay tai nạn ngoài ý muốn, bạn có thể xin trừ thời gian đó kèm giấy tờ chứng minh.',
    id: 'Sejak tanggal pengajuan Anda punya 3 bulan untuk mendapatkan tempat kerja baru dan izinnya; bila tidak, pada dasarnya Anda harus keluar dari Korea. Bila sakit atau kecelakaan membuatnya mustahil, Anda bisa meminta periode itu dikecualikan dengan dokumen pendukung.',
    km: 'គិតពីថ្ងៃដាក់ពាក្យសុំប្តូរកន្លែងធ្វើការ អ្នកត្រូវរកកន្លែងធ្វើការថ្មី និងទទួលបានការអនុញ្ញាត ក្នុងរយៈពេល 3 ខែ។ បើមិនបានទេ ជាគោលការណ៍ អ្នកត្រូវចាកចេញពីកូរ៉េ។ បើមានហេតុផលដែលមិនមែនជាកំហុសរបស់អ្នក ដូចជាជំងឺ ឬគ្រោះថ្នាក់ អ្នកអាចស្នើសុំមិនឲ្យគិតរយៈពេលនោះបញ្ចូល ហើយត្រូវមានឯកសារបញ្ជាក់។',
    ne: 'कार्यस्थल परिवर्तनको निवेदन दिएको दिनदेखि 3 महिनाभित्र नयाँ काम गर्ने ठाउँ पक्का गरी अनुमति लिनुपर्छ, नभए नियमअनुसार देश छोड्नुपर्छ। रोग वा दुर्घटनाजस्ता आफ्नो दोष नभएका कारण भए त्यो समय नगन्न अनुरोध गर्न सकिन्छ, र प्रमाण कागजात चाहिन्छ।'
  },
  {
    key: 'limit-count',
    keywords: ['횟수','몇 번','3회','2회','제한','재고용','how many','times','limit','change','mấy lần','số lần','giới hạn','กี่ครั้ง','จำนวนครั้ง','จำกัด','berapa kali','jumlah','batas pindah','ប៉ុន្មានដង','ចំនួនដង','3 ដង','បីដង','2 ដង','ប្តូរបានប៉ុន្មាន','ជួលឡើងវិញ','កំណត់ចំនួន','कति पटक','कति चोटि','कति पल्ट','3 पटक','2 पटक','पटक सीमा','kati patak','kati choti'],
    src: '외국인근로자의 고용 등에 관한 법률 제25조 제4항 · 확인일 2026-08-10',
    ko: '원칙적으로 최초 3년의 취업활동 기간에는 3회까지, 재고용으로 연장된 기간에는 2회까지 사업장을 바꿀 수 있습니다. 임금체불이나 부당한 대우처럼 근로자 책임이 아닌 사유로 옮긴 경우는 이 횟수에 넣지 않습니다.',
    en: 'As a rule you may change workplaces up to 3 times during the first 3-year work period, and up to 2 more times during a re-employment extension. Changes caused by reasons that are not the worker’s fault — unpaid wages, unfair treatment — are not counted.',
    vi: 'Về nguyên tắc, bạn được đổi nơi làm việc tối đa 3 lần trong 3 năm đầu và thêm 2 lần trong thời gian gia hạn tái tuyển dụng. Những lần đổi vì lý do không phải lỗi của người lao động, như nợ lương hay đối xử bất công, thì không bị tính.',
    id: 'Pada dasarnya Anda boleh pindah tempat kerja sampai 3 kali selama masa kerja 3 tahun pertama, dan sampai 2 kali lagi pada masa perpanjangan. Perpindahan karena alasan yang bukan kesalahan pekerja — upah tertunggak, perlakuan tidak adil — tidak dihitung.',
    km: 'ជាគោលការណ៍ ក្នុងរយៈពេលធ្វើការដំបូង 3 ឆ្នាំ អ្នកអាចប្តូរកន្លែងធ្វើការបានរហូតដល់ 3 ដង ហើយក្នុងរយៈពេលដែលបានបន្តដោយការជួលឡើងវិញ អាចប្តូរបានរហូតដល់ 2 ដង។ ការប្តូរដោយហេតុផលដែលមិនមែនជាកំហុសរបស់កម្មករ ដូចជាការជំពាក់ប្រាក់ឈ្នួល ឬការប្រព្រឹត្តមិនត្រឹមត្រូវ មិនរាប់បញ្ចូលក្នុងចំនួនដងនេះទេ។',
    ne: 'नियमअनुसार पहिलो 3 वर्षको काम गर्ने अवधिमा 3 पटकसम्म, र पुनः रोजगारीबाट थपिएको अवधिमा 2 पटकसम्म कार्यस्थल बदल्न सकिन्छ। तलब नपाउनु वा नराम्रो व्यवहारजस्ता कामदारको दोष नभएका कारणले सरेको भए यो संख्यामा गनिँदैन।'
  },
  {
    key: 'reasons',
    keywords: ['사유','이유','가능','부당','폭행','성희롱','계약 위반','휴업','폐업','reason','allowed','abuse','violation','closed','lý do','được phép','bạo lực','vi phạm','đóng cửa','เหตุผล','อนุญาต','ทำร้าย','ผิดสัญญา','ปิดกิจการ','alasan','boleh','kekerasan','pelanggaran','tutup','ហេតុផលប្តូរ','មូលហេតុ','អាចប្តូរបានទេ','វាយដំ','អំពើហិង្សា','បៀតបៀនផ្លូវភេទ','បញ្ចប់កិច្ចសន្យា','រំលោភ','ប្រព្រឹត្តមិនត្រឹមត្រូវ','कारण','कुटपिट','यौन दुर्व्यवहार','दुर्व्यवहार','कम्पनी बन्द','सम्झौता तोड','कस्तो अवस्था','karan','kutpit'],
    src: '외국인근로자의 고용 등에 관한 법률 제25조 제1항 및 같은 법 시행령 · 확인일 2026-08-10',
    review: true,
    ko: '사용자가 근로계약을 해지하거나 갱신을 거절한 경우, 휴업·폐업 등으로 일을 계속할 수 없게 된 경우, 고용허가가 취소되거나 고용이 제한된 경우, 그리고 임금체불·폭행·성희롱처럼 부당한 처우를 받아 계속 일하기 어려운 경우가 법에서 정한 사유에 해당합니다. 내 상황이 여기에 해당하는지는 자료를 보고 고용센터가 판단하므로, 위 자가진단으로 준비물을 확인한 뒤 상담을 받으세요.',
    en: 'The law recognises reasons such as: the employer ends or refuses to renew the contract; the business suspends or closes so work cannot continue; the employment permit is cancelled or restricted; and unfair treatment such as unpaid wages, violence or sexual harassment that makes staying impossible. Whether your case fits is decided by the Employment Center after seeing your evidence, so use the self-check above and then get counselling.',
    vi: 'Luật công nhận các lý do như: người sử dụng lao động chấm dứt hoặc từ chối gia hạn hợp đồng; công ty ngừng hoạt động hoặc đóng cửa nên không thể tiếp tục làm; giấy phép tuyển dụng bị hủy hoặc bị hạn chế; và bị đối xử bất công như nợ lương, bạo lực, quấy rối tình dục. Trường hợp của bạn có phù hợp hay không do Trung tâm việc làm quyết định sau khi xem bằng chứng, hãy dùng phần tự kiểm tra ở trên rồi đi tư vấn.',
    id: 'Undang-undang mengakui alasan seperti: pemberi kerja mengakhiri atau menolak memperpanjang kontrak; usaha berhenti atau tutup sehingga pekerjaan tidak bisa dilanjutkan; izin kerja dicabut atau dibatasi; dan perlakuan tidak adil seperti upah tertunggak, kekerasan, atau pelecehan seksual. Apakah kasus Anda termasuk diputuskan Pusat Ketenagakerjaan setelah melihat bukti, jadi gunakan pemeriksaan mandiri di atas lalu ikuti konsultasi.',
    km: 'ហេតុផលដែលច្បាប់កំណត់មាន៖ និយោជកបញ្ចប់កិច្ចសន្យាការងារ ឬបដិសេធមិនបន្តកិច្ចសន្យា។ មិនអាចបន្តធ្វើការបាន ដោយសារការផ្អាកការងារ ឬបិទអាជីវកម្ម។ ការអនុញ្ញាតជួលត្រូវបានលុបចោល ឬការជួលត្រូវបានរឹតបន្តឹង។ និងពិបាកបន្តធ្វើការ ដោយសាររងការប្រព្រឹត្តមិនត្រឹមត្រូវ ដូចជាការជំពាក់ប្រាក់ឈ្នួល អំពើហិង្សា ឬការបៀតបៀនផ្លូវភេទ។ មជ្ឈមណ្ឌលការងារជាអ្នកមើលឯកសារ ហើយសម្រេចថាស្ថានភាពរបស់អ្នកស្ថិតក្នុងករណីទាំងនេះឬអត់ ដូច្នេះសូមពិនិត្យឯកសារដែលត្រូវរៀបចំ ដោយប្រើការត្រួតពិនិត្យខ្លួនឯងខាងលើ រួចទៅទទួលការប្រឹក្សា។',
    ne: 'रोजगारदाताले श्रम सम्झौता तोडेमा वा नवीकरण गर्न नमानेमा, काम बन्द वा कम्पनी बन्द भएर काम जारी राख्न नसकिने भएमा, रोजगार अनुमति रद्द भएमा वा रोजगारीमा रोक लागेमा, र तलब नपाउनु, कुटपिट, यौन दुर्व्यवहारजस्ता अन्यायपूर्ण व्यवहारले गर्दा काम जारी राख्न गाह्रो भएमा — यी कानुनले तोकेका कारण हुन्। तपाईंको अवस्था यसमा पर्छ कि पर्दैन भन्ने कुरा रोजगार केन्द्रले कागजात हेरेर निर्णय गर्छ, त्यसैले माथिको आत्म-जाँचबाट चाहिने कुरा जाँचेर परामर्श लिनुहोस्।'
  },
  {
    key: 'unpaid-wage',
    keywords: ['임금','체불','월급','돈','안 줘','못 받','급여','wage','salary','unpaid','not paid','money','lương','nợ lương','không trả','tiền','ค่าจ้าง','เงินเดือน','ค้างจ่าย','ไม่จ่าย','upah','gaji','tidak dibayar','tertunggak','មិនបើកប្រាក់ខែ','មិនបានប្រាក់ខែ','ជំពាក់ប្រាក់ឈ្នួល','ជំពាក់ប្រាក់ខែ','បើកប្រាក់ខែយឺត','មិនឲ្យលុយ','ប្តឹង','1350','तलब','तलब पाइनँ','तलब नपाएको','बाँकी तलब','ज्याला','पैसा दिएन','talab','salary paina','talab paina'],
    src: '근로기준법 제36조 · 고용노동부 고객상담센터 1350 · 확인일 2026-08-10',
    ko: '임금을 받지 못했다면 사업장을 관할하는 지방고용노동관서에 신고할 수 있고, 상담은 1350입니다. 근로계약서와 통장 입금 내역, 근무시간 기록을 모아 두세요. 임금체불은 근로자 책임이 아닌 사유로 인정될 수 있어 사업장 변경 횟수에서 빠질 수 있습니다.',
    en: 'If your wages were not paid you can report it to the local labor office for your workplace, and 1350 gives guidance. Gather your contract, bank deposit records and working-hour records. Unpaid wages can be recognised as a reason that is not your fault, so the change may not count against your limit.',
    vi: 'Nếu bị nợ lương, bạn có thể tố cáo tại cơ quan lao động địa phương quản lý nơi làm việc, và gọi 1350 để được tư vấn. Hãy thu thập hợp đồng, sao kê ngân hàng và ghi chép giờ làm. Nợ lương có thể được công nhận là lý do không phải lỗi của bạn, nên lần đổi có thể không bị tính.',
    id: 'Bila upah Anda tidak dibayar, laporkan ke kantor ketenagakerjaan daerah tempat kerja Anda, dan hubungi 1350 untuk panduan. Kumpulkan kontrak, mutasi rekening, dan catatan jam kerja. Upah tertunggak dapat diakui sebagai alasan di luar kesalahan Anda, sehingga perpindahan mungkin tidak dihitung.',
    km: 'បើអ្នកមិនបានទទួលប្រាក់ឈ្នួល អ្នកអាចប្តឹងទៅការិយាល័យការងារក្នុងតំបន់ (지방고용노동관서) ដែលទទួលបន្ទុកកន្លែងធ្វើការរបស់អ្នក ហើយលេខប្រឹក្សាគឺ 1350។ សូមប្រមូលកិច្ចសន្យាការងារ ប្រវត្តិប្រាក់ចូលក្នុងគណនីធនាគារ និងកំណត់ត្រាម៉ោងធ្វើការទុក។ ការជំពាក់ប្រាក់ឈ្នួល អាចត្រូវបានទទួលស្គាល់ថាជាហេតុផលដែលមិនមែនជាកំហុសរបស់កម្មករ ដូច្នេះអាចមិនរាប់បញ្ចូលក្នុងចំនួនដងប្តូរកន្លែងធ្វើការ។',
    ne: 'तलब पाउनुभएको छैन भने कार्यस्थलको क्षेत्र हेर्ने स्थानीय श्रम कार्यालयमा उजुरी दिन सक्नुहुन्छ, परामर्शका लागि 1350 मा फोन गर्नुहोस्। श्रम सम्झौता, बैंक खातामा पैसा आएको विवरण र काम गरेको समयको रेकर्ड जम्मा गरेर राख्नुहोस्। तलब नपाउनु कामदारको दोष नभएको कारण मानिन सक्छ, त्यसैले कार्यस्थल परिवर्तनको संख्यामा नगनिन सक्छ।'
  },
  {
    key: 'exit-insurance',
    keywords: ['출국만기','퇴직금','만기보험','받을 돈','정산','departure guarantee','severance','payout','insurance money','mãn hạn','trợ cấp thôi việc','tiền bảo hiểm','ประกันครบกำหนด','เงินชดเชย','เงินประกัน','jaminan kepulangan','pesangon','uang asuransi','ធានារ៉ាប់រងផុតកំណត់','ធានារ៉ាប់រងចាកចេញ','ប្រាក់បំណាច់','ប្រាក់ចប់ការងារ','សាមសុង','samsung','1600-0266','លុយពេលត្រឡប់ស្រុក','प्रस्थान बीमा','फर्कने बीमा','उपदान','बीमा पैसा','सामसुङ','1600-0266','देश फर्कंदा पैसा','bima','upadan'],
    src: '외국인근로자의 고용 등에 관한 법률 제13조 및 같은 법 시행령 제21조 · 확인일 2026-08-13',
    ko: '출국만기보험은 회사가 매달 넣어 둔 퇴직금 성격의 돈입니다. 한 사업장에서 1년 이상 일한 뒤 출국하거나 체류자격이 바뀌면 본인이 청구할 수 있고, 출국한 때부터 14일 이내에 지급됩니다. 출국 예정일 1개월 전에 고용센터에 출국 예정 신고를 하고, 늦어도 7일 전에 삼성화재 전용 콜센터(1600-0266)로 지급 신청을 하세요. 보험금이 법정 퇴직금보다 적으면 그 차액은 회사가 따로 줘야 합니다.',
    en: 'The departure guarantee insurance is severance-type money your employer paid in monthly. If you worked at one workplace for a year or more and then leave Korea or change visa status, you claim it yourself, and it is paid within 14 days of your departure. Report your planned departure to the Employment Center a month ahead, and file the claim with the Samsung Fire line (1600-0266) at least 7 days before. If the payout is less than legal severance, the employer owes you the difference.',
    vi: 'Bảo hiểm mãn hạn xuất cảnh là khoản tiền mang tính trợ cấp thôi việc mà công ty đóng hằng tháng. Nếu bạn làm ở một nơi từ 1 năm trở lên rồi xuất cảnh hoặc đổi tư cách lưu trú, chính bạn nộp đơn nhận, và tiền được chi trả trong 14 ngày kể từ khi xuất cảnh. Hãy khai báo dự định xuất cảnh với Trung tâm việc làm trước 1 tháng, và nộp đơn tới tổng đài Samsung Fire (1600-0266) chậm nhất 7 ngày trước. Nếu tiền bảo hiểm ít hơn trợ cấp thôi việc theo luật, công ty phải trả phần chênh lệch.',
    id: 'Asuransi jaminan kepulangan adalah uang bersifat pesangon yang disetor perusahaan tiap bulan. Bila Anda bekerja di satu tempat selama satu tahun atau lebih lalu pulang atau berganti status tinggal, Anda sendiri yang mengajukan, dan dana cair dalam 14 hari sejak keberangkatan. Laporkan rencana kepulangan ke Pusat Ketenagakerjaan sebulan sebelumnya, dan ajukan ke layanan Samsung Fire (1600-0266) paling lambat 7 hari sebelumnya. Bila dananya lebih kecil daripada pesangon menurut hukum, perusahaan wajib membayar selisihnya.',
    km: 'ធានារ៉ាប់រងផុតកំណត់ចាកចេញ (출국만기보험) គឺជាប្រាក់ដែលក្រុមហ៊ុនបង់ទុករៀងរាល់ខែ ដូចប្រាក់បំណាច់ចប់ការងារ។ បើអ្នកធ្វើការនៅកន្លែងធ្វើការតែមួយ 1 ឆ្នាំឡើងទៅ ហើយចាកចេញពីកូរ៉េ ឬប្តូរប្រភេទទិដ្ឋាការ អ្នកអាចស្នើសុំប្រាក់នេះដោយខ្លួនឯង ហើយប្រាក់នឹងបើកឲ្យក្នុងរយៈពេល 14 ថ្ងៃ គិតពីពេលអ្នកចាកចេញ។ សូមជូនដំណឹងពីការគ្រោងចាកចេញ ទៅមជ្ឈមណ្ឌលការងារ 1 ខែមុនថ្ងៃគ្រោងចាកចេញ ហើយស្នើសុំប្រាក់តាមមជ្ឈមណ្ឌលទូរស័ព្ទពិសេសរបស់ Samsung Fire (삼성화재) (1600-0266) យ៉ាងយូរ 7 ថ្ងៃមុន។ បើប្រាក់ធានារ៉ាប់រងតិចជាងប្រាក់បំណាច់តាមច្បាប់ ក្រុមហ៊ុនត្រូវបង់ប្រាក់ដែលខ្វះនោះដាច់ដោយឡែក។',
    ne: 'प्रस्थान बीमा (출국만기보험) भनेको कम्पनीले हरेक महिना जम्मा गरेको उपदान (퇴직금) जस्तै पैसा हो। एउटै कार्यस्थलमा 1 वर्षभन्दा बढी काम गरेपछि देश फर्किँदा वा भिसाको प्रकार बदलिँदा आफैँले दाबी गर्न सक्नुहुन्छ, र देश छोडेको दिनदेखि 14 दिनभित्र पैसा दिइन्छ। देश फर्कने मितिभन्दा 1 महिनाअघि रोजगार केन्द्रमा फर्कने सूचना दिनुहोस्, र कम्तीमा 7 दिनअघि सामसुङ फायर (삼성화재) को कल सेन्टर (1600-0266) मा भुक्तानीका लागि निवेदन दिनुहोस्। बीमाको रकम कानुनले तोकेको उपदानभन्दा कम भए, बाँकी फरक रकम कम्पनीले छुट्टै दिनुपर्छ।'
  },
  {
    key: 'claim-limit',
    keywords: ['3년','소멸시효','시효','늦었','이미 출국','지났','three years','time limit','expire','too late','already left','3 năm','thời hiệu','quá hạn','đã về nước','3 ปี','อายุความ','สายเกินไป','กลับไปแล้ว','3 tahun','kedaluwarsa','terlambat','sudah pulang','ផុតសិទ្ធិ','3 ឆ្នាំ','ស្នើសុំយឺត','យឺតពេល','ធានារ៉ាប់រងថ្លៃធ្វើដំណើរ','ថ្លៃត្រឡប់ស្រុក','ចេញពីកូរ៉េហើយ','នៅស្រុកហើយ','3 वर्ष','तीन वर्ष','दाबी','पैसा दाबी','फर्किसकेपछि','बीमा दाबी','dabi','3 barsa'],
    src: '외국인근로자의 고용 등에 관한 법률 제13조제4항·제15조제3항 · 근로기준법 제49조 · 확인일 2026-08-13',
    ko: '출국만기보험과 귀국비용보험은 받을 사유가 생긴 날부터 3년 안에 청구해야 하고, 3년이 지나면 청구권이 사라져 한국산업인력공단으로 넘어갑니다. 밀린 임금과 퇴직금도 3년 안에 청구할 수 있으며, 이미 출국했더라도 청구가 가능합니다. 늦었다고 포기하지 말고 1600-0266이나 1350에 먼저 물어보세요.',
    en: 'Departure guarantee and return cost insurance must be claimed within 3 years of the day the entitlement arises; after that the right lapses and the money passes to HRD Korea. Unpaid wages and severance can also be claimed within 3 years, and you can still claim after you have left Korea. Do not give up because you think it is late — ask 1600-0266 or 1350 first.',
    vi: 'Bảo hiểm mãn hạn xuất cảnh và bảo hiểm chi phí hồi hương phải được yêu cầu trong vòng 3 năm kể từ ngày phát sinh quyền; quá hạn thì mất quyền và tiền chuyển về Cơ quan Phát triển Nhân lực Hàn Quốc. Lương còn nợ và trợ cấp thôi việc cũng đòi được trong 3 năm, kể cả khi bạn đã về nước. Đừng bỏ cuộc vì nghĩ đã muộn, hãy hỏi 1600-0266 hoặc 1350 trước.',
    id: 'Asuransi jaminan kepulangan dan asuransi biaya kepulangan harus diklaim dalam 3 tahun sejak hak timbul; lewat dari itu haknya gugur dan dananya beralih ke HRD Korea. Upah tertunggak dan pesangon juga bisa dituntut dalam 3 tahun, bahkan setelah Anda pulang. Jangan menyerah karena merasa terlambat — tanyakan dulu ke 1600-0266 atau 1350.',
    km: 'ធានារ៉ាប់រងផុតកំណត់ចាកចេញ និងធានារ៉ាប់រងថ្លៃធ្វើដំណើរត្រឡប់ស្រុក ត្រូវស្នើសុំក្នុងរយៈពេល 3 ឆ្នាំ គិតពីថ្ងៃដែលមានសិទ្ធិទទួល។ បើលើស 3 ឆ្នាំ សិទ្ធិស្នើសុំនឹងបាត់ ហើយប្រាក់នោះត្រូវផ្ទេរទៅសេវាធនធានមនុស្សកូរ៉េ (한국산업인력공단)។ ប្រាក់ឈ្នួលដែលជំពាក់ និងប្រាក់បំណាច់ចប់ការងារ ក៏អាចស្នើសុំបានក្នុងរយៈពេល 3 ឆ្នាំដែរ ទោះបីអ្នកបានចាកចេញពីកូរ៉េហើយក៏ដោយ។ កុំបោះបង់ដោយគិតថាយឺតពេលហើយ សូមសួរលេខ 1600-0266 ឬ 1350 ជាមុនសិន។',
    ne: 'प्रस्थान बीमा र स्वदेश फर्कने खर्च बीमा पाउने कारण बनेको दिनदेखि 3 वर्षभित्र दाबी गर्नुपर्छ, 3 वर्ष नाघेपछि दाबी गर्ने अधिकार हराउँछ र पैसा HRD Korea (한국산업인력공단) मा जान्छ। बाँकी तलब र उपदान पनि 3 वर्षभित्र दाबी गर्न सकिन्छ, देश फर्किसकेको भए पनि दाबी गर्न सकिन्छ। ढिलो भयो भनेर हार नमान्नुहोस्, पहिले 1600-0266 वा 1350 मा सोध्नुहोस्।'
  },
  {
    key: 'how-to',
    keywords: ['어디서','어떻게','절차','고용센터','방법','서류','준비','where','how','procedure','employment center','documents','ở đâu','làm thế nào','thủ tục','trung tâm việc làm','giấy tờ','ที่ไหน','อย่างไร','ขั้นตอน','ศูนย์จัดหางาน','เอกสาร','di mana','bagaimana','prosedur','pusat ketenagakerjaan','dokumen','របៀបដាក់ពាក្យ','ដាក់ពាក្យយ៉ាងម៉េច','ឯកសារត្រូវយក','យកអ្វីខ្លះ','លិខិតឆ្លងដែន','បណ្ណស្នាក់នៅ','អ្នកបកប្រែ','នីតិវិធីប្តូរ','कसरी निवेदन','के कागजात','कागजात चाहिन्छ','कहाँ निवेदन','दोभाषे','राहदानी','kagajat','kasari'],
    src: 'EPS 고용허가제 안내 · 외국인종합안내센터 1345 · 확인일 2026-08-10',
    ko: '사업장 변경은 거주지나 사업장을 관할하는 고용센터에서 신청합니다. 여권과 외국인등록증, 근로계약서, 퇴사 사실을 알 수 있는 서류를 챙겨 가세요. 통역이 필요하면 1345에 먼저 전화해 예약할 수 있습니다.',
    en: 'You apply at the Employment Center for your area or your workplace. Bring your passport, alien registration card, employment contract, and anything showing that the job ended. If you need an interpreter, call 1345 first to arrange one.',
    vi: 'Bạn nộp đơn tại Trung tâm việc làm phụ trách nơi cư trú hoặc nơi làm việc. Mang theo hộ chiếu, thẻ đăng ký người nước ngoài, hợp đồng lao động và giấy tờ cho thấy đã nghỉ việc. Nếu cần phiên dịch, hãy gọi 1345 trước để sắp xếp.',
    id: 'Pengajuan dilakukan di Pusat Ketenagakerjaan wilayah tempat tinggal atau tempat kerja Anda. Bawa paspor, kartu izin tinggal, kontrak kerja, dan dokumen yang menunjukkan pekerjaan telah berakhir. Bila perlu penerjemah, telepon 1345 lebih dulu untuk mengaturnya.',
    km: 'ការប្តូរកន្លែងធ្វើការ ត្រូវដាក់ពាក្យនៅមជ្ឈមណ្ឌលការងារ (고용센터) ដែលទទួលបន្ទុកតំបន់ដែលអ្នករស់នៅ ឬតំបន់កន្លែងធ្វើការ។ សូមយកលិខិតឆ្លងដែន បណ្ណចុះឈ្មោះជនបរទេស (외국인등록증) កិច្ចសន្យាការងារ និងឯកសារដែលបង្ហាញថាអ្នកបានឈប់ពីការងារ។ បើត្រូវការអ្នកបកប្រែ អ្នកអាចទូរស័ព្ទទៅលេខ 1345 ជាមុន ដើម្បីកក់។',
    ne: 'कार्यस्थल परिवर्तनको निवेदन आफू बस्ने ठाउँ वा कार्यस्थलको क्षेत्र हेर्ने रोजगार केन्द्रमा दिइन्छ। राहदानी, विदेशी दर्ता कार्ड (ARC), श्रम सम्झौता, र काम छोडेको कुरा देखाउने कागजात लिएर जानुहोस्। दोभाषे चाहिए पहिले 1345 मा फोन गरेर बुक गर्न सकिन्छ।'
  },

  /* ── 자주 묻는 질문(faq.html)과 같은 내용 · 2026-08-23 확인 ──
     한쪽을 고치면 다른 쪽도 함께 고치세요. */
  {
    key: 'employer-fault',
    keywords: ['귀책','회사 잘못','체불','폐업','횟수 포함','employer fault','not counted','closed','unpaid','lỗi của chủ','không tính','nợ lương','phá sản','ความผิดนายจ้าง','ไม่นับ','ค้างจ่าย','ปิดกิจการ','kesalahan pemberi kerja','tidak dihitung','tunggakan','tutup','កំហុសក្រុមហ៊ុន','កំហុសថៅកែ','មិនមែនកំហុសខ្ញុំ','រាប់ចំនួនដង','រាប់បញ្ចូល','ក្រុមហ៊ុនបិទ','ផ្អាកការងារ','អស់ 3 ដង','कम्पनीको दोष','मालिकको दोष','मेरो दोष होइन','गनिन्छ','गनिँदैन','कम्पनी बन्द','sahuko dosh','company band'],
    src: '외국인근로자의 고용 등에 관한 법률 제25조 · 고용노동부 사업장 변경제도 안내 · 확인일 2026-08-23',
    ko: '들어가지 않습니다. 임금 체불, 휴업·폐업, 근로조건 위반처럼 근로자 잘못이 아닌 사유로 옮기는 경우는 횟수에 넣지 않습니다. 3회를 다 썼다고 들었더라도 포기하지 말고 고용센터에 사유를 밝히세요.',
    en: 'No. Moves caused by unpaid wages, shutdown or closure, or breach of working conditions are not counted. Even if you were told you used all 3 changes, explain the reason at the Employment Center before giving up.',
    vi: 'Không tính. Những trường hợp chuyển đi do nợ lương, ngừng hoạt động hoặc phá sản, vi phạm điều kiện lao động đều không tính vào số lần. Dù đã nghe nói dùng hết 3 lần, hãy trình bày lý do tại Trung tâm việc làm trước khi từ bỏ.',
    id: 'Tidak dihitung. Perpindahan karena upah tidak dibayar, perusahaan berhenti atau tutup, atau pelanggaran syarat kerja tidak masuk hitungan. Meski diberi tahu sudah memakai 3 kali, jelaskan dulu alasannya di Pusat Ketenagakerjaan.',
    km: 'មិនរាប់បញ្ចូលទេ។ ការប្តូរដោយហេតុផលដែលមិនមែនជាកំហុសរបស់កម្មករ ដូចជាការជំពាក់ប្រាក់ឈ្នួល ការផ្អាកការងារ ឬបិទអាជីវកម្ម និងការរំលោភលក្ខខណ្ឌការងារ មិនរាប់បញ្ចូលក្នុងចំនួនដងទេ។ ទោះបីអ្នកឮថាបានប្រើអស់ 3 ដងហើយក៏ដោយ កុំបោះបង់ សូមប្រាប់ហេតុផលរបស់អ្នកទៅមជ្ឈមណ្ឌលការងារ។',
    ne: 'गनिँदैन। तलब नपाउनु, काम बन्द वा कम्पनी बन्द हुनु, कामका सर्त उल्लङ्घन हुनुजस्ता कामदारको दोष नभएका कारणले सरेको भए यो संख्यामा गनिँदैन। 3 पटक सकियो भन्ने सुन्नुभएको भए पनि हार नमान्नुहोस्, रोजगार केन्द्रमा कारण बताउनुहोस्।'
  },
  {
    key: 'no-side-work',
    keywords: ['구직 기간 일','아르바이트','불법 취업','다른 곳','work while searching','illegal work','làm thêm','bất hợp pháp','trong thời gian tìm việc','ทำงานระหว่างหางาน','ผิดกฎหมาย','kerja sambil mencari','ilegal','ធ្វើការកន្លែងផ្សេង','ធ្វើការក្រៅ','ការងារក្រៅម៉ោង','ការងារបន្ថែម','ការងារពាក់កណ្តាលម៉ោង','ធ្វើការបណ្តោះអាសន្ន','ធ្វើការខុសច្បាប់','រកលុយបន្ថែម','अर्को ठाउँमा काम','पार्ट टाइम','पार्टटाइम','अर्बाइट','साइड काम','अवैध काम','part time','arbite'],
    src: '외국인근로자의 고용 등에 관한 법률 · 출입국관리법 · 확인일 2026-08-23',
    ko: '안 됩니다. 사업장 변경 절차가 끝나기 전에 다른 곳에서 일하면 불법 취업이 되어 본인이 처벌받고, 일을 시킨 사업주도 처벌받습니다. 반드시 고용센터를 통한 정식 절차로만 취업하세요.',
    en: 'No. Working before the workplace change is completed counts as illegal employment: you are penalised and so is the employer who hired you. Only take a job through the official Employment Center process.',
    vi: 'Không được. Làm việc trước khi hoàn tất thủ tục đổi nơi làm việc bị coi là lao động bất hợp pháp, bạn bị xử phạt và chủ sử dụng thuê bạn cũng bị xử phạt. Chỉ nhận việc qua thủ tục chính thức của Trung tâm việc làm.',
    id: 'Tidak boleh. Bekerja sebelum proses pindah selesai termasuk kerja ilegal: Anda dihukum dan pemberi kerja yang mempekerjakan Anda juga dihukum. Terimalah pekerjaan hanya melalui prosedur resmi Pusat Ketenagakerjaan.',
    km: 'មិនបានទេ។ បើអ្នកធ្វើការនៅកន្លែងផ្សេង មុនពេលនីតិវិធីប្តូរកន្លែងធ្វើការបញ្ចប់ នោះជាការធ្វើការខុសច្បាប់ ហើយអ្នកនឹងត្រូវទទួលទោស ព្រមទាំងម្ចាស់ដែលឲ្យអ្នកធ្វើការក៏ត្រូវទទួលទោសដែរ។ ត្រូវធ្វើការតាមនីតិវិធីផ្លូវការ តាមរយៈមជ្ឈមណ្ឌលការងារប៉ុណ្ណោះ។',
    ne: 'पाइँदैन। कार्यस्थल परिवर्तनको प्रक्रिया नसकिँदै अर्को ठाउँमा काम गरे त्यो अवैध काम हुन्छ, र तपाईं आफैँ सजायँ पाउनुहुन्छ, काम लगाउने मालिकले पनि सजायँ पाउँछ। अनिवार्य रूपमा रोजगार केन्द्र मार्फत सही प्रक्रियाबाट मात्र काममा लाग्नुहोस्।'
  },
  {
    key: 'dorm-standard',
    keywords: ['기숙사','숙소','컨테이너','숙소 기준','dormitory','housing','container','accommodation','ký túc xá','chỗ ở','tiêu chuẩn','หอพัก','ที่พัก','มาตรฐาน','asrama','tempat tinggal','standar','កន្លែងស្នាក់នៅ','អន្តេវាសិកដ្ឋាន','បន្ទប់ស្នាក់នៅ','កុងតឺន័រ','បន្ទប់គេង','ផ្ទះស្នាក់','គ្មានកំដៅ','គ្មានម៉ាស៊ីនត្រជាក់','कोठा','डर्मिटोरी','बस्ने ठाउँ','कन्टेनर','क्याम्प','हिटर','dorm','kotha','container'],
    src: '근로기준법 제100조 · 외국인근로자 숙식정보 제공 및 비용징수 지침 · 확인일 2026-08-23',
    ko: '숙소가 기준에 못 미치면 사업장 변경 사유가 될 수 있습니다. 1인당 최소 면적과 냉난방·세탁·취사 시설 기준이 있으며, 컨테이너 숙소도 이 기준을 지켜야 합니다. 사진과 날짜를 남겨 두고 고용센터나 1345에 상담하세요.',
    en: 'Housing below the required standard can be a ground for changing workplace. There are minimum floor area, heating and cooling, laundry and cooking facility requirements, and container housing must meet them too. Keep dated photos and consult the Employment Center or 1345.',
    vi: 'Chỗ ở không đạt tiêu chuẩn có thể là lý do đổi nơi làm việc. Có quy định về diện tích tối thiểu mỗi người, thiết bị sưởi ấm và làm mát, khu giặt và nấu ăn; nhà container cũng phải đạt các tiêu chuẩn này. Hãy chụp ảnh kèm ngày tháng và hỏi Trung tâm việc làm hoặc 1345.',
    id: 'Tempat tinggal di bawah standar dapat menjadi alasan pindah tempat kerja. Ada ketentuan luas minimum per orang, pendingin dan pemanas, fasilitas cuci dan memasak; asrama kontainer pun harus memenuhinya. Simpan foto bertanggal lalu konsultasikan ke Pusat Ketenagakerjaan atau 1345.',
    km: 'បើកន្លែងស្នាក់នៅមិនបានតាមស្តង់ដារ វាអាចជាហេតុផលសម្រាប់ប្តូរកន្លែងធ្វើការ។ មានស្តង់ដារសម្រាប់ទំហំអប្បបរមាសម្រាប់ 1 នាក់ និងសម្រាប់ប្រព័ន្ធត្រជាក់-កំដៅ កន្លែងបោកគក់ និងកន្លែងធ្វើម្ហូប ហើយកន្លែងស្នាក់នៅជាកុងតឺន័រ ក៏ត្រូវតែគោរពស្តង់ដារនេះដែរ។ សូមថតរូប និងកត់ត្រាកាលបរិច្ឆេទទុក ហើយប្រឹក្សាជាមួយមជ្ឈមណ្ឌលការងារ ឬលេខ 1345។',
    ne: 'बस्ने कोठा (डर्मिटोरी) मापदण्डअनुसार छैन भने त्यो कार्यस्थल परिवर्तनको कारण बन्न सक्छ। 1 जनाका लागि कम्तीमा चाहिने क्षेत्रफल र तताउने·चिसो पार्ने, लुगा धुने, खाना पकाउने सुविधाको मापदण्ड छ, र कन्टेनर कोठाले पनि यो मापदण्ड पूरा गर्नुपर्छ। फोटो र मिति राखेर रोजगार केन्द्र वा 1345 मा परामर्श लिनुहोस्।'
  },
  {
    key: 'stay-length',
    keywords: ['체류 기간','4년 10개월','최대','얼마나','how long','maximum stay','4 years 10 months','thời hạn cư trú','bao lâu','tối đa','ระยะเวลาพำนัก','นานเท่าไร','สูงสุด','masa tinggal','berapa lama','maksimal','នៅបានប៉ុន្មានឆ្នាំ','រយៈពេលស្នាក់នៅ','4 ឆ្នាំ 10 ខែ','4 ឆ្នាំ','ចូលមកវិញ','កម្មករឧស្សាហ៍ព្យាយាម','ស្នាក់នៅយូរបំផុត','បន្តការស្នាក់នៅ','कति वर्ष','कतिसम्म बस्न','4 वर्ष 10 महिना','बसाइ अवधि','भिसा अवधि','पुनः प्रवेश','इमानदार कामदार','kati barsa','sungsil'],
    src: '외국인근로자의 고용 등에 관한 법률 제18조·제18조의2 · 제18조의4(재입국 취업 특례) · 확인일 2026-08-23',
    ko: '기본 3년에 재고용 1년 10개월을 더해 한 번에 최장 4년 10개월입니다. 성실근로자 재입국 특례 요건을 갖추면 출국 후 다시 들어와 추가로 일할 수 있습니다.',
    en: 'Three years plus 1 year 10 months of re-employment, so up to 4 years 10 months in one stay. If you meet the re-entry special case for committed workers, you can return after departure and work again.',
    vi: 'Ba năm cộng thêm 1 năm 10 tháng tái tuyển dụng, tức tối đa 4 năm 10 tháng cho một lần. Nếu đủ điều kiện tái nhập cảnh dành cho người lao động mẫn cán, bạn có thể quay lại làm việc tiếp sau khi xuất cảnh.',
    id: 'Tiga tahun ditambah 1 tahun 10 bulan perpanjangan, jadi maksimal 4 tahun 10 bulan sekali masa tinggal. Jika memenuhi syarat masuk kembali bagi pekerja berdedikasi, Anda bisa kembali dan bekerja lagi setelah keluar.',
    km: 'ជាមូលដ្ឋាន 3 ឆ្នាំ បូកនឹងការជួលឡើងវិញ 1 ឆ្នាំ 10 ខែ ដូច្នេះក្នុងមួយលើក អាចស្នាក់នៅបានយូរបំផុត 4 ឆ្នាំ 10 ខែ។ បើអ្នកបំពេញលក្ខខណ្ឌនៃកម្មវិធីពិសេសចូលមកវិញ សម្រាប់កម្មករឧស្សាហ៍ព្យាយាម អ្នកអាចត្រឡប់មកធ្វើការបន្ថែមទៀត បន្ទាប់ពីចាកចេញ។',
    ne: 'सुरुको 3 वर्षमा पुनः रोजगारीको 1 वर्ष 10 महिना थप्दा एक पटकमा बढीमा 4 वर्ष 10 महिना हुन्छ। इमानदार कामदार पुनः प्रवेश विशेष व्यवस्था (성실근로자) का सर्त पूरा गरेमा देश फर्केपछि फेरि आएर थप काम गर्न सकिन्छ।'
  },
  {
    key: 'e74-change',
    keywords: ['E-7-4','숙련기능인력','전환','비자 변경','skilled worker','change visa','E74','lao động lành nghề','chuyển visa','แรงงานฝีมือ','เปลี่ยนวีซ่า','tenaga terampil','ganti visa','e-7-4','e74','ប្រព័ន្ធពិន្ទុ','ពិន្ទុ','ប្តូរទិដ្ឋាការ','កម្មករជំនាញ','នាំគ្រួសារ','អញ្ជើញគ្រួសារ','E-7-4','e74','दक्ष कामदार','सीपयुक्त','अंक प्रणाली','पोइन्ट','भिसा परिवर्तन','skilled visa'],
    src: '출입국관리법 시행령 별표1의2 · 법무부 숙련기능인력(E-7-4) 점수제 안내 · 확인일 2026-08-23',
    ko: '점수제 심사를 통과하면 사업장 변경이 자유로워지고 가족을 초청할 수 있습니다. 한국어 능력, 근속 기간, 소득, 기술 자격 등이 점수에 반영되므로 근무하는 동안 미리 준비해 두면 좋습니다.',
    en: 'If you pass the points-based review, you can change workplace freely and invite your family. Korean language ability, length of service, income and technical qualifications count towards the score, so prepare while you are still working.',
    vi: 'Nếu qua được thẩm định theo thang điểm, bạn được tự do đổi nơi làm việc và bảo lãnh gia đình. Năng lực tiếng Hàn, thâm niên, thu nhập và chứng chỉ kỹ thuật đều được tính điểm, nên hãy chuẩn bị ngay khi còn đang làm việc.',
    id: 'Jika lolos penilaian sistem poin, Anda bebas berpindah tempat kerja dan dapat mengundang keluarga. Kemampuan bahasa Korea, masa kerja, penghasilan, dan sertifikat teknis dihitung sebagai poin, jadi persiapkan sejak masih bekerja.',
    km: 'បើអ្នកជាប់ការវាយតម្លៃតាមប្រព័ន្ធពិន្ទុ អ្នកអាចប្តូរកន្លែងធ្វើការដោយសេរី ហើយអាចអញ្ជើញគ្រួសារមកនៅជាមួយបាន។ សមត្ថភាពភាសាកូរ៉េ រយៈពេលធ្វើការ ប្រាក់ចំណូល និងសញ្ញាបត្រជំនាញបច្ចេកទេស ជាដើម ត្រូវបានគិតជាពិន្ទុ ដូច្នេះគួររៀបចំទុកជាមុន ក្នុងពេលកំពុងធ្វើការ។',
    ne: 'अंक प्रणालीको जाँच पास गरेमा कार्यस्थल स्वतन्त्र रूपमा बदल्न सकिन्छ र परिवारलाई बोलाउन सकिन्छ। कोरियाली भाषाको क्षमता, काम गरेको अवधि, आम्दानी, सीपको प्रमाणपत्र आदिले अंक दिन्छन्, त्यसैले काम गर्दागर्दै पहिल्यै तयारी गर्नु राम्रो हुन्छ।'
  },
  {
    key: 'where-help',
    keywords: ['상담','도움','전화','1345','1350','어디에','help','who to call','counselling','tư vấn','giúp đỡ','gọi ai','ปรึกษา','ขอความช่วยเหลือ','โทรที่ไหน','konsultasi','bantuan','telepon','សួរនៅណា','សួរនរណា','ទូរស័ព្ទទៅណា','ទូរស័ព្ទលេខណា','ប្រឹក្សា','ជួយខ្ញុំផង','1345','លេខទូរស័ព្ទ','कहाँ सोध्ने','कसलाई सोध्ने','कहाँ फोन','परामर्श','मद्दत','1345','1350','help line','kaha sodhne'],
    src: '외국인종합안내센터(1345) · 고용노동부 고객상담센터(1350) · 확인일 2026-08-23',
    ko: '외국인종합안내센터 1345는 여러 언어로 상담해 줍니다. 임금·근로조건 문제는 고용노동부 1350, 사업장 변경 절차는 관할 고용센터에 물어보세요. 이 서비스의 안내는 참고용이며, 확정 답변은 이 창구에서 받으세요.',
    en: 'The Foreigner Information Center on 1345 offers counselling in several languages. For wage and working-condition problems call the Ministry of Employment and Labor on 1350; for workplace change procedures ask your local Employment Center. This service is a guide only — get binding answers there.',
    vi: 'Tổng đài hỗ trợ người nước ngoài 1345 tư vấn bằng nhiều thứ tiếng. Vấn đề tiền lương và điều kiện lao động gọi Bộ Việc làm và Lao động 1350; thủ tục đổi nơi làm việc hỏi Trung tâm việc làm địa phương. Dịch vụ này chỉ để tham khảo — câu trả lời chính thức hãy nhận từ các nơi đó.',
    id: 'Pusat Informasi Orang Asing 1345 melayani konsultasi dalam beberapa bahasa. Untuk masalah upah dan syarat kerja hubungi Kementerian Ketenagakerjaan 1350; untuk prosedur pindah tempat kerja tanyakan ke Pusat Ketenagakerjaan setempat. Layanan ini hanya panduan — jawaban resmi diperoleh dari sana.',
    km: 'មជ្ឈមណ្ឌលព័ត៌មានសម្រាប់ជនបរទេស 1345 ផ្តល់ការប្រឹក្សាជាច្រើនភាសា។ បញ្ហាប្រាក់ឈ្នួល និងលក្ខខណ្ឌការងារ សូមសួរក្រសួងការងារ លេខ 1350 ហើយនីតិវិធីប្តូរកន្លែងធ្វើការ សូមសួរមជ្ឈមណ្ឌលការងារដែលទទួលបន្ទុក។ ព័ត៌មានក្នុងសេវានេះ សម្រាប់ជាឯកសារយោងប៉ុណ្ណោះ ចម្លើយចុងក្រោយ សូមទទួលពីកន្លែងទាំងនេះ។',
    ne: 'विदेशी नागरिक सूचना केन्द्र 1345 ले धेरै भाषामा परामर्श दिन्छ। तलब र कामका सर्तको समस्या रोजगार तथा श्रम मन्त्रालयको 1350 मा, कार्यस्थल परिवर्तनको प्रक्रिया आफ्नो क्षेत्रको रोजगार केन्द्रमा सोध्नुहोस्। यो सेवाको जानकारी सन्दर्भका लागि मात्र हो, पक्का जवाफ यिनै ठाउँबाट लिनुहोस्।'
  }
];


/* ---------------- 챗봇 바로 답변 (자주 묻는 질문) ----------------
   챗봇(ask.html)이 AI 를 부르기 전에 여기부터 봅니다. 질문에 아래 낱말이 충분히
   들어 있으면 자주 묻는 질문(faq.html)의 답을 그 자리에서 바로 보여 줍니다.
   AI 를 기다리지 않으므로 1초 안에 답이 나옵니다.

   · 질문·답 문장은 언어 파일(assets/i18n/*.js)의 faqQ_<key> / faqA_<key> 를 그대로 씁니다.
     FAQ 문장을 고치면 챗봇 답도 함께 바뀝니다.
   · keywords 는 6개 언어를 한 배열에 모읍니다. 너무 흔한 낱말(일, 회사, 한국)은
     넣지 마세요 — 엉뚱한 질문까지 이 답으로 빠집니다.
   · src 는 faq.html 의 근거 줄과 같게 둡니다. */
const FAQ_KB = [
  { key: 'limit_count',
    src: '외국인근로자의 고용 등에 관한 법률 제25조 · 고용노동부 사업장 변경제도 안내 · 2026-08-23',
    keywords: ['몇 번', '횟수', '몇 회', '3회', '2회', '바꿀 수 있', '변경 제한', 'how many times', 'how many changes', 'change limit', 'number of changes', 'times can i change', 'mấy lần', 'bao nhiêu lần', 'số lần đổi', 'giới hạn đổi', 'berapa kali', 'jumlah pindah', 'batas pindah', 'berapa kali pindah', 'ប៉ុន្មានដង', 'ចំនួនដង', '3 ដង', '2 ដង', 'ប្តូរបានប៉ុន្មាន', 'កំណត់ចំនួន', 'कति पटक', 'कति चोटि', 'कति पल्ट', '3 पटक', '2 पटक', 'kati patak'] },
  { key: 'employer_fault',
    src: '외국인근로자의 고용 등에 관한 법률 제25조 · 고용노동부 사업장 변경제도 안내 · 2026-08-23',
    keywords: ['회사 잘못', '사장 잘못', '횟수에 들어', '횟수에 포함', '휴업', '폐업', '내 잘못이 아닌', 'employer\'s fault', 'company\'s fault', 'not my fault', 'counted', 'closed down', 'closure', 'lỗi công ty', 'lỗi của chủ', 'không phải lỗi của tôi', 'có bị tính', 'đóng cửa', 'salah perusahaan', 'kesalahan majikan', 'bukan salah saya', 'dihitung', 'tutup', 'កំហុសក្រុមហ៊ុន', 'កំហុសថៅកែ', 'មិនមែនកំហុសខ្ញុំ', 'រាប់បញ្ចូល', 'ក្រុមហ៊ុនបិទ', 'ផ្អាកការងារ', 'कम्पनीको दोष', 'मालिकको दोष', 'मेरो दोष होइन', 'गनिन्छ', 'कम्पनी बन्द', 'sahuko dosh'] },
  { key: 'apply_1month',
    src: '외국인근로자의 고용 등에 관한 법률 제25조제3항 · 2026-08-23',
    keywords: ['언제까지', '신청 기한', '신청기한', '1개월', '한 달', '한달', '며칠', 'deadline', 'when do i apply', 'until when', '1 month', 'one month', 'how many days', 'hạn nộp', 'nộp đơn khi nào', 'đến khi nào', '1 tháng', 'một tháng', 'bao nhiêu ngày', 'batas waktu', 'kapan mengajukan', 'sampai kapan', '1 bulan', 'satu bulan', 'berapa hari', 'ផុតកំណត់ដាក់ពាក្យ', 'ដាក់ពាក្យពេលណា', 'ត្រឹមពេលណា', '1 ខែ', 'មួយខែ', 'ប៉ុន្មានថ្ងៃ', 'कहिलेसम्म', 'म्याद', '1 महिना', 'एक महिना', 'कति दिन', 'kahilesamma', 'have to apply', 'time to apply', 'apply by', 'deadline to apply', 'batas pengajuan', 'hạn nộp đơn'] },
  { key: 'search_3month',
    src: '외국인근로자의 고용 등에 관한 법률 제25조제3항 · 2026-08-23',
    keywords: ['못 구하면', '3개월', '구직 기간', '새 회사', '취업 못', '새 직장', 'can\'t find', 'cannot find', '3 months', 'three months', 'job search', 'new job', 'new company', 'không tìm được', '3 tháng', 'ba tháng', 'tìm việc', 'công ty mới', 'việc mới', 'tidak dapat kerja', '3 bulan', 'tiga bulan', 'cari kerja', 'perusahaan baru', 'kerja baru', 'រកការងារមិនបាន', 'រកមិនបាន', '3 ខែ', 'បីខែ', 'រកការងារថ្មី', 'ក្រុមហ៊ុនថ្មី', '3 महिना', 'तीन महिना', 'काम पाइनँ', 'काम नपाए', 'नयाँ कम्पनी', 'kaam paina'] },
  { key: 'no_side_work',
    src: '외국인근로자의 고용 등에 관한 법률 · 출입국관리법 · 2026-08-23',
    keywords: ['다른 곳에서 일', '아르바이트', '알바', '부업', '일해도 되', '불법 취업', 'work elsewhere', 'part-time', 'side job', 'work somewhere else', 'illegal work', 'làm chỗ khác', 'làm thêm', 'việc phụ', 'làm việc khác', 'làm bất hợp pháp', 'kerja di tempat lain', 'kerja sampingan', 'paruh waktu', 'kerja ilegal', 'ធ្វើការកន្លែងផ្សេង', 'ការងារក្រៅម៉ោង', 'ការងារពាក់កណ្តាលម៉ោង', 'ការងារបន្ថែម', 'ធ្វើការខុសច្បាប់', 'अर्को ठाउँमा काम', 'पार्ट टाइम', 'अर्बाइट', 'साइड काम', 'अवैध काम', 'part time'] },
  { key: 'dorm_standard',
    src: '근로기준법 제100조 · 외국인근로자 숙식정보 제공 및 비용징수 지침 · 2026-08-23',
    keywords: ['기숙사', '숙소', '컨테이너', 'dorm', 'dormitory', 'housing', 'accommodation', 'container', 'ký túc xá', 'chỗ ở', 'nhà ở', 'asrama', 'tempat tinggal', 'kontainer', 'កន្លែងស្នាក់នៅ', 'អន្តេវាសិកដ្ឋាន', 'បន្ទប់ស្នាក់នៅ', 'កុងតឺន័រ', 'បន្ទប់គេង', 'कोठा', 'डर्मिटोरी', 'बस्ने ठाउँ', 'कन्टेनर', 'kotha'] },
  { key: 'unpaid_wage',
    src: '근로기준법 제36조·제43조 · 고용노동부 임금체불 신고 안내 · 2026-08-23',
    keywords: ['월급', '임금', '체불', '돈을 못', '급여', '못 받았', 'unpaid', 'wage', 'salary', 'not paid', 'didn\'t get paid', 'nợ lương', 'không được trả lương', 'chưa trả lương', 'lương', 'gaji belum dibayar', 'gaji tidak dibayar', 'upah', 'gaji', 'មិនបើកប្រាក់ខែ', 'មិនបានប្រាក់ខែ', 'ជំពាក់ប្រាក់ឈ្នួល', 'ជំពាក់ប្រាក់ខែ', 'ប្រាក់ឈ្នួល', 'មិនឲ្យលុយ', 'तलब', 'तलब पाइनँ', 'बाँकी तलब', 'ज्याला', 'पैसा दिएन', 'talab', 'belum dibayar', 'tidak dibayar', 'chưa trả', 'không trả lương', 'not paid', 'no salary'] },
  { key: 'stay_length',
    src: '외국인근로자의 고용 등에 관한 법률 제18조·제18조의2 · 제18조의4(재입국 취업 특례) · 2026-08-23',
    keywords: ['최대 얼마', '얼마나 일할', '체류 기간', '4년 10개월', '재입국', '성실근로자', 'how long can i', 'maximum stay', 'how long stay', '4 years', 're-entry', 'reentry', 'ở được bao lâu', 'làm được bao lâu', 'tối đa bao lâu', '4 năm 10 tháng', 'tái nhập cảnh', 'berapa lama', 'maksimal tinggal', '4 tahun 10 bulan', 'masuk kembali', 'នៅបានប៉ុន្មានឆ្នាំ', 'រយៈពេលស្នាក់នៅ', '4 ឆ្នាំ', 'ចូលមកវិញ', 'កម្មករឧស្សាហ៍ព្យាយាម', 'ស្នាក់នៅយូរបំផុត', 'कति वर्ष', 'कतिसम्म बस्न', '4 वर्ष 10 महिना', 'पुनः प्रवेश', 'इमानदार कामदार', 'kati barsa'] },
  { key: 'e74_change',
    src: '출입국관리법 시행령 별표1의2 · 법무부 숙련기능인력(E-7-4) 점수제 안내 · 2026-08-23',
    keywords: ['E-7-4', 'e74', '숙련기능', '점수제', 'skilled worker', 'points system', 'lao động lành nghề', 'tính điểm', 'pekerja terampil', 'sistem poin', 'ប្រព័ន្ធពិន្ទុ', 'កម្មករជំនាញ', 'ប្តូរទិដ្ឋាការ', 'दक्ष कामदार', 'अंक प्रणाली', 'पोइन्ट', 'skilled visa'] },
  { key: 'where_help',
    src: '외국인종합안내센터(1345) · 고용노동부 고객상담센터(1350) · 2026-08-23',
    keywords: ['어디에 물어', '어디서 물어', '상담', '어디에 전화', '도움', 'where can i ask', 'who can i ask', 'counsel', 'hotline', 'help', 'hỏi ở đâu', 'hỏi ai', 'tư vấn ở đâu', 'gọi số nào', 'tanya di mana', 'tanya ke siapa', 'konsultasi', 'nomor telepon', 'សួរនៅណា', 'សួរនរណា', 'ទូរស័ព្ទទៅណា', 'ប្រឹក្សា', 'ជួយខ្ញុំផង', 'លេខទូរស័ព្ទ', 'कहाँ सोध्ने', 'कसलाई सोध्ने', 'कहाँ फोन', 'परामर्श', 'मद्दत', 'kaha sodhne'] }
];
