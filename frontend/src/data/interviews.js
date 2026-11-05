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

export { INTERVIEWS };
export default INTERVIEWS;
