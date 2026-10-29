/* E9-Bridge — 지식베이스 (RAG-lite)
   ------------------------------------------------------------------
   · NOTICES : 최신 제도 페이지에 올라가는 제도 요약.
   · KB      : 질문 답변 엔진이 참고하는 유일한 근거 묶음.
               keywords 는 언어를 가리지 않고 한 배열에 모아 둡니다.
   · 답변은 반드시 src(근거)를 함께 가집니다. 근거가 없으면 답하지 않습니다.
   · review:true 인 항목은 답변 위에 "실무자 검수" 표시가 붙습니다.
   · mt 에 적힌 언어는 기계 번역 초안입니다. 그 언어로 볼 때 "번역 검토 필요"
     표시가 붙습니다. 원어민 검토가 끝난 언어는 mt 에서 빼 주세요.
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

   ■ url 은 그 내용이 실린 글(보도자료·고시·공고·조례 본문) 주소입니다.
     기관 첫 화면(www.moel.go.kr 등)은 쓰지 않습니다. 센터·웹사이트 자체를 안내하는 항목만 예외입니다.

   ■ date 는 발표(고시)한 날입니다. 시행일이 아닙니다.
     목록은 date 최신순으로 정렬되고, 같은 날 발표된 항목은 이 배열의 순서를 따릅니다.
     시행일은 points 안에 적어 주세요.

   ■ 지자체 정책 (광역 16개 시·도)
     · tagKey: 'local', region: 시·도 코드 를 적습니다. region 이 없으면 전국 제도로 봅니다.
       코드: seoul busan daegu incheon daejeon ulsan sejong gyeonggi gangwon chungbuk
             chungnam jeonbuk jeonnamgwangju gyeongbuk gyeongnam jeju
       (광주·전남은 2026-07-01 전남광주통합특별시로 합쳐져 jeonnamgwangju 하나로 씁니다.)
     · 근로자가 직접 쓸 수 있는 것만 넣습니다(사업주 지원금 제외).
     · 시·군·구 사업도 넣을 수 있습니다. region 은 그 시·군·구가 속한 시·도 코드로 적고,
       제목은 시·군·구 이름으로 시작합니다(예: '안산시 외국인주민센터 일요일 상담').
     · 신청 기간이 있는 공고는 until: 'YYYY-MM-DD'(마감일)를 적습니다. 지나면 화면에
       "마감"으로 표시되고 목록 맨 아래로 내려갑니다. 해가 바뀌어 새 공고가 나오면
       항목을 새로 고치고, 끝난 사업은 points 에 종료 사실을 적습니다.
     · 계속 운영되는 사업(지원센터 등)은 date 에 그 해 사업 공고일이나 확인한 날을 적습니다.
   ------------------------------------------------------------------ */

const NOTICES = [
  {
    key: 'n-e74-reform-2026',
    tagKey: 'eps',
    source: '법무부 보도자료',
    url: 'https://www.moj.go.kr/bbs/moj/182/611577/artclView.do',
    date: '2026-10-22',
    checked: '2026-10-28',
    ko: { title: '숙련기능인력(E-7-4) 제도 개선 추진',
      points: [
        '법무부가 E-9 근로자가 E-7-4로 바꾸는 길을 넓히는 개선안을 발표했습니다.',
        '같은 회사에서 오래 일할수록 E-7-4 전환 때 받는 장기근속 가점이 늘어납니다.',
        '체류 연장 서류가 12종 이상에서 7종 이하로 줄고, 나중에 거주(F-2)로 바꿀 때 필요한 체류 기간 요건도 낮아집니다.',
        'E-9 → E-7-4 → F-2 → 영주(F-5)로 이어지는 경로를 고시로 정할 예정입니다.',
        '아직 시행일이 정해지지 않았습니다. 신청 전에 하이코리아(1345)에서 지금 기준을 확인하세요.'
      ] },
    en: { title: 'Skilled worker (E-7-4) reform planned',
      points: [
        'The Ministry of Justice announced a plan to make it easier for E-9 workers to move to E-7-4.',
        'The longer you work at the same company, the more long-service points you get when switching to E-7-4.',
        'Documents for a stay extension drop from 12 or more to 7 or fewer, and the stay required to later switch to residence (F-2) will be shorter.',
        'A step-by-step path, E-9 → E-7-4 → F-2 → permanent residence (F-5), will be set out in an official notice.',
        'No start date has been set yet. Check the current rules with HiKorea (1345) before you apply.'
      ] },
    vi: { title: 'Dự kiến cải tiến chế độ lao động lành nghề (E-7-4)',
      points: [
        'Bộ Tư pháp công bố kế hoạch giúp lao động E-9 dễ chuyển sang E-7-4 hơn.',
        'Làm việc càng lâu tại cùng một công ty, điểm thâm niên khi chuyển sang E-7-4 càng cao.',
        'Giấy tờ gia hạn lưu trú giảm từ 12 loại trở lên xuống còn 7 loại trở xuống, và thời gian lưu trú cần để chuyển sang cư trú (F-2) sau này sẽ ngắn hơn.',
        'Lộ trình E-9 → E-7-4 → F-2 → thường trú (F-5) sẽ được quy định trong thông báo chính thức.',
        'Chưa có ngày áp dụng. Hãy kiểm tra quy định hiện hành tại HiKorea (1345) trước khi nộp đơn.'
      ] },
    th: { title: 'เตรียมปรับระบบแรงงานฝีมือ (E-7-4)',
      points: [
        'กระทรวงยุติธรรมประกาศแผนให้แรงงาน E-9 เปลี่ยนเป็น E-7-4 ได้ง่ายขึ้น',
        'ยิ่งทำงานที่บริษัทเดิมนาน ยิ่งได้คะแนนอายุงานมากขึ้นเมื่อเปลี่ยนเป็น E-7-4',
        'เอกสารต่ออายุการพำนักลดจาก 12 รายการขึ้นไปเหลือไม่เกิน 7 รายการ และระยะเวลาพำนักที่ต้องมีเพื่อเปลี่ยนเป็นวีซ่าพำนักอาศัย (F-2) ภายหลังจะสั้นลง',
        'จะกำหนดเส้นทาง E-9 → E-7-4 → F-2 → ผู้พำนักถาวร (F-5) ไว้ในประกาศทางการ',
        'ยังไม่มีวันเริ่มใช้ ควรตรวจสอบเกณฑ์ปัจจุบันกับ HiKorea (1345) ก่อนยื่น'
      ] },
    id: { title: 'Rencana perbaikan sistem tenaga terampil (E-7-4)',
      points: [
        'Kementerian Kehakiman mengumumkan rencana agar pekerja E-9 lebih mudah beralih ke E-7-4.',
        'Makin lama bekerja di perusahaan yang sama, makin besar poin masa kerja saat beralih ke E-7-4.',
        'Dokumen perpanjangan izin tinggal berkurang dari 12 jenis atau lebih menjadi 7 jenis atau kurang, dan masa tinggal yang dibutuhkan untuk beralih ke izin tinggal (F-2) nanti akan lebih singkat.',
        'Jalur E-9 → E-7-4 → F-2 → penduduk tetap (F-5) akan ditetapkan dalam pengumuman resmi.',
        'Tanggal berlakunya belum ditetapkan. Periksa aturan saat ini di HiKorea (1345) sebelum mengajukan.'
      ] }
  },
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
    key: 'n-round4-2026',
    tagKey: 'eps',
    source: '고용노동부 보도자료',
    url: 'https://www.moel.go.kr/news/enews/report/enewsView.do?news_seq=19873',
    date: '2026-09-03',
    checked: '2026-10-28',
    ko: { title: '2026년 4회차 고용허가 1만 2,357명 배정',
      points: [
        '올해 네 번째 신규 고용허가 신청을 9월 14일부터 29일까지 받았습니다.',
        '제조업 9,020명, 농축산업 1,906명, 어업 897명, 건설업 394명, 서비스업 140명입니다.',
        '심사 때 임금 체불, 외국인 보험 미가입, 사망 사고, 노동법 위반이 있는 사업장은 불리해집니다.',
        '새로 배정된 근로자는 11월부터 차례로 들어올 예정입니다.'
      ] },
    en: { title: '2026 4th round: 12,357 hiring permits',
      points: [
        'Applications for the year’s 4th round of new hiring permits were taken from 14 to 29 September.',
        'Manufacturing 9,020, agriculture and livestock 1,906, fishing 897, construction 394, services 140.',
        'Workplaces with unpaid wages, missing foreign-worker insurance, fatal accidents or labor-law violations are scored down.',
        'Newly allocated workers are expected to arrive in stages from November.'
      ] },
    vi: { title: 'Đợt 4 năm 2026: cấp phép tuyển 12.357 người',
      points: [
        'Đợt 4 nhận đơn xin cấp phép tuyển dụng mới trong năm diễn ra từ ngày 14 đến 29/9.',
        'Chế tạo 9.020 người, nông nghiệp – chăn nuôi 1.906, ngư nghiệp 897, xây dựng 394, dịch vụ 140.',
        'Khi xét duyệt, nơi làm việc có nợ lương, không mua bảo hiểm cho lao động nước ngoài, có tai nạn chết người hoặc vi phạm luật lao động sẽ bị bất lợi.',
        'Lao động mới được phân bổ dự kiến sẽ lần lượt nhập cảnh từ tháng 11.'
      ] },
    th: { title: 'รอบที่ 4 ปี 2026 จัดสรร 12,357 คน',
      points: [
        'รับคำขอใบอนุญาตจ้างงานใหม่รอบที่ 4 ของปีระหว่างวันที่ 14–29 กันยายน',
        'ภาคการผลิต 9,020 คน เกษตรและปศุสัตว์ 1,906 คน ประมง 897 คน ก่อสร้าง 394 คน บริการ 140 คน',
        'ในการพิจารณา สถานประกอบการที่ค้างจ่ายค่าจ้าง ไม่ทำประกันให้แรงงานต่างชาติ มีอุบัติเหตุถึงแก่ชีวิต หรือทำผิดกฎหมายแรงงาน จะเสียเปรียบ',
        'แรงงานที่ได้รับการจัดสรรใหม่จะทยอยเข้าประเทศตั้งแต่เดือนพฤศจิกายน'
      ] },
    id: { title: 'Putaran ke-4 2026: 12.357 izin kerja',
      points: [
        'Permohonan izin kerja baru putaran ke-4 tahun ini diterima pada 14–29 September.',
        'Manufaktur 9.020, pertanian dan peternakan 1.906, perikanan 897, konstruksi 394, jasa 140.',
        'Dalam penilaian, tempat kerja dengan tunggakan upah, tanpa asuransi pekerja asing, kecelakaan fatal, atau pelanggaran hukum ketenagakerjaan akan dirugikan.',
        'Pekerja yang baru dialokasikan diperkirakan masuk bertahap mulai November.'
      ] }
  },
  {
    key: 'n-kz-2026',
    tagKey: 'eps',
    source: '외국인력정책위원회 · 고용노동부',
    sourceL: { en: 'Foreign Workforce Policy Committee · Ministry of Employment and Labor', vi: 'Ủy ban Chính sách Nhân lực Nước ngoài · Bộ Việc làm và Lao động', id: 'Komite Kebijakan Tenaga Kerja Asing · Kementerian Ketenagakerjaan', km: 'គណៈកម្មាធិការគោលនយោបាយកម្លាំងពលកម្មបរទេស · ក្រសួងការងារកូរ៉េ', ne: 'विदेशी जनशक्ति नीति समिति · रोजगार तथा श्रम मन्त्रालय' },
    url: 'https://www.moel.go.kr/news/enews/report/enewsView.do?news_seq=19786',
    date: '2026-08-14',
    checked: '2026-10-28',
    ko: { title: '카자흐스탄 송출국 추가',
      points: [
        '제49차 외국인력정책위원회에서 카자흐스탄을 새 송출국으로 지정했습니다.',
        '이로써 E-9 송출국은 17개국에서 18개국으로 늘어납니다.',
        '중앙아시아에서는 우즈베키스탄·키르기스스탄·타지키스탄에 이어 네 번째입니다.',
        '카자흐스탄 인력은 2028년부터 본격적으로 들어올 예정입니다.'
      ] },
    en: { title: 'Kazakhstan added as sending country',
      points: [
        'The 49th Foreign Workforce Policy Committee designated Kazakhstan as a new sending country.',
        'The number of E-9 sending countries rises from 17 to 18.',
        'It is the fourth in Central Asia, after Uzbekistan, Kyrgyzstan and Tajikistan.',
        'Workers from Kazakhstan are expected to start arriving in earnest from 2028.'
      ] },
    vi: { title: 'Bổ sung Kazakhstan làm nước phái cử',
      points: [
        'Ủy ban Chính sách Nhân lực Nước ngoài lần thứ 49 đã chỉ định Kazakhstan là nước phái cử mới.',
        'Số nước phái cử E-9 tăng từ 17 lên 18.',
        'Đây là nước thứ tư ở Trung Á, sau Uzbekistan, Kyrgyzstan và Tajikistan.',
        'Lao động Kazakhstan dự kiến bắt đầu sang Hàn Quốc chính thức từ năm 2028.'
      ] },
    th: { title: 'เพิ่มคาซัคสถานเป็นประเทศส่งแรงงาน',
      points: [
        'คณะกรรมการนโยบายแรงงานต่างชาติครั้งที่ 49 กำหนดให้คาซัคสถานเป็นประเทศส่งแรงงานใหม่',
        'ทำให้จำนวนประเทศส่งแรงงาน E-9 เพิ่มจาก 17 เป็น 18 ประเทศ',
        'เป็นประเทศที่สี่ในเอเชียกลาง ต่อจากอุซเบกิสถาน คีร์กีซสถาน และทาจิกิสถาน',
        'คาดว่าแรงงานจากคาซัคสถานจะเริ่มเข้ามาอย่างเต็มรูปแบบตั้งแต่ปี 2028'
      ] },
    id: { title: 'Penambahan Kazakhstan sebagai negara pengirim',
      points: [
        'Komite Kebijakan Tenaga Kerja Asing ke-49 menetapkan Kazakhstan sebagai negara pengirim baru.',
        'Jumlah negara pengirim E-9 bertambah dari 17 menjadi 18.',
        'Ini negara keempat di Asia Tengah, setelah Uzbekistan, Kirgistan, dan Tajikistan.',
        'Pekerja dari Kazakhstan diperkirakan mulai masuk secara penuh mulai 2028.'
      ] },
  },
  {
    key: 'n-construction-2026',
    tagKey: 'eps',
    source: '제49차 외국인력정책위원회 · 고용노동부',
    sourceL: { en: 'Local Employment Center notice (2026-09-10) · News reports', vi: 'Thông báo của Trung tâm việc làm khu vực (2026-09-10) · Báo chí', id: 'Pemberitahuan Pusat Ketenagakerjaan setempat (2026-09-10) · Pemberitaan media', km: 'សេចក្តីជូនដំណឹងរបស់មជ្ឈមណ្ឌលការងារក្នុងតំបន់ (2026-09-10) · របាយការណ៍សារព័ត៌មាន', ne: 'स्थानीय रोजगार केन्द्रको सूचना (2026-09-10) · समाचार रिपोर्ट' },
    url: 'https://www.moel.go.kr/news/enews/report/enewsView.do?news_seq=19786',
    date: '2026-08-14',
    checked: '2026-10-28',
    ko: { title: '건설업 현장 간 이동 요건 완화',
      points: [
        '건설업 E-9 근로자가 같은 사업주의 다른 공사 현장으로 옮기는 요건이 완화됐습니다.',
        '전에는 공사가 끝난 경우 등에만 허용됐지만, 이제는 옮길 현장이 고용허가 요건을 갖췄는지 보고 결정합니다.',
        '2026년 4회차 고용허가 신청(9월 14일~)부터 적용됩니다.',
        '노동관계법을 어긴 사업주에 대한 고용 제한은 2027년 3월부터 현장 단위가 아니라 사업주 전체에 적용됩니다.'
      ] },
    en: { title: 'Easier moves between construction sites',
      points: [
        'E-9 construction workers can now move more easily to another site run by the same employer.',
        'Before, this was allowed only in limited cases such as the end of the project; now it depends on whether the new site meets the hiring-permit conditions.',
        'It applies from the 4th hiring-permit round of 2026 (from 14 September).',
        'From March 2027, hiring bans for labor-law violations will apply to the whole employer, not just one site.'
      ] },
    vi: { title: 'Nới lỏng điều kiện chuyển công trường xây dựng',
      points: [
        'Lao động E-9 ngành xây dựng nay dễ chuyển sang công trường khác của cùng chủ sử dụng hơn.',
        'Trước đây chỉ được phép trong một số trường hợp như công trình kết thúc; nay sẽ xét công trường mới có đủ điều kiện cấp phép tuyển dụng hay không.',
        'Áp dụng từ đợt cấp phép tuyển dụng thứ 4 năm 2026 (từ ngày 14/9).',
        'Từ tháng 3/2027, lệnh hạn chế tuyển dụng do vi phạm luật lao động sẽ áp dụng cho toàn bộ chủ sử dụng, không chỉ một công trường.'
      ] },
    th: { title: 'ผ่อนเกณฑ์ย้ายระหว่างไซต์ก่อสร้าง',
      points: [
        'แรงงาน E-9 ภาคก่อสร้างย้ายไปไซต์งานอื่นของนายจ้างรายเดิมได้ง่ายขึ้น',
        'เดิมย้ายได้เฉพาะบางกรณี เช่น งานก่อสร้างเสร็จสิ้น แต่ตอนนี้จะพิจารณาว่าไซต์ใหม่มีคุณสมบัติตามเกณฑ์ใบอนุญาตจ้างงานหรือไม่',
        'ใช้ตั้งแต่รอบยื่นขอใบอนุญาตจ้างงานรอบที่ 4 ของปี 2026 (ตั้งแต่ 14 กันยายน)',
        'ตั้งแต่เดือนมีนาคม 2027 การจำกัดการจ้างงานเพราะทำผิดกฎหมายแรงงานจะใช้กับนายจ้างทั้งหมด ไม่ใช่เฉพาะไซต์เดียว'
      ] },
    id: { title: 'Pindah antarproyek konstruksi dipermudah',
      points: [
        'Pekerja konstruksi E-9 kini lebih mudah pindah ke proyek lain milik pemberi kerja yang sama.',
        'Sebelumnya hanya boleh dalam kasus terbatas seperti proyek selesai; kini diputuskan berdasarkan apakah proyek baru memenuhi syarat izin kerja.',
        'Berlaku mulai putaran ke-4 permohonan izin kerja tahun 2026 (mulai 14 September).',
        'Mulai Maret 2027, larangan merekrut karena pelanggaran hukum ketenagakerjaan berlaku untuk seluruh pemberi kerja, bukan hanya satu proyek.'
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
    source: '고용노동부 고시 · 최저임금위원회',
    sourceL: { en: 'Ministry of Employment and Labor notice (2026-08-05) · Minimum Wage Commission', vi: 'Thông báo của Bộ Việc làm và Lao động (2026-08-05) · Ủy ban Lương tối thiểu', id: 'Pengumuman Kementerian Ketenagakerjaan (2026-08-05) · Komisi Upah Minimum', km: 'សេចក្តីប្រកាសរបស់ក្រសួងការងារកូរ៉េ (2026-08-05) · គណៈកម្មការប្រាក់ឈ្នួលអប្បបរមា', ne: 'रोजगार तथा श्रम मन्त्रालयको सूचना (2026-08-05) · न्यूनतम पारिश्रमिक आयोग' },
    url: 'https://www.moel.go.kr/news/enews/report/enewsView.do?news_seq=19744',
    date: '2026-08-05',
    checked: '2026-10-28',
    ko: { title: '2027년 최저임금 시급 10,700원',
      points: [
        '고용노동부가 2027년 최저임금을 시간급 10,700원으로 고시했습니다. 2026년보다 380원(3.7%) 오른 금액입니다.',
        '2027년 1월 1일부터 12월 31일까지 적용됩니다.',
        '주 40시간·월 209시간 기준 월 환산액은 2,236,300원입니다.',
        '업종 구분 없이 모든 사업장에 같게 적용되며, 외국인도 한국인과 똑같이 적용받습니다.'
      ] },
    en: { title: '2027 minimum wage: 10,700 won per hour',
      points: [
        'The Ministry of Employment and Labor set the 2027 minimum wage at 10,700 won per hour, up 380 won (3.7%) from 2026.',
        'It applies from 1 January to 31 December 2027.',
        'For 40 hours a week (209 hours a month), the monthly amount is 2,236,300 won.',
        'It applies equally to every workplace and every industry, and foreign workers are covered the same as Koreans.'
      ] },
    vi: { title: 'Lương tối thiểu 2027: 10.700 won/giờ',
      points: [
        'Bộ Việc làm và Lao động công bố lương tối thiểu năm 2027 là 10.700 won/giờ, tăng 380 won (3,7%) so với năm 2026.',
        'Áp dụng từ ngày 1/1 đến 31/12/2027.',
        'Với 40 giờ/tuần (209 giờ/tháng), mức lương tháng là 2.236.300 won.',
        'Áp dụng như nhau cho mọi nơi làm việc, mọi ngành nghề; người nước ngoài được hưởng giống người Hàn Quốc.'
      ] },
    th: { title: 'ค่าจ้างขั้นต่ำปี 2027 ชั่วโมงละ 10,700 วอน',
      points: [
        'กระทรวงการจ้างงานและแรงงานประกาศค่าจ้างขั้นต่ำปี 2027 ชั่วโมงละ 10,700 วอน เพิ่มขึ้น 380 วอน (3.7%) จากปี 2026',
        'ใช้ตั้งแต่วันที่ 1 มกราคม ถึง 31 ธันวาคม 2027',
        'หากทำงานสัปดาห์ละ 40 ชั่วโมง (เดือนละ 209 ชั่วโมง) คิดเป็นเดือนละ 2,236,300 วอน',
        'ใช้เท่ากันทุกสถานประกอบการและทุกประเภทกิจการ แรงงานต่างชาติได้รับเท่ากับคนเกาหลี'
      ] },
    id: { title: 'Upah minimum 2027: 10.700 won per jam',
      points: [
        'Kementerian Ketenagakerjaan menetapkan upah minimum 2027 sebesar 10.700 won per jam, naik 380 won (3,7%) dari 2026.',
        'Berlaku mulai 1 Januari sampai 31 Desember 2027.',
        'Untuk 40 jam per minggu (209 jam per bulan), jumlah bulanannya 2.236.300 won.',
        'Berlaku sama untuk semua tempat kerja dan semua sektor; pekerja asing mendapat hak yang sama dengan orang Korea.'
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
    key: 'n-longstay-2026',
    tagKey: 'eps',
    source: '고용노동부 2026 업무보고 · 언론 보도',
    url: 'https://www.moel.go.kr/news/enews/report/enewsView.do?news_seq=18725',
    date: '2025-12-11',
    checked: '2026-10-28',
    ko: { title: '출국 없는 장기근속·장기체류 허용 추진',
      points: [
        '고용노동부는 2026년 업무보고(2025년 12월 11일)에서 E-9 근로자가 출국·재입국 없이 오래 일하고 머물 수 있게 하겠다고 밝혔습니다.',
        '2026년 4월 정부 발표 보도에 따르면, 지금의 최장 취업 기간(재입국 포함 9년 8개월)을 넘어 계속 일할 수 있도록 법 개정을 검토하고 있습니다.',
        '아직 확정·시행된 제도가 아닙니다. 지금은 현행 체류 기간(최장 4년 10개월, 재입국 특례 포함 9년 8개월)을 기준으로 계획하세요.'
      ] },
    en: { title: 'Plan to allow long-term work and stay without leaving Korea',
      points: [
        'In its 2026 work plan (11 December 2025), the labor ministry said it would let E-9 workers keep working and staying long-term without leaving and re-entering.',
        'According to April 2026 reports on the government plan, a law change is being considered so workers can continue beyond the current maximum of 9 years 8 months (including re-entry).',
        'It is not yet decided or in force; plan around the current limits (up to 4 years 10 months, or 9 years 8 months with the re-entry exception).'
      ] },
    vi: { title: 'Đề xuất cho phép làm việc, lưu trú dài hạn không cần xuất cảnh',
      points: [
        'Trong báo cáo công tác năm 2026 (11/12/2025), Bộ Lao động cho biết sẽ cho lao động E-9 làm việc, lưu trú dài hạn mà không phải xuất cảnh rồi tái nhập cảnh.',
        'Theo tin tháng 4/2026 về kế hoạch của chính phủ, đang xem xét sửa luật để người lao động có thể làm tiếp quá mức tối đa hiện nay là 9 năm 8 tháng (kể cả tái nhập cảnh).',
        'Chưa được quyết định hay áp dụng; hãy lên kế hoạch theo thời hạn hiện hành (tối đa 4 năm 10 tháng, hoặc 9 năm 8 tháng nếu được tái nhập cảnh đặc biệt).'
      ] },
    th: { title: 'แผนให้ทำงานและพำนักระยะยาวโดยไม่ต้องออกนอกประเทศ',
      points: [
        'ในรายงานแผนงานปี 2026 (11 ธันวาคม 2025) กระทรวงแรงงานระบุว่าจะให้แรงงาน E-9 ทำงานและพำนักระยะยาวได้โดยไม่ต้องออกแล้วกลับเข้ามาใหม่',
        'ตามข่าวแผนของรัฐบาลเดือนเมษายน 2026 กำลังพิจารณาแก้กฎหมายให้ทำงานต่อได้เกินระยะสูงสุดปัจจุบัน 9 ปี 8 เดือน (รวมการกลับเข้ามาใหม่)',
        'ยังไม่ได้ข้อสรุปและยังไม่มีผล ควรวางแผนตามระยะเวลาปัจจุบัน (สูงสุด 4 ปี 10 เดือน หรือ 9 ปี 8 เดือนหากได้สิทธิ์กลับเข้ามาใหม่)'
      ] },
    id: { title: 'Rencana mengizinkan kerja dan tinggal jangka panjang tanpa keluar Korea',
      points: [
        'Dalam rencana kerja 2026 (11 Desember 2025), Kementerian Ketenagakerjaan menyatakan akan mengizinkan pekerja E-9 bekerja dan tinggal lama tanpa keluar lalu masuk kembali.',
        'Menurut berita April 2026 tentang rencana pemerintah, perubahan undang-undang sedang dikaji agar pekerja dapat terus bekerja melewati batas maksimal saat ini 9 tahun 8 bulan (termasuk masuk kembali).',
        'Belum diputuskan dan belum berlaku; rencanakan sesuai batas saat ini (maksimal 4 tahun 10 bulan, atau 9 tahun 8 bulan dengan pengecualian masuk kembali).'
      ] },
  },
  {
    key: 'n-e74-farm-2026',
    tagKey: 'eps',
    source: '법무부 보도자료',
    url: 'https://www.moj.go.kr/bbs/moj/182/607092/artclView.do',
    date: '2026-06-01',
    checked: '2026-10-26',
    ko: { title: '농축어업 E-7-4 고용 한도 50% 확대',
      points: [
        '농축어업 사업장이 숙련기능인력(E-7-4)을 고용할 수 있는 한도가 내국인 고용 인원의 30%에서 최대 50%로 늘었습니다.',
        '임금 체불, 폭행, 휴·폐업처럼 본인 잘못이 아닌 이유로 사업장을 옮긴 경우, 이전 사업장에서 일한 기간도 근속 기간으로 합쳐 인정합니다.',
        '그래서 E-7-4 전환·연장 때 필요한 \'1년 이상 근무 사업장 추천\' 요건을 채우기 쉬워집니다. 옮긴 사유를 증명할 서류를 챙겨 두세요.',
        '2026년 6월부터 시행됐습니다.'
      ] },
    en: { title: 'E-7-4 hiring cap raised to 50% in farming and fishing',
      points: [
        'Farms, livestock and fishing businesses can now hire skilled workers (E-7-4) up to 50% of their Korean staff, up from 30%.',
        'If you changed workplaces for reasons that were not your fault — unpaid wages, violence, closure — your time at the previous workplace now counts toward your length of service.',
        'This makes it easier to meet the “recommended by an employer you have worked for 1 year or more” requirement for E-7-4. Keep documents that prove why you moved.',
        'In effect since June 2026.'
      ] },
    vi: { title: 'Nâng hạn mức tuyển E-7-4 lên 50% ở nông ngư nghiệp',
      points: [
        'Cơ sở nông nghiệp, chăn nuôi, ngư nghiệp được tuyển lao động lành nghề (E-7-4) tối đa 50% số lao động người Hàn, thay vì 30% như trước.',
        'Nếu bạn đổi nơi làm việc vì lý do không phải lỗi của mình — nợ lương, bạo lực, đóng cửa — thời gian làm ở nơi cũ cũng được cộng vào thâm niên.',
        'Nhờ vậy dễ đáp ứng điều kiện “được công ty đã làm từ 1 năm trở lên giới thiệu” khi chuyển hoặc gia hạn E-7-4. Hãy giữ giấy tờ chứng minh lý do chuyển.',
        'Áp dụng từ tháng 6 năm 2026.'
      ] },
    th: { title: 'ขยายเพดานจ้าง E-7-4 ภาคเกษตร-ประมงเป็น 50%',
      points: [
        'สถานประกอบการเกษตร ปศุสัตว์ และประมง จ้างแรงงานฝีมือ (E-7-4) ได้สูงสุด 50% ของจำนวนลูกจ้างชาวเกาหลี จากเดิม 30%',
        'หากคุณย้ายที่ทำงานด้วยเหตุที่ไม่ใช่ความผิดของคุณ เช่น ค้างจ่ายค่าจ้าง ถูกทำร้าย หรือกิจการปิด ระยะเวลาที่ทำงานที่เดิมจะนับรวมเป็นอายุงานด้วย',
        'จึงผ่านเงื่อนไข “ได้รับการรับรองจากนายจ้างที่ทำงานมา 1 ปีขึ้นไป” สำหรับ E-7-4 ได้ง่ายขึ้น ควรเก็บเอกสารที่พิสูจน์เหตุผลการย้ายไว้',
        'มีผลตั้งแต่เดือนมิถุนายน 2026'
      ] },
    id: { title: 'Batas rekrut E-7-4 pertanian-perikanan naik ke 50%',
      points: [
        'Usaha pertanian, peternakan, dan perikanan kini boleh mempekerjakan tenaga terampil (E-7-4) hingga 50% dari jumlah pekerja Korea, naik dari 30%.',
        'Bila Anda pindah tempat kerja karena alasan yang bukan kesalahan Anda — upah tertunggak, kekerasan, usaha tutup — masa kerja di tempat lama ikut dihitung sebagai masa kerja.',
        'Jadi syarat “rekomendasi dari pemberi kerja tempat Anda bekerja 1 tahun atau lebih” untuk E-7-4 lebih mudah dipenuhi. Simpan dokumen yang membuktikan alasan pindah.',
        'Berlaku sejak Juni 2026.'
      ] }
  },
  {
    key: 'n-roadmap-2026',
    tagKey: 'eps',
    source: '관계부처 합동 발표 · 언론 보도',
    url: 'https://www.etoday.co.kr/news/view/2580776',
    date: '2026-04-30',
    checked: '2026-10-26',
    ko: { title: '사업장 이동 제한 완화 논의 중',
      points: [
        '정부가 \'외국인력 통합지원 로드맵 추진방향\'을 발표하고, 사업장 이동의 사유·횟수·권역 제한을 완화하는 방안을 검토한다고 밝혔습니다.',
        '일정 요건을 갖추면 출국하지 않고 더 오래 일할 수 있게 하는 방안과 장기근속 인센티브도 함께 검토 중입니다.',
        '대신 인권 보호와 사업주 감독은 강화하는 방향입니다.',
        '아직 확정·시행되지 않았습니다. 최종안 발표와 외국인고용법 개정이 있어야 바뀝니다. 지금은 현재 규칙(최초 3년 3회·재고용 기간 2회, 권역 내 이동)을 따르세요.'
      ] },
    en: { title: 'Easing of job-change limits under discussion',
      points: [
        'The government announced the direction of a “foreign workforce integrated support roadmap” and said it is reviewing easier limits on reasons, number of times and regions for changing workplaces.',
        'It is also reviewing ways to let qualified workers stay longer without leaving Korea, and incentives for long service.',
        'At the same time, human-rights protection and employer inspections would be strengthened.',
        'Nothing is final or in effect yet. A final plan and an amendment to the Foreign Workers Employment Act are needed. For now, follow the current rules (3 changes in the first 3 years, 2 in the re-employment period, within your region).'
      ] },
    vi: { title: 'Đang thảo luận nới giới hạn đổi nơi làm việc',
      points: [
        'Chính phủ công bố định hướng “lộ trình hỗ trợ tổng hợp nhân lực nước ngoài” và cho biết đang xem xét nới lỏng giới hạn về lý do, số lần và khu vực khi đổi nơi làm việc.',
        'Đồng thời xem xét cho người đủ điều kiện làm việc lâu hơn mà không phải xuất cảnh, cùng ưu đãi cho người làm lâu năm.',
        'Bên cạnh đó sẽ tăng cường bảo vệ nhân quyền và giám sát chủ sử dụng lao động.',
        'Chưa được quyết định hay áp dụng. Cần có phương án cuối cùng và sửa Luật Tuyển dụng lao động nước ngoài. Hiện tại hãy theo quy định đang áp dụng (3 lần trong 3 năm đầu, 2 lần trong thời gian tái tuyển dụng, trong cùng khu vực).'
      ] },
    th: { title: 'กำลังหารือผ่อนคลายข้อจำกัดการย้ายงาน',
      points: [
        'รัฐบาลประกาศทิศทาง “แผนสนับสนุนแรงงานต่างชาติแบบบูรณาการ” และกำลังพิจารณาผ่อนคลายข้อจำกัดด้านเหตุผล จำนวนครั้ง และเขตพื้นที่ในการย้ายที่ทำงาน',
        'กำลังพิจารณาให้ผู้ที่มีคุณสมบัติทำงานได้นานขึ้นโดยไม่ต้องออกนอกประเทศ และสิทธิประโยชน์สำหรับผู้ทำงานนาน',
        'ขณะเดียวกันจะเข้มงวดเรื่องการคุ้มครองสิทธิมนุษยชนและการตรวจสอบนายจ้างมากขึ้น',
        'ยังไม่ได้ข้อสรุปและยังไม่มีผลบังคับ ต้องรอแผนฉบับสุดท้ายและการแก้กฎหมายการจ้างแรงงานต่างชาติ ตอนนี้ให้ทำตามกฎเดิม (3 ครั้งใน 3 ปีแรก 2 ครั้งในช่วงจ้างใหม่ ภายในเขตเดิม)'
      ] },
    id: { title: 'Pelonggaran batas pindah kerja sedang dibahas',
      points: [
        'Pemerintah mengumumkan arah “peta jalan dukungan terpadu tenaga kerja asing” dan sedang meninjau pelonggaran batas alasan, jumlah, dan wilayah pindah tempat kerja.',
        'Juga ditinjau cara agar pekerja yang memenuhi syarat bisa bekerja lebih lama tanpa keluar dari Korea, serta insentif masa kerja panjang.',
        'Di sisi lain, perlindungan HAM dan pengawasan pemberi kerja akan diperketat.',
        'Belum final dan belum berlaku. Perlu rencana akhir dan perubahan UU Ketenagakerjaan Pekerja Asing. Untuk sekarang ikuti aturan yang berlaku (3 kali dalam 3 tahun pertama, 2 kali pada masa kerja ulang, di wilayah yang sama).'
      ] }
  },
  {
    key: 'n-quota-2026',
    tagKey: 'eps',
    source: '외국인력정책위원회 · 고용노동부',
    sourceL: { en: 'Foreign Workforce Policy Committee · Ministry of Employment and Labor', vi: 'Ủy ban Chính sách Nhân lực Nước ngoài · Bộ Việc làm và Lao động', id: 'Komite Kebijakan Tenaga Kerja Asing · Kementerian Ketenagakerjaan', km: 'គណៈកម្មាធិការគោលនយោបាយកម្លាំងពលកម្មបរទេស · ក្រសួងការងារកូរ៉េ', ne: 'विदेशी जनशक्ति नीति समिति · रोजगार तथा श्रम मन्त्रालय' },
    url: 'https://www.moel.go.kr/news/enews/report/enewsView.do?news_seq=18774',
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
    th: { title: 'โควตาปี 2026 ลดเหลือ 80,000 คน',
      points: [
        'โควตาระบบอนุญาตจ้างงาน (E-9) ปี 2026 กำหนดไว้ที่ 80,000 คน',
        'ลดลงประมาณ 38% จาก 130,000 คนในปี 2025',
        'ผู้เข้ามาใหม่น้อยลงอาจทำให้การแข่งขันในหมู่คนที่อยู่ในเกาหลีแล้วสูงขึ้น',
        'หากวางแผนย้ายที่ทำงาน ควรเตรียมตัวแต่เนิ่น ๆ เพราะ 3 เดือนหางานอาจรู้สึกกระชั้นขึ้น'
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
    key: 'n-grain-2026',
    tagKey: 'eps',
    source: '외국인력정책위원회 · 고용노동부',
    url: 'https://www.moel.go.kr/news/enews/report/enewsView.do?news_seq=18774',
    date: '2025-12-22',
    checked: '2026-10-26',
    ko: { title: '곡물 재배업 외국인 고용 허용',
      points: [
        '벼·보리·밀·수수·감자 같은 곡물 재배 농가도 E-9 외국인을 고용할 수 있게 됐습니다.',
        '2026년 농축산업 쿼터는 1만 명입니다.',
        '시설원예·특작 분야는 면적 기준이 조정되고, 고용 인원(8명)은 그대로입니다.',
        '농축산업으로 사업장을 옮길 생각이라면 선택지가 조금 넓어질 수 있습니다.'
      ] },
    en: { title: 'Grain farms can now hire E-9 workers',
      points: [
        'Farms growing rice, barley, wheat, sorghum, potatoes and other grains can now hire E-9 workers.',
        'The 2026 quota for agriculture and livestock is 10,000 people.',
        'For greenhouse and special crops, the farm-size rules were adjusted; the hiring limit stays at 8 people.',
        'If you plan to move into farm work, you may have a few more options.'
      ] },
    vi: { title: 'Cho phép trang trại trồng ngũ cốc tuyển lao động E-9',
      points: [
        'Các trang trại trồng lúa, lúa mạch, lúa mì, cao lương, khoai tây và ngũ cốc khác nay được tuyển lao động E-9.',
        'Hạn ngạch ngành nông nghiệp – chăn nuôi năm 2026 là 10.000 người.',
        'Với nhà kính và cây trồng đặc thù, tiêu chuẩn diện tích được điều chỉnh; số người được tuyển vẫn là 8.',
        'Nếu bạn định chuyển sang làm nông nghiệp, lựa chọn có thể rộng hơn một chút.'
      ] },
    th: { title: 'ไร่ธัญพืชจ้างแรงงาน E-9 ได้',
      points: [
        'ไร่ที่ปลูกข้าว ข้าวบาร์เลย์ ข้าวสาลี ข้าวฟ่าง มันฝรั่ง และธัญพืชอื่น สามารถจ้างแรงงาน E-9 ได้แล้ว',
        'โควตาภาคเกษตรและปศุสัตว์ปี 2026 คือ 10,000 คน',
        'สำหรับโรงเรือนและพืชพิเศษ มีการปรับเกณฑ์ขนาดพื้นที่ ส่วนจำนวนที่จ้างได้ยังคงเป็น 8 คน',
        'หากวางแผนย้ายไปทำงานเกษตร อาจมีตัวเลือกมากขึ้นเล็กน้อย'
      ] },
    id: { title: 'Pertanian biji-bijian boleh merekrut E-9',
      points: [
        'Pertanian padi, jelai, gandum, sorgum, kentang, dan biji-bijian lain kini boleh merekrut pekerja E-9.',
        'Kuota sektor pertanian dan peternakan tahun 2026 adalah 10.000 orang.',
        'Untuk rumah kaca dan tanaman khusus, standar luas lahan disesuaikan; batas rekrut tetap 8 orang.',
        'Jika Anda berencana pindah ke pertanian, pilihan Anda mungkin sedikit bertambah.'
      ] }
  },
  {
    key: 'n-nonmetro-2026',
    tagKey: 'eps',
    source: '외국인력정책위원회 · 고용노동부',
    sourceL: { en: 'Foreign Workforce Policy Committee · Ministry of Employment and Labor', vi: 'Ủy ban Chính sách Nhân lực Nước ngoài · Bộ Việc làm và Lao động', id: 'Komite Kebijakan Tenaga Kerja Asing · Kementerian Ketenagakerjaan', km: 'គណៈកម្មាធិការគោលនយោបាយកម្លាំងពលកម្មបរទេស · ក្រសួងការងារកូរ៉េ', ne: 'विदेशी जनशक्ति नीति समिति · रोजगार तथा श्रम मन्त्रालय' },
    url: 'https://www.moel.go.kr/news/enews/report/enewsView.do?news_seq=18774',
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
    th: { title: 'เพิ่มเพดานจ้างงานนอกเขตเมืองหลวง',
      points: [
        'โรงงานนอกเขตเมืองหลวงจ้างแรงงานต่างชาติเพิ่มได้ถึง 30% เทียบกับแรงงานเกาหลี จากเดิม 20%',
        'บริษัทที่ย้ายฐานกลับมาซึ่งตั้งอยู่นอกเขตเมืองหลวงจ้างได้โดยไม่จำกัดขนาดกิจการ และยกเลิกเพดานเพิ่มเติม 50 คน',
        'หากคุณหางานนอกเขตเมืองหลวง ตัวเลือกอาจกว้างขึ้นเล็กน้อย'
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
    key: 'n-shipbuilding-2026',
    tagKey: 'eps',
    source: '외국인력정책위원회 · 고용노동부',
    url: 'https://www.moel.go.kr/news/enews/report/enewsView.do?news_seq=18774',
    date: '2025-12-22',
    checked: '2026-10-26',
    ko: { title: '조선업 별도 쿼터 종료',
      points: [
        '2023년 4월부터 한시로 운영된 조선업 별도 쿼터가 2025년 말로 끝났습니다.',
        '2026년부터 조선업은 제조업 쿼터(5만 명) 안에서 배정됩니다.',
        '정부는 조선업 인력 수급을 계속 살피는 전담팀을 두기로 했습니다.'
      ] },
    en: { title: 'Separate shipbuilding quota ended',
      points: [
        'The temporary separate quota for shipbuilding, run since April 2023, ended at the end of 2025.',
        'From 2026, shipbuilding is allocated within the manufacturing quota (50,000 people).',
        'The government set up a task force to keep monitoring the shipbuilding workforce.'
      ] },
    vi: { title: 'Kết thúc hạn ngạch riêng cho ngành đóng tàu',
      points: [
        'Hạn ngạch riêng tạm thời cho ngành đóng tàu, áp dụng từ tháng 4/2023, đã kết thúc vào cuối năm 2025.',
        'Từ năm 2026, ngành đóng tàu được phân bổ trong hạn ngạch ngành chế tạo (50.000 người).',
        'Chính phủ lập tổ chuyên trách để tiếp tục theo dõi nhân lực ngành đóng tàu.'
      ] },
    th: { title: 'ยุติโควตาแยกของอุตสาหกรรมต่อเรือ',
      points: [
        'โควตาแยกชั่วคราวของอุตสาหกรรมต่อเรือที่ใช้มาตั้งแต่เมษายน 2023 สิ้นสุดเมื่อปลายปี 2025',
        'ตั้งแต่ปี 2026 อุตสาหกรรมต่อเรือจะได้รับการจัดสรรภายในโควตาภาคการผลิต (50,000 คน)',
        'รัฐบาลตั้งคณะทำงานเพื่อติดตามสถานการณ์แรงงานต่อเรืออย่างต่อเนื่อง'
      ] },
    id: { title: 'Kuota khusus galangan kapal berakhir',
      points: [
        'Kuota khusus sementara untuk industri galangan kapal yang berjalan sejak April 2023 berakhir pada akhir 2025.',
        'Mulai 2026, galangan kapal dialokasikan dalam kuota manufaktur (50.000 orang).',
        'Pemerintah membentuk tim khusus untuk terus memantau tenaga kerja galangan kapal.'
      ] }
  },
  {
    key: 'n-minwage-2026',
    tagKey: 'eps',
    source: '고용노동부 고시 · 최저임금위원회',
    sourceL: { en: 'Ministry of Employment and Labor notice · Minimum Wage Commission', vi: 'Thông báo của Bộ Việc làm và Lao động · Ủy ban Lương tối thiểu', id: 'Pengumuman Kementerian Ketenagakerjaan · Komisi Upah Minimum', km: 'សេចក្តីប្រកាសរបស់ក្រសួងការងារកូរ៉េ · គណៈកម្មការប្រាក់ឈ្នួលអប្បបរមា', ne: 'रोजगार तथा श्रम मन्त्रालयको सूचना · न्यूनतम पारिश्रमिक आयोग' },
    url: 'https://www.moel.go.kr/news/enews/report/enewsView.do?news_seq=18144',
    date: '2025-08-05',
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
    th: { title: 'ค่าจ้างขั้นต่ำ 2026: 10,320 วอน/ชั่วโมง',
      points: [
        'ตั้งแต่ 1 มกราคม ถึง 31 ธันวาคม 2026 ค่าจ้างขั้นต่ำรายชั่วโมงคือ 10,320 วอน',
        'คำนวณเป็นรายเดือนที่ 40 ชั่วโมงต่อสัปดาห์ และ 209 ชั่วโมงต่อเดือน เท่ากับ 2,156,880 วอน',
        'ใช้เท่ากันทุกสถานประกอบการโดยไม่แบ่งประเภทกิจการ และใช้กับชาวต่างชาติเช่นเดียวกับคนเกาหลี',
        'หากได้รับน้อยกว่านี้ถือเป็นการค้างจ่ายค่าจ้าง โทรปรึกษากระทรวงแรงงานที่ 1350'
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
    key: 'l-seoul-center-2026',
    tagKey: 'local',
    region: 'seoul',
    source: '서울특별시 · 서울외국인포털',
    url: 'https://news.seoul.go.kr/welfare/archives/144416',
    date: '2026-03-16',
    checked: '2026-10-27',
    ko: { title: '외국인주민센터 상담·한국어 교육',
      points: [
        '서울시가 운영하는 외국인주민센터에서 상담, 한국어·컴퓨터 교육, 의료 지원을 받을 수 있습니다.',
        '서울에 사는 외국인 노동자도 이용할 수 있습니다.',
        '서울(영등포 02-2229-4900), 동부(성동 02-2282-7974), 강동, 금천, 양천, 은평 등에 센터가 있습니다.'
      ] },
    en: { title: 'Foreign Residents Centers: counseling and Korean classes',
      points: [
        'Seoul’s Foreign Residents Centers offer counseling, Korean and computer classes, and medical support.',
        'Foreign workers living in Seoul can use them.',
        'Centers include Seoul (Yeongdeungpo, 02-2229-4900), Dongbu (Seongdong, 02-2282-7974), Gangdong, Geumcheon, Yangcheon and Eunpyeong.'
      ] },
    vi: { title: 'Trung tâm cư dân nước ngoài: tư vấn và lớp tiếng Hàn',
      points: [
        'Các Trung tâm cư dân nước ngoài của Seoul cung cấp tư vấn, lớp tiếng Hàn, tin học và hỗ trợ y tế.',
        'Lao động nước ngoài sống ở Seoul có thể sử dụng.',
        'Có trung tâm ở Seoul (Yeongdeungpo, 02-2229-4900), Dongbu (Seongdong, 02-2282-7974), Gangdong, Geumcheon, Yangcheon, Eunpyeong.'
      ] },
    th: { title: 'ศูนย์ผู้พำนักชาวต่างชาติ: ให้คำปรึกษาและสอนภาษาเกาหลี',
      points: [
        'ศูนย์ผู้พำนักชาวต่างชาติของโซลให้คำปรึกษา สอนภาษาเกาหลีและคอมพิวเตอร์ และช่วยด้านการแพทย์',
        'แรงงานต่างชาติที่อาศัยอยู่ในโซลใช้บริการได้',
        'มีศูนย์ที่โซล (ยองดึงโพ 02-2229-4900) ทงบู (ซองดง 02-2282-7974) คังดง คึมชอน ยางชอน และอึนพยอง'
      ] },
    id: { title: 'Pusat Warga Asing: konsultasi dan kelas bahasa Korea',
      points: [
        'Pusat Warga Asing Seoul menyediakan konsultasi, kelas bahasa Korea dan komputer, serta bantuan medis.',
        'Pekerja asing yang tinggal di Seoul dapat menggunakannya.',
        'Pusat ada di Seoul (Yeongdeungpo, 02-2229-4900), Dongbu (Seongdong, 02-2282-7974), Gangdong, Geumcheon, Yangcheon, dan Eunpyeong.'
      ] }
  },
  {
    key: 'l-incheon-center-2026',
    tagKey: 'local',
    region: 'incheon',
    source: '인천광역시 · 인천외국인근로자지원센터',
    url: 'https://www.icff.or.kr/',
    date: '2026-01-01',
    checked: '2026-10-27',
    ko: { title: '외국인근로자지원센터 상담·교육·무료진료',
      points: [
        '생활·노무·법률 상담(방문·전화)과 한국어·정보화·산업안전 교육, 무료진료를 제공합니다.',
        '숙련기능인력(E-7-4) 비자 전환 추천도 이곳에서 안내합니다.',
        '남동구 호구포로 220 명진프라자 11~12층, 평일 9~18시. 상담 032-231-4545, 교육 032-231-4546.'
      ] },
    en: { title: 'Foreign Workers Support Center: counseling, classes, free clinic',
      points: [
        'It offers counseling on daily life, labor and legal issues (in person or by phone), Korean, computer and safety classes, and free medical care.',
        'It also guides recommendations for switching to the skilled worker (E-7-4) visa.',
        '11–12F Myeongjin Plaza, 220 Hogupo-ro, Namdong-gu; weekdays 9:00–18:00. Counseling 032-231-4545, classes 032-231-4546.'
      ] },
    vi: { title: 'Trung tâm hỗ trợ lao động nước ngoài: tư vấn, đào tạo, khám miễn phí',
      points: [
        'Tư vấn đời sống, lao động, pháp luật (trực tiếp hoặc qua điện thoại), lớp tiếng Hàn, tin học, an toàn lao động và khám bệnh miễn phí.',
        'Trung tâm cũng hướng dẫn đề cử chuyển sang visa lao động lành nghề (E-7-4).',
        'Tầng 11–12 Myeongjin Plaza, 220 Hogupo-ro, Namdong-gu; ngày thường 9–18 giờ. Tư vấn 032-231-4545, đào tạo 032-231-4546.'
      ] },
    th: { title: 'ศูนย์สนับสนุนแรงงานต่างชาติ: ปรึกษา อบรม ตรวจรักษาฟรี',
      points: [
        'ให้คำปรึกษาเรื่องชีวิตประจำวัน แรงงาน และกฎหมาย (มาที่ศูนย์หรือทางโทรศัพท์) สอนภาษาเกาหลี คอมพิวเตอร์ ความปลอดภัย และตรวจรักษาฟรี',
        'แนะนำการขอหนังสือรับรองเพื่อเปลี่ยนเป็นวีซ่าแรงงานฝีมือ (E-7-4) ด้วย',
        'ชั้น 11–12 อาคาร Myeongjin Plaza เลขที่ 220 Hogupo-ro เขตนัมดง วันธรรมดา 9:00–18:00 ปรึกษา 032-231-4545 อบรม 032-231-4546'
      ] },
    id: { title: 'Pusat Dukungan Pekerja Asing: konsultasi, pelatihan, klinik gratis',
      points: [
        'Menyediakan konsultasi kehidupan, ketenagakerjaan dan hukum (datang langsung atau telepon), kelas bahasa Korea, komputer, keselamatan kerja, dan pengobatan gratis.',
        'Juga memandu rekomendasi pindah ke visa tenaga terampil (E-7-4).',
        'Lantai 11–12 Myeongjin Plaza, 220 Hogupo-ro, Namdong-gu; hari kerja 09.00–18.00. Konsultasi 032-231-4545, pelatihan 032-231-4546.'
      ] }
  },
  {
    key: 'l-gyeonggi-legal-2026',
    tagKey: 'local',
    region: 'gyeonggi',
    source: '경기도 · 경기도이민사회통합지원센터',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493584/download.do',
    date: '2026-01-01',
    checked: '2026-10-27',
    ko: { title: '이민사회통합지원센터 법률·노무 다국어 상담',
      points: [
        '노무사·변호사의 법률·노무 상담과 생활 민원 다국어 상담을 제공합니다.',
        '경기도에 사는 외국인이면 누구나 이용할 수 있어 임금 체불·산재 상담에 활용할 수 있습니다.',
        '권역별 고문 변호사·노무사가 권리 구제를 돕습니다.'
      ] },
    en: { title: 'Immigrant Integration Center: multilingual legal and labor counseling',
      points: [
        'Labor attorneys and lawyers give legal and labor counseling, plus multilingual help with daily-life issues.',
        'Any foreign resident of Gyeonggi can use it, including for unpaid wages or industrial accidents.',
        'Regional advisory lawyers and labor attorneys help with remedies.'
      ] },
    vi: { title: 'Trung tâm hội nhập cộng đồng di dân: tư vấn pháp luật, lao động đa ngôn ngữ',
      points: [
        'Luật sư và chuyên viên lao động tư vấn pháp luật, lao động và các vấn đề đời sống bằng nhiều ngôn ngữ.',
        'Mọi người nước ngoài sống ở Gyeonggi đều dùng được, kể cả khi bị nợ lương hay tai nạn lao động.',
        'Luật sư, chuyên viên lao động theo từng khu vực hỗ trợ bảo vệ quyền lợi.'
      ] },
    th: { title: 'ศูนย์บูรณาการสังคมผู้ย้ายถิ่น: ปรึกษากฎหมายและแรงงานหลายภาษา',
      points: [
        'ทนายความและที่ปรึกษาแรงงานให้คำปรึกษาด้านกฎหมาย แรงงาน และเรื่องในชีวิตประจำวันหลายภาษา',
        'ชาวต่างชาติที่อาศัยในคยองกีทุกคนใช้ได้ รวมถึงเรื่องค้างจ่ายค่าจ้างและอุบัติเหตุจากการทำงาน',
        'มีทนายความและที่ปรึกษาแรงงานประจำแต่ละพื้นที่ช่วยเยียวยาสิทธิ'
      ] },
    id: { title: 'Pusat Integrasi Masyarakat Imigran: konsultasi hukum dan kerja multibahasa',
      points: [
        'Pengacara dan konsultan ketenagakerjaan memberi konsultasi hukum, ketenagakerjaan, dan urusan sehari-hari dalam banyak bahasa.',
        'Semua warga asing di Gyeonggi dapat memakainya, termasuk untuk upah tertunggak atau kecelakaan kerja.',
        'Pengacara dan konsultan per wilayah membantu pemulihan hak.'
      ] }
  },
  {
    key: 'l-gyeonggi-shelter-2026',
    tagKey: 'local',
    region: 'gyeonggi',
    source: '경기도 이민사회정책과 · 언론 보도',
    url: 'https://www.newsis.com/view/NISX20260513_0003627749',
    date: '2026-05-13',
    checked: '2026-10-27',
    ko: { title: '외국인노동자 쉼터 지원',
      points: [
        '실직이나 재해로 갈 곳이 없는 외국인 노동자가 잠시 머무는 쉼터를 경기도가 지원합니다.',
        '2026년에는 도내 비영리단체 쉼터 7곳을 선정했습니다.',
        '사업장을 옮기는 동안 머물 곳이 없으면 쉼터를 이용할 수 있습니다.'
      ] },
    en: { title: 'Support for foreign worker shelters',
      points: [
        'Gyeonggi supports shelters where foreign workers left without a place to stay after job loss or an accident can stay for a while.',
        'In 2026, seven shelters run by non-profit groups in the province were selected.',
        'If you have nowhere to stay while changing workplaces, you can use a shelter.'
      ] },
    vi: { title: 'Hỗ trợ nhà tạm trú cho lao động nước ngoài',
      points: [
        'Gyeonggi hỗ trợ các nhà tạm trú cho lao động nước ngoài không có chỗ ở do mất việc hoặc tai nạn.',
        'Năm 2026, tỉnh đã chọn 7 nhà tạm trú do tổ chức phi lợi nhuận vận hành.',
        'Nếu không có chỗ ở trong thời gian chuyển nơi làm việc, bạn có thể dùng nhà tạm trú.'
      ] },
    th: { title: 'สนับสนุนที่พักพิงแรงงานต่างชาติ',
      points: [
        'คยองกีสนับสนุนที่พักพิงชั่วคราวสำหรับแรงงานต่างชาติที่ไม่มีที่อยู่เพราะตกงานหรือประสบอุบัติเหตุ',
        'ปี 2026 คัดเลือกที่พักพิงขององค์กรไม่แสวงกำไรในจังหวัด 7 แห่ง',
        'หากไม่มีที่พักระหว่างเปลี่ยนสถานที่ทำงาน ใช้ที่พักพิงได้'
      ] },
    id: { title: 'Dukungan shelter pekerja asing',
      points: [
        'Gyeonggi mendukung shelter tempat pekerja asing yang kehilangan tempat tinggal karena PHK atau kecelakaan dapat tinggal sementara.',
        'Pada 2026 dipilih 7 shelter yang dikelola organisasi nirlaba di provinsi ini.',
        'Jika tidak punya tempat tinggal saat pindah kerja, Anda dapat memakai shelter.'
      ] }
  },
  {
    key: 'l-gangwon-e74-2026',
    tagKey: 'local',
    region: 'gangwon',
    source: '강원특별자치도 지역소멸대응정책관',
    url: 'https://state.gwd.go.kr/portal/bulletin/notification?articleSeq=268522',
    date: '2026-03-04',
    checked: '2026-10-27',
    until: '2026-12-31',
    ko: { title: '숙련기능인력(E-7-4) 비자 전환 추천',
      points: [
        '요건을 갖춘 E-9·E-10·H-2 근로자를 점수제로 검증해 도가 법무부에 E-7-4 전환을 추천합니다.',
        '2026년 12월 31일까지 접수하며, 배정 인원이 차면 일찍 끝날 수 있습니다.',
        '사는 시·군 담당 부서에 방문하거나 이메일로 신청합니다. 도 문의 033-249-2498.'
      ] },
    en: { title: 'Recommendation for switching to the skilled worker (E-7-4) visa',
      points: [
        'The province checks eligible E-9, E-10 and H-2 workers with a points system and recommends them to the Ministry of Justice for E-7-4.',
        'Applications are accepted until 31 December 2026 and may close early once the quota is filled.',
        'Apply at your city or county office in person or by email. Province contact: 033-249-2498.'
      ] },
    vi: { title: 'Đề cử chuyển sang visa lao động lành nghề (E-7-4)',
      points: [
        'Tỉnh xét lao động E-9, E-10, H-2 đủ điều kiện theo thang điểm và đề cử lên Bộ Tư pháp để chuyển sang E-7-4.',
        'Nhận hồ sơ đến 31/12/2026, có thể kết thúc sớm khi hết chỉ tiêu.',
        'Nộp trực tiếp hoặc qua email tại cơ quan thành phố/huyện nơi bạn sống. Liên hệ tỉnh: 033-249-2498.'
      ] },
    th: { title: 'หนังสือรับรองเปลี่ยนเป็นวีซ่าแรงงานฝีมือ (E-7-4)',
      points: [
        'จังหวัดตรวจสอบแรงงาน E-9, E-10, H-2 ที่มีคุณสมบัติด้วยระบบคะแนน แล้วเสนอชื่อต่อกระทรวงยุติธรรมเพื่อเปลี่ยนเป็น E-7-4',
        'รับสมัครถึง 31 ธันวาคม 2026 และอาจปิดก่อนหากโควตาเต็ม',
        'ยื่นที่หน่วยงานของเมืองหรืออำเภอที่อาศัยอยู่ หรือทางอีเมล ติดต่อจังหวัด 033-249-2498'
      ] },
    id: { title: 'Rekomendasi pindah ke visa tenaga terampil (E-7-4)',
      points: [
        'Provinsi menilai pekerja E-9, E-10, H-2 yang memenuhi syarat dengan sistem poin dan merekomendasikan mereka ke Kementerian Kehakiman untuk E-7-4.',
        'Pendaftaran sampai 31 Desember 2026 dan bisa ditutup lebih awal bila kuota penuh.',
        'Daftar di kantor kota/kabupaten tempat tinggal atau lewat email. Kontak provinsi: 033-249-2498.'
      ] }
  },
  {
    key: 'l-daejeon-center-2026',
    tagKey: 'local',
    region: 'daejeon',
    source: '대전광역시 · 법무부 외국인정책 시행계획',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493578/download.do',
    date: '2026-01-01',
    checked: '2026-10-27',
    ko: { title: '외국인주민 통합지원센터 상담·한국어 교실',
      points: [
        '대전시가 운영하는 외국인주민 통합지원센터에서 한국어 교실과 생활 적응 교육을 들을 수 있습니다.',
        '법률·취업·생활 상담도 받을 수 있습니다.',
        '문의는 대전시 국제통상담당관 042-270-3342입니다.'
      ] },
    en: { title: 'Foreign Residents Integrated Support Center: counseling and Korean classes',
      points: [
        'Daejeon’s integrated support center offers Korean classes and daily-life adjustment education.',
        'You can also get legal, job and daily-life counseling.',
        'Contact: Daejeon International Trade Office, 042-270-3342.'
      ] },
    vi: { title: 'Trung tâm hỗ trợ tổng hợp cư dân nước ngoài: tư vấn và lớp tiếng Hàn',
      points: [
        'Trung tâm của Daejeon có lớp tiếng Hàn và giáo dục thích nghi cuộc sống.',
        'Bạn cũng có thể được tư vấn pháp luật, việc làm, đời sống.',
        'Liên hệ: Phòng Thương mại quốc tế Daejeon, 042-270-3342.'
      ] },
    th: { title: 'ศูนย์สนับสนุนผู้พำนักชาวต่างชาติแบบครบวงจร: ปรึกษาและเรียนภาษาเกาหลี',
      points: [
        'ศูนย์ของแทจอนมีชั้นเรียนภาษาเกาหลีและการอบรมปรับตัวใช้ชีวิต',
        'รับคำปรึกษาด้านกฎหมาย การหางาน และชีวิตประจำวันได้',
        'ติดต่อฝ่ายการค้าระหว่างประเทศ เมืองแทจอน 042-270-3342'
      ] },
    id: { title: 'Pusat Dukungan Terpadu Warga Asing: konsultasi dan kelas bahasa Korea',
      points: [
        'Pusat milik Daejeon menyediakan kelas bahasa Korea dan pendidikan adaptasi hidup.',
        'Anda juga bisa mendapat konsultasi hukum, pekerjaan, dan kehidupan sehari-hari.',
        'Kontak: Kantor Perdagangan Internasional Daejeon, 042-270-3342.'
      ] }
  },
  {
    key: 'l-daejeon-e74-2026',
    tagKey: 'local',
    region: 'daejeon',
    source: '대전광역시 일자리경제정책과 · 법무부 외국인정책 시행계획',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493578/download.do',
    date: '2026-02-01',
    checked: '2026-10-27',
    until: '2026-12-31',
    ko: { title: '숙련기능인력(E-7-4·E-7-4R) 비자 전환 추천',
      points: [
        '최근 10년 동안 E-9·E-10·H-2로 4년 이상 체류하고 대전 기업에서 1년 이상 일한 근로자가 대상입니다.',
        '숙련기능인력 점수표에서 200점 이상이어야 하며, 2026년 2월~12월에 추천합니다(배정 인원이 차면 마감).',
        '대전시 일자리경제정책과에 서류를 직접 내거나 등기로 보냅니다. 문의 042-270-4594.'
      ] },
    en: { title: 'Recommendation for skilled worker (E-7-4 / E-7-4R) visas',
      points: [
        'For workers who stayed 4+ years on E-9, E-10 or H-2 in the last 10 years and worked 1+ year at a Daejeon company.',
        'You need 200+ points on the skilled-worker score sheet; recommendations run February–December 2026 (closes when the quota is filled).',
        'Submit documents in person or by registered mail to the Daejeon Jobs and Economic Policy Division. Contact: 042-270-4594.'
      ] },
    vi: { title: 'Đề cử chuyển sang visa lao động lành nghề (E-7-4, E-7-4R)',
      points: [
        'Dành cho lao động đã lưu trú từ 4 năm trở lên bằng E-9, E-10, H-2 trong 10 năm gần đây và làm việc từ 1 năm trở lên tại doanh nghiệp ở Daejeon.',
        'Cần đạt từ 200 điểm trên bảng điểm lao động lành nghề; đề cử từ tháng 2 đến tháng 12/2026 (hết chỉ tiêu thì dừng).',
        'Nộp hồ sơ trực tiếp hoặc gửi bảo đảm đến Phòng Chính sách việc làm – kinh tế Daejeon. Liên hệ 042-270-4594.'
      ] },
    th: { title: 'หนังสือรับรองเปลี่ยนเป็นวีซ่าแรงงานฝีมือ (E-7-4, E-7-4R)',
      points: [
        'สำหรับแรงงานที่พำนักด้วย E-9, E-10, H-2 รวม 4 ปีขึ้นไปในช่วง 10 ปีหลัง และทำงานกับบริษัทในแทจอน 1 ปีขึ้นไป',
        'ต้องได้ 200 คะแนนขึ้นไปตามตารางคะแนนแรงงานฝีมือ เสนอชื่อช่วงกุมภาพันธ์–ธันวาคม 2026 (ปิดเมื่อโควตาเต็ม)',
        'ยื่นเอกสารด้วยตนเองหรือส่งไปรษณีย์ลงทะเบียนที่ฝ่ายนโยบายการจ้างงานและเศรษฐกิจ เมืองแทจอน ติดต่อ 042-270-4594'
      ] },
    id: { title: 'Rekomendasi visa tenaga terampil (E-7-4, E-7-4R)',
      points: [
        'Untuk pekerja yang tinggal 4 tahun atau lebih dengan E-9, E-10, H-2 dalam 10 tahun terakhir dan bekerja 1 tahun atau lebih di perusahaan Daejeon.',
        'Perlu 200 poin atau lebih pada tabel poin tenaga terampil; rekomendasi Februari–Desember 2026 (ditutup bila kuota penuh).',
        'Serahkan dokumen langsung atau lewat pos tercatat ke Divisi Kebijakan Kerja dan Ekonomi Daejeon. Kontak 042-270-4594.'
      ] }
  },
  {
    key: 'l-sejong-korean-2026',
    tagKey: 'local',
    region: 'sejong',
    source: '세종특별자치시 기업지원과 · 법무부 외국인정책 시행계획',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493580/download.do',
    date: '2026-02-01',
    checked: '2026-10-27',
    ko: { title: '외국인근로자 한국어·생활법률 교육',
      points: [
        '세종이주노동자복지센터에서 외국인근로자를 위한 한국어 교육, 문화 체험, 기초 생활법률 교육을 합니다.',
        '2026년에는 4월부터 운영합니다.',
        '문의는 세종시 기업지원과 044-300-4845입니다.'
      ] },
    en: { title: 'Korean and everyday-law classes for foreign workers',
      points: [
        'The Sejong Migrant Workers Welfare Center runs Korean classes, cultural activities and basic everyday-law education for foreign workers.',
        'In 2026 the program runs from April.',
        'Contact: Sejong City Business Support Division, 044-300-4845.'
      ] },
    vi: { title: 'Lớp tiếng Hàn và pháp luật đời sống cho lao động nước ngoài',
      points: [
        'Trung tâm phúc lợi lao động di trú Sejong tổ chức lớp tiếng Hàn, trải nghiệm văn hóa và giáo dục pháp luật đời sống cơ bản.',
        'Năm 2026 chương trình bắt đầu từ tháng 4.',
        'Liên hệ: Phòng Hỗ trợ doanh nghiệp thành phố Sejong, 044-300-4845.'
      ] },
    th: { title: 'สอนภาษาเกาหลีและกฎหมายในชีวิตประจำวันสำหรับแรงงานต่างชาติ',
      points: [
        'ศูนย์สวัสดิการแรงงานข้ามชาติเซจงจัดสอนภาษาเกาหลี กิจกรรมวัฒนธรรม และกฎหมายพื้นฐานในชีวิตประจำวัน',
        'ปี 2026 เริ่มตั้งแต่เดือนเมษายน',
        'ติดต่อฝ่ายสนับสนุนธุรกิจ เมืองเซจง 044-300-4845'
      ] },
    id: { title: 'Kelas bahasa Korea dan hukum sehari-hari untuk pekerja asing',
      points: [
        'Pusat Kesejahteraan Pekerja Migran Sejong mengadakan kelas bahasa Korea, kegiatan budaya, dan pendidikan hukum dasar sehari-hari.',
        'Pada 2026 program dimulai April.',
        'Kontak: Divisi Dukungan Usaha Kota Sejong, 044-300-4845.'
      ] }
  },
  {
    key: 'l-chungbuk-e74r-2026',
    tagKey: 'local',
    region: 'chungbuk',
    source: '충청북도 외국인정책추진단 · 법무부 외국인정책 시행계획',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493586/download.do',
    date: '2026-01-01',
    checked: '2026-10-27',
    until: '2026-12-31',
    ko: { title: '지역특화형 숙련기능인력(E-7-4R) 추천',
      points: [
        '충북 인구감소지역 6개 시·군이 그 지역에서 3년 이상 살며 일하는 조건으로 외국인을 추천합니다.',
        '2026년 숙련기능인력 모집 인원은 274명입니다.',
        '사는 시·군에 신청하면 도를 거쳐 법무부로 추천됩니다. 문의 043-220-2693.'
      ] },
    en: { title: 'Regional skilled worker (E-7-4R) recommendation',
      points: [
        'Six depopulating cities and counties in North Chungcheong recommend foreign workers on condition they live and work there for 3+ years.',
        'The 2026 intake for skilled workers is 274 people.',
        'Apply at your city or county; the province forwards it to the Ministry of Justice. Contact: 043-220-2693.'
      ] },
    vi: { title: 'Đề cử lao động lành nghề theo vùng (E-7-4R)',
      points: [
        '6 thành phố/huyện đang giảm dân số ở Bắc Chungcheong đề cử lao động nước ngoài với điều kiện sống và làm việc tại đó từ 3 năm.',
        'Chỉ tiêu lao động lành nghề năm 2026 là 274 người.',
        'Nộp tại thành phố/huyện nơi bạn sống, tỉnh sẽ chuyển lên Bộ Tư pháp. Liên hệ 043-220-2693.'
      ] },
    th: { title: 'หนังสือรับรองแรงงานฝีมือเฉพาะพื้นที่ (E-7-4R)',
      points: [
        '6 เมืองและอำเภอที่ประชากรลดลงในชุงชองเหนือเสนอชื่อแรงงานต่างชาติ โดยมีเงื่อนไขว่าต้องอยู่และทำงานในพื้นที่ 3 ปีขึ้นไป',
        'ปี 2026 รับแรงงานฝีมือ 274 คน',
        'ยื่นที่เมืองหรืออำเภอที่อาศัยอยู่ จังหวัดจะส่งต่อกระทรวงยุติธรรม ติดต่อ 043-220-2693'
      ] },
    id: { title: 'Rekomendasi tenaga terampil daerah (E-7-4R)',
      points: [
        'Enam kota/kabupaten yang penduduknya menurun di Chungcheong Utara merekomendasikan pekerja asing dengan syarat tinggal dan bekerja di sana 3 tahun atau lebih.',
        'Kuota tenaga terampil 2026 adalah 274 orang.',
        'Daftar di kota/kabupaten tempat tinggal; provinsi meneruskannya ke Kementerian Kehakiman. Kontak 043-220-2693.'
      ] }
  },
  {
    key: 'l-chungbuk-edu-2026',
    tagKey: 'local',
    region: 'chungbuk',
    source: '충청북도 외국인정책추진단 · 법무부 외국인정책 시행계획',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493586/download.do',
    date: '2026-03-01',
    checked: '2026-10-27',
    ko: { title: '외국인근로자 한국어·정보화·문화 교육',
      points: [
        '충북도가 지원하는 외국인 지원기관에서 한국어, 정보화, 문화 교육과 지역 탐방 행사를 엽니다.',
        '2026년에는 3월부터 12월까지 운영합니다.',
        '문의는 충청북도 외국인정책추진단 043-220-2702입니다.'
      ] },
    en: { title: 'Korean, computer and culture classes for foreign workers',
      points: [
        'Support organizations funded by the province run Korean, computer and culture classes and local tours.',
        'In 2026 they run from March to December.',
        'Contact: Chungbuk Foreign Policy Task Force, 043-220-2702.'
      ] },
    vi: { title: 'Lớp tiếng Hàn, tin học, văn hóa cho lao động nước ngoài',
      points: [
        'Các tổ chức hỗ trợ được tỉnh tài trợ mở lớp tiếng Hàn, tin học, văn hóa và chuyến tham quan địa phương.',
        'Năm 2026 hoạt động từ tháng 3 đến tháng 12.',
        'Liên hệ: Ban xúc tiến chính sách người nước ngoài Chungbuk, 043-220-2702.'
      ] },
    th: { title: 'สอนภาษาเกาหลี คอมพิวเตอร์ และวัฒนธรรมสำหรับแรงงานต่างชาติ',
      points: [
        'หน่วยงานช่วยเหลือที่จังหวัดสนับสนุนจัดสอนภาษาเกาหลี คอมพิวเตอร์ วัฒนธรรม และพาเที่ยวชมท้องถิ่น',
        'ปี 2026 จัดตั้งแต่เดือนมีนาคมถึงธันวาคม',
        'ติดต่อคณะทำงานนโยบายชาวต่างชาติ ชุงบุก 043-220-2702'
      ] },
    id: { title: 'Kelas bahasa Korea, komputer, dan budaya untuk pekerja asing',
      points: [
        'Lembaga pendamping yang didanai provinsi mengadakan kelas bahasa Korea, komputer, budaya, dan wisata daerah.',
        'Pada 2026 berjalan Maret sampai Desember.',
        'Kontak: Satgas Kebijakan Warga Asing Chungbuk, 043-220-2702.'
      ] }
  },
  {
    key: 'l-chungnam-shelter-2026',
    tagKey: 'local',
    region: 'chungnam',
    source: '충청남도 외국인정책과 · 법무부 외국인정책 시행계획',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493587/download.do',
    date: '2026-01-01',
    checked: '2026-10-27',
    ko: { title: '외국인근로자 쉼터(천안·당진)',
      points: [
        '사업장을 옮기는 고용허가제 근로자에게 다시 취업할 때까지 숙식을 제공합니다.',
        '구직 기간(3개월) 안에 숙식이 필요하면 이용할 수 있습니다.',
        '천안·당진 쉼터에서 통번역, 고충·노동법 상담, 한글 교육, 취업 지원, 진료도 합니다.'
      ] },
    en: { title: 'Foreign worker shelters (Cheonan, Dangjin)',
      points: [
        'They provide room and board to EPS workers who are changing workplaces until they find a new job.',
        'You can use them during your 3-month job-search period if you need a place to stay.',
        'The Cheonan and Dangjin shelters also offer interpreting, grievance and labor-law counseling, Korean classes, job support and medical care.'
      ] },
    vi: { title: 'Nhà tạm trú lao động nước ngoài (Cheonan, Dangjin)',
      points: [
        'Cung cấp chỗ ăn ở cho lao động EPS đang chuyển nơi làm việc cho đến khi có việc mới.',
        'Bạn có thể dùng trong thời gian tìm việc 3 tháng nếu cần chỗ ở.',
        'Nhà tạm trú Cheonan và Dangjin còn có phiên dịch, tư vấn khiếu nại và luật lao động, lớp tiếng Hàn, hỗ trợ việc làm và khám bệnh.'
      ] },
    th: { title: 'ที่พักพิงแรงงานต่างชาติ (ชอนัน ทังจิน)',
      points: [
        'ให้ที่พักและอาหารแก่แรงงาน EPS ที่กำลังเปลี่ยนสถานที่ทำงานจนกว่าจะได้งานใหม่',
        'ใช้ได้ในช่วงหางาน 3 เดือนหากต้องการที่พัก',
        'ที่พักพิงชอนันและทังจินมีล่าม ปรึกษาปัญหาและกฎหมายแรงงาน สอนภาษาเกาหลี ช่วยหางาน และตรวจรักษาด้วย'
      ] },
    id: { title: 'Shelter pekerja asing (Cheonan, Dangjin)',
      points: [
        'Menyediakan tempat tinggal dan makan bagi pekerja EPS yang sedang pindah kerja sampai mendapat pekerjaan baru.',
        'Dapat dipakai selama masa cari kerja 3 bulan bila butuh tempat tinggal.',
        'Shelter Cheonan dan Dangjin juga menyediakan penerjemah, konsultasi keluhan dan hukum ketenagakerjaan, kelas bahasa Korea, bantuan kerja, dan pengobatan.'
      ] }
  },
  {
    key: 'l-chungnam-centers-2026',
    tagKey: 'local',
    region: 'chungnam',
    source: '충청남도 외국인정책과 · 법무부 외국인정책 시행계획',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493587/download.do',
    date: '2026-01-01',
    checked: '2026-10-27',
    ko: { title: '외국인근로자지원센터 6곳 상담',
      points: [
        '천안, 아산, 서산, 당진, 서천, 홍성의 외국인근로자지원센터 6곳을 충남도가 지원합니다.',
        '임금 체불·차별 같은 노동인권 상담과 노동 고충 상담, 생활 적응 지원을 받을 수 있습니다.',
        '가까운 센터를 찾아가면 됩니다.'
      ] },
    en: { title: 'Counseling at six foreign worker support centers',
      points: [
        'The province supports six foreign worker support centers in Cheonan, Asan, Seosan, Dangjin, Seocheon and Hongseong.',
        'They counsel on labor rights such as unpaid wages and discrimination, work grievances and daily-life adjustment.',
        'Visit the center nearest you.'
      ] },
    vi: { title: 'Tư vấn tại 6 trung tâm hỗ trợ lao động nước ngoài',
      points: [
        'Tỉnh hỗ trợ 6 trung tâm ở Cheonan, Asan, Seosan, Dangjin, Seocheon, Hongseong.',
        'Tư vấn quyền lao động như nợ lương, phân biệt đối xử, khó khăn trong công việc và thích nghi cuộc sống.',
        'Hãy đến trung tâm gần bạn nhất.'
      ] },
    th: { title: 'ปรึกษาที่ศูนย์สนับสนุนแรงงานต่างชาติ 6 แห่ง',
      points: [
        'จังหวัดสนับสนุนศูนย์ 6 แห่งที่ชอนัน อาซัน ซอซัน ทังจิน ซอชอน และฮงซอง',
        'ให้คำปรึกษาเรื่องสิทธิแรงงาน เช่น ค้างจ่ายค่าจ้าง การเลือกปฏิบัติ ปัญหาในงาน และการปรับตัว',
        'ไปที่ศูนย์ที่ใกล้ที่สุดได้เลย'
      ] },
    id: { title: 'Konsultasi di enam pusat dukungan pekerja asing',
      points: [
        'Provinsi mendukung enam pusat di Cheonan, Asan, Seosan, Dangjin, Seocheon, dan Hongseong.',
        'Melayani konsultasi hak pekerja seperti upah tertunggak dan diskriminasi, keluhan kerja, serta adaptasi hidup.',
        'Datangi pusat terdekat.'
      ] }
  },
  {
    key: 'l-daegu-center-2026',
    tagKey: 'local',
    region: 'daegu',
    source: '대구광역시 고용노동정책과 · 법무부 외국인정책 시행계획',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493575/download.do',
    date: '2026-01-01',
    checked: '2026-10-27',
    ko: { title: '대구·달성 외국인근로자지원센터 상담·교육',
      points: [
        '대구외국인근로자지원센터와 달성외국인근로자지원센터에서 고충 상담(방문·전화)을 받을 수 있습니다.',
        '한국어·정보화·산업안전·생활법률 교육도 하고, 대구센터는 무료 한의 진료도 운영합니다.',
        '사업 문의는 대구시 고용노동정책과 053-803-3245입니다.'
      ] },
    en: { title: 'Daegu and Dalseong Foreign Workers Support Centers',
      points: [
        'You can get grievance counseling (in person or by phone) at the Daegu and Dalseong centers.',
        'They also run Korean, computer, safety and everyday-law classes; the Daegu center offers free Korean-medicine care.',
        'Program contact: Daegu Employment and Labor Policy Division, 053-803-3245.'
      ] },
    vi: { title: 'Trung tâm hỗ trợ lao động nước ngoài Daegu và Dalseong',
      points: [
        'Bạn có thể được tư vấn khó khăn (trực tiếp hoặc qua điện thoại) tại trung tâm Daegu và Dalseong.',
        'Có lớp tiếng Hàn, tin học, an toàn lao động, pháp luật đời sống; trung tâm Daegu còn khám Đông y miễn phí.',
        'Liên hệ: Phòng Chính sách việc làm – lao động Daegu, 053-803-3245.'
      ] },
    th: { title: 'ศูนย์สนับสนุนแรงงานต่างชาติแทกูและทัลซอง',
      points: [
        'รับคำปรึกษาปัญหาได้ที่ศูนย์แทกูและทัลซอง (มาที่ศูนย์หรือทางโทรศัพท์)',
        'มีสอนภาษาเกาหลี คอมพิวเตอร์ ความปลอดภัย กฎหมายในชีวิตประจำวัน และศูนย์แทกูมีแพทย์แผนเกาหลีตรวจฟรี',
        'ติดต่อฝ่ายนโยบายการจ้างงานและแรงงาน เมืองแทกู 053-803-3245'
      ] },
    id: { title: 'Pusat Dukungan Pekerja Asing Daegu dan Dalseong',
      points: [
        'Anda bisa mendapat konsultasi keluhan (datang langsung atau telepon) di pusat Daegu dan Dalseong.',
        'Ada kelas bahasa Korea, komputer, keselamatan kerja, hukum sehari-hari; pusat Daegu juga menyediakan pengobatan tradisional Korea gratis.',
        'Kontak: Divisi Kebijakan Kerja Daegu, 053-803-3245.'
      ] }
  },
  {
    key: 'l-daegu-e74r-2026',
    tagKey: 'local',
    region: 'daegu',
    source: '대구광역시 정책기획관 · 법무부 외국인정책 시행계획',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493575/download.do',
    date: '2026-01-01',
    checked: '2026-10-27',
    until: '2026-12-31',
    ko: { title: '지역특화형 숙련기능인력(E-7-4R) 추천(서구·남구)',
      points: [
        '인구감소지역인 서구와 남구에서 법무부 요건을 갖춘 외국인에게 체류자격 변경 추천서를 발급합니다.',
        '2026년 1~12월 매주 추천하며, 숙련기능인력 배정 인원이 차면 마감됩니다.',
        '문의는 대구시 정책기획관 미래정책팀 053-803-6574입니다.'
      ] },
    en: { title: 'Regional skilled worker (E-7-4R) recommendation (Seo-gu, Nam-gu)',
      points: [
        'In the depopulating districts of Seo-gu and Nam-gu, the city issues status-change recommendations to foreigners who meet Ministry of Justice requirements.',
        'Recommendations are made weekly through 2026 and close when the skilled-worker quota is filled.',
        'Contact: Daegu Future Policy Team, 053-803-6574.'
      ] },
    vi: { title: 'Đề cử lao động lành nghề theo vùng (E-7-4R) (Seo-gu, Nam-gu)',
      points: [
        'Tại hai quận đang giảm dân số Seo-gu và Nam-gu, thành phố cấp thư đề cử đổi tư cách lưu trú cho người đủ điều kiện của Bộ Tư pháp.',
        'Đề cử hằng tuần trong năm 2026, dừng khi hết chỉ tiêu lao động lành nghề.',
        'Liên hệ: Nhóm Chính sách tương lai Daegu, 053-803-6574.'
      ] },
    th: { title: 'หนังสือรับรองแรงงานฝีมือเฉพาะพื้นที่ (E-7-4R) (เขตซอกู นัมกู)',
      points: [
        'ในเขตซอกูและนัมกูที่ประชากรลดลง เมืองออกหนังสือรับรองเปลี่ยนสถานะการพำนักให้ผู้ที่มีคุณสมบัติตามกระทรวงยุติธรรม',
        'เสนอชื่อทุกสัปดาห์ตลอดปี 2026 และปิดเมื่อโควตาแรงงานฝีมือเต็ม',
        'ติดต่อทีมนโยบายอนาคต เมืองแทกู 053-803-6574'
      ] },
    id: { title: 'Rekomendasi tenaga terampil daerah (E-7-4R) (Seo-gu, Nam-gu)',
      points: [
        'Di distrik Seo-gu dan Nam-gu yang penduduknya menurun, kota menerbitkan rekomendasi ganti status bagi warga asing yang memenuhi syarat Kementerian Kehakiman.',
        'Rekomendasi dibuat tiap minggu sepanjang 2026 dan ditutup bila kuota tenaga terampil penuh.',
        'Kontak: Tim Kebijakan Masa Depan Daegu, 053-803-6574.'
      ] }
  },
  {
    key: 'l-busan-center-2026',
    tagKey: 'local',
    region: 'busan',
    source: '부산광역시 · 법무부 외국인정책 시행계획',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493574/download.do',
    date: '2026-01-01',
    checked: '2026-10-27',
    ko: { title: '외국인근로자지원센터 노동 상담·한국어 교육',
      points: [
        'E-9·H-2 외국인근로자 전용 지원센터로, 노동·고용허가제 상담과 통역을 제공합니다.',
        '한국어·정보화·산업안전·생활법률 교육과 건강검진도 운영합니다.',
        '연제구 부산시노동자종합복지관 지하 1층에 있습니다.'
      ] },
    en: { title: 'Foreign Workers Support Center: labor counseling and Korean classes',
      points: [
        'A support center just for E-9 and H-2 workers, offering labor and EPS counseling with interpreting.',
        'It also runs Korean, computer, safety and everyday-law classes and health checkups.',
        'Located on B1 of the Busan Workers’ Welfare Center in Yeonje-gu.'
      ] },
    vi: { title: 'Trung tâm hỗ trợ lao động nước ngoài: tư vấn lao động, lớp tiếng Hàn',
      points: [
        'Trung tâm dành riêng cho lao động E-9, H-2, tư vấn lao động, EPS và có phiên dịch.',
        'Có lớp tiếng Hàn, tin học, an toàn lao động, pháp luật đời sống và khám sức khỏe.',
        'Ở tầng hầm B1 Trung tâm phúc lợi người lao động Busan, quận Yeonje.'
      ] },
    th: { title: 'ศูนย์สนับสนุนแรงงานต่างชาติ: ปรึกษาแรงงานและสอนภาษาเกาหลี',
      points: [
        'ศูนย์เฉพาะแรงงาน E-9 และ H-2 ให้คำปรึกษาเรื่องแรงงานและ EPS พร้อมล่าม',
        'มีสอนภาษาเกาหลี คอมพิวเตอร์ ความปลอดภัย กฎหมายในชีวิตประจำวัน และตรวจสุขภาพ',
        'อยู่ชั้น B1 ศูนย์สวัสดิการแรงงานปูซาน เขตยอนเจ'
      ] },
    id: { title: 'Pusat Dukungan Pekerja Asing: konsultasi kerja dan kelas bahasa Korea',
      points: [
        'Pusat khusus pekerja E-9 dan H-2, melayani konsultasi ketenagakerjaan dan EPS dengan penerjemah.',
        'Juga ada kelas bahasa Korea, komputer, keselamatan kerja, hukum sehari-hari, dan pemeriksaan kesehatan.',
        'Berada di lantai B1 Pusat Kesejahteraan Pekerja Busan, Yeonje-gu.'
      ] }
  },
  {
    key: 'l-busan-helpline-2026',
    tagKey: 'local',
    region: 'busan',
    source: '부산광역시 · 언론 보도',
    url: 'https://www.koreajoongangdaily.com/korea/busan-offers-helpline-for-foreign-residents/12263834',
    date: '2025-10-20',
    checked: '2026-10-27',
    ko: { title: '외국인주민 통합 상담전화 1600-0051',
      points: [
        '체류·행정·근로 등 생활 전반을 전화로 상담할 수 있습니다.',
        '한국어, 영어, 베트남어, 중국어, 미얀마어, 러시아어, 우즈베크어, 인도네시아어로 상담합니다.',
        '1600-0051로 전화하면 됩니다.'
      ] },
    en: { title: 'Foreign residents helpline 1600-0051',
      points: [
        'You can get phone counseling on stay, paperwork, work and daily life.',
        'Available in Korean, English, Vietnamese, Chinese, Burmese, Russian, Uzbek and Indonesian.',
        'Call 1600-0051.'
      ] },
    vi: { title: 'Tổng đài tư vấn cư dân nước ngoài 1600-0051',
      points: [
        'Tư vấn qua điện thoại về lưu trú, thủ tục hành chính, lao động và đời sống.',
        'Có tiếng Hàn, Anh, Việt, Trung, Myanmar, Nga, Uzbek và Indonesia.',
        'Gọi 1600-0051.'
      ] },
    th: { title: 'สายด่วนผู้พำนักชาวต่างชาติ 1600-0051',
      points: [
        'ปรึกษาทางโทรศัพท์เรื่องการพำนัก เอกสาร งาน และชีวิตประจำวัน',
        'มีภาษาเกาหลี อังกฤษ เวียดนาม จีน เมียนมา รัสเซีย อุซเบก และอินโดนีเซีย',
        'โทร 1600-0051'
      ] },
    id: { title: 'Layanan telepon warga asing 1600-0051',
      points: [
        'Konsultasi lewat telepon tentang izin tinggal, administrasi, pekerjaan, dan kehidupan sehari-hari.',
        'Tersedia dalam bahasa Korea, Inggris, Vietnam, Tionghoa, Myanmar, Rusia, Uzbek, dan Indonesia.',
        'Hubungi 1600-0051.'
      ] }
  },
  {
    key: 'l-busan-e74-2026',
    tagKey: 'local',
    region: 'busan',
    source: '부산광역시 · 법무부 외국인정책 시행계획',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493574/download.do',
    date: '2026-03-01',
    checked: '2026-10-27',
    until: '2026-12-31',
    ko: { title: '숙련기능인력(E-7-4) 비자 전환 추천',
      points: [
        '부산 기업에서 일하는 E-9 근로자가 E-7-4로 바꿀 수 있도록 부산시장이 법무부에 추천합니다.',
        '2026년 3~12월에 추천 신청을 받습니다.',
        '신청 요건과 서류는 부산시 고시공고란에서 확인하세요.'
      ] },
    en: { title: 'Recommendation for switching to the skilled worker (E-7-4) visa',
      points: [
        'The Mayor of Busan recommends E-9 workers at Busan companies to the Ministry of Justice for E-7-4.',
        'Applications are accepted March–December 2026.',
        'Check requirements and documents in the Busan City public notices.'
      ] },
    vi: { title: 'Đề cử chuyển sang visa lao động lành nghề (E-7-4)',
      points: [
        'Thị trưởng Busan đề cử lao động E-9 làm việc tại doanh nghiệp Busan lên Bộ Tư pháp để chuyển sang E-7-4.',
        'Nhận đơn từ tháng 3 đến tháng 12/2026.',
        'Xem điều kiện và hồ sơ tại mục thông báo của thành phố Busan.'
      ] },
    th: { title: 'หนังสือรับรองเปลี่ยนเป็นวีซ่าแรงงานฝีมือ (E-7-4)',
      points: [
        'นายกเทศมนตรีปูซานเสนอชื่อแรงงาน E-9 ในบริษัทที่ปูซานต่อกระทรวงยุติธรรมเพื่อเปลี่ยนเป็น E-7-4',
        'รับคำขอช่วงมีนาคม–ธันวาคม 2026',
        'ดูคุณสมบัติและเอกสารในประกาศของเมืองปูซาน'
      ] },
    id: { title: 'Rekomendasi pindah ke visa tenaga terampil (E-7-4)',
      points: [
        'Wali Kota Busan merekomendasikan pekerja E-9 di perusahaan Busan ke Kementerian Kehakiman untuk E-7-4.',
        'Permohonan diterima Maret–Desember 2026.',
        'Lihat syarat dan dokumen di pengumuman resmi Kota Busan.'
      ] }
  },
  {
    key: 'l-ulsan-center-2026',
    tagKey: 'local',
    region: 'ulsan',
    source: '울산광역시(울산경제일자리진흥원) · 언론 보도',
    url: 'https://www.heraldk.com/article/2026050318264357666',
    date: '2026-05-03',
    checked: '2026-10-27',
    ko: { title: '외국인근로자지원센터 개소',
      points: [
        '울산시가 외국인근로자 전용 지원센터를 새로 열었습니다.',
        '법률·노동·생활·체류 상담과 권익 보호를 하며, 전화 상담도 됩니다. 키르기스스탄·우즈베키스탄·인도네시아 출신 등 상담원이 있습니다.',
        '동구 일산동에 있고 울산경제일자리진흥원이 운영합니다.'
      ] },
    en: { title: 'New Foreign Workers Support Center opened',
      points: [
        'Ulsan opened a new support center just for foreign workers.',
        'It offers legal, labor, daily-life and visa counseling and rights protection, also by phone; counselors include people from Kyrgyzstan, Uzbekistan and Indonesia.',
        'Located in Ilsan-dong, Dong-gu, run by the Ulsan Economic and Job Promotion Agency.'
      ] },
    vi: { title: 'Khai trương Trung tâm hỗ trợ lao động nước ngoài',
      points: [
        'Ulsan đã mở trung tâm hỗ trợ mới dành riêng cho lao động nước ngoài.',
        'Tư vấn pháp luật, lao động, đời sống, lưu trú và bảo vệ quyền lợi, có cả tư vấn qua điện thoại; có tư vấn viên người Kyrgyzstan, Uzbekistan, Indonesia.',
        'Ở phường Ilsan, quận Dong, do Viện xúc tiến kinh tế – việc làm Ulsan vận hành.'
      ] },
    th: { title: 'เปิดศูนย์สนับสนุนแรงงานต่างชาติแห่งใหม่',
      points: [
        'อุลซานเปิดศูนย์สนับสนุนเฉพาะแรงงานต่างชาติแห่งใหม่',
        'ให้คำปรึกษาด้านกฎหมาย แรงงาน ชีวิตประจำวัน การพำนัก และคุ้มครองสิทธิ ปรึกษาทางโทรศัพท์ได้ มีเจ้าหน้าที่ชาวคีร์กีซ อุซเบก และอินโดนีเซีย',
        'อยู่ที่อิลซานดง เขตทงกู ดำเนินการโดยสถาบันส่งเสริมเศรษฐกิจและการจ้างงานอุลซาน'
      ] },
    id: { title: 'Pusat Dukungan Pekerja Asing baru dibuka',
      points: [
        'Ulsan membuka pusat dukungan baru khusus pekerja asing.',
        'Melayani konsultasi hukum, ketenagakerjaan, kehidupan, izin tinggal, dan perlindungan hak, juga lewat telepon; ada konselor asal Kirgistan, Uzbekistan, dan Indonesia.',
        'Berada di Ilsan-dong, Dong-gu, dikelola Badan Promosi Ekonomi dan Kerja Ulsan.'
      ] }
  },
  {
    key: 'l-ulsan-residents-2026',
    tagKey: 'local',
    region: 'ulsan',
    source: '울산광역시 · 법무부 외국인정책 시행계획',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493579/download.do',
    date: '2026-01-01',
    checked: '2026-10-27',
    ko: { title: '외국인주민지원센터 다국어 상담·저녁 한국어 교실',
      points: [
        '16개 언어로 생활, 출입국, 임금·고용, 의료 상담과 통번역을 지원합니다. 상담 창구는 평일 10~17시입니다.',
        '낮에 일하는 근로자를 위해 퇴근 후 듣는 한국어 교실을 1~12월에 엽니다.',
        '한국어 교실 문의는 울산시 여성가족청소년과 052-229-3484입니다.'
      ] },
    en: { title: 'Foreign Residents Center: multilingual counseling and evening Korean classes',
      points: [
        'Counseling and interpreting in 16 languages on daily life, immigration, wages and jobs, and health; the desk is open weekdays 10:00–17:00.',
        'Evening Korean classes for daytime workers run January–December.',
        'Korean class contact: Ulsan Women, Family and Youth Division, 052-229-3484.'
      ] },
    vi: { title: 'Trung tâm cư dân nước ngoài: tư vấn đa ngôn ngữ, lớp tiếng Hàn buổi tối',
      points: [
        'Tư vấn và phiên dịch bằng 16 ngôn ngữ về đời sống, xuất nhập cảnh, lương – việc làm, y tế; quầy mở ngày thường 10–17 giờ.',
        'Lớp tiếng Hàn sau giờ làm cho người làm ban ngày, từ tháng 1 đến tháng 12.',
        'Liên hệ lớp tiếng Hàn: Phòng Phụ nữ – Gia đình – Thanh thiếu niên Ulsan, 052-229-3484.'
      ] },
    th: { title: 'ศูนย์ผู้พำนักชาวต่างชาติ: ปรึกษาหลายภาษาและเรียนภาษาเกาหลีตอนเย็น',
      points: [
        'ปรึกษาและล่าม 16 ภาษา เรื่องชีวิตประจำวัน ตรวจคนเข้าเมือง ค่าจ้างและการจ้างงาน และการแพทย์ เปิดวันธรรมดา 10:00–17:00',
        'มีชั้นเรียนภาษาเกาหลีหลังเลิกงานสำหรับคนทำงานกลางวัน มกราคม–ธันวาคม',
        'ติดต่อชั้นเรียนภาษาเกาหลี ฝ่ายสตรี ครอบครัว และเยาวชน เมืองอุลซาน 052-229-3484'
      ] },
    id: { title: 'Pusat Warga Asing: konsultasi multibahasa dan kelas bahasa Korea malam',
      points: [
        'Konsultasi dan penerjemahan dalam 16 bahasa tentang kehidupan, imigrasi, upah dan pekerjaan, serta kesehatan; loket buka hari kerja 10.00–17.00.',
        'Kelas bahasa Korea sepulang kerja untuk pekerja siang, Januari–Desember.',
        'Kontak kelas bahasa Korea: Divisi Perempuan, Keluarga, dan Remaja Ulsan, 052-229-3484.'
      ] }
  },
  {
    key: 'l-gyeongbuk-visa-2026',
    tagKey: 'local',
    region: 'gyeongbuk',
    source: '경상북도 · 법무부 외국인정책 시행계획 · 언론 보도',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493680/download.do',
    date: '2026-02-14',
    checked: '2026-10-27',
    ko: { title: '지역특화형 비자(E-7-4R) 22개 시·군 확대',
      points: [
        '경북도가 장기 체류 비자를 추천하는 지역특화형 비자 사업을 2026년부터 도내 22개 시·군 전체로 넓혔습니다.',
        'E-9 숙련 근로자는 지역특화 숙련기능인력(E-7-4R) 비자로 장기 정착할 수 있습니다.',
        'K-드림외국인지원센터에서 신청 안내와 취업 연계를 돕습니다. 도 문의 054-880-4653.'
      ] },
    en: { title: 'Regional visa (E-7-4R) expanded to all 22 cities and counties',
      points: [
        'From 2026 the province’s regional visa program, which recommends long-term stay visas, covers all 22 cities and counties.',
        'Skilled E-9 workers can settle long-term with the regional skilled worker (E-7-4R) visa.',
        'The K-Dream Foreigner Support Center helps with applications and job matching. Province contact: 054-880-4653.'
      ] },
    vi: { title: 'Visa đặc thù vùng (E-7-4R) mở rộng ra 22 thành phố/huyện',
      points: [
        'Từ năm 2026, chương trình visa đặc thù vùng của tỉnh áp dụng cho toàn bộ 22 thành phố/huyện.',
        'Lao động E-9 lành nghề có thể định cư lâu dài với visa lao động lành nghề theo vùng (E-7-4R).',
        'Trung tâm hỗ trợ người nước ngoài K-Dream hướng dẫn nộp đơn và kết nối việc làm. Liên hệ tỉnh: 054-880-4653.'
      ] },
    th: { title: 'วีซ่าเฉพาะพื้นที่ (E-7-4R) ขยายครบ 22 เมืองและอำเภอ',
      points: [
        'ตั้งแต่ปี 2026 โครงการวีซ่าเฉพาะพื้นที่ของจังหวัดครอบคลุมทั้ง 22 เมืองและอำเภอ',
        'แรงงาน E-9 ที่มีฝีมือตั้งถิ่นฐานระยะยาวได้ด้วยวีซ่าแรงงานฝีมือเฉพาะพื้นที่ (E-7-4R)',
        'ศูนย์สนับสนุนชาวต่างชาติ K-Dream ช่วยแนะนำการยื่นและหางาน ติดต่อจังหวัด 054-880-4653'
      ] },
    id: { title: 'Visa daerah (E-7-4R) diperluas ke 22 kota/kabupaten',
      points: [
        'Mulai 2026 program visa daerah provinsi berlaku di seluruh 22 kota/kabupaten.',
        'Pekerja E-9 terampil dapat menetap jangka panjang dengan visa tenaga terampil daerah (E-7-4R).',
        'Pusat Dukungan Warga Asing K-Dream membantu pendaftaran dan penyaluran kerja. Kontak provinsi: 054-880-4653.'
      ] }
  },
  {
    key: 'l-gyeongbuk-centers-2026',
    tagKey: 'local',
    region: 'gyeongbuk',
    source: '경상북도 · 법무부 외국인정책 시행계획',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493680/download.do',
    date: '2026-01-01',
    checked: '2026-10-27',
    ko: { title: '시·군 외국인근로자상담센터 15곳',
      points: [
        '노동법률·생활 고충 상담, 한국어 교육, 의료 지원, 문화 행사를 제공합니다.',
        '2026년에는 포항 3곳, 경주 3곳, 안동, 구미 5곳, 영천, 경산, 칠곡 등 15곳에서 운영합니다.',
        '가까운 시·군 상담센터를 찾아가면 됩니다.'
      ] },
    en: { title: '15 city and county foreign worker counseling centers',
      points: [
        'They offer labor-law and daily-life counseling, Korean classes, medical support and cultural events.',
        'In 2026 there are 15 centers, including 3 in Pohang, 3 in Gyeongju, 5 in Gumi, and ones in Andong, Yeongcheon, Gyeongsan and Chilgok.',
        'Visit the center in your city or county.'
      ] },
    vi: { title: '15 trung tâm tư vấn lao động nước ngoài cấp thành phố/huyện',
      points: [
        'Tư vấn luật lao động và khó khăn đời sống, lớp tiếng Hàn, hỗ trợ y tế, sự kiện văn hóa.',
        'Năm 2026 có 15 trung tâm, gồm 3 ở Pohang, 3 ở Gyeongju, 5 ở Gumi và ở Andong, Yeongcheon, Gyeongsan, Chilgok.',
        'Hãy đến trung tâm ở thành phố/huyện của bạn.'
      ] },
    th: { title: 'ศูนย์ปรึกษาแรงงานต่างชาติระดับเมืองและอำเภอ 15 แห่ง',
      points: [
        'ให้คำปรึกษาด้านกฎหมายแรงงานและปัญหาชีวิต สอนภาษาเกาหลี ช่วยด้านการแพทย์ และจัดงานวัฒนธรรม',
        'ปี 2026 มี 15 แห่ง เช่น โพฮัง 3 แห่ง คยองจู 3 แห่ง คูมี 5 แห่ง และที่อันดง ยองชอน คยองซาน ชิลกก',
        'ไปที่ศูนย์ในเมืองหรืออำเภอของคุณ'
      ] },
    id: { title: '15 pusat konsultasi pekerja asing tingkat kota/kabupaten',
      points: [
        'Melayani konsultasi hukum ketenagakerjaan dan masalah hidup, kelas bahasa Korea, bantuan medis, dan acara budaya.',
        'Pada 2026 ada 15 pusat, termasuk 3 di Pohang, 3 di Gyeongju, 5 di Gumi, serta di Andong, Yeongcheon, Gyeongsan, dan Chilgok.',
        'Datangi pusat di kota/kabupaten Anda.'
      ] }
  },
  {
    key: 'l-gyeongbuk-gumi-clinic-2026',
    tagKey: 'local',
    region: 'gyeongbuk',
    source: '구미시 · 법무부 외국인정책 시행계획',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493680/download.do',
    date: '2026-01-01',
    checked: '2026-10-27',
    ko: { title: '구미 외국인근로자 무료 진료',
      points: [
        '구미시와 협약 의료기관 의료봉사단이 외국인근로자를 무료로 진료하고 건강 상담을 합니다.',
        '매월 둘째 일요일 14~16시 구미제일외국인상담센터, 셋째 일요일 15~17시 구미외국인주민센터(지산1길 46-8)에서 합니다.',
        '일정이 바뀔 수 있으니 방문 전에 센터에 확인하세요.'
      ] },
    en: { title: 'Free clinic for foreign workers in Gumi',
      points: [
        'Gumi City and partner medical volunteers give free care and health counseling to foreign workers.',
        'Second Sunday of each month 14:00–16:00 at Gumi Jeil Foreigner Counseling Center; third Sunday 15:00–17:00 at Gumi Foreign Residents Center (46-8 Jisan 1-gil).',
        'Schedules may change, so check with the center before going.'
      ] },
    vi: { title: 'Khám bệnh miễn phí cho lao động nước ngoài ở Gumi',
      points: [
        'Thành phố Gumi và đội y tế tình nguyện khám bệnh, tư vấn sức khỏe miễn phí cho lao động nước ngoài.',
        'Chủ nhật thứ hai hằng tháng 14–16 giờ tại Trung tâm tư vấn người nước ngoài Gumi Jeil; chủ nhật thứ ba 15–17 giờ tại Trung tâm cư dân nước ngoài Gumi (46-8 Jisan 1-gil).',
        'Lịch có thể thay đổi, hãy hỏi trung tâm trước khi đến.'
      ] },
    th: { title: 'ตรวจรักษาฟรีสำหรับแรงงานต่างชาติที่คูมี',
      points: [
        'เมืองคูมีและทีมแพทย์อาสาตรวจรักษาและให้คำปรึกษาสุขภาพฟรีแก่แรงงานต่างชาติ',
        'วันอาทิตย์ที่สองของเดือน 14:00–16:00 ที่ศูนย์ปรึกษาชาวต่างชาติคูมีเชอิล และวันอาทิตย์ที่สาม 15:00–17:00 ที่ศูนย์ผู้พำนักชาวต่างชาติคูมี (46-8 Jisan 1-gil)',
        'กำหนดการอาจเปลี่ยน ควรสอบถามศูนย์ก่อนไป'
      ] },
    id: { title: 'Klinik gratis untuk pekerja asing di Gumi',
      points: [
        'Kota Gumi dan relawan medis mitra memberi pengobatan dan konsultasi kesehatan gratis bagi pekerja asing.',
        'Minggu kedua tiap bulan 14.00–16.00 di Pusat Konsultasi Warga Asing Gumi Jeil; Minggu ketiga 15.00–17.00 di Pusat Warga Asing Gumi (46-8 Jisan 1-gil).',
        'Jadwal bisa berubah, tanyakan ke pusat sebelum datang.'
      ] }
  },
  {
    key: 'l-gyeongnam-residents-2026',
    tagKey: 'local',
    region: 'gyeongnam',
    source: '경상남도 · 법무부 외국인정책 시행계획',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493681/download.do',
    date: '2026-01-01',
    checked: '2026-10-27',
    ko: { title: '외국인주민지원센터 상담·한국어 교육·무료 진료',
      points: [
        '경남도가 설치하고 경남이주민노동복지센터가 운영하는 외국인주민 지원센터입니다.',
        '외국인근로자를 포함해 근로·생활·고충·인권 상담을 받을 수 있고, 한국어 교육과 무료 진료도 합니다.',
        '도 담당은 여성가족과 055-211-5254입니다.'
      ] },
    en: { title: 'Foreign Residents Support Center: counseling, Korean classes, free clinic',
      points: [
        'Set up by the province and run by the Gyeongnam Migrant Workers Welfare Center.',
        'Foreign workers and other residents can get counseling on work, daily life, grievances and human rights, plus Korean classes and free medical care.',
        'Province contact: Women and Family Division, 055-211-5254.'
      ] },
    vi: { title: 'Trung tâm hỗ trợ cư dân nước ngoài: tư vấn, tiếng Hàn, khám miễn phí',
      points: [
        'Do tỉnh thành lập và Trung tâm phúc lợi lao động di trú Gyeongnam vận hành.',
        'Lao động nước ngoài và cư dân khác được tư vấn lao động, đời sống, khiếu nại, nhân quyền, học tiếng Hàn và khám bệnh miễn phí.',
        'Liên hệ tỉnh: Phòng Phụ nữ – Gia đình, 055-211-5254.'
      ] },
    th: { title: 'ศูนย์สนับสนุนผู้พำนักชาวต่างชาติ: ปรึกษา ภาษาเกาหลี ตรวจรักษาฟรี',
      points: [
        'จังหวัดจัดตั้งและศูนย์สวัสดิการแรงงานข้ามชาติคยองนัมดำเนินการ',
        'แรงงานต่างชาติและผู้พำนักอื่นรับคำปรึกษาเรื่องงาน ชีวิต ปัญหา และสิทธิมนุษยชน เรียนภาษาเกาหลี และตรวจรักษาฟรีได้',
        'ติดต่อจังหวัด ฝ่ายสตรีและครอบครัว 055-211-5254'
      ] },
    id: { title: 'Pusat Dukungan Warga Asing: konsultasi, bahasa Korea, klinik gratis',
      points: [
        'Didirikan provinsi dan dikelola Pusat Kesejahteraan Pekerja Migran Gyeongnam.',
        'Pekerja asing dan warga lain bisa mendapat konsultasi kerja, kehidupan, keluhan, dan HAM, kelas bahasa Korea, serta pengobatan gratis.',
        'Kontak provinsi: Divisi Perempuan dan Keluarga, 055-211-5254.'
      ] }
  },
  {
    key: 'l-gyeongnam-centers-2026',
    tagKey: 'local',
    region: 'gyeongnam',
    source: '경상남도 · 법무부 외국인정책 시행계획',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493681/download.do',
    date: '2026-01-01',
    checked: '2026-10-27',
    ko: { title: '외국인근로자지원센터 5곳',
      points: [
        '창원, 김해, 양산, 사천, 거제에 외국인근로자지원센터가 있습니다.',
        '직장 생활과 체류 문제를 상담받을 수 있습니다.',
        '가까운 지역 센터를 찾아가면 됩니다.'
      ] },
    en: { title: 'Five foreign worker support centers',
      points: [
        'There are foreign worker support centers in Changwon, Gimhae, Yangsan, Sacheon and Geoje.',
        'You can get counseling on work life and visa matters.',
        'Visit the center nearest you.'
      ] },
    vi: { title: '5 trung tâm hỗ trợ lao động nước ngoài',
      points: [
        'Có trung tâm hỗ trợ lao động nước ngoài ở Changwon, Gimhae, Yangsan, Sacheon, Geoje.',
        'Bạn được tư vấn về công việc và lưu trú.',
        'Hãy đến trung tâm gần bạn nhất.'
      ] },
    th: { title: 'ศูนย์สนับสนุนแรงงานต่างชาติ 5 แห่ง',
      points: [
        'มีศูนย์สนับสนุนแรงงานต่างชาติที่ชางวอน คิมแฮ ยังซาน ซาชอน และคอเจ',
        'รับคำปรึกษาเรื่องการทำงานและการพำนักได้',
        'ไปที่ศูนย์ที่ใกล้ที่สุดได้เลย'
      ] },
    id: { title: 'Lima pusat dukungan pekerja asing',
      points: [
        'Ada pusat dukungan pekerja asing di Changwon, Gimhae, Yangsan, Sacheon, dan Geoje.',
        'Anda bisa mendapat konsultasi soal pekerjaan dan izin tinggal.',
        'Datangi pusat terdekat.'
      ] }
  },
  {
    key: 'l-gyeongnam-e74-2026',
    tagKey: 'local',
    region: 'gyeongnam',
    source: '경상남도 · 법무부 외국인정책 시행계획',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493681/download.do',
    date: '2026-01-01',
    checked: '2026-10-27',
    ko: { title: '숙련기능인력(E-7-4·E-7-4R) 비자 전환 도지사 추천',
      points: [
        'E-9·E-10·H-2 근로자가 E-7-4 또는 지역특화 E-7-4R로 바꿀 수 있도록 경남도지사가 추천합니다.',
        '2026년 1월부터 추천하며, 경남 배정 인원은 550명입니다.',
        '광역 추천이 필요하면 시·군에 접수합니다. 도 담당 산업인력과 055-211-3384.'
      ] },
    en: { title: 'Governor’s recommendation for skilled worker (E-7-4 / E-7-4R) visas',
      points: [
        'The Governor of Gyeongnam recommends E-9, E-10 and H-2 workers for E-7-4 or the regional E-7-4R.',
        'Recommendations started in January 2026; Gyeongnam’s allocation is 550 people.',
        'If you need a provincial recommendation, apply at your city or county. Province contact: Industrial Workforce Division, 055-211-3384.'
      ] },
    vi: { title: 'Tỉnh trưởng đề cử visa lao động lành nghề (E-7-4, E-7-4R)',
      points: [
        'Tỉnh trưởng Gyeongnam đề cử lao động E-9, E-10, H-2 để chuyển sang E-7-4 hoặc E-7-4R theo vùng.',
        'Đề cử từ tháng 1/2026; chỉ tiêu của Gyeongnam là 550 người.',
        'Nếu cần đề cử cấp tỉnh, nộp tại thành phố/huyện. Liên hệ tỉnh: Phòng Nhân lực công nghiệp, 055-211-3384.'
      ] },
    th: { title: 'ผู้ว่าการจังหวัดรับรองวีซ่าแรงงานฝีมือ (E-7-4, E-7-4R)',
      points: [
        'ผู้ว่าการจังหวัดคยองนัมเสนอชื่อแรงงาน E-9, E-10, H-2 เพื่อเปลี่ยนเป็น E-7-4 หรือ E-7-4R เฉพาะพื้นที่',
        'เริ่มเสนอชื่อตั้งแต่มกราคม 2026 โควตาของคยองนัม 550 คน',
        'หากต้องการหนังสือรับรองระดับจังหวัด ยื่นที่เมืองหรืออำเภอ ติดต่อจังหวัด ฝ่ายกำลังคนอุตสาหกรรม 055-211-3384'
      ] },
    id: { title: 'Rekomendasi gubernur untuk visa tenaga terampil (E-7-4, E-7-4R)',
      points: [
        'Gubernur Gyeongnam merekomendasikan pekerja E-9, E-10, H-2 untuk E-7-4 atau E-7-4R daerah.',
        'Rekomendasi dimulai Januari 2026; kuota Gyeongnam 550 orang.',
        'Bila butuh rekomendasi provinsi, daftar di kota/kabupaten. Kontak provinsi: Divisi Tenaga Kerja Industri, 055-211-3384.'
      ] }
  },
  {
    key: 'l-jg-girc-2026',
    tagKey: 'local',
    region: 'jeonnamgwangju',
    source: '전남광주외국인주민지원센터(광주국제교류센터)',
    url: 'https://girc.or.kr/page/wss_project.php',
    date: '2026-01-01',
    checked: '2026-10-27',
    ko: { title: '외국인주민지원센터 종합 상담(광산구)',
      points: [
        '노무, 교육, 주거, 의료 등 생활 전반을 무료로 상담하고, 필요하면 다른 기관으로 연결해 줍니다.',
        '11개 언어로 상담하며, 몽골어·필리핀어·캄보디아어·네팔어 상담은 일요일에 합니다.',
        '방문, 전화(1644-3828), 누리집 챗봇으로 신청합니다. 광산구 풍영로145번길 82.'
      ] },
    en: { title: 'Foreign Residents Support Center counseling (Gwangsan-gu)',
      points: [
        'Free counseling on work, education, housing, health and daily life, with referrals to other agencies if needed.',
        'Available in 11 languages; Mongolian, Filipino, Khmer and Nepali counseling is on Sundays.',
        'Visit, call 1644-3828 or use the website chatbot. 82 Pungyeong-ro 145beon-gil, Gwangsan-gu.'
      ] },
    vi: { title: 'Tư vấn tổng hợp tại Trung tâm hỗ trợ cư dân nước ngoài (quận Gwangsan)',
      points: [
        'Tư vấn miễn phí về lao động, giáo dục, nhà ở, y tế và đời sống, chuyển tiếp đến cơ quan khác khi cần.',
        'Có 11 ngôn ngữ; tiếng Mông Cổ, Philippines, Campuchia, Nepal vào Chủ nhật.',
        'Đến trực tiếp, gọi 1644-3828 hoặc dùng chatbot trên website. 82 Pungyeong-ro 145beon-gil, quận Gwangsan.'
      ] },
    th: { title: 'ปรึกษาครบวงจรที่ศูนย์สนับสนุนผู้พำนักชาวต่างชาติ (เขตควังซาน)',
      points: [
        'ปรึกษาฟรีเรื่องแรงงาน การศึกษา ที่อยู่อาศัย การแพทย์ และชีวิตประจำวัน ส่งต่อหน่วยงานอื่นเมื่อจำเป็น',
        'มี 11 ภาษา ภาษามองโกเลีย ฟิลิปปินส์ กัมพูชา และเนปาลให้บริการวันอาทิตย์',
        'มาที่ศูนย์ โทร 1644-3828 หรือใช้แชตบอตในเว็บไซต์ เลขที่ 82 Pungyeong-ro 145beon-gil เขตควังซาน'
      ] },
    id: { title: 'Konsultasi terpadu Pusat Dukungan Warga Asing (Gwangsan-gu)',
      points: [
        'Konsultasi gratis tentang pekerjaan, pendidikan, perumahan, kesehatan, dan kehidupan, dengan rujukan ke lembaga lain bila perlu.',
        'Tersedia 11 bahasa; bahasa Mongolia, Filipina, Khmer, dan Nepal pada hari Minggu.',
        'Datang langsung, telepon 1644-3828, atau chatbot di situs. 82 Pungyeong-ro 145beon-gil, Gwangsan-gu.'
      ] }
  },
  {
    key: 'l-jg-jeonnam-center-2026',
    tagKey: 'local',
    region: 'jeonnamgwangju',
    source: '전라남도 · 언론 보도',
    url: 'https://www.segye.com/newsView/20260105503247',
    date: '2026-01-05',
    checked: '2026-10-27',
    ko: { title: '이민외국인종합지원센터·외국인주민 통합콜센터 1588-5949',
      points: [
        '생활, 행정, 노무, 의료 상담을 한 번에 받을 수 있고, 한국어 교육과 사회통합프로그램도 들을 수 있습니다.',
        '통합콜센터 1588-5949는 9개 언어로 전화·문자 상담을 합니다.',
        '본원은 영암 대불산단에, 동부센터는 여수상공회의소에 있습니다.'
      ] },
    en: { title: 'Immigrant Support Center and foreign residents call center 1588-5949',
      points: [
        'One-stop counseling on daily life, paperwork, labor and health, plus Korean classes and the social integration program.',
        'The call center 1588-5949 offers phone and text counseling in 9 languages.',
        'The main center is in Daebul Industrial Complex, Yeongam; the eastern center is at the Yeosu Chamber of Commerce.'
      ] },
    vi: { title: 'Trung tâm hỗ trợ tổng hợp di dân và tổng đài cư dân nước ngoài 1588-5949',
      points: [
        'Tư vấn một cửa về đời sống, hành chính, lao động, y tế, có lớp tiếng Hàn và chương trình hội nhập xã hội.',
        'Tổng đài 1588-5949 tư vấn qua điện thoại và tin nhắn bằng 9 ngôn ngữ.',
        'Trụ sở chính ở khu công nghiệp Daebul, Yeongam; trung tâm phía đông ở Phòng Thương mại Yeosu.'
      ] },
    th: { title: 'ศูนย์สนับสนุนผู้ย้ายถิ่นครบวงจรและคอลเซ็นเตอร์ 1588-5949',
      points: [
        'ปรึกษาเรื่องชีวิต เอกสาร แรงงาน และการแพทย์ได้ในที่เดียว มีสอนภาษาเกาหลีและโปรแกรมบูรณาการสังคม',
        'คอลเซ็นเตอร์ 1588-5949 ให้คำปรึกษาทางโทรศัพท์และข้อความ 9 ภาษา',
        'สำนักงานใหญ่อยู่นิคมอุตสาหกรรมแทบุล ยองอัม ศูนย์ฝั่งตะวันออกอยู่หอการค้ายอซู'
      ] },
    id: { title: 'Pusat Dukungan Imigran dan call center warga asing 1588-5949',
      points: [
        'Konsultasi satu atap tentang kehidupan, administrasi, ketenagakerjaan, dan kesehatan, plus kelas bahasa Korea dan program integrasi sosial.',
        'Call center 1588-5949 melayani telepon dan pesan dalam 9 bahasa.',
        'Pusat utama di Kawasan Industri Daebul, Yeongam; pusat timur di Kamar Dagang Yeosu.'
      ] }
  },
  {
    key: 'l-jg-welding-2026',
    tagKey: 'local',
    region: 'jeonnamgwangju',
    source: '전남광주외국인주민지원센터',
    url: 'https://girc.or.kr/notice/309',
    date: '2026-10-17',
    checked: '2026-10-27',
    until: '2026-11-07',
    ko: { title: '외국인주민 용접 실무 과정 수강생 모집',
      points: [
        '광주·전남에 사는 외국인을 위한 용접 직업훈련입니다. 11월 8일·15일·29일(일) 9~18시, 호남직업전문학교(동구 무등로 339).',
        '수강료 30만원 중 20만원을 센터가 지원해 본인 부담은 10만원이며, 점심을 줍니다.',
        '선착순 20명, 방문이나 www.girc.or.kr에서 신청합니다(문의 1644-3828).'
      ] },
    en: { title: 'Welding course for foreign residents: applications open',
      points: [
        'Welding job training for foreigners living in Gwangju and Jeonnam: 8, 15 and 29 November (Sundays) 9:00–18:00 at Honam Vocational School (339 Mudeung-ro, Dong-gu).',
        'Of the 300,000-won fee the center pays 200,000, so you pay 100,000; lunch is provided.',
        'First 20 people; apply in person or at www.girc.or.kr (contact 1644-3828).'
      ] },
    vi: { title: 'Tuyển học viên khóa hàn thực hành cho cư dân nước ngoài',
      points: [
        'Đào tạo nghề hàn cho người nước ngoài sống ở Gwangju, Jeonnam: ngày 8, 15, 29/11 (Chủ nhật) 9–18 giờ tại Trường nghề Honam (339 Mudeung-ro, quận Dong).',
        'Học phí 300.000 won, trung tâm hỗ trợ 200.000 nên bạn trả 100.000; có bữa trưa.',
        '20 người đăng ký đầu tiên; đăng ký trực tiếp hoặc tại www.girc.or.kr (liên hệ 1644-3828).'
      ] },
    th: { title: 'รับสมัครหลักสูตรงานเชื่อมสำหรับชาวต่างชาติ',
      points: [
        'ฝึกอาชีพงานเชื่อมสำหรับชาวต่างชาติที่อาศัยในควังจูและชอลลาใต้ วันที่ 8, 15, 29 พฤศจิกายน (อาทิตย์) 9:00–18:00 ที่โรงเรียนอาชีวะโฮนัม (339 Mudeung-ro เขตทงกู)',
        'ค่าเรียน 300,000 วอน ศูนย์ช่วย 200,000 จ่ายเอง 100,000 มีอาหารกลางวัน',
        'รับ 20 คนแรก สมัครที่ศูนย์หรือ www.girc.or.kr (ติดต่อ 1644-3828)'
      ] },
    id: { title: 'Pendaftaran kursus las praktis untuk warga asing',
      points: [
        'Pelatihan kerja las bagi warga asing di Gwangju dan Jeonnam: 8, 15, dan 29 November (Minggu) 09.00–18.00 di Sekolah Kejuruan Honam (339 Mudeung-ro, Dong-gu).',
        'Dari biaya 300.000 won, pusat membayar 200.000 sehingga Anda membayar 100.000; makan siang disediakan.',
        '20 pendaftar pertama; daftar langsung atau di www.girc.or.kr (kontak 1644-3828).'
      ] }
  },
  {
    key: 'l-jeonbuk-center-2026',
    tagKey: 'local',
    region: 'jeonbuk',
    source: '전북국제협력진흥원(전북외국인노동자지원센터)',
    url: 'https://www.jbica.kr/main/?menu=130',
    date: '2026-01-01',
    checked: '2026-10-27',
    ko: { title: '외국인노동자지원센터 전문 상담·통번역',
      points: [
        '전북에서 일하는 E-9·H-2 근로자를 위한 정착 지원 거점센터입니다.',
        '노무, 변호, 행정, 금융, 의료 전문 상담과 8개 이상 언어의 통번역을 지원합니다.',
        '일~목 9~18시(금·토·공휴일 휴무), 문의 1551-1195, 전주시 완산구 홍산로 276 6층.'
      ] },
    en: { title: 'Foreign Workers Support Center: expert counseling and interpreting',
      points: [
        'A settlement support hub for E-9 and H-2 workers in Jeonbuk.',
        'Expert counseling on labor, legal, administrative, financial and medical matters, with interpreting in 8+ languages.',
        'Sun–Thu 9:00–18:00 (closed Fri, Sat and holidays); call 1551-1195; 6F, 276 Hongsan-ro, Wansan-gu, Jeonju.'
      ] },
    vi: { title: 'Trung tâm hỗ trợ lao động nước ngoài: tư vấn chuyên môn, phiên dịch',
      points: [
        'Trung tâm hỗ trợ định cư cho lao động E-9, H-2 làm việc ở Jeonbuk.',
        'Tư vấn chuyên môn về lao động, pháp lý, hành chính, tài chính, y tế và phiên dịch hơn 8 ngôn ngữ.',
        'Chủ nhật–thứ năm 9–18 giờ (nghỉ thứ sáu, thứ bảy, ngày lễ); gọi 1551-1195; tầng 6, 276 Hongsan-ro, Wansan-gu, Jeonju.'
      ] },
    th: { title: 'ศูนย์สนับสนุนแรงงานต่างชาติ: ปรึกษาผู้เชี่ยวชาญและล่าม',
      points: [
        'ศูนย์หลักช่วยตั้งถิ่นฐานสำหรับแรงงาน E-9 และ H-2 ในชอนบุก',
        'ปรึกษาผู้เชี่ยวชาญด้านแรงงาน กฎหมาย เอกสาร การเงิน และการแพทย์ พร้อมล่ามมากกว่า 8 ภาษา',
        'อาทิตย์–พฤหัสบดี 9:00–18:00 (หยุดศุกร์ เสาร์ และวันหยุด) โทร 1551-1195 ชั้น 6 เลขที่ 276 Hongsan-ro เขตวันซาน ชอนจู'
      ] },
    id: { title: 'Pusat Dukungan Pekerja Asing: konsultasi ahli dan penerjemah',
      points: [
        'Pusat dukungan menetap bagi pekerja E-9 dan H-2 di Jeonbuk.',
        'Konsultasi ahli soal ketenagakerjaan, hukum, administrasi, keuangan, dan medis, dengan penerjemah 8 bahasa lebih.',
        'Minggu–Kamis 09.00–18.00 (libur Jumat, Sabtu, hari libur); telepon 1551-1195; lantai 6, 276 Hongsan-ro, Wansan-gu, Jeonju.'
      ] }
  },
  {
    key: 'l-jeonbuk-edu-2026',
    tagKey: 'local',
    region: 'jeonbuk',
    source: '전북국제협력진흥원(전북외국인노동자지원센터)',
    url: 'https://www.jbica.kr/main/?menu=131',
    date: '2026-01-01',
    checked: '2026-10-27',
    ko: { title: '외국인근로자 한국어·직무 역량 교육',
      points: [
        'E-9·H-2 근로자를 위한 한국어능력시험(TOPIK) 대비반과 찾아가는 한국어 교육을 합니다.',
        '지게차 등 직무 역량 교육과 체험형 산업안전 교육도 있습니다.',
        '전북국제협력진흥원 누리집 “프로그램 신청” 메뉴에서 신청하거나 1551-1195로 문의하세요.'
      ] },
    en: { title: 'Korean and job-skills training for foreign workers',
      points: [
        'TOPIK prep classes and on-site Korean classes for E-9 and H-2 workers.',
        'There is also job-skills training such as forklift operation and hands-on safety training.',
        'Apply via “Program application” on the Jeonbuk International Cooperation Agency website or call 1551-1195.'
      ] },
    vi: { title: 'Đào tạo tiếng Hàn và kỹ năng nghề cho lao động nước ngoài',
      points: [
        'Lớp luyện thi TOPIK và lớp tiếng Hàn tận nơi cho lao động E-9, H-2.',
        'Có đào tạo kỹ năng nghề như lái xe nâng và an toàn lao động thực hành.',
        'Đăng ký ở mục “Đăng ký chương trình” trên website Viện hợp tác quốc tế Jeonbuk hoặc gọi 1551-1195.'
      ] },
    th: { title: 'อบรมภาษาเกาหลีและทักษะงานสำหรับแรงงานต่างชาติ',
      points: [
        'ชั้นเรียนเตรียมสอบ TOPIK และสอนภาษาเกาหลีถึงที่สำหรับแรงงาน E-9 และ H-2',
        'มีอบรมทักษะงาน เช่น ขับรถยก และอบรมความปลอดภัยแบบลงมือทำ',
        'สมัครที่เมนู “สมัครโปรแกรม” ในเว็บไซต์สถาบันความร่วมมือระหว่างประเทศชอนบุก หรือโทร 1551-1195'
      ] },
    id: { title: 'Pelatihan bahasa Korea dan keterampilan kerja untuk pekerja asing',
      points: [
        'Kelas persiapan TOPIK dan kelas bahasa Korea keliling untuk pekerja E-9 dan H-2.',
        'Ada juga pelatihan keterampilan seperti forklift dan pelatihan keselamatan praktik.',
        'Daftar lewat menu “Pendaftaran program” di situs Badan Kerja Sama Internasional Jeonbuk atau telepon 1551-1195.'
      ] }
  },
  {
    key: 'l-jeonbuk-e74r-2026',
    tagKey: 'local',
    region: 'jeonbuk',
    source: '전북특별자치도 보도자료',
    url: 'https://www.jeonbuk.go.kr/newsroom/board/view.jeonbuk?boardId=BBS_0000090&menuCd=DOM_000001101000000000&paging=ok&startPage=1&dataSid=602411',
    date: '2025-03-10',
    checked: '2026-10-27',
    ko: { title: '지역특화형 숙련기능인력(E-7-4R) 비자 추천',
      points: [
        '전북에 2년 이상 체류한 E-9·E-10·H-2 근로자는 도지사 추천으로 E-7-4R 비자로 바꿀 수 있습니다.',
        '대상 지역은 도내 인구감소지역 10개 시·군과 익산시입니다.',
        '사는 곳이나 일하는 곳의 시·군청 또는 전북특별자치도에 문의하세요.'
      ] },
    en: { title: 'Regional skilled worker (E-7-4R) visa recommendation',
      points: [
        'E-9, E-10 and H-2 workers who have stayed in Jeonbuk for 2+ years can switch to E-7-4R with the Governor’s recommendation.',
        'It covers 10 depopulating cities and counties in the province, plus Iksan.',
        'Ask at the city or county office where you live or work, or at the provincial government.'
      ] },
    vi: { title: 'Đề cử visa lao động lành nghề theo vùng (E-7-4R)',
      points: [
        'Lao động E-9, E-10, H-2 lưu trú ở Jeonbuk từ 2 năm có thể chuyển sang E-7-4R nhờ đề cử của Tỉnh trưởng.',
        'Áp dụng cho 10 thành phố/huyện đang giảm dân số trong tỉnh và thành phố Iksan.',
        'Hỏi tại cơ quan thành phố/huyện nơi bạn sống hoặc làm việc, hoặc chính quyền tỉnh.'
      ] },
    th: { title: 'หนังสือรับรองวีซ่าแรงงานฝีมือเฉพาะพื้นที่ (E-7-4R)',
      points: [
        'แรงงาน E-9, E-10, H-2 ที่อยู่ในชอนบุก 2 ปีขึ้นไป เปลี่ยนเป็น E-7-4R ได้ด้วยหนังสือรับรองของผู้ว่าการ',
        'ครอบคลุม 10 เมืองและอำเภอที่ประชากรลดลงในจังหวัด และเมืองอิกซาน',
        'สอบถามที่สำนักงานเมืองหรืออำเภอที่อาศัยหรือทำงาน หรือที่จังหวัด'
      ] },
    id: { title: 'Rekomendasi visa tenaga terampil daerah (E-7-4R)',
      points: [
        'Pekerja E-9, E-10, H-2 yang tinggal di Jeonbuk 2 tahun atau lebih dapat beralih ke E-7-4R dengan rekomendasi gubernur.',
        'Berlaku di 10 kota/kabupaten yang penduduknya menurun di provinsi ini, serta Iksan.',
        'Tanyakan ke kantor kota/kabupaten tempat tinggal atau kerja, atau ke pemerintah provinsi.'
      ] }
  },
  {
    key: 'l-jeju-center-2026',
    tagKey: 'local',
    region: 'jeju',
    source: '제주특별자치도 외국인노동자지원센터',
    url: 'http://jejumwc.kr/index.php/contents/inform/notice?act=view&seq=6864',
    date: '2026-03-18',
    checked: '2026-10-27',
    ko: { title: '외국인노동자지원센터 무료 상담·찾아가는 상담소',
      points: [
        '생활 고충, 출입국, 임금 체불, 고용, 산재, 의료 지원을 무료로 상담합니다.',
        '한림, 대정, 성산, 서귀포 등 거점의 사업장과 기숙사를 직접 찾아가 상담합니다.',
        '전화 064-712-1141, 1522-3134(언어별 내선), 제주시 중앙로 56 우리은행 제주금융센터 3층, 평일 9~18시.'
      ] },
    en: { title: 'Foreign Workers Support Center: free counseling and outreach',
      points: [
        'Free counseling on daily problems, immigration, unpaid wages, employment, industrial accidents and medical support.',
        'Staff visit workplaces and dormitories in Hallim, Daejeong, Seongsan, Seogwipo and other areas.',
        'Call 064-712-1141 or 1522-3134 (extensions by language); 3F Woori Bank Jeju Financial Center, 56 Jungang-ro, Jeju City; weekdays 9:00–18:00.'
      ] },
    vi: { title: 'Trung tâm hỗ trợ lao động nước ngoài: tư vấn miễn phí, tư vấn tận nơi',
      points: [
        'Tư vấn miễn phí về khó khăn đời sống, xuất nhập cảnh, nợ lương, việc làm, tai nạn lao động, hỗ trợ y tế.',
        'Nhân viên đến tận nơi làm việc và ký túc xá ở Hallim, Daejeong, Seongsan, Seogwipo.',
        'Gọi 064-712-1141 hoặc 1522-3134 (số nội bộ theo ngôn ngữ); tầng 3 Woori Bank Jeju Financial Center, 56 Jungang-ro, TP Jeju; ngày thường 9–18 giờ.'
      ] },
    th: { title: 'ศูนย์สนับสนุนแรงงานต่างชาติ: ปรึกษาฟรีและออกพื้นที่',
      points: [
        'ปรึกษาฟรีเรื่องปัญหาในชีวิต ตรวจคนเข้าเมือง ค้างจ่ายค่าจ้าง การจ้างงาน อุบัติเหตุจากการทำงาน และการแพทย์',
        'เจ้าหน้าที่ไปให้คำปรึกษาถึงสถานที่ทำงานและหอพักที่ฮัลลิม แทจอง ซองซาน ซอกวิโพ',
        'โทร 064-712-1141 หรือ 1522-3134 (กดเบอร์ต่อตามภาษา) ชั้น 3 Woori Bank Jeju Financial Center เลขที่ 56 Jungang-ro เมืองเชจู วันธรรมดา 9:00–18:00'
      ] },
    id: { title: 'Pusat Dukungan Pekerja Asing: konsultasi gratis dan kunjungan',
      points: [
        'Konsultasi gratis soal masalah hidup, imigrasi, upah tertunggak, pekerjaan, kecelakaan kerja, dan bantuan medis.',
        'Petugas mendatangi tempat kerja dan asrama di Hallim, Daejeong, Seongsan, Seogwipo, dan lainnya.',
        'Telepon 064-712-1141 atau 1522-3134 (ekstensi per bahasa); lantai 3 Woori Bank Jeju Financial Center, 56 Jungang-ro, Kota Jeju; hari kerja 09.00–18.00.'
      ] }
  },
  {
    key: 'n-inspect-2025',
    tagKey: 'eps',
    source: '고용노동부',
    url: 'https://www.korea.kr/news/policyNewsView.do?newsId=148948604',
    date: '2025-09-03',
    checked: '2026-10-28',
    ko: { title: '외국인 고용 취약사업장 집중 감독',
      points: [
        '고용노동부가 2025년 9월 4일부터 4주 동안 외국인을 많이 고용한 노무관리 취약 사업장을 집중 감독했습니다.',
        '임금 체불을 중점으로, 직장 내 괴롭힘·성희롱도 함께 점검했습니다. 17개 언어 설문으로 근로자를 면담했습니다.',
        '체불 피해자가 체류기간 만료로 임금을 못 받고 출국하지 않도록 신속히 조사합니다.'
      ] },
    en: { title: 'Intensive inspections of workplaces with many foreign workers',
      points: [
        'From 4 September 2025, the labor ministry ran four weeks of intensive inspections at poorly managed workplaces employing many foreigners.',
        'The focus was unpaid wages, along with workplace harassment and sexual harassment; workers were interviewed with surveys in 17 languages.',
        'Cases are handled quickly so victims do not have to leave Korea unpaid when their stay expires.'
      ] },
    vi: { title: 'Thanh tra tập trung nơi làm việc sử dụng nhiều lao động nước ngoài',
      points: [
        'Từ 4/9/2025, Bộ Lao động thanh tra tập trung 4 tuần các nơi làm việc quản lý lao động yếu kém, sử dụng nhiều người nước ngoài.',
        'Trọng tâm là nợ lương, kèm kiểm tra quấy rối, quấy rối tình dục; phỏng vấn người lao động bằng phiếu khảo sát 17 ngôn ngữ.',
        'Vụ việc được xử lý nhanh để nạn nhân không phải xuất cảnh khi chưa nhận lương do hết hạn lưu trú.'
      ] },
    th: { title: 'ตรวจเข้มสถานประกอบการที่จ้างแรงงานต่างชาติจำนวนมาก',
      points: [
        'ตั้งแต่ 4 กันยายน 2025 กระทรวงแรงงานตรวจเข้ม 4 สัปดาห์ในสถานประกอบการที่จ้างชาวต่างชาติจำนวนมากและบริหารแรงงานไม่ดี',
        'เน้นเรื่องค้างจ่ายค่าจ้าง รวมถึงการกลั่นแกล้งและล่วงละเมิดทางเพศ สัมภาษณ์แรงงานด้วยแบบสอบถาม 17 ภาษา',
        'เร่งดำเนินการเพื่อไม่ให้ผู้เสียหายต้องออกนอกประเทศโดยไม่ได้รับค่าจ้างเพราะวีซ่าหมดอายุ'
      ] },
    id: { title: 'Pemeriksaan intensif tempat kerja dengan banyak pekerja asing',
      points: [
        'Mulai 4 September 2025, Kementerian Ketenagakerjaan memeriksa secara intensif selama 4 minggu tempat kerja yang banyak mempekerjakan warga asing dan manajemennya lemah.',
        'Fokusnya upah tertunggak, juga perundungan dan pelecehan seksual; pekerja diwawancarai dengan survei 17 bahasa.',
        'Kasus ditangani cepat agar korban tidak harus pulang tanpa upah karena izin tinggal habis.'
      ] }
  },
  {
    key: 'n-habitual-arrears-2025',
    tagKey: 'eps',
    source: '고용노동부 · 근로기준법',
    url: 'https://law.go.kr/LSW/lsRvsRsnListP.do?chrClsCd=010102&lsId=001872&lsRvsGubun=all',
    date: '2025-10-22',
    checked: '2026-10-28',
    ko: { title: '상습 임금체불 사업주 제재 강화',
      points: [
        '개정 근로기준법이 2025년 10월 23일부터 시행됐습니다. 상습 체불 사업주는 신용 제재, 정부 지원 제한, 출국금지를 받습니다.',
        '고의·상습 체불을 당한 근로자는 체불액의 최대 3배까지 손해배상을 청구할 수 있습니다.',
        '퇴직자만 받던 연 20% 체불 지연이자를 이제 재직 중인 근로자도 받습니다.'
      ] },
    en: { title: 'Tougher sanctions on employers who repeatedly withhold wages',
      points: [
        'The amended Labor Standards Act took effect on 23 October 2025; habitual non-paying employers face credit sanctions, exclusion from government support and travel bans.',
        'Workers hit by deliberate or repeated non-payment can claim damages of up to three times the unpaid amount.',
        'Currently employed workers, not just former employees, now get 20% annual late-payment interest.'
      ] },
    vi: { title: 'Siết chế tài chủ nợ lương nhiều lần',
      points: [
        'Luật Tiêu chuẩn lao động sửa đổi có hiệu lực từ 23/10/2025; chủ thường xuyên nợ lương bị hạn chế tín dụng, hỗ trợ của nhà nước và bị cấm xuất cảnh.',
        'Người lao động bị nợ lương cố ý hoặc nhiều lần có thể đòi bồi thường đến 3 lần số tiền nợ.',
        'Người đang làm việc nay cũng được nhận lãi chậm trả 20%/năm, không chỉ người đã nghỉ việc.'
      ] },
    th: { title: 'เพิ่มบทลงโทษนายจ้างที่ค้างจ่ายค่าจ้างเป็นนิสัย',
      points: [
        'กฎหมายมาตรฐานแรงงานฉบับแก้ไขมีผลตั้งแต่ 23 ตุลาคม 2025 นายจ้างที่ค้างจ่ายเป็นนิสัยจะถูกจำกัดเครดิต ตัดสิทธิ์การสนับสนุนจากรัฐ และห้ามออกนอกประเทศ',
        'แรงงานที่ถูกค้างจ่ายโดยเจตนาหรือซ้ำๆ ฟ้องเรียกค่าเสียหายได้สูงสุด 3 เท่าของยอดค้าง',
        'แรงงานที่ยังทำงานอยู่ได้รับดอกเบี้ยล่าช้าปีละ 20% ด้วย ไม่ใช่เฉพาะผู้ลาออก'
      ] },
    id: { title: 'Sanksi lebih berat untuk pengusaha yang berulang kali menunggak upah',
      points: [
        'UU Standar Ketenagakerjaan yang diubah berlaku 23 Oktober 2025; pengusaha penunggak berulang dikenai sanksi kredit, larangan bantuan pemerintah, dan cekal.',
        'Pekerja korban tunggakan sengaja atau berulang dapat menuntut ganti rugi hingga 3 kali jumlah tunggakan.',
        'Pekerja yang masih bekerja kini juga mendapat bunga keterlambatan 20% per tahun, bukan hanya yang sudah keluar.'
      ] }
  },
  {
    key: 'n-no-report-2025',
    tagKey: 'eps',
    source: '법무부 · 출입국관리법 시행규칙',
    url: 'https://www.korea.kr/news/policyNewsView.do?newsId=148954167',
    date: '2025-11-06',
    checked: '2026-10-28',
    ko: { title: '임금체불 신고 외국인 출입국 통보의무 면제',
      points: [
        '출입국관리법 시행규칙이 개정되어 2025년 11월 6일부터 시행됐습니다.',
        '근로감독관이 임금 체불 등을 조사하다 체류자격에 문제가 있는 외국인을 알게 되어도 출입국관서에 통보하지 않습니다.',
        '체류자격을 잃은 근로자도 강제퇴거 걱정 없이 체불 임금을 신고할 수 있습니다.'
      ] },
    en: { title: 'No immigration reporting for foreigners who report unpaid wages',
      points: [
        'An amended Immigration Act enforcement rule took effect on 6 November 2025.',
        'Labor inspectors who learn of a foreigner’s status problem while investigating unpaid wages no longer report it to immigration.',
        'Workers who have lost their status can report unpaid wages without fear of deportation.'
      ] },
    vi: { title: 'Miễn nghĩa vụ báo xuất nhập cảnh khi người nước ngoài khai báo nợ lương',
      points: [
        'Quy tắc thi hành Luật Xuất nhập cảnh sửa đổi có hiệu lực từ 6/11/2025.',
        'Thanh tra lao động phát hiện vấn đề tư cách lưu trú khi điều tra nợ lương sẽ không báo cho cơ quan xuất nhập cảnh.',
        'Người đã mất tư cách lưu trú cũng có thể khai báo nợ lương mà không lo bị trục xuất.'
      ] },
    th: { title: 'ยกเว้นการแจ้งตรวจคนเข้าเมืองเมื่อชาวต่างชาติร้องเรียนค้างจ่ายค่าจ้าง',
      points: [
        'ข้อบังคับกฎหมายตรวจคนเข้าเมืองฉบับแก้ไขมีผลตั้งแต่ 6 พฤศจิกายน 2025',
        'เจ้าหน้าที่ตรวจแรงงานที่พบปัญหาสถานะการพำนักระหว่างตรวจค้างจ่ายค่าจ้าง จะไม่แจ้งตรวจคนเข้าเมือง',
        'แรงงานที่หมดสถานะแล้วก็ร้องเรียนค้างจ่ายค่าจ้างได้โดยไม่ต้องกลัวถูกเนรเทศ'
      ] },
    id: { title: 'Tanpa laporan ke imigrasi bagi warga asing yang melaporkan upah tertunggak',
      points: [
        'Peraturan pelaksana UU Imigrasi yang diubah berlaku 6 November 2025.',
        'Pengawas ketenagakerjaan yang menemukan masalah status saat memeriksa upah tertunggak tidak lagi melapor ke imigrasi.',
        'Pekerja yang kehilangan status dapat melaporkan upah tertunggak tanpa takut dideportasi.'
      ] }
  },
  {
    key: 'n-severance-nonwaiver-2025',
    tagKey: 'eps',
    source: '고용노동부 · 근로자퇴직급여 보장법',
    url: 'https://law.go.kr/LSW/lsRvsRsnListP.do?chrClsCd=010102&lsId=009883&lsRvsGubun=all',
    date: '2025-11-11',
    checked: '2026-10-28',
    ko: { title: '반복 퇴직금 체불 사업주는 합의해도 처벌',
      points: [
        '근로자퇴직급여 보장법 개정이 2025년 11월 11일 공포·시행됐습니다.',
        '체불사업주 명단이 공개된 기간에 퇴직급여를 또 체불하면, 근로자가 처벌을 원하지 않아도 처벌할 수 있습니다.',
        '퇴직금을 못 받은 근로자에게 합의를 강요하는 일을 줄이려는 개정입니다.'
      ] },
    en: { title: 'Repeat severance non-payers punished even after settlement',
      points: [
        'An amendment to the Employee Retirement Benefit Security Act was promulgated and took effect on 11 November 2025.',
        'Employers who withhold severance again while on the public list of wage defaulters can be punished even if the worker does not want punishment.',
        'It aims to stop workers being pressured into settling unpaid severance.'
      ] },
    vi: { title: 'Chủ nợ trợ cấp thôi việc nhiều lần vẫn bị xử lý dù đã thỏa thuận',
      points: [
        'Sửa đổi Luật Bảo đảm trợ cấp hưu trí được công bố và có hiệu lực ngày 11/11/2025.',
        'Chủ đang bị công khai danh sách nợ lương mà lại nợ trợ cấp thôi việc thì vẫn bị xử lý dù người lao động không yêu cầu.',
        'Nhằm giảm việc ép người lao động thỏa thuận khi bị nợ trợ cấp thôi việc.'
      ] },
    th: { title: 'นายจ้างค้างจ่ายเงินชดเชยซ้ำถูกลงโทษแม้ตกลงกันแล้ว',
      points: [
        'การแก้ไขกฎหมายคุ้มครองเงินเกษียณของลูกจ้างประกาศและมีผลวันที่ 11 พฤศจิกายน 2025',
        'นายจ้างที่อยู่ในรายชื่อประกาศค้างจ่ายแล้วค้างจ่ายเงินชดเชยอีก ถูกลงโทษได้แม้ลูกจ้างไม่ประสงค์ให้ลงโทษ',
        'เพื่อลดการบังคับให้ลูกจ้างยอมความเรื่องเงินชดเชย'
      ] },
    id: { title: 'Penunggak pesangon berulang tetap dihukum meski ada kesepakatan',
      points: [
        'Perubahan UU Jaminan Tunjangan Pensiun diundangkan dan berlaku 11 November 2025.',
        'Pengusaha yang kembali menunggak pesangon saat namanya diumumkan sebagai penunggak dapat dihukum walau pekerja tidak menghendaki.',
        'Tujuannya mengurangi tekanan pada pekerja untuk berdamai soal pesangon tertunggak.'
      ] }
  },
  {
    key: 'n-round5-2025',
    tagKey: 'eps',
    source: '고용노동부',
    url: 'https://www.korea.kr/briefing/pressReleaseView.do?newsId=156728097',
    date: '2025-11-13',
    checked: '2026-10-28',
    ko: { title: '2025년 5회차 고용허가 9,326명 배정',
      points: [
        '2025년 마지막 신규 고용허가로 제조업 6,530명, 농축산업 940명, 어업 832명, 서비스업 596명, 조선업 250명, 건설업 178명을 배정했습니다.',
        '신청은 11월 24~28일에 받았고 결과는 12월 12일 발표했습니다.',
        '선정된 사업장의 근로자는 2026년 1월부터 입국합니다.'
      ] },
    en: { title: '2025 5th round: 9,326 hiring permits',
      points: [
        'The last round of 2025: manufacturing 6,530, agriculture and livestock 940, fishing 832, services 596, shipbuilding 250, construction 178.',
        'Applications were taken 24–28 November; results were announced on 12 December.',
        'Workers for selected workplaces arrive from January 2026.'
      ] },
    vi: { title: 'Đợt 5 năm 2025: cấp phép tuyển 9.326 người',
      points: [
        'Đợt cuối năm 2025: chế tạo 6.530, nông nghiệp – chăn nuôi 940, ngư nghiệp 832, dịch vụ 596, đóng tàu 250, xây dựng 178.',
        'Nhận đơn 24–28/11; công bố kết quả ngày 12/12.',
        'Lao động của nơi làm việc được chọn nhập cảnh từ tháng 1/2026.'
      ] },
    th: { title: 'รอบที่ 5 ปี 2025 จัดสรร 9,326 คน',
      points: [
        'รอบสุดท้ายของปี 2025 ภาคการผลิต 6,530 เกษตรและปศุสัตว์ 940 ประมง 832 บริการ 596 ต่อเรือ 250 ก่อสร้าง 178 คน',
        'รับคำขอ 24–28 พฤศจิกายน ประกาศผล 12 ธันวาคม',
        'แรงงานของสถานประกอบการที่ได้รับเลือกเข้าประเทศตั้งแต่มกราคม 2026'
      ] },
    id: { title: 'Putaran ke-5 2025: 9.326 izin kerja',
      points: [
        'Putaran terakhir 2025: manufaktur 6.530, pertanian dan peternakan 940, perikanan 832, jasa 596, galangan kapal 250, konstruksi 178.',
        'Permohonan diterima 24–28 November; hasil diumumkan 12 Desember.',
        'Pekerja untuk tempat kerja terpilih masuk mulai Januari 2026.'
      ] }
  },
  {
    key: 'n-detention-visit-2025',
    tagKey: 'eps',
    source: '고용노동부 · 법무부',
    url: 'https://www.moel.go.kr/news/enews/report/enewsView.do?news_seq=18792',
    date: '2025-12-29',
    checked: '2026-10-28',
    ko: { title: '외국인 보호시설 근로감독관 방문 상담',
      points: [
        '2025년 12월 29일부터 근로감독관이 화성·청주·여수·인천·울산의 외국인 보호시설 5곳을 격주로 찾아가 임금 체불 상담과 사건 접수를 합니다.',
        '체불이 확인되면 출입국관서가 보호를 잠시 풀어, 임금을 받기 전에 출국당하지 않게 합니다.',
        '1345 외국인종합안내센터가 20개 언어 통역을 지원합니다.'
      ] },
    en: { title: 'Labor inspectors visit immigration detention centers',
      points: [
        'From 29 December 2025, labor inspectors visit five detention facilities (Hwaseong, Cheongju, Yeosu, Incheon, Ulsan) every two weeks to take unpaid-wage cases.',
        'If unpaid wages are confirmed, immigration temporarily releases the person so they are not sent home before being paid.',
        'The 1345 Immigration Contact Center provides interpreting in 20 languages.'
      ] },
    vi: { title: 'Thanh tra lao động đến tư vấn tại cơ sở tạm giữ người nước ngoài',
      points: [
        'Từ 29/12/2025, thanh tra lao động đến 5 cơ sở tạm giữ (Hwaseong, Cheongju, Yeosu, Incheon, Ulsan) 2 tuần một lần để tư vấn, tiếp nhận vụ nợ lương.',
        'Nếu xác nhận bị nợ lương, cơ quan xuất nhập cảnh tạm thả để người đó không bị đưa về nước trước khi nhận lương.',
        'Trung tâm 1345 hỗ trợ phiên dịch 20 ngôn ngữ.'
      ] },
    th: { title: 'เจ้าหน้าที่ตรวจแรงงานไปให้คำปรึกษาที่สถานกักตัวชาวต่างชาติ',
      points: [
        'ตั้งแต่ 29 ธันวาคม 2025 เจ้าหน้าที่ตรวจแรงงานไปที่สถานกักตัว 5 แห่ง (ฮวาซอง ชองจู ยอซู อินชอน อุลซาน) ทุก 2 สัปดาห์ เพื่อรับเรื่องค้างจ่ายค่าจ้าง',
        'หากยืนยันว่าค้างจ่าย ตรวจคนเข้าเมืองจะปล่อยตัวชั่วคราวเพื่อไม่ให้ถูกส่งกลับก่อนได้รับเงิน',
        'ศูนย์ 1345 มีล่าม 20 ภาษา'
      ] },
    id: { title: 'Pengawas ketenagakerjaan mendatangi rumah detensi imigrasi',
      points: [
        'Mulai 29 Desember 2025, pengawas mendatangi 5 rumah detensi (Hwaseong, Cheongju, Yeosu, Incheon, Ulsan) tiap dua minggu untuk menerima kasus upah tertunggak.',
        'Jika tunggakan terbukti, imigrasi membebaskan sementara agar orang itu tidak dipulangkan sebelum dibayar.',
        'Pusat 1345 menyediakan penerjemah 20 bahasa.'
      ] }
  },
  {
    key: 'n-severance-penalty-2026',
    tagKey: 'eps',
    source: '고용노동부 · 근로자퇴직급여 보장법',
    url: 'https://law.go.kr/LSW/lsRvsRsnListP.do?chrClsCd=010102&lsId=009883&lsRvsGubun=all',
    date: '2026-03-17',
    checked: '2026-10-28',
    ko: { title: '퇴직금 체불 처벌 상향(징역 5년·벌금 5천만 원)',
      points: [
        '근로자퇴직급여 보장법 개정이 2026년 3월 17일 공포됐습니다.',
        '2026년 9월 18일부터 퇴직급여를 체불한 사업주의 처벌이 “3년 이하 징역 또는 3천만 원 이하 벌금”에서 “5년 이하 징역 또는 5천만 원 이하 벌금”으로 무거워졌습니다.',
        '외국인 근로자의 퇴직금 체불에도 똑같이 적용됩니다.'
      ] },
    en: { title: 'Heavier penalties for unpaid severance (up to 5 years or 50 million won)',
      points: [
        'An amendment to the Employee Retirement Benefit Security Act was promulgated on 17 March 2026.',
        'From 18 September 2026, the penalty for withholding severance rose from up to 3 years or 30 million won to up to 5 years in prison or 50 million won.',
        'It applies equally to unpaid severance of foreign workers.'
      ] },
    vi: { title: 'Tăng mức phạt nợ trợ cấp thôi việc (tù 5 năm, phạt 50 triệu won)',
      points: [
        'Sửa đổi Luật Bảo đảm trợ cấp hưu trí được công bố ngày 17/3/2026.',
        'Từ 18/9/2026, mức phạt chủ nợ trợ cấp thôi việc tăng từ tối đa 3 năm tù hoặc 30 triệu won lên tối đa 5 năm tù hoặc 50 triệu won.',
        'Áp dụng như nhau với trợ cấp thôi việc của lao động nước ngoài.'
      ] },
    th: { title: 'เพิ่มโทษค้างจ่ายเงินชดเชย (จำคุก 5 ปี ปรับ 50 ล้านวอน)',
      points: [
        'การแก้ไขกฎหมายคุ้มครองเงินเกษียณของลูกจ้างประกาศเมื่อ 17 มีนาคม 2026',
        'ตั้งแต่ 18 กันยายน 2026 โทษนายจ้างที่ค้างจ่ายเงินชดเชยเพิ่มจากจำคุกไม่เกิน 3 ปีหรือปรับไม่เกิน 30 ล้านวอน เป็นจำคุกไม่เกิน 5 ปีหรือปรับไม่เกิน 50 ล้านวอน',
        'ใช้กับเงินชดเชยของแรงงานต่างชาติเช่นเดียวกัน'
      ] },
    id: { title: 'Hukuman tunggakan pesangon diperberat (5 tahun atau 50 juta won)',
      points: [
        'Perubahan UU Jaminan Tunjangan Pensiun diundangkan 17 Maret 2026.',
        'Mulai 18 September 2026, hukuman penunggak pesangon naik dari maksimal 3 tahun penjara atau 30 juta won menjadi maksimal 5 tahun atau 50 juta won.',
        'Berlaku sama untuk pesangon pekerja asing.'
      ] }
  },
  {
    key: 'n-wage-penalty-2026',
    tagKey: 'eps',
    source: '고용노동부 · 근로기준법',
    url: 'https://law.go.kr/LSW/lsRvsRsnListP.do?chrClsCd=010102&lsId=001872&lsRvsGubun=all',
    date: '2026-04-07',
    checked: '2026-10-28',
    ko: { title: '임금체불 처벌 상향(징역 5년·벌금 5천만 원)',
      points: [
        '근로기준법 개정이 2026년 4월 7일 공포되어 10월 8일부터 시행됐습니다.',
        '임금을 체불한 사업주의 처벌이 “3년 이하 징역 또는 3천만 원 이하 벌금”에서 “5년 이하 징역 또는 5천만 원 이하 벌금”으로 무거워졌습니다.',
        '외국인 근로자의 임금 체불에도 똑같이 적용됩니다. 체불되면 1350으로 상담하세요.'
      ] },
    en: { title: 'Heavier penalties for unpaid wages (up to 5 years or 50 million won)',
      points: [
        'An amendment to the Labor Standards Act was promulgated on 7 April 2026 and took effect on 8 October.',
        'The penalty for withholding wages rose from up to 3 years or 30 million won to up to 5 years in prison or 50 million won.',
        'It applies equally to foreign workers; if your wages are unpaid, call 1350.'
      ] },
    vi: { title: 'Tăng mức phạt nợ lương (tù 5 năm, phạt 50 triệu won)',
      points: [
        'Sửa đổi Luật Tiêu chuẩn lao động công bố ngày 7/4/2026, có hiệu lực từ 8/10.',
        'Mức phạt chủ nợ lương tăng từ tối đa 3 năm tù hoặc 30 triệu won lên tối đa 5 năm tù hoặc 50 triệu won.',
        'Áp dụng như nhau với lao động nước ngoài; nếu bị nợ lương hãy gọi 1350.'
      ] },
    th: { title: 'เพิ่มโทษค้างจ่ายค่าจ้าง (จำคุก 5 ปี ปรับ 50 ล้านวอน)',
      points: [
        'การแก้ไขกฎหมายมาตรฐานแรงงานประกาศ 7 เมษายน 2026 มีผล 8 ตุลาคม',
        'โทษนายจ้างที่ค้างจ่ายค่าจ้างเพิ่มจากจำคุกไม่เกิน 3 ปีหรือปรับไม่เกิน 30 ล้านวอน เป็นจำคุกไม่เกิน 5 ปีหรือปรับไม่เกิน 50 ล้านวอน',
        'ใช้กับแรงงานต่างชาติเช่นเดียวกัน หากถูกค้างจ่ายโทร 1350'
      ] },
    id: { title: 'Hukuman tunggakan upah diperberat (5 tahun atau 50 juta won)',
      points: [
        'Perubahan UU Standar Ketenagakerjaan diundangkan 7 April 2026 dan berlaku 8 Oktober.',
        'Hukuman penunggak upah naik dari maksimal 3 tahun penjara atau 30 juta won menjadi maksimal 5 tahun atau 50 juta won.',
        'Berlaku sama untuk pekerja asing; jika upah tertunggak, hubungi 1350.'
      ] }
  },
  {
    key: 'n-round2-2026',
    tagKey: 'eps',
    source: '고용노동부',
    url: 'https://www.moel.go.kr/local/jungbu/news/notice/noticeView.do?bbs_seq=20260400456',
    date: '2026-04-08',
    checked: '2026-10-28',
    ko: { title: '2026년 2회차 고용허가 신청',
      points: [
        '2026년 2회차 E-9 신규 고용허가 신청을 4월 20일부터 5월 6일까지 받았습니다.',
        '결과는 5월 21일 발표했고, 고용허가서는 제조업 5월 22~29일, 그 밖의 업종 6월 1~8일에 발급했습니다.',
        '대상 업종은 제조업, 농축산업, 어업, 건설업, 서비스업, 임업, 광업입니다.'
      ] },
    en: { title: '2026 2nd round of hiring permits',
      points: [
        'Applications for the 2nd round of new E-9 permits were taken from 20 April to 6 May 2026.',
        'Results were announced on 21 May; permits were issued 22–29 May for manufacturing and 1–8 June for other sectors.',
        'Eligible sectors: manufacturing, agriculture and livestock, fishing, construction, services, forestry and mining.'
      ] },
    vi: { title: 'Đợt 2 năm 2026: nhận đơn cấp phép tuyển dụng',
      points: [
        'Đợt 2 năm 2026 nhận đơn cấp phép tuyển lao động E-9 mới từ 20/4 đến 6/5.',
        'Kết quả công bố 21/5; giấy phép ngành chế tạo cấp 22–29/5, các ngành khác 1–8/6.',
        'Các ngành: chế tạo, nông nghiệp – chăn nuôi, ngư nghiệp, xây dựng, dịch vụ, lâm nghiệp, khai khoáng.'
      ] },
    th: { title: 'รอบที่ 2 ปี 2026 รับคำขอใบอนุญาตจ้างงาน',
      points: [
        'รับคำขอใบอนุญาตจ้างแรงงาน E-9 ใหม่รอบที่ 2 ระหว่าง 20 เมษายน–6 พฤษภาคม 2026',
        'ประกาศผล 21 พฤษภาคม ออกใบอนุญาตภาคการผลิต 22–29 พฤษภาคม ภาคอื่น 1–8 มิถุนายน',
        'ประเภทกิจการ: การผลิต เกษตรและปศุสัตว์ ประมง ก่อสร้าง บริการ ป่าไม้ และเหมืองแร่'
      ] },
    id: { title: 'Putaran ke-2 2026: permohonan izin kerja',
      points: [
        'Permohonan izin kerja E-9 baru putaran ke-2 diterima 20 April–6 Mei 2026.',
        'Hasil diumumkan 21 Mei; izin manufaktur terbit 22–29 Mei, sektor lain 1–8 Juni.',
        'Sektor: manufaktur, pertanian dan peternakan, perikanan, konstruksi, jasa, kehutanan, dan pertambangan.'
      ] }
  },
  {
    key: 'n-rights-measures-2026',
    tagKey: 'eps',
    source: '고용노동부',
    url: 'https://www.moel.go.kr/news/enews/report/enewsView.do?news_seq=19479',
    date: '2026-06-04',
    checked: '2026-10-28',
    ko: { title: '이주노동자 인권침해 방지대책',
      points: [
        '노동포털 익명제보센터에 이주노동자 인권침해 항목을 만들고, 모국어 익명 설문으로 폭행·괴롭힘을 신고할 수 있게 했습니다.',
        '약 100개 사업장에 폭행·괴롭힘 기획감독을 하고, 14개 지방노동관서에 이주노동자 전담팀을 둡니다.',
        '피해자는 가까운 쉼터로 연계해 가해자와 분리합니다.'
      ] },
    en: { title: 'Measures to prevent human-rights abuse of migrant workers',
      points: [
        'A migrant-worker abuse category was added to the labor portal’s anonymous report center, with anonymous surveys in workers’ own languages to report assault or harassment.',
        'About 100 workplaces face targeted inspections for assault and harassment, and 14 regional labor offices have migrant-worker teams.',
        'Victims are linked to a nearby shelter and separated from the abuser.'
      ] },
    vi: { title: 'Biện pháp phòng chống xâm phạm nhân quyền lao động di trú',
      points: [
        'Trung tâm tố giác ẩn danh trên cổng thông tin lao động có mục riêng cho lao động di trú; có khảo sát ẩn danh bằng tiếng mẹ đẻ để báo bạo lực, quấy rối.',
        'Khoảng 100 nơi làm việc bị thanh tra chuyên đề về bạo lực, quấy rối; 14 cơ quan lao động địa phương có tổ chuyên trách lao động di trú.',
        'Nạn nhân được đưa đến nhà tạm trú gần nhất, tách khỏi người gây hại.'
      ] },
    th: { title: 'มาตรการป้องกันการละเมิดสิทธิแรงงานข้ามชาติ',
      points: [
        'ศูนย์รับแจ้งแบบไม่ระบุตัวตนในพอร์ทัลแรงงานมีหมวดสำหรับแรงงานข้ามชาติ และมีแบบสอบถามนิรนามเป็นภาษาแม่เพื่อแจ้งการทำร้ายหรือกลั่นแกล้ง',
        'ตรวจเฉพาะกิจเรื่องทำร้ายและกลั่นแกล้งราว 100 แห่ง และสำนักงานแรงงาน 14 แห่งมีทีมดูแลแรงงานข้ามชาติ',
        'ผู้เสียหายจะถูกส่งไปที่พักพิงใกล้ที่สุดและแยกจากผู้กระทำ'
      ] },
    id: { title: 'Langkah pencegahan pelanggaran HAM pekerja migran',
      points: [
        'Pusat laporan anonim di portal ketenagakerjaan kini punya kategori pekerja migran, dengan survei anonim dalam bahasa ibu untuk melaporkan kekerasan atau perundungan.',
        'Sekitar 100 tempat kerja diperiksa khusus soal kekerasan dan perundungan; 14 kantor ketenagakerjaan daerah punya tim khusus pekerja migran.',
        'Korban dihubungkan ke shelter terdekat dan dipisahkan dari pelaku.'
      ] }
  },
  {
    key: 'n-housing-law-2026',
    tagKey: 'eps',
    source: '고용노동부 · 외국인근로자의 고용 등에 관한 법률',
    url: 'https://www.law.go.kr/LSW/lsRvsRsnListP.do?chrClsCd=010102&lsId=009542&lsRvsGubun=all',
    date: '2026-06-09',
    checked: '2026-10-28',
    ko: { title: '외국인근로자 숙소 기준 강화(불법 가설건축물 금지)',
      points: [
        '외국인고용법 개정이 2026년 6월 9일 공포되어 2026년 12월 10일부터 시행됩니다.',
        '사업주가 주는 숙소는 건축물대장 등에 주거용으로 올라 있어야 하며, 비닐하우스 같은 불법 가설건축물은 숙소로 줄 수 없습니다.',
        '사업주는 근로계약 때 숙소 정보를 고용센터에도 내야 합니다.'
      ] },
    en: { title: 'Stricter housing rules for foreign workers (no illegal makeshift buildings)',
      points: [
        'An amendment to the Act on Foreign Workers’ Employment was promulgated on 9 June 2026 and takes effect on 10 December 2026.',
        'Employer-provided housing must be registered for residential use; illegal makeshift structures such as vinyl greenhouses cannot be used.',
        'Employers must also submit housing details to the Employment Center when signing the contract.'
      ] },
    vi: { title: 'Siết tiêu chuẩn chỗ ở cho lao động nước ngoài (cấm công trình tạm trái phép)',
      points: [
        'Luật Tuyển dụng lao động nước ngoài sửa đổi công bố ngày 9/6/2026, có hiệu lực từ 10/12/2026.',
        'Chỗ ở do chủ cung cấp phải được đăng ký mục đích ở; không được dùng công trình tạm trái phép như nhà kính nilon.',
        'Chủ phải nộp thông tin chỗ ở cho Trung tâm việc làm khi ký hợp đồng.'
      ] },
    th: { title: 'เข้มงวดมาตรฐานที่พักแรงงานต่างชาติ (ห้ามสิ่งปลูกสร้างชั่วคราวผิดกฎหมาย)',
      points: [
        'กฎหมายการจ้างแรงงานต่างชาติฉบับแก้ไขประกาศ 9 มิถุนายน 2026 มีผล 10 ธันวาคม 2026',
        'ที่พักที่นายจ้างจัดให้ต้องจดทะเบียนเป็นที่อยู่อาศัย ห้ามใช้สิ่งปลูกสร้างชั่วคราวผิดกฎหมาย เช่น โรงเรือนพลาสติก',
        'นายจ้างต้องยื่นข้อมูลที่พักต่อศูนย์จัดหางานเมื่อทำสัญญาจ้าง'
      ] },
    id: { title: 'Aturan tempat tinggal pekerja asing diperketat (larangan bangunan sementara ilegal)',
      points: [
        'Perubahan UU Ketenagakerjaan Pekerja Asing diundangkan 9 Juni 2026 dan berlaku 10 Desember 2026.',
        'Tempat tinggal dari pengusaha harus terdaftar untuk hunian; bangunan sementara ilegal seperti rumah plastik tidak boleh dipakai.',
        'Pengusaha wajib menyerahkan data tempat tinggal ke Pusat Ketenagakerjaan saat menandatangani kontrak.'
      ] }
  },
  {
    key: 'n-annual-leave-2026',
    tagKey: 'eps',
    source: '고용노동부 · 근로기준법',
    url: 'https://law.go.kr/LSW/lsRvsRsnListP.do?chrClsCd=010102&lsId=001872&lsRvsGubun=all',
    date: '2026-06-09',
    checked: '2026-10-28',
    ko: { title: '연차휴가 시간 단위 사용',
      points: [
        '근로기준법 개정이 2026년 6월 9일 공포됐고, 연차 관련 규정은 2027년 6월 10일부터 시행됩니다.',
        '근로자가 요청하면 연차휴가를 시간 단위로 나누어 쓸 수 있습니다. 연차를 썼다는 이유로 불이익을 주는 것도 금지됩니다.',
        '나눠 쓰는 단위와 범위는 시행령으로 정해질 예정입니다.'
      ] },
    en: { title: 'Annual leave usable in hours',
      points: [
        'An amendment to the Labor Standards Act was promulgated on 9 June 2026; the annual-leave provisions take effect on 10 June 2027.',
        'Workers can ask to use annual leave in hourly units, and disadvantaging workers for taking leave is banned.',
        'The units and limits will be set by enforcement decree.'
      ] },
    vi: { title: 'Nghỉ phép năm theo giờ',
      points: [
        'Sửa đổi Luật Tiêu chuẩn lao động công bố ngày 9/6/2026; quy định về phép năm có hiệu lực từ 10/6/2027.',
        'Người lao động có thể yêu cầu dùng phép năm theo giờ; cấm gây bất lợi vì đã nghỉ phép.',
        'Đơn vị và giới hạn sẽ do nghị định quy định.'
      ] },
    th: { title: 'ใช้วันลาพักร้อนเป็นรายชั่วโมงได้',
      points: [
        'การแก้ไขกฎหมายมาตรฐานแรงงานประกาศ 9 มิถุนายน 2026 ส่วนวันลาพักร้อนมีผล 10 มิถุนายน 2027',
        'ลูกจ้างขอใช้วันลาพักร้อนเป็นรายชั่วโมงได้ และห้ามปฏิบัติไม่เป็นธรรมเพราะใช้วันลา',
        'หน่วยและขอบเขตจะกำหนดในพระราชกฤษฎีกา'
      ] },
    id: { title: 'Cuti tahunan bisa dipakai per jam',
      points: [
        'Perubahan UU Standar Ketenagakerjaan diundangkan 9 Juni 2026; ketentuan cuti tahunan berlaku 10 Juni 2027.',
        'Pekerja dapat meminta cuti tahunan per jam, dan perlakuan merugikan karena mengambil cuti dilarang.',
        'Satuan dan batasnya akan diatur peraturan pelaksana.'
      ] }
  },
  {
    key: 'n-invite-ban-2026',
    tagKey: 'eps',
    source: '법무부 · 출입국관리법 시행규칙 입법예고',
    url: 'https://www.moj.go.kr/bbs/moj/182/607643/artclView.do',
    date: '2026-06-19',
    checked: '2026-10-28',
    ko: { title: '임금체불·산재 사업주 외국인 고용 제한 입법예고',
      points: [
        '법무부가 2026년 6월 19일부터 40일간 출입국관리법 시행규칙 개정안을 입법예고했습니다.',
        '근로기준법 위반으로 벌금 500만 원 이상을 받았거나 체불사업주 명단에 오른 사업주, 산재 관련 법 위반으로 처벌받은 사업주는 외국인 초청이 1~3년 제한됩니다.',
        '아직 시행 전이며 시행일은 발표되지 않았습니다.'
      ] },
    en: { title: 'Proposed hiring ban for employers with unpaid wages or industrial accidents',
      points: [
        'The Ministry of Justice posted a draft amendment to the Immigration Act enforcement rule for 40 days from 19 June 2026.',
        'Employers fined 5 million won or more under the Labor Standards Act, listed as wage defaulters, or punished under safety laws would be barred from inviting foreign workers for 1–3 years.',
        'It is not yet in force, and no start date has been announced.'
      ] },
    vi: { title: 'Dự thảo hạn chế tuyển người nước ngoài với chủ nợ lương, gây tai nạn lao động',
      points: [
        'Bộ Tư pháp công bố dự thảo sửa quy tắc thi hành Luật Xuất nhập cảnh trong 40 ngày từ 19/6/2026.',
        'Chủ bị phạt từ 5 triệu won theo Luật Tiêu chuẩn lao động, có tên trong danh sách nợ lương hoặc bị xử lý theo luật an toàn sẽ bị hạn chế mời lao động nước ngoài 1–3 năm.',
        'Chưa có hiệu lực, chưa công bố ngày áp dụng.'
      ] },
    th: { title: 'ร่างกฎห้ามนายจ้างที่ค้างจ่ายหรือมีอุบัติเหตุจ้างแรงงานต่างชาติ',
      points: [
        'กระทรวงยุติธรรมประกาศร่างแก้ไขข้อบังคับกฎหมายตรวจคนเข้าเมือง 40 วันตั้งแต่ 19 มิถุนายน 2026',
        'นายจ้างที่ถูกปรับตั้งแต่ 5 ล้านวอนตามกฎหมายมาตรฐานแรงงาน อยู่ในรายชื่อค้างจ่าย หรือถูกลงโทษตามกฎหมายความปลอดภัย จะถูกจำกัดการเชิญแรงงานต่างชาติ 1–3 ปี',
        'ยังไม่มีผลบังคับ และยังไม่ประกาศวันเริ่ม'
      ] },
    id: { title: 'Rancangan larangan merekrut bagi pengusaha penunggak upah atau kecelakaan kerja',
      points: [
        'Kementerian Kehakiman mengumumkan rancangan perubahan peraturan pelaksana UU Imigrasi selama 40 hari mulai 19 Juni 2026.',
        'Pengusaha yang didenda 5 juta won atau lebih menurut UU Standar Ketenagakerjaan, masuk daftar penunggak, atau dihukum menurut UU keselamatan akan dilarang mengundang pekerja asing 1–3 tahun.',
        'Belum berlaku dan tanggal mulainya belum diumumkan.'
      ] }
  },
  {
    key: 'n-round3-2026',
    tagKey: 'eps',
    source: '고용노동부 · 언론 보도',
    url: 'https://biz.sbs.co.kr/amp/article/20000318818',
    date: '2026-06-25',
    checked: '2026-10-28',
    ko: { title: '2026년 3회차 고용허가 1만 2,630명 배정',
      points: [
        '제조업 9,020명, 농축산업 1,906명, 어업 1,196명, 건설업 394명, 서비스업 114명을 배정했습니다.',
        '신청은 7월 6~20일에 받았고 결과는 8월 4일 발표했습니다.',
        '업종별 수요가 배정을 넘으면 탄력배정분 1만 명을 활용합니다.'
      ] },
    en: { title: '2026 3rd round: 12,630 hiring permits',
      points: [
        'Manufacturing 9,020, agriculture and livestock 1,906, fishing 1,196, construction 394, services 114.',
        'Applications were taken 6–20 July; results were announced on 4 August.',
        'If demand exceeds the allocation, the 10,000-person flexible quota is used.'
      ] },
    vi: { title: 'Đợt 3 năm 2026: cấp phép tuyển 12.630 người',
      points: [
        'Chế tạo 9.020, nông nghiệp – chăn nuôi 1.906, ngư nghiệp 1.196, xây dựng 394, dịch vụ 114.',
        'Nhận đơn 6–20/7; công bố kết quả 4/8.',
        'Nếu nhu cầu vượt chỉ tiêu, dùng phần phân bổ linh hoạt 10.000 người.'
      ] },
    th: { title: 'รอบที่ 3 ปี 2026 จัดสรร 12,630 คน',
      points: [
        'ภาคการผลิต 9,020 เกษตรและปศุสัตว์ 1,906 ประมง 1,196 ก่อสร้าง 394 บริการ 114 คน',
        'รับคำขอ 6–20 กรกฎาคม ประกาศผล 4 สิงหาคม',
        'หากความต้องการเกินโควตา จะใช้โควตายืดหยุ่น 10,000 คน'
      ] },
    id: { title: 'Putaran ke-3 2026: 12.630 izin kerja',
      points: [
        'Manufaktur 9.020, pertanian dan peternakan 1.906, perikanan 1.196, konstruksi 394, jasa 114.',
        'Permohonan diterima 6–20 Juli; hasil diumumkan 4 Agustus.',
        'Jika permintaan melebihi alokasi, kuota fleksibel 10.000 orang dipakai.'
      ] }
  },
  {
    key: 'n-wage-guarantee-2026',
    tagKey: 'eps',
    source: '고용노동부 · 임금채권보장법',
    url: 'https://eiec.kdi.re.kr/policy/materialView.do?num=285546',
    date: '2026-08-19',
    checked: '2026-10-28',
    ko: { title: '도산 사업장 대지급금 확대(최종 6개월분)',
      points: [
        '개정 임금채권보장법이 2026년 8월 20일부터 시행됐습니다.',
        '회사가 도산했을 때 나라가 먼저 주는 대지급금의 범위가 최종 3개월분에서 6개월분 임금으로, 상한액이 2,100만 원에서 3,150만 원으로 늘었습니다.',
        '8월 20일 이후 회생·파산 결정이나 도산 인정이 있는 경우부터 적용되며, E-9 근로자도 대상입니다.'
      ] },
    en: { title: 'Bigger state payouts when an employer goes bankrupt (last 6 months)',
      points: [
        'The amended Wage Claim Guarantee Act took effect on 20 August 2026.',
        'The state advance payment for workers of bankrupt companies now covers the last 6 months of wages instead of 3, with the cap raised from 21 million to 31.5 million won.',
        'It applies to rehabilitation, bankruptcy or insolvency decisions from 20 August, and E-9 workers are covered.'
      ] },
    vi: { title: 'Mở rộng tiền tạm ứng khi doanh nghiệp phá sản (6 tháng cuối)',
      points: [
        'Luật Bảo đảm quyền đòi lương sửa đổi có hiệu lực từ 20/8/2026.',
        'Tiền nhà nước tạm ứng khi công ty phá sản nay tính 6 tháng lương cuối thay vì 3, mức trần tăng từ 21 triệu lên 31,5 triệu won.',
        'Áp dụng với quyết định phục hồi, phá sản hoặc công nhận mất khả năng thanh toán từ 20/8; lao động E-9 cũng được hưởng.'
      ] },
    th: { title: 'เพิ่มเงินทดรองจ่ายเมื่อบริษัทล้มละลาย (6 เดือนสุดท้าย)',
      points: [
        'กฎหมายประกันสิทธิเรียกร้องค่าจ้างฉบับแก้ไขมีผลตั้งแต่ 20 สิงหาคม 2026',
        'เงินที่รัฐจ่ายล่วงหน้าเมื่อบริษัทล้มละลายครอบคลุมค่าจ้าง 6 เดือนสุดท้ายแทน 3 เดือน เพดานเพิ่มจาก 21 ล้านเป็น 31.5 ล้านวอน',
        'ใช้กับคำสั่งฟื้นฟู ล้มละลาย หรือรับรองการล้มละลายตั้งแต่ 20 สิงหาคม แรงงาน E-9 ได้สิทธิ์ด้วย'
      ] },
    id: { title: 'Dana talangan diperbesar saat perusahaan bangkrut (6 bulan terakhir)',
      points: [
        'UU Jaminan Klaim Upah yang diubah berlaku 20 Agustus 2026.',
        'Dana talangan negara bagi pekerja perusahaan bangkrut kini mencakup upah 6 bulan terakhir, bukan 3, dengan batas naik dari 21 juta menjadi 31,5 juta won.',
        'Berlaku untuk putusan rehabilitasi, pailit, atau pengakuan kebangkrutan sejak 20 Agustus; pekerja E-9 juga tercakup.'
      ] }
  },
  {
    key: 'l-gyeonggi-safety-ord-2026',
    tagKey: 'local',
    region: 'gyeonggi',
    source: '경기도 (조례 제8832호)',
    url: 'https://www.law.go.kr/자치법규/경기도외국인이주노동자산업안전및산업재해예방지원조례',
    date: '2026-01-15',
    checked: '2026-10-28',
    ko: { title: '외국인 이주노동자 산업안전·산재예방 지원 조례 제정',
      points: [
        '2026년 1월 15일 공포·시행됐습니다.',
        '도가 외국인 이주노동자 산업안전 지원 센터(본부·권역별 거점)를 설치·운영하도록 정했습니다.',
        '모국어 등 이해할 수 있는 언어로 하는 안전교육이 들어 있습니다. 센터는 아직 문을 열지 않았습니다.'
      ] },
    en: { title: 'Ordinance on safety and accident prevention for migrant workers',
      points: [
        'Promulgated and in force from 15 January 2026.',
        'The province must set up industrial safety support centers for migrant workers (a headquarters and regional hubs).',
        'It includes safety training in a language workers understand; the centers have not opened yet.'
      ] },
    vi: { title: 'Ban hành điều lệ hỗ trợ an toàn lao động cho lao động di trú',
      points: [
        'Công bố và có hiệu lực từ 15/1/2026.',
        'Tỉnh phải lập trung tâm hỗ trợ an toàn lao động cho lao động di trú (trụ sở và các điểm khu vực).',
        'Có đào tạo an toàn bằng ngôn ngữ người lao động hiểu; trung tâm chưa mở cửa.'
      ] },
    th: { title: 'ข้อบัญญัติสนับสนุนความปลอดภัยและป้องกันอุบัติเหตุสำหรับแรงงานข้ามชาติ',
      points: [
        'ประกาศและมีผลตั้งแต่ 15 มกราคม 2026',
        'จังหวัดต้องตั้งศูนย์สนับสนุนความปลอดภัยสำหรับแรงงานข้ามชาติ (สำนักงานใหญ่และศูนย์ประจำพื้นที่)',
        'มีการอบรมความปลอดภัยเป็นภาษาที่แรงงานเข้าใจ ศูนย์ยังไม่เปิด'
      ] },
    id: { title: 'Perda keselamatan kerja dan pencegahan kecelakaan bagi pekerja migran',
      points: [
        'Diundangkan dan berlaku sejak 15 Januari 2026.',
        'Provinsi wajib membentuk pusat dukungan keselamatan kerja bagi pekerja migran (kantor pusat dan pusat wilayah).',
        'Termasuk pelatihan keselamatan dalam bahasa yang dipahami pekerja; pusatnya belum dibuka.'
      ] }
  },
  {
    key: 'l-gyeonggi-family-ord-2026',
    tagKey: 'local',
    region: 'gyeonggi',
    source: '경기도 (조례 제8908호)',
    url: 'https://www.law.go.kr/자치법규/경기도산업재해사망외국인노동자유가족지원조례',
    date: '2026-06-29',
    checked: '2026-10-28',
    ko: { title: '산재 사망 외국인노동자 유가족 지원 조례 제정',
      points: [
        '2026년 6월 29일 공포·시행됐습니다.',
        '경기도 사업장에서 산재로 숨진 등록 외국인노동자의 유가족에게 입국 절차, 숙박, 장례, 시신 송환, 통역·법률·심리 상담, 산재 보상 절차를 지원할 수 있습니다.',
        '도움이 필요하면 경기도 이민사회정책과나 도내 외국인 지원기관에 요청하세요.'
      ] },
    en: { title: 'Ordinance supporting families of migrant workers killed at work',
      points: [
        'Promulgated and in force from 29 June 2026.',
        'Families of registered foreign workers killed in industrial accidents in Gyeonggi can get help with entry, lodging, funerals, repatriation, interpreting, legal and counseling support, and compensation claims.',
        'Ask the Gyeonggi Immigrant Society Policy Division or a foreigner support organization in the province.'
      ] },
    vi: { title: 'Ban hành điều lệ hỗ trợ gia đình lao động nước ngoài tử vong do tai nạn lao động',
      points: [
        'Công bố và có hiệu lực từ 29/6/2026.',
        'Gia đình lao động nước ngoài có đăng ký tử vong do tai nạn lao động tại Gyeonggi được hỗ trợ nhập cảnh, chỗ ở, tang lễ, đưa thi hài về nước, phiên dịch, tư vấn pháp lý, tâm lý và thủ tục bồi thường.',
        'Hãy liên hệ Phòng Chính sách cộng đồng di dân Gyeonggi hoặc tổ chức hỗ trợ người nước ngoài trong tỉnh.'
      ] },
    th: { title: 'ข้อบัญญัติช่วยครอบครัวแรงงานต่างชาติที่เสียชีวิตจากการทำงาน',
      points: [
        'ประกาศและมีผลตั้งแต่ 29 มิถุนายน 2026',
        'ครอบครัวของแรงงานต่างชาติที่จดทะเบียนและเสียชีวิตจากอุบัติเหตุในคยองกีได้รับความช่วยเหลือเรื่องเข้าประเทศ ที่พัก งานศพ ส่งศพกลับ ล่าม ปรึกษากฎหมายและจิตใจ และขั้นตอนค่าทดแทน',
        'ติดต่อฝ่ายนโยบายสังคมผู้ย้ายถิ่น คยองกี หรือหน่วยงานช่วยเหลือชาวต่างชาติในจังหวัด'
      ] },
    id: { title: 'Perda bantuan keluarga pekerja asing yang meninggal karena kecelakaan kerja',
      points: [
        'Diundangkan dan berlaku sejak 29 Juni 2026.',
        'Keluarga pekerja asing terdaftar yang meninggal karena kecelakaan kerja di Gyeonggi dapat dibantu soal masuk Korea, penginapan, pemakaman, pemulangan jenazah, penerjemah, konsultasi hukum dan psikologis, serta klaim kompensasi.',
        'Hubungi Divisi Kebijakan Masyarakat Imigran Gyeonggi atau lembaga pendamping warga asing di provinsi.'
      ] }
  },
  {
    key: 'l-gyeonggi-predeparture-ord-2026',
    tagKey: 'local',
    region: 'gyeonggi',
    source: '경기도 (조례 제8941호)',
    url: 'https://www.law.go.kr/자치법규/경기도외국인노동자지원조례',
    date: '2026-07-14',
    checked: '2026-10-28',
    ko: { title: '외국인노동자 지원 조례 개정(입국 전 교육)',
      points: [
        '2026년 7월 14일 개정되어 입국 전 사전적응·언어교육 지원 조항이 생겼습니다.',
        '경기도 사업장에서 일할 예정인 사람에게 실용 한국어, 산업안전 용어, 근로기준과 노동권, 지역 생활 교육을 온라인 등으로 지원할 수 있습니다.',
        '실제 교육 프로그램은 도의 공고를 확인하세요.'
      ] },
    en: { title: 'Foreign worker support ordinance amended (pre-arrival training)',
      points: [
        'Amended on 14 July 2026 to add support for pre-arrival adjustment and language training.',
        'People due to work in Gyeonggi can get practical Korean, safety terms, labor standards and rights, and local-life training, including online.',
        'Check provincial notices for actual programs.'
      ] },
    vi: { title: 'Sửa điều lệ hỗ trợ lao động nước ngoài (đào tạo trước khi nhập cảnh)',
      points: [
        'Sửa đổi ngày 14/7/2026, thêm điều hỗ trợ thích nghi và học ngôn ngữ trước khi nhập cảnh.',
        'Người sắp làm việc tại Gyeonggi có thể được học tiếng Hàn thực dụng, thuật ngữ an toàn, tiêu chuẩn và quyền lao động, đời sống địa phương, kể cả trực tuyến.',
        'Xem thông báo của tỉnh về chương trình cụ thể.'
      ] },
    th: { title: 'แก้ไขข้อบัญญัติสนับสนุนแรงงานต่างชาติ (อบรมก่อนเข้าประเทศ)',
      points: [
        'แก้ไขเมื่อ 14 กรกฎาคม 2026 เพิ่มการสนับสนุนการปรับตัวและเรียนภาษาก่อนเข้าประเทศ',
        'ผู้ที่จะมาทำงานในคยองกีเรียนภาษาเกาหลีใช้งาน คำศัพท์ความปลอดภัย มาตรฐานและสิทธิแรงงาน และชีวิตในพื้นที่ได้ รวมถึงทางออนไลน์',
        'ดูประกาศของจังหวัดสำหรับโปรแกรมจริง'
      ] },
    id: { title: 'Perda dukungan pekerja asing diubah (pelatihan sebelum kedatangan)',
      points: [
        'Diubah 14 Juli 2026 dengan tambahan dukungan adaptasi dan bahasa sebelum kedatangan.',
        'Calon pekerja di Gyeonggi dapat belajar bahasa Korea praktis, istilah keselamatan, standar dan hak kerja, serta kehidupan setempat, termasuk daring.',
        'Lihat pengumuman provinsi untuk program nyata.'
      ] }
  },
  {
    key: 'l-gangwon-residents-ord-2026',
    tagKey: 'local',
    region: 'gangwon',
    source: '강원특별자치도 (조례 제5751호)',
    url: 'https://www.law.go.kr/자치법규/강원특별자치도외국인주민지원조례',
    date: '2026-02-27',
    checked: '2026-10-28',
    ko: { title: '외국인주민 지원 조례 제정',
      points: [
        '2026년 2월 27일 새로 제정되어 공포한 날부터 시행됐습니다.',
        '도내 등록외국인과 자녀는 도민과 똑같이 도의 공공시설과 행정 혜택을 이용할 수 있습니다.',
        '한국어·생활 교육, 법률·체류 상담, 주거·의료 편의, 직업훈련, 긴급 구호를 지원할 수 있는 근거가 생겼습니다.'
      ] },
    en: { title: 'Foreign residents support ordinance enacted',
      points: [
        'Newly enacted and in force from 27 February 2026.',
        'Registered foreigners and their children can use provincial public facilities and services on the same terms as residents.',
        'It creates a basis for Korean and life classes, legal and visa counseling, housing and medical help, job training and emergency relief.'
      ] },
    vi: { title: 'Ban hành điều lệ hỗ trợ cư dân nước ngoài',
      points: [
        'Ban hành mới và có hiệu lực từ 27/2/2026.',
        'Người nước ngoài có đăng ký và con cái được dùng cơ sở công và dịch vụ của tỉnh như người dân.',
        'Tạo cơ sở hỗ trợ học tiếng Hàn, tư vấn pháp lý, lưu trú, nhà ở, y tế, đào tạo nghề và cứu trợ khẩn cấp.'
      ] },
    th: { title: 'ออกข้อบัญญัติสนับสนุนผู้พำนักชาวต่างชาติ',
      points: [
        'ออกใหม่และมีผลตั้งแต่ 27 กุมภาพันธ์ 2026',
        'ชาวต่างชาติที่จดทะเบียนและบุตรใช้สถานที่และบริการของจังหวัดได้เหมือนประชาชน',
        'เป็นฐานสนับสนุนการเรียนภาษาเกาหลี ปรึกษากฎหมายและการพำนัก ที่อยู่อาศัย การแพทย์ ฝึกอาชีพ และช่วยเหลือฉุกเฉิน'
      ] },
    id: { title: 'Perda dukungan warga asing diterbitkan',
      points: [
        'Diterbitkan dan berlaku sejak 27 Februari 2026.',
        'Warga asing terdaftar dan anaknya dapat memakai fasilitas dan layanan provinsi seperti penduduk.',
        'Menjadi dasar dukungan kelas bahasa Korea, konsultasi hukum dan izin tinggal, perumahan, kesehatan, pelatihan kerja, dan bantuan darurat.'
      ] }
  },
  {
    key: 'l-chungbuk-center-ord-2026',
    tagKey: 'local',
    region: 'chungbuk',
    source: '충청북도 (조례 제5529호)',
    url: 'https://www.law.go.kr/자치법규/충청북도외국인주민지원조례',
    date: '2026-02-13',
    checked: '2026-10-28',
    ko: { title: '외국인 통합지원센터 설치 근거 마련',
      points: [
        '2026년 2월 13일 충북 외국인주민 지원 조례가 개정되어 외국인 통합지원센터를 설치·운영할 수 있게 됐습니다.',
        '센터는 고충·생활·법률·취업 상담, 통번역, 한국어 교육을 한곳에서 합니다.',
        '센터가 문을 열면 도내 외국인근로자도 이용할 수 있습니다. 개소 여부는 도에 확인하세요.'
      ] },
    en: { title: 'Legal basis for an integrated foreigner support center',
      points: [
        'The North Chungcheong foreign residents ordinance was amended on 13 February 2026 to allow an integrated foreigner support center.',
        'The center would offer grievance, daily-life, legal and job counseling, interpreting and Korean classes in one place.',
        'Foreign workers in the province can use it once it opens; check with the province whether it has opened.'
      ] },
    vi: { title: 'Cơ sở pháp lý lập trung tâm hỗ trợ tổng hợp người nước ngoài',
      points: [
        'Điều lệ hỗ trợ cư dân nước ngoài Chungbuk sửa ngày 13/2/2026, cho phép lập trung tâm hỗ trợ tổng hợp.',
        'Trung tâm sẽ tư vấn khiếu nại, đời sống, pháp lý, việc làm, phiên dịch và dạy tiếng Hàn tại một nơi.',
        'Lao động nước ngoài trong tỉnh có thể dùng khi trung tâm mở; hãy hỏi tỉnh xem đã mở chưa.'
      ] },
    th: { title: 'วางฐานกฎหมายตั้งศูนย์สนับสนุนชาวต่างชาติแบบครบวงจร',
      points: [
        'ข้อบัญญัติสนับสนุนผู้พำนักชาวต่างชาติชุงบุกแก้ไขเมื่อ 13 กุมภาพันธ์ 2026 ให้ตั้งศูนย์ครบวงจรได้',
        'ศูนย์จะให้คำปรึกษาปัญหา ชีวิต กฎหมาย การหางาน ล่าม และสอนภาษาเกาหลีในที่เดียว',
        'แรงงานต่างชาติในจังหวัดใช้ได้เมื่อศูนย์เปิด ควรสอบถามจังหวัดว่าเปิดแล้วหรือยัง'
      ] },
    id: { title: 'Dasar hukum pusat dukungan terpadu warga asing',
      points: [
        'Perda dukungan warga asing Chungbuk diubah 13 Februari 2026 sehingga pusat dukungan terpadu dapat dibentuk.',
        'Pusat ini akan melayani konsultasi keluhan, kehidupan, hukum, pekerjaan, penerjemahan, dan kelas bahasa Korea di satu tempat.',
        'Pekerja asing di provinsi dapat memakainya setelah dibuka; tanyakan ke provinsi apakah sudah dibuka.'
      ] }
  },
  {
    key: 'l-incheon-branch-2026',
    tagKey: 'local',
    region: 'incheon',
    source: '인천광역시',
    url: 'https://www.incheon.go.kr/ml_kr/MLKR020401/3065030',
    date: '2026-02-25',
    checked: '2026-10-28',
    ko: { title: '외국인지원센터 남동산단 분소 개소',
      points: [
        '2026년 2월 25일 남동구 하나은행 남동산단금융센터지점 2층에 인천외국인지원센터 분소가 문을 열었습니다.',
        '매주 일요일 무료 의료서비스를 제공합니다.',
        '한국어 교육 등 정착 지원 프로그램과 커뮤니티 공간도 운영합니다.'
      ] },
    en: { title: 'Branch of the Foreigner Support Center opens in Namdong Industrial Complex',
      points: [
        'A branch of the Incheon Foreigner Support Center opened on 25 February 2026 on the 2nd floor of the Hana Bank Namdong Industrial Complex branch, Namdong-gu.',
        'It offers free medical care every Sunday.',
        'It also runs settlement programs such as Korean classes and a community space.'
      ] },
    vi: { title: 'Mở chi nhánh Trung tâm hỗ trợ người nước ngoài tại KCN Namdong',
      points: [
        'Chi nhánh Trung tâm hỗ trợ người nước ngoài Incheon mở ngày 25/2/2026 tại tầng 2 chi nhánh Hana Bank KCN Namdong, quận Namdong.',
        'Khám bệnh miễn phí mỗi Chủ nhật.',
        'Có chương trình hỗ trợ định cư như lớp tiếng Hàn và không gian cộng đồng.'
      ] },
    th: { title: 'เปิดสาขาศูนย์สนับสนุนชาวต่างชาติที่นิคมนัมดง',
      points: [
        'สาขาศูนย์สนับสนุนชาวต่างชาติอินชอนเปิดเมื่อ 25 กุมภาพันธ์ 2026 ที่ชั้น 2 ธนาคารฮานา สาขานิคมนัมดง เขตนัมดง',
        'ตรวจรักษาฟรีทุกวันอาทิตย์',
        'มีโปรแกรมช่วยตั้งถิ่นฐาน เช่น สอนภาษาเกาหลี และพื้นที่ชุมชน'
      ] },
    id: { title: 'Cabang Pusat Dukungan Warga Asing dibuka di Kawasan Industri Namdong',
      points: [
        'Cabang Pusat Dukungan Warga Asing Incheon dibuka 25 Februari 2026 di lantai 2 Hana Bank cabang Kawasan Industri Namdong, Namdong-gu.',
        'Menyediakan pengobatan gratis setiap Minggu.',
        'Juga ada program menetap seperti kelas bahasa Korea dan ruang komunitas.'
      ] }
  },
  {
    key: 'l-jeju-basic-ord-2025',
    tagKey: 'local',
    region: 'jeju',
    source: '제주특별자치도 (조례 제4157호)',
    url: 'https://www.law.go.kr/자치법규/제주특별자치도외국인주민및이민정책지원기본조례',
    date: '2025-12-24',
    checked: '2026-10-28',
    ko: { title: '외국인주민·이민정책 지원 기본 조례 제정',
      points: [
        '2025년 12월 24일 제정되어 공포한 날부터 시행됐습니다.',
        '외국인노동자를 위한 노동·고용·법률 상담, 권익 보호, 주거 지원, 지원센터와 쉼터 운영 근거가 들어 있습니다.',
        '기존 외국인주민 지원·인권 조례 등은 폐지되고 이 조례로 합쳐졌습니다.'
      ] },
    en: { title: 'Basic ordinance on foreign residents and immigration policy enacted',
      points: [
        'Enacted and in force from 24 December 2025.',
        'It provides a basis for labor, employment and legal counseling, rights protection, housing support, and support centers and shelters for foreign workers.',
        'Earlier ordinances on foreign residents’ support and human rights were repealed and merged into it.'
      ] },
    vi: { title: 'Ban hành điều lệ cơ bản về cư dân nước ngoài và chính sách di dân',
      points: [
        'Ban hành và có hiệu lực từ 24/12/2025.',
        'Có cơ sở tư vấn lao động, việc làm, pháp lý, bảo vệ quyền lợi, hỗ trợ nhà ở, trung tâm hỗ trợ và nhà tạm trú cho lao động nước ngoài.',
        'Các điều lệ cũ về hỗ trợ và nhân quyền cư dân nước ngoài bị bãi bỏ và gộp vào.'
      ] },
    th: { title: 'ออกข้อบัญญัติพื้นฐานผู้พำนักชาวต่างชาติและนโยบายผู้ย้ายถิ่น',
      points: [
        'ออกและมีผลตั้งแต่ 24 ธันวาคม 2025',
        'มีฐานสำหรับปรึกษาแรงงาน การจ้างงาน กฎหมาย คุ้มครองสิทธิ ช่วยที่อยู่อาศัย ศูนย์สนับสนุน และที่พักพิงสำหรับแรงงานต่างชาติ',
        'ข้อบัญญัติเดิมเรื่องสนับสนุนและสิทธิผู้พำนักชาวต่างชาติถูกยกเลิกและรวมเข้ามา'
      ] },
    id: { title: 'Perda dasar warga asing dan kebijakan imigrasi diterbitkan',
      points: [
        'Diterbitkan dan berlaku sejak 24 Desember 2025.',
        'Menjadi dasar konsultasi kerja, ketenagakerjaan, hukum, perlindungan hak, bantuan perumahan, serta pusat dukungan dan shelter bagi pekerja asing.',
        'Perda lama tentang dukungan dan HAM warga asing dicabut dan digabung ke perda ini.'
      ] }
  },
  {
    key: 'l-jg-crisis-shelter-2026',
    tagKey: 'local',
    region: 'jeonnamgwangju',
    source: '전라남도 · 언론 보도',
    url: 'https://www.khan.co.kr/article/202603201306001/',
    date: '2026-03-20',
    checked: '2026-10-28',
    ko: { title: '위기 외국인 노동자 쉼터(여수·영암) 운영 기관 선정',
      points: [
        '전남도가 인권침해, 실직, 사업장 변경 등으로 위기에 놓인 외국인 노동자를 위한 쉼터 운영 기관으로 여수시와 영암군을 선정했습니다.',
        '입소하면 최대 90일 동안 숙식과 법률·노무 상담, 한국어 교육, 의료 서비스를 받을 수 있습니다.',
        '실제 개소 여부와 연락처는 통합콜센터 1588-5949로 확인하세요.'
      ] },
    en: { title: 'Shelters for foreign workers in crisis (Yeosu, Yeongam) selected',
      points: [
        'The province selected Yeosu and Yeongam to run shelters for foreign workers in crisis due to abuse, job loss or workplace changes.',
        'Residents can get up to 90 days of room and board, legal and labor counseling, Korean classes and medical services.',
        'Check whether they have opened and how to contact them via the call center 1588-5949.'
      ] },
    vi: { title: 'Chọn đơn vị vận hành nhà tạm trú cho lao động nước ngoài gặp khủng hoảng (Yeosu, Yeongam)',
      points: [
        'Tỉnh chọn Yeosu và Yeongam vận hành nhà tạm trú cho lao động nước ngoài gặp khủng hoảng do bị xâm phạm quyền, mất việc hoặc chuyển nơi làm việc.',
        'Người vào ở được ăn ở tối đa 90 ngày, tư vấn pháp lý – lao động, học tiếng Hàn và chăm sóc y tế.',
        'Hỏi tổng đài 1588-5949 xem đã mở cửa chưa và cách liên hệ.'
      ] },
    th: { title: 'คัดเลือกผู้ดำเนินการที่พักพิงแรงงานต่างชาติในภาวะวิกฤต (ยอซู ยองอัม)',
      points: [
        'จังหวัดเลือกยอซูและยองอัมให้ดำเนินการที่พักพิงสำหรับแรงงานต่างชาติที่เดือดร้อนจากการละเมิดสิทธิ ตกงาน หรือเปลี่ยนสถานที่ทำงาน',
        'ผู้เข้าพักได้ที่พักและอาหารสูงสุด 90 วัน ปรึกษากฎหมายและแรงงาน เรียนภาษาเกาหลี และบริการทางการแพทย์',
        'สอบถามว่าเปิดแล้วหรือยังและวิธีติดต่อที่คอลเซ็นเตอร์ 1588-5949'
      ] },
    id: { title: 'Pengelola shelter pekerja asing dalam krisis (Yeosu, Yeongam) dipilih',
      points: [
        'Provinsi memilih Yeosu dan Yeongam mengelola shelter bagi pekerja asing yang mengalami krisis karena pelanggaran hak, PHK, atau pindah kerja.',
        'Penghuni mendapat tempat tinggal dan makan hingga 90 hari, konsultasi hukum dan ketenagakerjaan, kelas bahasa Korea, dan layanan medis.',
        'Tanyakan apakah sudah dibuka dan cara menghubunginya ke call center 1588-5949.'
      ] }
  },
  {
    key: 'l-jg-fire-ord-2026',
    tagKey: 'local',
    region: 'jeonnamgwangju',
    source: '전남광주통합특별시 (조례 제354호)',
    url: 'https://www.law.go.kr/자치법규/전남광주통합특별시외국인주민소방안전지원조례',
    date: '2026-07-31',
    checked: '2026-10-28',
    ko: { title: '외국인주민 소방 안전 지원 조례 제정',
      points: [
        '통합특별시 출범 뒤인 2026년 7월 31일 제정·시행됐습니다.',
        '다국어 소방안전 교육 자료, 외국인 고용 사업장의 소방시설 사용 교육과 다국어 안내 표시, 다국어 응급 문진표를 지원할 수 있습니다.',
        '기존 전라남도 조례는 폐지되고 이 조례가 통합특별시 전체에 적용됩니다.'
      ] },
    en: { title: 'Fire safety support ordinance for foreign residents enacted',
      points: [
        'Enacted and in force on 31 July 2026, after the integrated city was launched.',
        'It supports multilingual fire safety materials, training on fire equipment and multilingual signs at workplaces employing foreigners, and multilingual emergency medical questionnaires.',
        'The former South Jeolla ordinance was repealed; this one covers the whole integrated city.'
      ] },
    vi: { title: 'Ban hành điều lệ hỗ trợ an toàn phòng cháy cho cư dân nước ngoài',
      points: [
        'Ban hành và có hiệu lực ngày 31/7/2026, sau khi thành phố đặc biệt hợp nhất ra đời.',
        'Hỗ trợ tài liệu an toàn phòng cháy đa ngôn ngữ, đào tạo dùng thiết bị chữa cháy và biển báo đa ngôn ngữ tại nơi làm việc có người nước ngoài, phiếu hỏi bệnh cấp cứu đa ngôn ngữ.',
        'Điều lệ cũ của tỉnh Jeolla Nam bị bãi bỏ; điều lệ này áp dụng toàn thành phố hợp nhất.'
      ] },
    th: { title: 'ออกข้อบัญญัติสนับสนุนความปลอดภัยด้านอัคคีภัยสำหรับผู้พำนักชาวต่างชาติ',
      points: [
        'ออกและมีผลวันที่ 31 กรกฎาคม 2026 หลังเปิดตัวเมืองพิเศษรวม',
        'สนับสนุนสื่อความปลอดภัยอัคคีภัยหลายภาษา การอบรมใช้อุปกรณ์ดับเพลิงและป้ายหลายภาษาในสถานประกอบการที่จ้างชาวต่างชาติ และแบบสอบถามอาการฉุกเฉินหลายภาษา',
        'ข้อบัญญัติเดิมของชอลลาใต้ถูกยกเลิก ฉบับนี้ใช้ทั่วเมืองพิเศษรวม'
      ] },
    id: { title: 'Perda dukungan keselamatan kebakaran bagi warga asing diterbitkan',
      points: [
        'Diterbitkan dan berlaku 31 Juli 2026, setelah kota khusus gabungan dibentuk.',
        'Mendukung materi keselamatan kebakaran multibahasa, pelatihan alat pemadam dan rambu multibahasa di tempat kerja yang mempekerjakan warga asing, serta formulir medis darurat multibahasa.',
        'Perda lama Jeolla Selatan dicabut; perda ini berlaku di seluruh kota gabungan.'
      ] }
  },
  {
    key: 'l-gyeongbuk-residents-ord-2026',
    tagKey: 'local',
    region: 'gyeongbuk',
    source: '경상북도의회 · 언론 보도',
    url: 'https://www.sidae.com/article/2026101509550528574',
    date: '2026-10-15',
    checked: '2026-10-28',
    ko: { title: '외국인주민 지원조례 개정안 의결(사회참여 지원 확대)',
      points: [
        '경상북도의회가 2026년 10월 15일 외국인주민 및 다문화가족 지원조례 개정안을 의결했습니다.',
        '봉사활동과 문화교류 프로그램 참여 지원 대상이 다문화가족 아동·청소년에서 외국인주민 전체로 넓어졌습니다.',
        '공포되면 외국인 근로자도 도·시군 프로그램 참여를 지원받을 근거가 생깁니다. 2026-10-28 기준 아직 공포 전입니다.'
      ] },
    en: { title: 'Foreign residents ordinance amendment passed (wider community participation support)',
      points: [
        'The Gyeongbuk Provincial Council passed an amendment to the foreign residents and multicultural families ordinance on 15 October 2026.',
        'Support for volunteering and cultural exchange programs now covers all foreign residents, not only children and youth of multicultural families.',
        'Once promulgated, foreign workers can be supported to join provincial and city programs; as of 28 October 2026 it has not yet been promulgated.'
      ] },
    vi: { title: 'Thông qua dự thảo sửa điều lệ hỗ trợ cư dân nước ngoài (mở rộng tham gia cộng đồng)',
      points: [
        'Hội đồng tỉnh Gyeongbuk thông qua sửa đổi điều lệ hỗ trợ cư dân nước ngoài và gia đình đa văn hóa ngày 15/10/2026.',
        'Hỗ trợ tham gia hoạt động tình nguyện và giao lưu văn hóa nay áp dụng cho mọi cư dân nước ngoài, không chỉ trẻ em gia đình đa văn hóa.',
        'Khi được công bố, lao động nước ngoài sẽ có cơ sở được hỗ trợ tham gia chương trình của tỉnh, thành phố; đến 28/10/2026 vẫn chưa công bố.'
      ] },
    th: { title: 'สภาผ่านร่างแก้ไขข้อบัญญัติสนับสนุนผู้พำนักชาวต่างชาติ (ขยายการมีส่วนร่วมในสังคม)',
      points: [
        'สภาจังหวัดคยองบุกผ่านการแก้ไขข้อบัญญัติสนับสนุนผู้พำนักชาวต่างชาติและครอบครัวพหุวัฒนธรรมเมื่อ 15 ตุลาคม 2026',
        'การสนับสนุนงานอาสาและแลกเปลี่ยนวัฒนธรรมครอบคลุมผู้พำนักชาวต่างชาติทั้งหมด ไม่ใช่เฉพาะเด็กครอบครัวพหุวัฒนธรรม',
        'เมื่อประกาศใช้ แรงงานต่างชาติจะมีฐานได้รับการสนับสนุนเข้าร่วมโปรแกรมของจังหวัดและเมือง ณ 28 ตุลาคม 2026 ยังไม่ประกาศใช้'
      ] },
    id: { title: 'Perubahan perda dukungan warga asing disahkan DPRD (partisipasi sosial diperluas)',
      points: [
        'DPRD Gyeongbuk mengesahkan perubahan perda dukungan warga asing dan keluarga multikultural pada 15 Oktober 2026.',
        'Dukungan kegiatan sukarela dan pertukaran budaya kini mencakup semua warga asing, bukan hanya anak dan remaja keluarga multikultural.',
        'Setelah diundangkan, pekerja asing dapat didukung ikut program provinsi dan kota; per 28 Oktober 2026 belum diundangkan.'
      ] }
  },
  {
    key: 'n-round4-2025',
    tagKey: 'eps',
    source: '고용노동부',
    url: 'https://www.moel.go.kr/news/enews/report/enewsView.do?news_seq=18251',
    date: '2025-09-01',
    checked: '2026-10-28',
    ko: { title: '2025년 4회차 고용허가 신청',
      points: [
        '2025년 4회차 E-9 신규 고용허가 신청을 9월 15일부터 26일까지 전국 지방고용노동관서에서 받았습니다.',
        '사업주는 7일간 내국인 구인 노력을 한 뒤 고용센터나 고용24에서 신청했습니다.',
        '선정된 사업장으로 새 근로자가 차례로 입국했습니다.'
      ] },
    en: { title: '2025 4th round of hiring permits',
      points: [
        'Applications for the 4th round of new E-9 permits in 2025 were taken at regional labor offices from 15 to 26 September.',
        'Employers applied at an Employment Center or via Work24 after 7 days of trying to hire Koreans.',
        'New workers then arrived in stages at the selected workplaces.'
      ] },
    vi: { title: 'Đợt 4 năm 2025: nhận đơn cấp phép tuyển dụng',
      points: [
        'Đợt 4 năm 2025 nhận đơn cấp phép tuyển lao động E-9 mới tại các cơ quan lao động địa phương từ 15 đến 26/9.',
        'Chủ nộp đơn tại Trung tâm việc làm hoặc Work24 sau 7 ngày tìm tuyển người Hàn.',
        'Lao động mới lần lượt nhập cảnh về nơi làm việc được chọn.'
      ] },
    th: { title: 'รอบที่ 4 ปี 2025 รับคำขอใบอนุญาตจ้างงาน',
      points: [
        'รับคำขอใบอนุญาตจ้างแรงงาน E-9 ใหม่รอบที่ 4 ปี 2025 ที่สำนักงานแรงงานทั่วประเทศ 15–26 กันยายน',
        'นายจ้างยื่นที่ศูนย์จัดหางานหรือ Work24 หลังพยายามจ้างคนเกาหลี 7 วัน',
        'แรงงานใหม่ทยอยเข้าประเทศไปยังสถานประกอบการที่ได้รับเลือก'
      ] },
    id: { title: 'Putaran ke-4 2025: permohonan izin kerja',
      points: [
        'Permohonan izin kerja E-9 baru putaran ke-4 tahun 2025 diterima di kantor ketenagakerjaan daerah 15–26 September.',
        'Pengusaha mendaftar di Pusat Ketenagakerjaan atau Work24 setelah 7 hari berusaha merekrut warga Korea.',
        'Pekerja baru masuk bertahap ke tempat kerja terpilih.'
      ] }
  },
  {
    key: 'n-round1-2026',
    tagKey: 'eps',
    source: '고용노동부',
    url: 'https://www.moel.go.kr/news/enews/report/enewsView.do?news_seq=18858',
    date: '2026-01-15',
    checked: '2026-10-28',
    ko: { title: '2026년 1회차 고용허가 1만 5,784명 배정',
      points: [
        '2026년 첫 E-9 신규 고용허가로 제조업 1만 1,275명, 농축산업 2,382명, 어업 1,495명, 건설업 492명, 서비스업 140명을 배정했습니다.',
        '신청은 1월 26일부터 2월 10일까지 받았고 결과는 3월 3일 발표했습니다.',
        '2026년부터 조선업은 제조업에 포함됩니다.'
      ] },
    en: { title: '2026 1st round: 15,784 hiring permits',
      points: [
        'The first new E-9 permits of 2026: manufacturing 11,275, agriculture and livestock 2,382, fishing 1,495, construction 492, services 140.',
        'Applications were taken 26 January–10 February; results were announced on 3 March.',
        'From 2026, shipbuilding is counted under manufacturing.'
      ] },
    vi: { title: 'Đợt 1 năm 2026: cấp phép tuyển 15.784 người',
      points: [
        'Đợt đầu năm 2026: chế tạo 11.275, nông nghiệp – chăn nuôi 2.382, ngư nghiệp 1.495, xây dựng 492, dịch vụ 140.',
        'Nhận đơn 26/1–10/2; công bố kết quả 3/3.',
        'Từ năm 2026, đóng tàu được tính vào ngành chế tạo.'
      ] },
    th: { title: 'รอบที่ 1 ปี 2026 จัดสรร 15,784 คน',
      points: [
        'รอบแรกของปี 2026 ภาคการผลิต 11,275 เกษตรและปศุสัตว์ 2,382 ประมง 1,495 ก่อสร้าง 492 บริการ 140 คน',
        'รับคำขอ 26 มกราคม–10 กุมภาพันธ์ ประกาศผล 3 มีนาคม',
        'ตั้งแต่ปี 2026 อุตสาหกรรมต่อเรือนับรวมในภาคการผลิต'
      ] },
    id: { title: 'Putaran ke-1 2026: 15.784 izin kerja',
      points: [
        'Izin kerja E-9 baru pertama 2026: manufaktur 11.275, pertanian dan peternakan 2.382, perikanan 1.495, konstruksi 492, jasa 140.',
        'Permohonan diterima 26 Januari–10 Februari; hasil diumumkan 3 Maret.',
        'Mulai 2026 galangan kapal dihitung dalam manufaktur.'
      ] }
  },
  {
    key: 'n-safety-edu-2026',
    tagKey: 'eps',
    source: '고용노동부 · 산업안전보건법',
    url: 'https://www.law.go.kr/LSW/lsInfoP.do?lsiSeq=287805&efYd=20270108',
    date: '2026-07-07',
    checked: '2026-10-28',
    ko: { title: '외국인근로자 기초안전보건교육 의무화',
      points: [
        '산업안전보건법 개정이 2026년 7월 7일 공포되어 2027년 1월 8일부터 시행됩니다.',
        '사업주는 E-9 외국인근로자를 새로 채용하면 “외국인근로자 기초안전보건교육”을 받게 해야 하며, 어기면 과태료를 냅니다.',
        '정부가 외국어 통역 등을 지원할 수 있어, 새 사업장에서 통역이 붙은 안전교육을 받게 됩니다.'
      ] },
    en: { title: 'Basic safety and health training made mandatory for foreign workers',
      points: [
        'An amendment to the Occupational Safety and Health Act was promulgated on 7 July 2026 and takes effect on 8 January 2027.',
        'Employers hiring new E-9 workers must have them take basic safety and health training for foreign workers, or face a fine.',
        'The government can provide interpreting, so you will get safety training with interpretation at a new workplace.'
      ] },
    vi: { title: 'Bắt buộc đào tạo an toàn – sức khỏe cơ bản cho lao động nước ngoài',
      points: [
        'Sửa đổi Luật An toàn vệ sinh lao động công bố ngày 7/7/2026, có hiệu lực từ 8/1/2027.',
        'Chủ tuyển mới lao động E-9 phải cho họ học khóa an toàn – sức khỏe cơ bản dành cho lao động nước ngoài, nếu không sẽ bị phạt.',
        'Nhà nước có thể hỗ trợ phiên dịch, nên bạn sẽ được học an toàn có phiên dịch tại nơi làm việc mới.'
      ] },
    th: { title: 'บังคับอบรมความปลอดภัยและสุขภาพพื้นฐานสำหรับแรงงานต่างชาติ',
      points: [
        'การแก้ไขกฎหมายความปลอดภัยและอาชีวอนามัยประกาศ 7 กรกฎาคม 2026 มีผล 8 มกราคม 2027',
        'นายจ้างที่จ้างแรงงาน E-9 ใหม่ต้องให้เข้าอบรมความปลอดภัยและสุขภาพพื้นฐานสำหรับแรงงานต่างชาติ มิฉะนั้นถูกปรับ',
        'รัฐอาจสนับสนุนล่าม คุณจะได้รับการอบรมความปลอดภัยพร้อมล่ามที่สถานที่ทำงานใหม่'
      ] },
    id: { title: 'Pelatihan dasar K3 wajib bagi pekerja asing',
      points: [
        'Perubahan UU Keselamatan dan Kesehatan Kerja diundangkan 7 Juli 2026 dan berlaku 8 Januari 2027.',
        'Pengusaha yang merekrut pekerja E-9 baru wajib mengikutkan mereka pelatihan dasar K3 untuk pekerja asing, atau didenda.',
        'Pemerintah dapat menyediakan penerjemah, jadi Anda akan mendapat pelatihan keselamatan dengan penerjemah di tempat kerja baru.'
      ] }
  },
  {
    key: 'n-kiip-decree-2026',
    tagKey: 'eps',
    source: '법무부 · 출입국관리법 시행령',
    url: 'https://www.law.go.kr/LSW/lsInfoP.do?lsiSeq=289697',
    date: '2026-09-15',
    checked: '2026-10-28',
    ko: { title: '사회통합프로그램 직무능력개발 교육 추가',
      points: [
        '출입국관리법 시행령 개정이 2026년 9월 15일 공포·시행됐습니다.',
        '사회통합프로그램에 노동 현장 적응을 돕는 직무능력개발 교육이 추가됐습니다.',
        '체류허가 심사 때 법무부가 소득 자료를 직접 확인할 수 있는 범위가 넓어져, E-7-4 전환 등을 신청할 때 낼 서류가 줄어들 수 있습니다.'
      ] },
    en: { title: 'Job-skills training added to the social integration program',
      points: [
        'An amendment to the Immigration Act enforcement decree was promulgated and took effect on 15 September 2026.',
        'Job-skills training to help workers adapt to the workplace was added to the social integration program (KIIP).',
        'The ministry can now check more income records itself when reviewing stay permits, which may mean fewer documents when applying, for example, for E-7-4.'
      ] },
    vi: { title: 'Thêm đào tạo năng lực nghề vào chương trình hội nhập xã hội',
      points: [
        'Sửa đổi Nghị định thi hành Luật Xuất nhập cảnh công bố và có hiệu lực ngày 15/9/2026.',
        'Chương trình hội nhập xã hội (KIIP) có thêm đào tạo năng lực nghề giúp thích nghi nơi làm việc.',
        'Bộ Tư pháp có thể tự tra cứu thêm hồ sơ thu nhập khi xét cấp phép lưu trú, nên khi xin chuyển E-7-4 có thể cần ít giấy tờ hơn.'
      ] },
    th: { title: 'เพิ่มการอบรมพัฒนาทักษะงานในโปรแกรมบูรณาการสังคม',
      points: [
        'การแก้ไขพระราชกฤษฎีกากฎหมายตรวจคนเข้าเมืองประกาศและมีผล 15 กันยายน 2026',
        'โปรแกรมบูรณาการสังคม (KIIP) เพิ่มการอบรมพัฒนาทักษะงานเพื่อช่วยปรับตัวในที่ทำงาน',
        'กระทรวงตรวจสอบข้อมูลรายได้ได้เองมากขึ้นเมื่อพิจารณาใบอนุญาตพำนัก อาจใช้เอกสารน้อยลงเมื่อยื่นเปลี่ยนเป็น E-7-4'
      ] },
    id: { title: 'Pelatihan keterampilan kerja ditambahkan ke program integrasi sosial',
      points: [
        'Perubahan peraturan pelaksana UU Imigrasi diundangkan dan berlaku 15 September 2026.',
        'Program integrasi sosial (KIIP) kini mencakup pelatihan keterampilan kerja untuk membantu adaptasi di tempat kerja.',
        'Kementerian dapat memeriksa lebih banyak data penghasilan sendiri saat menilai izin tinggal, sehingga dokumen saat mengajukan, misalnya E-7-4, bisa berkurang.'
      ] }
  },
  {
    key: 'l-daejeon-free-clinic-2026',
    tagKey: 'local',
    region: 'daejeon',
    source: '대전광역시 (2026년 외국인정책 시행계획)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493578/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '외국인주민 무료진료소 (일요일)',
      points: [
        '대전시와 외국인사랑의진료소가 외국인주민 무료진료소를 운영합니다.',
        '매주 일요일 오후 2시부터 5시까지 진료합니다.',
        '치과, 내과, 통증, 초음파 등 진료를 무료로 받을 수 있습니다.'
      ] },
    en: { title: 'Free clinic for foreign residents (Sundays)',
      points: [
        'Daejeon City and the Foreigner Love Clinic run a free clinic for foreign residents.',
        'It is open every Sunday from 2 to 5 p.m.',
        'You can get free dental, internal medicine, pain and ultrasound care.'
      ] },
    vi: { title: 'Phòng khám miễn phí cho cư dân nước ngoài (Chủ nhật)',
      points: [
        'Thành phố Daejeon và Phòng khám Tình yêu Người nước ngoài vận hành phòng khám miễn phí.',
        'Phòng khám mở cửa mỗi Chủ nhật từ 14 giờ đến 17 giờ.',
        'Bạn được khám miễn phí nha khoa, nội khoa, giảm đau và siêu âm.'
      ] },
    th: { title: 'คลินิกฟรีสำหรับชาวต่างชาติ (วันอาทิตย์)',
      points: [
        'เมืองแทจอนร่วมกับคลินิกแห่งความรักชาวต่างชาติเปิดคลินิกฟรีสำหรับชาวต่างชาติ',
        'เปิดทุกวันอาทิตย์ เวลา 14.00 ถึง 17.00 น.',
        'รับการรักษาฟรีด้านทันตกรรม อายุรกรรม แก้ปวด และอัลตราซาวด์'
      ] },
    id: { title: 'Klinik gratis untuk warga asing (hari Minggu)',
      points: [
        'Kota Daejeon dan Klinik Kasih Orang Asing mengelola klinik gratis untuk warga asing.',
        'Klinik buka setiap hari Minggu pukul 14.00 sampai 17.00.',
        'Anda bisa mendapat layanan gigi, penyakit dalam, nyeri, dan USG secara gratis.'
      ] }
  },
  {
    key: 'l-daejeon-driver-license-2026',
    tagKey: 'local',
    region: 'daejeon',
    source: '대전광역시 외국인주민 통합지원센터 (2026년 외국인정책 시행계획)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493578/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '외국인주민 무료 운전면허 교육',
      points: [
        '외국인주민 통합지원센터가 무료 운전면허 교육을 운영합니다.',
        '주 1회 2시간, 6주 과정으로 상·하반기에 열립니다.',
        '한국어로 진행하므로 TOPIK 3급 이상이어야 합니다.'
      ] },
    en: { title: 'Free driver’s license class for foreign residents',
      points: [
        'The Foreign Residents Integrated Support Center runs a free driver’s license class.',
        'It is a 6-week course, 2 hours once a week, held in the first and second half of the year.',
        'Classes are in Korean, so you need TOPIK level 3 or higher.'
      ] },
    vi: { title: 'Lớp học bằng lái xe miễn phí cho cư dân nước ngoài',
      points: [
        'Trung tâm Hỗ trợ Tổng hợp Cư dân Nước ngoài mở lớp học bằng lái xe miễn phí.',
        'Khóa học 6 tuần, mỗi tuần 1 buổi 2 giờ, mở vào nửa đầu và nửa cuối năm.',
        'Lớp học bằng tiếng Hàn nên cần TOPIK cấp 3 trở lên.'
      ] },
    th: { title: 'หลักสูตรใบขับขี่ฟรีสำหรับชาวต่างชาติ',
      points: [
        'ศูนย์สนับสนุนแบบบูรณาการสำหรับชาวต่างชาติเปิดสอนใบขับขี่ฟรี',
        'หลักสูตร 6 สัปดาห์ สัปดาห์ละครั้ง ครั้งละ 2 ชั่วโมง เปิดทั้งครึ่งปีแรกและครึ่งปีหลัง',
        'สอนเป็นภาษาเกาหลี จึงต้องมี TOPIK ระดับ 3 ขึ้นไป'
      ] },
    id: { title: 'Kelas SIM gratis untuk warga asing',
      points: [
        'Pusat Dukungan Terpadu Warga Asing membuka kelas SIM gratis.',
        'Kursus 6 minggu, seminggu sekali 2 jam, dibuka pada semester pertama dan kedua.',
        'Kelas memakai bahasa Korea, jadi perlu TOPIK level 3 ke atas.'
      ] }
  },
  {
    key: 'l-daejeon-seogu-night-korean-2026',
    tagKey: 'local',
    region: 'daejeon',
    source: '대전광역시 서구 (2026년 외국인정책 시행계획)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493578/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '서구 외국인근로자 온라인 야간 한국어 교실',
      points: [
        '대전 서구가 외국인주민을 위한 한국어 교실을 운영합니다.',
        '근로자가 들을 수 있도록 야간반으로, 줌(Zoom) 온라인 수업으로 진행합니다.',
        '3월부터 12월까지 두 학기로 수준별 반을 운영합니다.'
      ] },
    en: { title: 'Seo-gu online evening Korean class for workers',
      points: [
        'Daejeon Seo-gu runs Korean classes for foreign residents.',
        'Classes are held in the evening on Zoom so that workers can join.',
        'Level-based classes run in two terms from March to December.'
      ] },
    vi: { title: 'Lớp tiếng Hàn buổi tối trực tuyến của quận Seo-gu',
      points: [
        'Quận Seo-gu, Daejeon mở lớp tiếng Hàn cho cư dân nước ngoài.',
        'Lớp học buổi tối qua Zoom để người lao động có thể tham gia.',
        'Có các lớp theo trình độ, chia hai học kỳ từ tháng 3 đến tháng 12.'
      ] },
    th: { title: 'ชั้นเรียนภาษาเกาหลีออนไลน์ภาคค่ำของเขตซอกู',
      points: [
        'เขตซอกู เมืองแทจอน เปิดชั้นเรียนภาษาเกาหลีสำหรับชาวต่างชาติ',
        'เรียนภาคค่ำผ่าน Zoom เพื่อให้แรงงานเข้าเรียนได้',
        'มีชั้นเรียนตามระดับ แบ่งเป็น 2 ภาคเรียน ตั้งแต่มีนาคมถึงธันวาคม'
      ] },
    id: { title: 'Kelas bahasa Korea malam daring Seo-gu',
      points: [
        'Seo-gu, Daejeon membuka kelas bahasa Korea untuk warga asing.',
        'Kelas diadakan malam hari lewat Zoom agar pekerja bisa ikut.',
        'Kelas sesuai level berjalan dua semester dari Maret sampai Desember.'
      ] }
  },
  {
    key: 'l-daejeon-living-website-2026',
    tagKey: 'local',
    region: 'daejeon',
    source: '대전광역시 외국인주민 통합지원센터 (2026년 외국인정책 시행계획)',
    url: 'http://www.livingindaejeon.or.kr',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '다국어 생활안내 웹사이트 ‘리빙 인 대전’',
      points: [
        '대전시가 외국인을 위한 생활안내 웹사이트 ‘리빙 인 대전’을 운영합니다.',
        '체류·등록, 신고의무, 주택, 교통, 의료, 취업 정보를 안내합니다.',
        '한국어, 영어, 중국어, 일본어, 베트남어 5개 언어로 볼 수 있습니다.'
      ] },
    en: { title: 'Multilingual living guide website ‘Living in Daejeon’',
      points: [
        'Daejeon City runs the living guide website ‘Living in Daejeon’ for foreigners.',
        'It explains stay and registration, reporting duties, housing, transport, healthcare and jobs.',
        'It is available in 5 languages: Korean, English, Chinese, Japanese and Vietnamese.'
      ] },
    vi: { title: 'Trang web hướng dẫn đời sống đa ngôn ngữ ‘Living in Daejeon’',
      points: [
        'Thành phố Daejeon vận hành trang web hướng dẫn đời sống ‘Living in Daejeon’ cho người nước ngoài.',
        'Trang web hướng dẫn cư trú, đăng ký, nghĩa vụ khai báo, nhà ở, giao thông, y tế và việc làm.',
        'Trang web có 5 ngôn ngữ: tiếng Hàn, Anh, Trung, Nhật và Việt.'
      ] },
    th: { title: 'เว็บไซต์แนะนำการใช้ชีวิตหลายภาษา ‘Living in Daejeon’',
      points: [
        'เมืองแทจอนเปิดเว็บไซต์แนะนำการใช้ชีวิต ‘Living in Daejeon’ สำหรับชาวต่างชาติ',
        'ให้ข้อมูลการพำนักและการลงทะเบียน หน้าที่การแจ้ง ที่อยู่อาศัย การเดินทาง การแพทย์ และการหางาน',
        'มีให้อ่าน 5 ภาษา ได้แก่ เกาหลี อังกฤษ จีน ญี่ปุ่น และเวียดนาม'
      ] },
    id: { title: 'Situs panduan hidup multibahasa ‘Living in Daejeon’',
      points: [
        'Kota Daejeon mengelola situs panduan hidup ‘Living in Daejeon’ untuk warga asing.',
        'Situs ini menjelaskan izin tinggal, registrasi, kewajiban lapor, perumahan, transportasi, kesehatan, dan pekerjaan.',
        'Tersedia dalam 5 bahasa: Korea, Inggris, Mandarin, Jepang, dan Vietnam.'
      ] }
  },
  {
    key: 'l-sejong-e74-recommend-2026',
    tagKey: 'local',
    region: 'sejong',
    source: '세종특별자치시 기업지원과 (대전일보·세종의소리·세계일보 보도)',
    url: 'https://www.daejonilbo.com/news/articleView.html?idxno=2261245',
    date: '2026-03-08',
    checked: '2026-10-28',
    until: '2026-12-31',
    ko: { title: '숙련기능인력(E-7-4) 비자 전환 시장 추천',
      points: [
        '세종시가 2026년 숙련기능인력(E-7-4) 비자 추천 대상 30명을 모집합니다.',
        'E-9·E-10·H-2로 4년 이상 체류하고 세종시 기업에서 1년 이상 일한 등록 외국인이 대상입니다.',
        '12월 31일까지 세종시청 기업지원과를 직접 방문해 신청합니다.'
      ] },
    en: { title: 'Mayor’s recommendation for E-7-4 skilled worker visa',
      points: [
        'Sejong City is recruiting 30 people for E-7-4 skilled worker visa recommendations in 2026.',
        'Registered foreigners who stayed 4+ years on E-9, E-10 or H-2 and worked 1+ year at a Sejong company can apply.',
        'Apply in person at the Sejong City Hall Business Support Division by December 31.'
      ] },
    vi: { title: 'Thị trưởng giới thiệu chuyển đổi visa lao động lành nghề E-7-4',
      points: [
        'Thành phố Sejong tuyển 30 người được giới thiệu visa lao động lành nghề E-7-4 năm 2026.',
        'Đối tượng là người nước ngoài đã đăng ký, lưu trú 4 năm trở lên với E-9, E-10, H-2 và làm việc 1 năm trở lên tại doanh nghiệp ở Sejong.',
        'Nộp đơn trực tiếp tại Phòng Hỗ trợ Doanh nghiệp, Tòa thị chính Sejong trước ngày 31 tháng 12.'
      ] },
    th: { title: 'การรับรองจากนายกเทศมนตรีเพื่อเปลี่ยนเป็นวีซ่าแรงงานฝีมือ E-7-4',
      points: [
        'เมืองเซจงรับสมัคร 30 คนเพื่อรับรองวีซ่าแรงงานฝีมือ E-7-4 ในปี 2026',
        'ผู้มีสิทธิ์คือชาวต่างชาติที่ลงทะเบียน อยู่ด้วยวีซ่า E-9, E-10 หรือ H-2 อย่างน้อย 4 ปี และทำงานในบริษัทในเซจงอย่างน้อย 1 ปี',
        'ยื่นด้วยตนเองที่ฝ่ายสนับสนุนธุรกิจ ศาลาว่าการเมืองเซจง ภายในวันที่ 31 ธันวาคม'
      ] },
    id: { title: 'Rekomendasi wali kota untuk visa pekerja terampil E-7-4',
      points: [
        'Kota Sejong merekrut 30 orang untuk rekomendasi visa pekerja terampil E-7-4 tahun 2026.',
        'Sasarannya warga asing terdaftar yang tinggal 4 tahun lebih dengan E-9, E-10 atau H-2 dan bekerja 1 tahun lebih di perusahaan Sejong.',
        'Daftar langsung ke Divisi Dukungan Usaha, Balai Kota Sejong paling lambat 31 Desember.'
      ] }
  },
  {
    key: 'l-chungbuk-cheongju-center-2026',
    tagKey: 'local',
    region: 'chungbuk',
    source: '청주시 (2026년 외국인정책 시행계획 - 충청북도)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493586/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '청주시 외국인주민 지원센터 통번역·상담·한국어',
      points: [
        '청주시 외국인주민 지원센터가 2026년에도 운영됩니다.',
        '통번역, 생활 상담, 단계별 한국어 수업을 제공합니다.',
        '청주시에 사는 외국인주민이면 이용할 수 있습니다.'
      ] },
    en: { title: 'Cheongju Foreign Residents Support Center: interpreting, counseling, Korean',
      points: [
        'The Cheongju Foreign Residents Support Center operates in 2026.',
        'It offers interpreting and translation, life counseling and step-by-step Korean classes.',
        'Any foreign resident living in Cheongju can use it.'
      ] },
    vi: { title: 'Trung tâm hỗ trợ cư dân nước ngoài Cheongju: phiên dịch, tư vấn, tiếng Hàn',
      points: [
        'Trung tâm hỗ trợ cư dân nước ngoài Cheongju hoạt động trong năm 2026.',
        'Trung tâm cung cấp phiên dịch, tư vấn đời sống và lớp tiếng Hàn theo trình độ.',
        'Cư dân nước ngoài sống tại Cheongju đều có thể sử dụng.'
      ] },
    th: { title: 'ศูนย์สนับสนุนชาวต่างชาติชองจู: ล่าม ให้คำปรึกษา ภาษาเกาหลี',
      points: [
        'ศูนย์สนับสนุนชาวต่างชาติชองจูเปิดให้บริการในปี 2026',
        'ให้บริการล่ามและแปล ให้คำปรึกษาด้านชีวิต และชั้นเรียนภาษาเกาหลีตามระดับ',
        'ชาวต่างชาติที่อาศัยในชองจูใช้บริการได้'
      ] },
    id: { title: 'Pusat Dukungan Warga Asing Cheongju: penerjemahan, konseling, bahasa Korea',
      points: [
        'Pusat Dukungan Warga Asing Cheongju beroperasi pada tahun 2026.',
        'Pusat ini menyediakan penerjemahan, konseling kehidupan, dan kelas bahasa Korea bertahap.',
        'Semua warga asing yang tinggal di Cheongju dapat menggunakannya.'
      ] }
  },
  {
    key: 'l-chungbuk-eumseong-center-2026',
    tagKey: 'local',
    region: 'chungbuk',
    source: '음성군 (2026년 외국인정책 시행계획 - 충청북도)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493586/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '음성군 외국인지원센터 교육·상담·자격증반',
      points: [
        '음성군외국인지원센터가 상담, 통번역, 한국어 교실을 운영합니다.',
        '법률·산업안전 교육과 지게차 운전 등 자격증반도 엽니다.',
        '운전면허 학과시험 준비반과 자조모임도 지원합니다.'
      ] },
    en: { title: 'Eumseong Foreigner Support Center: classes, counseling, certificates',
      points: [
        'The Eumseong Foreigner Support Center offers counseling, interpreting and Korean classes.',
        'It also runs law and industrial safety education and certificate courses such as forklift driving.',
        'It supports a driver’s license written test class and self-help groups.'
      ] },
    vi: { title: 'Trung tâm hỗ trợ người nước ngoài Eumseong: lớp học, tư vấn, chứng chỉ',
      points: [
        'Trung tâm hỗ trợ người nước ngoài Eumseong có tư vấn, phiên dịch và lớp tiếng Hàn.',
        'Trung tâm cũng mở lớp pháp luật, an toàn công nghiệp và lớp chứng chỉ như lái xe nâng.',
        'Trung tâm hỗ trợ lớp ôn thi lý thuyết bằng lái xe và các nhóm tự lực.'
      ] },
    th: { title: 'ศูนย์สนับสนุนชาวต่างชาติอึมซอง: การเรียน ให้คำปรึกษา ใบรับรอง',
      points: [
        'ศูนย์สนับสนุนชาวต่างชาติอึมซองให้คำปรึกษา ล่าม และชั้นเรียนภาษาเกาหลี',
        'มีการอบรมกฎหมาย ความปลอดภัยในอุตสาหกรรม และหลักสูตรใบรับรอง เช่น ขับรถยก',
        'สนับสนุนชั้นเรียนสอบข้อเขียนใบขับขี่และกลุ่มช่วยเหลือกันเอง'
      ] },
    id: { title: 'Pusat Dukungan Orang Asing Eumseong: kelas, konseling, sertifikat',
      points: [
        'Pusat Dukungan Orang Asing Eumseong menyediakan konseling, penerjemahan, dan kelas bahasa Korea.',
        'Pusat ini juga mengadakan edukasi hukum, keselamatan industri, dan kursus sertifikat seperti mengemudi forklift.',
        'Pusat ini mendukung kelas ujian tulis SIM dan kelompok swadaya.'
      ] }
  },
  {
    key: 'l-chungbuk-eumseong-plus-center-2026',
    tagKey: 'local',
    region: 'chungbuk',
    source: '음성군 (2026년 외국인정책 시행계획 - 충청북도)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493586/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '음성군 다문화이주민+센터 원스톱 민원',
      points: [
        '음성군 다문화이주민+센터에서 체류·고용 민원을 한곳에서 처리합니다.',
        '청주출입국·외국인사무소의 체류허가·변경과 고용노동부 충주지청의 고용허가제 업무를 볼 수 있습니다.',
        '음성경찰서 범죄 상담과 외국인지원센터 통번역·상담도 함께 제공합니다.'
      ] },
    en: { title: 'Eumseong Multicultural Migrant Plus Center one-stop service',
      points: [
        'The Eumseong Multicultural Migrant Plus Center handles stay and employment matters in one place.',
        'You can get stay permits and changes from the Cheongju immigration office and EPS services from the Chungju labor office.',
        'Crime counseling by Eumseong Police and interpreting and counseling by the support center are also offered.'
      ] },
    vi: { title: 'Trung tâm Di dân Đa văn hóa+ Eumseong: dịch vụ một cửa',
      points: [
        'Trung tâm Di dân Đa văn hóa+ Eumseong giải quyết thủ tục cư trú và việc làm tại một nơi.',
        'Bạn có thể làm giấy phép, thay đổi cư trú của Văn phòng Xuất nhập cảnh Cheongju và thủ tục EPS của Chi cục Lao động Chungju.',
        'Còn có tư vấn tội phạm của Cảnh sát Eumseong và phiên dịch, tư vấn của trung tâm hỗ trợ.'
      ] },
    th: { title: 'ศูนย์ผู้ย้ายถิ่นพหุวัฒนธรรมพลัสอึมซอง บริการจุดเดียว',
      points: [
        'ศูนย์ผู้ย้ายถิ่นพหุวัฒนธรรมพลัสอึมซองจัดการเรื่องการพำนักและการจ้างงานในที่เดียว',
        'ทำเรื่องอนุญาตและเปลี่ยนการพำนักของสำนักงานตรวจคนเข้าเมืองชองจู และงานระบบ EPS ของสำนักงานแรงงานชุงจูได้',
        'มีการปรึกษาเรื่องอาชญากรรมจากตำรวจอึมซอง และล่ามกับการให้คำปรึกษาจากศูนย์สนับสนุน'
      ] },
    id: { title: 'Pusat Migran Multikultural+ Eumseong layanan satu atap',
      points: [
        'Pusat Migran Multikultural+ Eumseong mengurus urusan izin tinggal dan kerja di satu tempat.',
        'Anda bisa mengurus izin dan perubahan tinggal dari Kantor Imigrasi Cheongju serta layanan EPS dari kantor tenaga kerja Chungju.',
        'Tersedia juga konsultasi kejahatan dari Polisi Eumseong serta penerjemahan dan konseling dari pusat dukungan.'
      ] }
  },
  {
    key: 'l-chungbuk-eumseong-counseling-2026',
    tagKey: 'local',
    region: 'chungbuk',
    source: '음성군 (2026년 외국인정책 시행계획 - 충청북도)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493586/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '음성군 외국인주민 상담·한국어 지원',
      points: [
        '음성군이 지원하는 비영리 민간단체 3곳에서 외국인주민 개별 상담을 받을 수 있습니다.',
        '고용, 노무, 일상생활, 의료 문제를 상담하고 법률·안전·보건 교육도 합니다.',
        '같은 단체들을 통해 외국인주민 한국어 강좌도 운영합니다.'
      ] },
    en: { title: 'Eumseong counseling and Korean classes for foreign residents',
      points: [
        'Three nonprofit groups funded by Eumseong County offer one-on-one counseling to foreign residents.',
        'They help with employment, labor, daily life and medical issues and give law, safety and health education.',
        'The same groups also run Korean classes for foreign residents.'
      ] },
    vi: { title: 'Tư vấn và lớp tiếng Hàn cho cư dân nước ngoài ở Eumseong',
      points: [
        'Ba tổ chức phi lợi nhuận do huyện Eumseong hỗ trợ tư vấn riêng cho cư dân nước ngoài.',
        'Họ tư vấn về việc làm, lao động, đời sống và y tế, đồng thời giáo dục pháp luật, an toàn và sức khỏe.',
        'Các tổ chức này cũng mở lớp tiếng Hàn cho cư dân nước ngoài.'
      ] },
    th: { title: 'การให้คำปรึกษาและภาษาเกาหลีสำหรับชาวต่างชาติในอึมซอง',
      points: [
        'องค์กรไม่แสวงหากำไร 3 แห่งที่อำเภออึมซองสนับสนุนให้คำปรึกษารายบุคคลแก่ชาวต่างชาติ',
        'ให้คำปรึกษาเรื่องการจ้างงาน แรงงาน ชีวิตประจำวัน และการแพทย์ พร้อมอบรมกฎหมาย ความปลอดภัย และสุขภาพ',
        'องค์กรเหล่านี้ยังเปิดชั้นเรียนภาษาเกาหลีสำหรับชาวต่างชาติด้วย'
      ] },
    id: { title: 'Konseling dan kelas bahasa Korea warga asing di Eumseong',
      points: [
        'Tiga lembaga nirlaba yang didanai Kabupaten Eumseong memberi konseling pribadi bagi warga asing.',
        'Mereka membantu soal kerja, ketenagakerjaan, kehidupan sehari-hari, dan kesehatan serta memberi edukasi hukum, keselamatan, dan kesehatan.',
        'Lembaga yang sama juga membuka kelas bahasa Korea untuk warga asing.'
      ] }
  },
  {
    key: 'l-chungbuk-jincheon-emergency-2026',
    tagKey: 'local',
    region: 'chungbuk',
    source: '진천군 인구정책과 (2026년 외국인정책 시행계획 - 충청북도)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493586/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '진천군 외국인주민 긴급지원 (2026년 신규)',
      points: [
        '진천군이 2026년부터 생활이 어려운 외국인주민에게 긴급지원을 합니다.',
        '질병·사고로 생계가 어려울 때 생계비, 의료비(1인 최대 300만원), 해산비, 장제비를 지원합니다.',
        '진천에 체류지 신고 후 90일이 지나고 소득·재산 기준을 충족하면 상시 신청할 수 있습니다.'
      ] },
    en: { title: 'Jincheon emergency support for foreign residents (new in 2026)',
      points: [
        'From 2026 Jincheon County gives emergency support to foreign residents in hardship.',
        'If illness or an accident leaves you unable to make a living, it covers living costs, medical bills (up to 3 million won), childbirth and funeral costs.',
        'You can apply any time if 90 days have passed since registering your address in Jincheon and you meet income and asset limits.'
      ] },
    vi: { title: 'Hỗ trợ khẩn cấp cư dân nước ngoài huyện Jincheon (mới năm 2026)',
      points: [
        'Từ năm 2026, huyện Jincheon hỗ trợ khẩn cấp cho cư dân nước ngoài gặp khó khăn.',
        'Khi bệnh tật hoặc tai nạn khiến bạn khó sinh sống, huyện hỗ trợ sinh hoạt phí, viện phí (tối đa 3 triệu won), chi phí sinh nở và tang lễ.',
        'Bạn có thể nộp đơn bất cứ lúc nào nếu đã khai báo nơi ở tại Jincheon hơn 90 ngày và đáp ứng tiêu chuẩn thu nhập, tài sản.'
      ] },
    th: { title: 'การช่วยเหลือฉุกเฉินชาวต่างชาติอำเภอจินชอน (ใหม่ปี 2026)',
      points: [
        'ตั้งแต่ปี 2026 อำเภอจินชอนให้ความช่วยเหลือฉุกเฉินแก่ชาวต่างชาติที่ลำบาก',
        'หากเจ็บป่วยหรือประสบอุบัติเหตุจนเลี้ยงชีพไม่ได้ จะช่วยค่าครองชีพ ค่ารักษา (สูงสุด 3 ล้านวอน) ค่าคลอด และค่าจัดงานศพ',
        'ยื่นได้ตลอดเวลา หากแจ้งที่พักในจินชอนมาแล้ว 90 วันและผ่านเกณฑ์รายได้และทรัพย์สิน'
      ] },
    id: { title: 'Bantuan darurat warga asing Jincheon (baru 2026)',
      points: [
        'Mulai 2026 Kabupaten Jincheon memberi bantuan darurat bagi warga asing yang kesulitan.',
        'Jika sakit atau kecelakaan membuat Anda sulit hidup, ada bantuan biaya hidup, biaya medis (maks. 3 juta won), persalinan, dan pemakaman.',
        'Anda bisa mendaftar kapan saja jika sudah 90 hari melapor alamat di Jincheon dan memenuhi batas penghasilan serta aset.'
      ] }
  },
  {
    key: 'l-chungbuk-settlement-support-2026',
    tagKey: 'local',
    region: 'chungbuk',
    source: '충청북도 외국인정책추진단 (2026년 외국인정책 시행계획)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493586/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '외국인주민 정착지원 (생활법률·자격증 교육)',
      points: [
        '충청북도가 시·군 외국인 지원기관을 통해 외국인주민 정착지원 사업을 운영합니다.',
        '한국어, 생활법률, 생활경제 교육과 운전면허·컴퓨터 활용능력 등 자격증 취득을 지원합니다.',
        '2025년에는 청주, 보은, 영동, 진천, 음성, 단양의 기관 13곳이 참여했습니다.'
      ] },
    en: { title: 'Settlement support for foreign residents (legal and certificate classes)',
      points: [
        'Chungbuk Province runs settlement support through foreigner support groups in each city and county.',
        'It offers Korean, everyday law and money classes and helps you get certificates such as a driver’s license or computer skills.',
        'In 2025, 13 groups in Cheongju, Boeun, Yeongdong, Jincheon, Eumseong and Danyang took part.'
      ] },
    vi: { title: 'Hỗ trợ định cư cho cư dân nước ngoài (pháp luật, chứng chỉ)',
      points: [
        'Tỉnh Chungbuk hỗ trợ định cư qua các tổ chức hỗ trợ người nước ngoài ở từng thành phố, huyện.',
        'Có lớp tiếng Hàn, pháp luật và kinh tế đời sống, cùng hỗ trợ lấy chứng chỉ như bằng lái xe, tin học.',
        'Năm 2025 có 13 tổ chức ở Cheongju, Boeun, Yeongdong, Jincheon, Eumseong và Danyang tham gia.'
      ] },
    th: { title: 'การสนับสนุนการตั้งถิ่นฐานของชาวต่างชาติ (กฎหมาย ใบรับรอง)',
      points: [
        'จังหวัดชุงบุกสนับสนุนการตั้งถิ่นฐานผ่านหน่วยงานช่วยเหลือชาวต่างชาติในแต่ละเมืองและอำเภอ',
        'มีการสอนภาษาเกาหลี กฎหมายและเศรษฐกิจในชีวิตประจำวัน และช่วยสอบใบรับรอง เช่น ใบขับขี่ คอมพิวเตอร์',
        'ในปี 2025 มีหน่วยงาน 13 แห่งในชองจู โพอึน ยองดง จินชอน อึมซอง และทันยางเข้าร่วม'
      ] },
    id: { title: 'Dukungan penyesuaian warga asing (hukum, sertifikat)',
      points: [
        'Provinsi Chungbuk menjalankan dukungan penyesuaian lewat lembaga pendukung warga asing di tiap kota dan kabupaten.',
        'Ada kelas bahasa Korea, hukum dan ekonomi sehari-hari, serta bantuan mendapat sertifikat seperti SIM dan komputer.',
        'Pada 2025, 13 lembaga di Cheongju, Boeun, Yeongdong, Jincheon, Eumseong, dan Danyang ikut serta.'
      ] }
  },
  {
    key: 'l-chungnam-callcenter-2026',
    tagKey: 'local',
    region: 'chungnam',
    source: '충청남도 외국인정책과 (2026년 외국인정책 시행계획)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493587/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '충남외국인주민통합지원콜센터 16개 언어 상담',
      points: [
        '충남외국인주민통합지원콜센터가 외국인주민 누구에게나 무료 상담을 제공합니다.',
        '생활 고충, 체류, 노무 상담과 통번역, 정보 제공을 16개 언어로 합니다.',
        'E-9 등 근로자 노무 상담과 기관 민원 3자 통화 통역도 지원합니다.'
      ] },
    en: { title: 'Chungnam Foreign Residents Call Center in 16 languages',
      points: [
        'The Chungnam Foreign Residents Integrated Call Center gives free counseling to any foreign resident.',
        'It helps with daily problems, stay and labor issues, interpreting and information in 16 languages.',
        'It offers labor counseling for E-9 and other workers and three-way phone interpreting with offices.'
      ] },
    vi: { title: 'Tổng đài hỗ trợ cư dân nước ngoài Chungnam 16 ngôn ngữ',
      points: [
        'Tổng đài hỗ trợ tổng hợp cư dân nước ngoài Chungnam tư vấn miễn phí cho mọi cư dân nước ngoài.',
        'Tổng đài hỗ trợ khó khăn đời sống, cư trú, lao động, phiên dịch và thông tin bằng 16 ngôn ngữ.',
        'Có tư vấn lao động cho E-9 và người lao động khác, cùng phiên dịch gọi ba bên với cơ quan.'
      ] },
    th: { title: 'คอลเซ็นเตอร์ชาวต่างชาติชุงนัม 16 ภาษา',
      points: [
        'คอลเซ็นเตอร์สนับสนุนชาวต่างชาติชุงนัมให้คำปรึกษาฟรีแก่ชาวต่างชาติทุกคน',
        'ช่วยเรื่องปัญหาชีวิต การพำนัก แรงงาน ล่าม และข้อมูล ใน 16 ภาษา',
        'มีการปรึกษาด้านแรงงานสำหรับ E-9 และแรงงานอื่น และล่ามโทรสามสายกับหน่วยงาน'
      ] },
    id: { title: 'Call center warga asing Chungnam 16 bahasa',
      points: [
        'Call Center Dukungan Terpadu Warga Asing Chungnam memberi konseling gratis bagi semua warga asing.',
        'Layanan mencakup masalah sehari-hari, izin tinggal, ketenagakerjaan, penerjemahan, dan informasi dalam 16 bahasa.',
        'Ada konsultasi ketenagakerjaan untuk E-9 dan pekerja lain serta penerjemahan telepon tiga arah dengan instansi.'
      ] }
  },
  {
    key: 'l-chungnam-e74r-regional-visa-2026',
    tagKey: 'local',
    region: 'chungnam',
    source: '공주시·논산시·부여군·서천군·예산군 (2026년 외국인정책 시행계획 - 충청남도)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493587/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    until: '2026-12-31',
    ko: { title: '인구감소지역 지역특화 숙련기능인력(E-7-4R) 추천',
      points: [
        '충남 공주·논산·부여·서천·예산 등 인구감소지역이 지역특화형 비자 추천을 받습니다.',
        '숙련기능인력(E-7-4R)은 지자체장 추천을 받아 해당 지역에 거주·취업하는 조건으로 비자를 받습니다.',
        '사업 기간은 2026년 12월까지이며 시·군청에 신청합니다.'
      ] },
    en: { title: 'Regional skilled worker visa (E-7-4R) recommendation in depopulating areas',
      points: [
        'Depopulating areas in Chungnam such as Gongju, Nonsan, Buyeo, Seocheon and Yesan accept regional visa applications.',
        'With a local mayor’s or county head’s recommendation, you can get an E-7-4R visa on condition of living and working there.',
        'The program runs until December 2026; apply at the city or county office.'
      ] },
    vi: { title: 'Giới thiệu visa lao động lành nghề vùng (E-7-4R) ở vùng giảm dân số',
      points: [
        'Các vùng giảm dân số ở Chungnam như Gongju, Nonsan, Buyeo, Seocheon, Yesan nhận đơn visa đặc thù vùng.',
        'Có giới thiệu của lãnh đạo địa phương, bạn được cấp visa E-7-4R với điều kiện sống và làm việc tại đó.',
        'Chương trình kéo dài đến tháng 12 năm 2026; nộp đơn tại ủy ban thành phố hoặc huyện.'
      ] },
    th: { title: 'การรับรองวีซ่าแรงงานฝีมือเฉพาะภูมิภาค (E-7-4R) ในพื้นที่ประชากรลดลง',
      points: [
        'พื้นที่ประชากรลดลงในชุงนัม เช่น คงจู นนซาน พูยอ ซอชอน และเยซาน รับสมัครวีซ่าเฉพาะภูมิภาค',
        'เมื่อได้รับการรับรองจากผู้บริหารท้องถิ่น จะได้วีซ่า E-7-4R โดยมีเงื่อนไขต้องอาศัยและทำงานในพื้นที่นั้น',
        'โครงการถึงเดือนธันวาคม 2026 ยื่นที่ศาลาว่าการเมืองหรืออำเภอ'
      ] },
    id: { title: 'Rekomendasi visa pekerja terampil regional (E-7-4R) di daerah berkurang penduduk',
      points: [
        'Daerah berkurang penduduk di Chungnam seperti Gongju, Nonsan, Buyeo, Seocheon, dan Yesan menerima pengajuan visa regional.',
        'Dengan rekomendasi kepala daerah, Anda bisa mendapat visa E-7-4R dengan syarat tinggal dan bekerja di sana.',
        'Program berlaku sampai Desember 2026; daftar di kantor kota atau kabupaten.'
      ] }
  },
  {
    key: 'l-chungnam-seosan-center-2026',
    tagKey: 'local',
    region: 'chungnam',
    source: '서산시 일자리경제과 (2026년 외국인정책 시행계획 - 충청남도)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493587/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '서산시 외국인근로자지원센터 한국어·정보화·노무 상담',
      points: [
        '2025년 7월 문을 연 서산시 외국인근로자지원센터가 2026년 사업을 운영합니다.',
        '베트남어·인도네시아어·캄보디아어 통역 상담과 노무·비자 전문상담을 제공합니다.',
        '한국어(초급·중급), 정보화, 산업안전·소방안전 교육과 긴급의료 지원도 합니다.'
      ] },
    en: { title: 'Seosan Foreign Workers Support Center: Korean, computer and labor counseling',
      points: [
        'The Seosan Foreign Workers Support Center, opened in July 2025, runs programs in 2026.',
        'It offers counseling with Vietnamese, Indonesian and Khmer interpreters and expert labor and visa consultations.',
        'It also gives Korean (beginner, intermediate), computer, industrial and fire safety classes and emergency medical support.'
      ] },
    vi: { title: 'Trung tâm hỗ trợ lao động nước ngoài Seosan: tiếng Hàn, tin học, tư vấn lao động',
      points: [
        'Trung tâm hỗ trợ lao động nước ngoài Seosan mở cửa tháng 7 năm 2025 tiếp tục hoạt động năm 2026.',
        'Có tư vấn với phiên dịch tiếng Việt, Indonesia, Campuchia và tư vấn chuyên sâu về lao động, visa.',
        'Có lớp tiếng Hàn (sơ cấp, trung cấp), tin học, an toàn công nghiệp, phòng cháy và hỗ trợ y tế khẩn cấp.'
      ] },
    th: { title: 'ศูนย์สนับสนุนแรงงานต่างชาติซอซาน: ภาษาเกาหลี คอมพิวเตอร์ ปรึกษาแรงงาน',
      points: [
        'ศูนย์สนับสนุนแรงงานต่างชาติซอซานซึ่งเปิดเมื่อกรกฎาคม 2025 ดำเนินงานในปี 2026',
        'ให้คำปรึกษาพร้อมล่ามภาษาเวียดนาม อินโดนีเซีย กัมพูชา และปรึกษาผู้เชี่ยวชาญด้านแรงงานและวีซ่า',
        'มีชั้นเรียนภาษาเกาหลี (ต้น กลาง) คอมพิวเตอร์ ความปลอดภัยในอุตสาหกรรมและอัคคีภัย และช่วยเหลือการแพทย์ฉุกเฉิน'
      ] },
    id: { title: 'Pusat Dukungan Pekerja Asing Seosan: bahasa Korea, komputer, konseling kerja',
      points: [
        'Pusat Dukungan Pekerja Asing Seosan yang dibuka Juli 2025 menjalankan program pada 2026.',
        'Tersedia konseling dengan penerjemah Vietnam, Indonesia, dan Kamboja serta konsultasi ahli ketenagakerjaan dan visa.',
        'Ada kelas bahasa Korea (dasar, menengah), komputer, keselamatan industri dan kebakaran, serta bantuan medis darurat.'
      ] }
  },
  {
    key: 'l-chungnam-dangjin-emergency-2026',
    tagKey: 'local',
    region: 'chungnam',
    source: '당진시 (2026년 외국인정책 시행계획 - 충청남도)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493587/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '당진시 외국인근로자 긴급지원·한글교실',
      points: [
        '당진시 외국인근로자지원센터(당진YMCA 위탁)가 의료비·생활비 긴급지원을 합니다.',
        '외국인근로자를 위한 한글교실과 노동법·세무·보건안전 교육을 운영합니다.',
        '전화·방문·SNS 고충 상담과 밀집지역 현장 상담, 무료진료 행사도 계획되어 있습니다.'
      ] },
    en: { title: 'Dangjin emergency support and Korean class for foreign workers',
      points: [
        'The Dangjin Foreign Workers Support Center (run by Dangjin YMCA) gives emergency help with medical and living costs.',
        'It runs Korean classes and labor law, tax and health and safety education for foreign workers.',
        'Counseling by phone, visit or social media, on-site counseling and a free clinic event are also planned.'
      ] },
    vi: { title: 'Hỗ trợ khẩn cấp và lớp tiếng Hàn cho lao động nước ngoài ở Dangjin',
      points: [
        'Trung tâm hỗ trợ lao động nước ngoài Dangjin (do Dangjin YMCA vận hành) hỗ trợ khẩn cấp viện phí và sinh hoạt phí.',
        'Trung tâm mở lớp tiếng Hàn và lớp luật lao động, thuế, an toàn sức khỏe cho lao động nước ngoài.',
        'Có tư vấn qua điện thoại, trực tiếp, mạng xã hội, tư vấn tại chỗ và sự kiện khám bệnh miễn phí.'
      ] },
    th: { title: 'การช่วยเหลือฉุกเฉินและชั้นเรียนภาษาเกาหลีสำหรับแรงงานต่างชาติดังจิน',
      points: [
        'ศูนย์สนับสนุนแรงงานต่างชาติดังจิน (ดำเนินการโดย YMCA ดังจิน) ช่วยเหลือฉุกเฉินค่ารักษาและค่าครองชีพ',
        'เปิดชั้นเรียนภาษาเกาหลี และอบรมกฎหมายแรงงาน ภาษี และความปลอดภัยด้านสุขภาพ',
        'มีการปรึกษาทางโทรศัพท์ การเข้าพบ โซเชียลมีเดีย การปรึกษานอกสถานที่ และกิจกรรมตรวจรักษาฟรี'
      ] },
    id: { title: 'Bantuan darurat dan kelas bahasa Korea pekerja asing Dangjin',
      points: [
        'Pusat Dukungan Pekerja Asing Dangjin (dikelola Dangjin YMCA) memberi bantuan darurat biaya medis dan hidup.',
        'Pusat ini membuka kelas bahasa Korea serta edukasi hukum kerja, pajak, dan keselamatan kesehatan.',
        'Ada konseling lewat telepon, kunjungan, media sosial, konseling lapangan, dan acara pemeriksaan gratis.'
      ] }
  },
  {
    key: 'l-gyeonggi-welfare-counsel-2026',
    tagKey: 'local',
    region: 'gyeonggi',
    source: '경기도 이민사회지원과 (법무부 2026년 외국인정책 시행계획 경기도, 자체과제 3-3-29)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493584/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '시·군 외국인복지센터 노무·고충 상담',
      points: [
        '경기도는 2026년 15개 시·군 외국인복지센터 등의 상담사 운영을 지원합니다.',
        '임금 등 노무 문제, 법률 문제, 생활 고충을 상담합니다.',
        '수원, 용인, 화성, 남양주, 안산, 평택, 시흥, 파주, 김포 등이 대상입니다.'
      ] },
    en: { title: 'Labor and grievance counseling at city welfare centers',
      points: [
        'In 2026 Gyeonggi funds counselors at foreign residents’ welfare centers in 15 cities and counties.',
        'They help with labor issues such as wages, legal problems and daily grievances.',
        'Areas include Suwon, Yongin, Hwaseong, Namyangju, Ansan, Pyeongtaek, Siheung, Paju and Gimpo.'
      ] },
    vi: { title: 'Tư vấn lao động và khó khăn tại trung tâm phúc lợi các thành phố',
      points: [
        'Năm 2026, Gyeonggi hỗ trợ tư vấn viên tại trung tâm phúc lợi người nước ngoài ở 15 thành phố/quận.',
        'Họ tư vấn vấn đề lao động như tiền lương, pháp lý và khó khăn trong cuộc sống.',
        'Các nơi gồm Suwon, Yongin, Hwaseong, Namyangju, Ansan, Pyeongtaek, Siheung, Paju và Gimpo.'
      ] },
    th: { title: 'บริการปรึกษาด้านแรงงานและปัญหาต่าง ๆ ที่ศูนย์สวัสดิการของเมือง',
      points: [
        'ปี 2026 จังหวัดคยองกีสนับสนุนเจ้าหน้าที่ให้คำปรึกษาที่ศูนย์สวัสดิการชาวต่างชาติใน 15 เมืองและอำเภอ',
        'ให้คำปรึกษาปัญหาแรงงาน เช่น ค่าจ้าง ปัญหากฎหมาย และปัญหาในชีวิตประจำวัน',
        'พื้นที่ได้แก่ ซูวอน ยงอิน ฮวาซอง นัมยางจู อันซาน พยองแท็ก ซีฮึง พาจู และกิมโพ'
      ] },
    id: { title: 'Konsultasi kerja dan keluhan di pusat kesejahteraan kota',
      points: [
        'Pada 2026 Gyeonggi mendanai konselor di pusat kesejahteraan warga asing di 15 kota dan kabupaten.',
        'Mereka membantu masalah kerja seperti upah, masalah hukum, dan keluhan sehari-hari.',
        'Wilayahnya antara lain Suwon, Yongin, Hwaseong, Namyangju, Ansan, Pyeongtaek, Siheung, Paju, dan Gimpo.'
      ] }
  },
  {
    key: 'l-gyeonggi-interpreters-2026',
    tagKey: 'local',
    region: 'gyeonggi',
    source: '경기도 이민사회지원과 (법무부 2026년 외국인정책 시행계획 경기도, 자체과제 3-3-53)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493584/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '시·군 외국인복지센터 통역사 배치',
      points: [
        '경기도는 2026년 13개 시·군 외국인복지센터에 통역사를 배치합니다.',
        '말이 통하지 않아 생기는 생활·업무상 어려움을 줄이기 위한 사업입니다.',
        '수원, 용인, 화성, 남양주, 안산, 시흥, 김포, 포천 등이 대상입니다.'
      ] },
    en: { title: 'Interpreters at city welfare centers',
      points: [
        'In 2026 Gyeonggi places interpreters at foreign residents’ welfare centers in 13 cities and counties.',
        'The aim is to reduce problems caused by language barriers in daily life and work.',
        'Centers include Suwon, Yongin, Hwaseong, Namyangju, Ansan, Siheung, Gimpo and Pocheon.'
      ] },
    vi: { title: 'Bố trí phiên dịch viên tại trung tâm phúc lợi các thành phố',
      points: [
        'Năm 2026, Gyeonggi bố trí phiên dịch viên tại trung tâm phúc lợi người nước ngoài ở 13 thành phố/quận.',
        'Mục đích là giảm khó khăn do rào cản ngôn ngữ trong cuộc sống và công việc.',
        'Các nơi gồm Suwon, Yongin, Hwaseong, Namyangju, Ansan, Siheung, Gimpo và Pocheon.'
      ] },
    th: { title: 'ล่ามประจำศูนย์สวัสดิการชาวต่างชาติของเมือง',
      points: [
        'ปี 2026 จังหวัดคยองกีจัดล่ามประจำศูนย์สวัสดิการชาวต่างชาติใน 13 เมืองและอำเภอ',
        'เพื่อลดปัญหาจากการสื่อสารไม่เข้าใจในชีวิตและการทำงาน',
        'ศูนย์ได้แก่ ซูวอน ยงอิน ฮวาซอง นัมยางจู อันซาน ซีฮึง กิมโพ และโพชอน'
      ] },
    id: { title: 'Penerjemah di pusat kesejahteraan kota',
      points: [
        'Pada 2026 Gyeonggi menempatkan penerjemah di pusat kesejahteraan warga asing di 13 kota dan kabupaten.',
        'Tujuannya mengurangi kesulitan akibat kendala bahasa dalam hidup dan kerja.',
        'Pusatnya antara lain Suwon, Yongin, Hwaseong, Namyangju, Ansan, Siheung, Gimpo, dan Pocheon.'
      ] }
  },
  {
    key: 'l-gyeonggi-korean-class-2026',
    tagKey: 'local',
    region: 'gyeonggi',
    source: '경기도 이민사회지원과 (법무부 2026년 외국인정책 시행계획 경기도, 자체과제 3-3-61·3-2-62)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493584/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '시·군 외국인주민 한국어 교실',
      points: [
        '경기도는 2026년 20개 시·군에서 한국어 교육을 지원합니다.',
        '수준별 한국어 교실과 TOPIK 준비반 등을 운영합니다.',
        '수원, 용인, 화성, 안산, 평택, 시흥, 파주, 김포, 남양주, 이천, 포천 등이 포함됩니다.'
      ] },
    en: { title: 'Korean classes in cities and counties',
      points: [
        'In 2026 Gyeonggi supports Korean classes in 20 cities and counties.',
        'Classes are offered by level, including TOPIK preparation classes.',
        'Areas include Suwon, Yongin, Hwaseong, Ansan, Pyeongtaek, Siheung, Paju, Gimpo, Namyangju, Icheon and Pocheon.'
      ] },
    vi: { title: 'Lớp tiếng Hàn tại các thành phố/quận',
      points: [
        'Năm 2026, Gyeonggi hỗ trợ lớp tiếng Hàn tại 20 thành phố/quận.',
        'Có lớp theo trình độ và lớp luyện thi TOPIK.',
        'Các nơi gồm Suwon, Yongin, Hwaseong, Ansan, Pyeongtaek, Siheung, Paju, Gimpo, Namyangju, Icheon và Pocheon.'
      ] },
    th: { title: 'ห้องเรียนภาษาเกาหลีในเมืองและอำเภอต่าง ๆ',
      points: [
        'ปี 2026 จังหวัดคยองกีสนับสนุนการสอนภาษาเกาหลีใน 20 เมืองและอำเภอ',
        'มีห้องเรียนตามระดับและห้องเตรียมสอบ TOPIK',
        'พื้นที่ได้แก่ ซูวอน ยงอิน ฮวาซอง อันซาน พยองแท็ก ซีฮึง พาจู กิมโพ นัมยางจู อีชอน และโพชอน'
      ] },
    id: { title: 'Kelas bahasa Korea di kota dan kabupaten',
      points: [
        'Pada 2026 Gyeonggi mendukung kelas bahasa Korea di 20 kota dan kabupaten.',
        'Kelas dibagi per tingkat, termasuk kelas persiapan TOPIK.',
        'Wilayahnya antara lain Suwon, Yongin, Hwaseong, Ansan, Pyeongtaek, Siheung, Paju, Gimpo, Namyangju, Icheon, dan Pocheon.'
      ] }
  },
  {
    key: 'l-gyeonggi-emergency-aid-2026',
    tagKey: 'local',
    region: 'gyeonggi',
    source: '경기도 이민사회지원과 (법무부 2026년 외국인정책 시행계획 경기도, 자체과제 4-1-2)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493584/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '외국인주민 긴급지원(생계비·의료비·장제비)',
      points: [
        '경기도에 체류지 신고를 한 외국인이 질병·사고로 위기에 처하면 지원을 받을 수 있습니다.',
        '생계비, 의료비 실비(1인 최대 100만 원), 장제비(1인 100만 원)를 지원합니다.',
        '국가 공공부조·긴급복지 수급자는 제외되며 시·군을 통해 신청합니다.'
      ] },
    en: { title: 'Emergency support for foreign residents',
      points: [
        'Foreign residents registered in Gyeonggi can get help if illness or an accident puts them in crisis.',
        'It covers living costs, actual medical costs up to 1,000,000 won per person, and funeral costs of 1,000,000 won per person.',
        'People on national public assistance or emergency welfare are excluded, and you apply through your city or county.'
      ] },
    vi: { title: 'Hỗ trợ khẩn cấp cho cư dân nước ngoài',
      points: [
        'Người nước ngoài đã đăng ký cư trú tại Gyeonggi có thể được hỗ trợ khi gặp khủng hoảng do bệnh tật hoặc tai nạn.',
        'Hỗ trợ sinh hoạt phí, chi phí y tế thực tế tối đa 1.000.000 won/người và chi phí tang lễ 1.000.000 won/người.',
        'Người đang nhận trợ cấp công hoặc phúc lợi khẩn cấp không thuộc đối tượng, nộp đơn qua thành phố/quận.'
      ] },
    th: { title: 'ความช่วยเหลือฉุกเฉินสำหรับชาวต่างชาติ',
      points: [
        'ชาวต่างชาติที่แจ้งที่พำนักในคยองกีแล้ว รับความช่วยเหลือได้เมื่อประสบวิกฤตจากการเจ็บป่วยหรืออุบัติเหตุ',
        'ช่วยค่าครองชีพ ค่ารักษาตามจริงสูงสุด 1,000,000 วอนต่อคน และค่าทำศพ 1,000,000 วอนต่อคน',
        'ผู้รับสวัสดิการสาธารณะหรือสวัสดิการฉุกเฉินของรัฐไม่มีสิทธิ์ และยื่นคำร้องผ่านเมืองหรืออำเภอ'
      ] },
    id: { title: 'Bantuan darurat untuk warga asing',
      points: [
        'Warga asing yang melapor tempat tinggal di Gyeonggi dapat dibantu jika mengalami krisis karena sakit atau kecelakaan.',
        'Bantuan mencakup biaya hidup, biaya medis riil hingga 1.000.000 won per orang, dan biaya pemakaman 1.000.000 won per orang.',
        'Penerima bantuan publik atau kesejahteraan darurat nasional tidak termasuk, dan permohonan lewat kota atau kabupaten.'
      ] }
  },
  {
    key: 'l-gyeonggi-ansan-counsel-sunday-2026',
    tagKey: 'local',
    region: 'gyeonggi',
    source: '안산시 (법무부 2026년 외국인정책 시행계획 경기도 자체과제 4-1-13, 안산시 외국인주민지원본부 누리집)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493584/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '안산시 외국인주민상담지원센터 모국어 상담(일요일 운영)',
      points: [
        '안산시 외국인주민상담지원센터는 14개 언어로 전화(1644-7111)·방문 상담을 합니다.',
        '월~목 9시~18시, 일요일 10시~19시에 운영하며 금·토·공휴일은 쉽니다.',
        '임금체불 등 문제에서 근로자와 사업주 사이 3자 통역도 지원합니다.'
      ] },
    en: { title: 'Ansan Foreign Residents Counseling Center (open Sundays)',
      points: [
        'The Ansan center offers phone (1644-7111) and walk-in counseling in 14 languages.',
        'It opens Monday to Thursday 9:00-18:00 and Sunday 10:00-19:00, and closes Fridays, Saturdays and holidays.',
        'It also provides three-way interpreting between workers and employers on issues like unpaid wages.'
      ] },
    vi: { title: 'Trung tâm tư vấn cư dân nước ngoài Ansan (mở Chủ nhật)',
      points: [
        'Trung tâm Ansan tư vấn qua điện thoại (1644-7111) và trực tiếp bằng 14 ngôn ngữ.',
        'Mở thứ Hai đến thứ Năm 9:00-18:00 và Chủ nhật 10:00-19:00, nghỉ thứ Sáu, thứ Bảy và ngày lễ.',
        'Trung tâm phiên dịch ba bên giữa người lao động và chủ về các vấn đề như nợ lương.'
      ] },
    th: { title: 'ศูนย์ให้คำปรึกษาชาวต่างชาติเมืองอันซาน (เปิดวันอาทิตย์)',
      points: [
        'ศูนย์อันซานให้คำปรึกษาทางโทรศัพท์ (1644-7111) และที่ศูนย์ใน 14 ภาษา',
        'เปิดจันทร์ถึงพฤหัสบดี 9:00-18:00 น. และวันอาทิตย์ 10:00-19:00 น. ปิดศุกร์ เสาร์ และวันหยุดราชการ',
        'มีล่ามสามฝ่ายระหว่างลูกจ้างกับนายจ้างในปัญหาเช่นค่าจ้างค้างจ่าย'
      ] },
    id: { title: 'Pusat Konsultasi Warga Asing Ansan (buka hari Minggu)',
      points: [
        'Pusat Ansan melayani konsultasi telepon (1644-7111) dan tatap muka dalam 14 bahasa.',
        'Buka Senin-Kamis 09.00-18.00 dan Minggu 10.00-19.00, tutup Jumat, Sabtu, dan hari libur.',
        'Pusat ini juga menerjemahkan tiga pihak antara pekerja dan pemberi kerja untuk masalah seperti upah tak dibayar.'
      ] }
  },
  {
    key: 'l-gyeonggi-ansan-korean-2026',
    tagKey: 'local',
    region: 'gyeonggi',
    source: '안산시 외국인주민지원과 (안산시 외국인주민지원본부 교육뉴스)',
    url: 'https://www.ansan.go.kr/global/common/bbs/selectBbsDetail.do?bbs_code=B0679&bbs_seq=1683376',
    date: '2026-09-21',
    checked: '2026-10-28',
    ko: { title: '안산시 외국인주민 기초한국어·TOPIK 교실',
      points: [
        '안산시는 외국인주민을 위한 기초 한국어 과정과 TOPIK 대비반을 기수별로 운영합니다.',
        '2026년 9월 21일 제6기 기초한국어 과정 안내가 게시되었습니다.',
        '일정과 신청 방법은 안산시 외국인주민지원본부 누리집에서 확인합니다.'
      ] },
    en: { title: 'Ansan basic Korean and TOPIK classes',
      points: [
        'Ansan runs basic Korean courses and TOPIK preparation classes for foreign residents in regular terms.',
        'A notice for the 6th basic Korean course was posted on 21 September 2026.',
        'Check the schedule and how to apply on the Ansan foreign residents website.'
      ] },
    vi: { title: 'Lớp tiếng Hàn cơ bản và TOPIK của Ansan',
      points: [
        'Ansan mở các khóa tiếng Hàn cơ bản và lớp luyện thi TOPIK cho cư dân nước ngoài theo từng khóa.',
        'Thông báo khóa tiếng Hàn cơ bản thứ 6 được đăng ngày 21/9/2026.',
        'Xem lịch học và cách đăng ký trên trang web cư dân nước ngoài của Ansan.'
      ] },
    th: { title: 'ห้องเรียนภาษาเกาหลีพื้นฐานและ TOPIK ของเมืองอันซาน',
      points: [
        'เมืองอันซานเปิดหลักสูตรภาษาเกาหลีพื้นฐานและห้องเตรียมสอบ TOPIK สำหรับชาวต่างชาติเป็นรุ่น ๆ',
        'ประกาศหลักสูตรพื้นฐานรุ่นที่ 6 ลงเมื่อวันที่ 21 กันยายน 2026',
        'ดูตารางเรียนและวิธีสมัครได้บนเว็บไซต์สำหรับชาวต่างชาติของเมืองอันซาน'
      ] },
    id: { title: 'Kelas bahasa Korea dasar dan TOPIK Ansan',
      points: [
        'Ansan membuka kursus bahasa Korea dasar dan kelas persiapan TOPIK untuk warga asing per angkatan.',
        'Pengumuman kursus dasar angkatan ke-6 diunggah pada 21 September 2026.',
        'Lihat jadwal dan cara mendaftar di situs warga asing Kota Ansan.'
      ] }
  },
  {
    key: 'l-gyeonggi-siheung-welfare-2026',
    tagKey: 'local',
    region: 'gyeonggi',
    source: '시흥시 외국인주민과 (법무부 2026년 외국인정책 시행계획 경기도, 자체과제 3-3-77·4-1-1)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493584/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '시흥시 외국인복지센터 모국어 상담·한국어 교육',
      points: [
        '시흥시외국인복지센터는 자국어 상담원이 생활·법률·노동 상담과 통역을 합니다.',
        '체류, 연금·보험, 사업장 변경 같은 문제도 상담합니다.',
        '한국어와 생활적응 교육, 문화·체육 활동도 운영합니다.'
      ] },
    en: { title: 'Siheung welfare center counseling and Korean classes',
      points: [
        'The Siheung Foreign Residents Welfare Center has native-language counselors for daily life, legal and labor issues, plus interpreting.',
        'It also helps with stay status, pension and insurance, and changing workplaces.',
        'It runs Korean and life-adaptation classes and cultural and sports activities.'
      ] },
    vi: { title: 'Trung tâm phúc lợi Siheung: tư vấn và lớp tiếng Hàn',
      points: [
        'Trung tâm phúc lợi người nước ngoài Siheung có tư vấn viên nói tiếng mẹ đẻ về đời sống, pháp luật, lao động và phiên dịch.',
        'Trung tâm cũng tư vấn về lưu trú, lương hưu và bảo hiểm, chuyển nơi làm việc.',
        'Có lớp tiếng Hàn, lớp thích nghi cuộc sống và hoạt động văn hóa, thể thao.'
      ] },
    th: { title: 'ศูนย์สวัสดิการเมืองซีฮึง ให้คำปรึกษาและสอนภาษาเกาหลี',
      points: [
        'ศูนย์สวัสดิการชาวต่างชาติเมืองซีฮึงมีเจ้าหน้าที่พูดภาษาแม่ ให้คำปรึกษาเรื่องชีวิต กฎหมาย แรงงาน และบริการล่าม',
        'ให้คำปรึกษาเรื่องการพำนัก บำนาญและประกัน และการเปลี่ยนที่ทำงาน',
        'มีการสอนภาษาเกาหลี การปรับตัวในชีวิต และกิจกรรมวัฒนธรรมและกีฬา'
      ] },
    id: { title: 'Pusat kesejahteraan Siheung: konsultasi dan kelas bahasa Korea',
      points: [
        'Pusat Kesejahteraan Warga Asing Siheung memiliki konselor berbahasa ibu untuk masalah hidup, hukum, kerja, dan penerjemahan.',
        'Pusat ini juga membantu soal izin tinggal, pensiun dan asuransi, serta pindah tempat kerja.',
        'Tersedia kelas bahasa Korea, adaptasi hidup, serta kegiatan budaya dan olahraga.'
      ] }
  },
  {
    key: 'l-gyeonggi-hwaseong-welfare-2026',
    tagKey: 'local',
    region: 'gyeonggi',
    source: '화성시 (법무부 2026년 외국인정책 시행계획 경기도, 자체과제 3-2-50)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493584/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '화성시 외국인복지센터 고충 상담·통역·한국어 교육',
      points: [
        '화성시외국인복지센터는 생활·노동 고충을 상담하며 임금체불·퇴직금 문제도 다룹니다.',
        '통역 서비스를 제공하고 필요한 현장에 통역 서포터즈를 보냅니다.',
        '수준별 대면·온라인 한국어 교육과 생활적응 교육을 운영합니다.'
      ] },
    en: { title: 'Hwaseong welfare center counseling, interpreting and Korean classes',
      points: [
        'The Hwaseong Foreign Residents Welfare Center counsels on life and work problems, including unpaid wages and severance pay.',
        'It provides interpreting and sends volunteer interpreters where needed.',
        'It runs Korean classes by level, in person and online, plus life-adaptation education.'
      ] },
    vi: { title: 'Trung tâm phúc lợi Hwaseong: tư vấn, phiên dịch, lớp tiếng Hàn',
      points: [
        'Trung tâm phúc lợi người nước ngoài Hwaseong tư vấn khó khăn đời sống và lao động, kể cả nợ lương và trợ cấp thôi việc.',
        'Trung tâm cung cấp phiên dịch và cử tình nguyện viên phiên dịch đến nơi cần.',
        'Có lớp tiếng Hàn theo trình độ trực tiếp và trực tuyến, cùng lớp thích nghi cuộc sống.'
      ] },
    th: { title: 'ศูนย์สวัสดิการเมืองฮวาซอง ให้คำปรึกษา ล่าม และสอนภาษาเกาหลี',
      points: [
        'ศูนย์สวัสดิการชาวต่างชาติเมืองฮวาซองให้คำปรึกษาปัญหาชีวิตและการทำงาน รวมถึงค่าจ้างค้างจ่ายและเงินชดเชย',
        'มีบริการล่ามและส่งอาสาสมัครล่ามไปยังที่ที่ต้องการ',
        'สอนภาษาเกาหลีตามระดับทั้งในห้องและออนไลน์ และการปรับตัวในชีวิต'
      ] },
    id: { title: 'Pusat kesejahteraan Hwaseong: konsultasi, penerjemahan, kelas bahasa Korea',
      points: [
        'Pusat Kesejahteraan Warga Asing Hwaseong memberi konsultasi masalah hidup dan kerja, termasuk upah tak dibayar dan pesangon.',
        'Pusat ini menyediakan penerjemahan dan mengirim relawan penerjemah ke tempat yang membutuhkan.',
        'Tersedia kelas bahasa Korea per tingkat secara tatap muka dan daring, serta pendidikan adaptasi hidup.'
      ] }
  },
  {
    key: 'l-gyeonggi-gimpo-center-2026',
    tagKey: 'local',
    region: 'gyeonggi',
    source: '김포시 (법무부 2026년 외국인정책 시행계획 경기도, 자체과제 3-2-18)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493584/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '김포시 외국인주민지원센터 노무·비자 상담과 한국어 교육',
      points: [
        '김포시외국인주민지원센터는 노무, 법률, 비자 상담과 생활 고충 상담을 합니다.',
        '국가별 통역·번역을 지원합니다.',
        '수준별 한국어 교육과 TOPIK 준비를 지원합니다.'
      ] },
    en: { title: 'Gimpo support center labor and visa counseling and Korean classes',
      points: [
        'The Gimpo Foreign Residents Support Center offers labor, legal and visa counseling and help with daily problems.',
        'It provides interpreting and translation for different nationalities.',
        'It runs Korean classes by level and supports TOPIK preparation.'
      ] },
    vi: { title: 'Trung tâm hỗ trợ Gimpo: tư vấn lao động, visa và lớp tiếng Hàn',
      points: [
        'Trung tâm hỗ trợ cư dân nước ngoài Gimpo tư vấn lao động, pháp luật, visa và khó khăn đời sống.',
        'Trung tâm hỗ trợ phiên dịch, biên dịch theo từng quốc gia.',
        'Có lớp tiếng Hàn theo trình độ và hỗ trợ ôn thi TOPIK.'
      ] },
    th: { title: 'ศูนย์สนับสนุนเมืองกิมโพ ให้คำปรึกษาแรงงาน วีซ่า และสอนภาษาเกาหลี',
      points: [
        'ศูนย์สนับสนุนชาวต่างชาติเมืองกิมโพให้คำปรึกษาด้านแรงงาน กฎหมาย วีซ่า และปัญหาในชีวิต',
        'มีบริการล่ามและแปลเอกสารตามภาษาของแต่ละประเทศ',
        'สอนภาษาเกาหลีตามระดับและช่วยเตรียมสอบ TOPIK'
      ] },
    id: { title: 'Pusat dukungan Gimpo: konsultasi kerja, visa, dan kelas bahasa Korea',
      points: [
        'Pusat Dukungan Warga Asing Gimpo memberi konsultasi kerja, hukum, visa, dan masalah sehari-hari.',
        'Pusat ini menyediakan penerjemahan lisan dan tulisan untuk berbagai negara.',
        'Tersedia kelas bahasa Korea per tingkat dan dukungan persiapan TOPIK.'
      ] }
  },
  {
    key: 'l-gyeonggi-yongin-korean-2026',
    tagKey: 'local',
    region: 'gyeonggi',
    source: '용인시 (법무부 2026년 외국인정책 시행계획 경기도, 자체과제 3-3-58)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493584/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '용인시 외국인복지센터 한국어 교육·자조모임',
      points: [
        '용인시외국인복지센터는 한국어 교육과 사회적응 프로그램을 운영합니다.',
        '2026년에는 2~8월에 참가자를 모집하고 3~11월에 사업을 진행합니다.',
        '1박 2일 캠프와 자조모임도 지원합니다.'
      ] },
    en: { title: 'Yongin welfare center Korean classes and self-help groups',
      points: [
        'The Yongin Foreign Residents Welfare Center runs Korean classes and social adaptation programs.',
        'In 2026 it recruits from February to August and runs programs from March to November.',
        'It also supports an overnight camp and self-help groups.'
      ] },
    vi: { title: 'Trung tâm phúc lợi Yongin: lớp tiếng Hàn và nhóm tự lực',
      points: [
        'Trung tâm phúc lợi người nước ngoài Yongin tổ chức lớp tiếng Hàn và chương trình thích nghi xã hội.',
        'Năm 2026, tuyển học viên từ tháng 2 đến tháng 8 và thực hiện từ tháng 3 đến tháng 11.',
        'Trung tâm còn hỗ trợ trại 2 ngày 1 đêm và nhóm tự lực.'
      ] },
    th: { title: 'ศูนย์สวัสดิการเมืองยงอิน สอนภาษาเกาหลีและกลุ่มช่วยเหลือกันเอง',
      points: [
        'ศูนย์สวัสดิการชาวต่างชาติเมืองยงอินจัดสอนภาษาเกาหลีและโปรแกรมปรับตัวในสังคม',
        'ปี 2026 รับสมัครกุมภาพันธ์ถึงสิงหาคม และดำเนินโครงการมีนาคมถึงพฤศจิกายน',
        'มีค่าย 2 วัน 1 คืน และสนับสนุนกลุ่มช่วยเหลือกันเอง'
      ] },
    id: { title: 'Pusat kesejahteraan Yongin: kelas bahasa Korea dan kelompok swadaya',
      points: [
        'Pusat Kesejahteraan Warga Asing Yongin menyelenggarakan kelas bahasa Korea dan program adaptasi sosial.',
        'Pada 2026 perekrutan Februari-Agustus dan program berjalan Maret-November.',
        'Ada juga kemah 2 hari 1 malam dan dukungan kelompok swadaya.'
      ] }
  },
  {
    key: 'l-gyeonggi-pocheon-weekend-korean-2026',
    tagKey: 'local',
    region: 'gyeonggi',
    source: '포천시 (법무부 2026년 외국인정책 시행계획 경기도, 자체과제 3-3-66)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493584/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '포천시 외국인주민지원센터 주말 한국어 교실',
      points: [
        '포천외국인주민지원센터는 시가 직접 운영하며 한국어 교육을 합니다.',
        '외국인 근로자가 참여하기 쉽도록 주말에 수업을 합니다.',
        '기초반·초급반 등 단계별 수업과 TOPIK 대비반을 운영합니다.'
      ] },
    en: { title: 'Pocheon support center weekend Korean classes',
      points: [
        'The Pocheon Foreign Residents Support Center is run by the city and offers Korean classes.',
        'Classes are held on weekends so foreign workers can attend.',
        'It offers basic and beginner levels plus TOPIK preparation.'
      ] },
    vi: { title: 'Lớp tiếng Hàn cuối tuần của trung tâm hỗ trợ Pocheon',
      points: [
        'Trung tâm hỗ trợ cư dân nước ngoài Pocheon do thành phố vận hành và dạy tiếng Hàn.',
        'Lớp học vào cuối tuần để lao động nước ngoài dễ tham gia.',
        'Có lớp cơ bản, sơ cấp và lớp luyện thi TOPIK.'
      ] },
    th: { title: 'ห้องเรียนภาษาเกาหลีวันหยุดของศูนย์สนับสนุนเมืองโพชอน',
      points: [
        'ศูนย์สนับสนุนชาวต่างชาติเมืองโพชอนดำเนินการโดยเมืองและสอนภาษาเกาหลี',
        'เรียนวันเสาร์อาทิตย์เพื่อให้แรงงานต่างชาติเข้าร่วมได้',
        'มีห้องเรียนระดับพื้นฐานและเริ่มต้น และห้องเตรียมสอบ TOPIK'
      ] },
    id: { title: 'Kelas bahasa Korea akhir pekan pusat dukungan Pocheon',
      points: [
        'Pusat Dukungan Warga Asing Pocheon dikelola kota dan menyelenggarakan kelas bahasa Korea.',
        'Kelas diadakan akhir pekan agar pekerja asing bisa ikut.',
        'Tersedia tingkat dasar dan pemula serta kelas persiapan TOPIK.'
      ] }
  },
  {
    key: 'l-gyeonggi-suwon-welfare-2026',
    tagKey: 'local',
    region: 'gyeonggi',
    source: '수원시 (법무부 2026년 외국인정책 시행계획 경기도, 자체과제 3-2-20)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493584/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '수원시 외국인복지센터 상담·통역·한국어·무료진료 연계',
      points: [
        '수원시외국인복지센터는 2026년 1~12월 고충 상담과 통역·번역을 지원합니다.',
        '한국어 교육과 직업능력개발 교육을 운영합니다.',
        '무료진료 연계, 이미용 서비스, 긴급지원 등도 제공합니다.'
      ] },
    en: { title: 'Suwon welfare center counseling, interpreting, Korean and free clinic links',
      points: [
        'From January to December 2026 the Suwon Foreign Residents Welfare Center offers counseling, interpreting and translation.',
        'It runs Korean classes and job skills training.',
        'It also links people to free medical care and offers haircuts and emergency support.'
      ] },
    vi: { title: 'Trung tâm phúc lợi Suwon: tư vấn, phiên dịch, tiếng Hàn, khám miễn phí',
      points: [
        'Từ tháng 1 đến tháng 12/2026, trung tâm phúc lợi người nước ngoài Suwon tư vấn và hỗ trợ phiên dịch, biên dịch.',
        'Trung tâm mở lớp tiếng Hàn và đào tạo kỹ năng nghề.',
        'Trung tâm còn kết nối khám bệnh miễn phí, cắt tóc và hỗ trợ khẩn cấp.'
      ] },
    th: { title: 'ศูนย์สวัสดิการเมืองซูวอน ให้คำปรึกษา ล่าม สอนภาษาเกาหลี และส่งต่อรักษาฟรี',
      points: [
        'ตั้งแต่มกราคมถึงธันวาคม 2026 ศูนย์สวัสดิการชาวต่างชาติเมืองซูวอนให้คำปรึกษาและบริการล่ามและแปลเอกสาร',
        'มีการสอนภาษาเกาหลีและฝึกทักษะอาชีพ',
        'มีการส่งต่อรักษาพยาบาลฟรี บริการตัดผม และความช่วยเหลือฉุกเฉิน'
      ] },
    id: { title: 'Pusat kesejahteraan Suwon: konsultasi, penerjemahan, bahasa Korea, dan klinik gratis',
      points: [
        'Januari-Desember 2026 Pusat Kesejahteraan Warga Asing Suwon memberi konsultasi serta penerjemahan lisan dan tulisan.',
        'Pusat ini menyelenggarakan kelas bahasa Korea dan pelatihan keterampilan kerja.',
        'Ada juga rujukan pengobatan gratis, layanan potong rambut, dan bantuan darurat.'
      ] }
  },
  {
    key: 'l-gyeonggi-bucheon-center-2026',
    tagKey: 'local',
    region: 'gyeonggi',
    source: '부천시 여성다문화과 (법무부 2026년 외국인정책 시행계획 경기도, 자체과제 3-3-28·3-3-30)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493584/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '부천시 외국인주민지원센터 상담·무료진료소·쉼터',
      points: [
        '부천시 외국인주민지원센터는 2026년 연중 상담, 통역, 한국어 교육을 지원합니다.',
        '무료진료소와 쉼터를 운영합니다.',
        '부천시에 체류지 신고를 한 외국인주민이 대상입니다.'
      ] },
    en: { title: 'Bucheon support center counseling, free clinic and shelter',
      points: [
        'Throughout 2026 the Bucheon Foreign Residents Support Center offers counseling, interpreting and Korean classes.',
        'It runs a free clinic and a shelter.',
        'It serves foreign residents who have registered their address in Bucheon.'
      ] },
    vi: { title: 'Trung tâm hỗ trợ Bucheon: tư vấn, phòng khám miễn phí, nhà tạm trú',
      points: [
        'Suốt năm 2026, trung tâm hỗ trợ cư dân nước ngoài Bucheon tư vấn, phiên dịch và dạy tiếng Hàn.',
        'Trung tâm vận hành phòng khám miễn phí và nhà tạm trú.',
        'Đối tượng là cư dân nước ngoài đã đăng ký cư trú tại Bucheon.'
      ] },
    th: { title: 'ศูนย์สนับสนุนเมืองพูชอน ให้คำปรึกษา คลินิกฟรี และที่พักพิง',
      points: [
        'ตลอดปี 2026 ศูนย์สนับสนุนชาวต่างชาติเมืองพูชอนให้คำปรึกษา บริการล่าม และสอนภาษาเกาหลี',
        'มีคลินิกรักษาฟรีและที่พักพิง',
        'สำหรับชาวต่างชาติที่แจ้งที่พำนักในเมืองพูชอน'
      ] },
    id: { title: 'Pusat dukungan Bucheon: konsultasi, klinik gratis, dan shelter',
      points: [
        'Sepanjang 2026 Pusat Dukungan Warga Asing Bucheon memberi konsultasi, penerjemahan, dan kelas bahasa Korea.',
        'Pusat ini mengelola klinik gratis dan shelter.',
        'Layanan untuk warga asing yang melapor tempat tinggal di Bucheon.'
      ] }
  },
  {
    key: 'l-gyeonggi-seongnam-sunday-clinic-2026',
    tagKey: 'local',
    region: 'gyeonggi',
    source: '성남시 (법무부 2026년 외국인정책 시행계획 경기도, 자체과제 3-3-37)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493584/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '성남시 외국인주민 일요일 무료진료',
      points: [
        '성남시는 성남시가족센터를 통해 외국인주민 무료진료를 제공합니다.',
        '2026년 2월부터 12월까지 매주 일요일에 진료합니다.',
        '5개 의료봉사단이 참여하며 병원 이용이 어려운 외국인주민이 대상입니다.'
      ] },
    en: { title: 'Seongnam free Sunday clinic for foreign residents',
      points: [
        'Seongnam City provides free medical care for foreign residents through the Seongnam Family Center.',
        'The clinic runs every Sunday from February to December 2026.',
        'Five medical volunteer groups take part, serving foreign residents who find it hard to visit a hospital.'
      ] },
    vi: { title: 'Phòng khám miễn phí Chủ nhật của Seongnam',
      points: [
        'Thành phố Seongnam khám bệnh miễn phí cho cư dân nước ngoài qua Trung tâm Gia đình Seongnam.',
        'Khám vào mỗi Chủ nhật từ tháng 2 đến tháng 12/2026.',
        '5 đoàn y tế tình nguyện tham gia, dành cho cư dân nước ngoài khó đi bệnh viện.'
      ] },
    th: { title: 'คลินิกรักษาฟรีวันอาทิตย์ของเมืองซองนัม',
      points: [
        'เมืองซองนัมให้บริการรักษาฟรีแก่ชาวต่างชาติผ่านศูนย์ครอบครัวซองนัม',
        'ให้บริการทุกวันอาทิตย์ตั้งแต่กุมภาพันธ์ถึงธันวาคม 2026',
        'มีอาสาสมัครแพทย์ 5 กลุ่ม สำหรับชาวต่างชาติที่ไปโรงพยาบาลได้ยาก'
      ] },
    id: { title: 'Klinik gratis hari Minggu Kota Seongnam',
      points: [
        'Kota Seongnam menyediakan pengobatan gratis bagi warga asing melalui Pusat Keluarga Seongnam.',
        'Klinik buka setiap hari Minggu dari Februari sampai Desember 2026.',
        'Lima kelompok relawan medis ikut serta, untuk warga asing yang sulit pergi ke rumah sakit.'
      ] }
  },
  {
    key: 'l-gyeonggi-seongnam-job-skills-2026',
    tagKey: 'local',
    region: 'gyeonggi',
    source: '성남시 (법무부 2026년 외국인정책 시행계획 경기도, 자체과제 3-3-31·3-3-32)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493584/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '성남시 외국인주민 상담·직업능력개발 교육',
      points: [
        '성남시가족센터는 외국인주민 상담, 한국어 교육, 긴급지원 등을 운영합니다.',
        '2026년 2월부터 12월까지 5개 직업능력개발 프로그램을 운영합니다.',
        '컴퓨터·바리스타 자격증반, 양재 교육, 요양보호사 교육비 지원 등이 있습니다.'
      ] },
    en: { title: 'Seongnam counseling and job skills training for foreign residents',
      points: [
        'The Seongnam Family Center offers counseling, Korean classes and emergency support for foreign residents.',
        'From February to December 2026 it runs five job skills programs.',
        'They include computer and barista certificate classes, sewing, and support for caregiver training fees.'
      ] },
    vi: { title: 'Seongnam: tư vấn và đào tạo kỹ năng nghề cho cư dân nước ngoài',
      points: [
        'Trung tâm Gia đình Seongnam tư vấn, dạy tiếng Hàn và hỗ trợ khẩn cấp cho cư dân nước ngoài.',
        'Từ tháng 2 đến tháng 12/2026 có 5 chương trình đào tạo kỹ năng nghề.',
        'Gồm lớp lấy chứng chỉ máy tính, pha chế cà phê, may mặc và hỗ trợ học phí điều dưỡng chăm sóc.'
      ] },
    th: { title: 'เมืองซองนัม ให้คำปรึกษาและฝึกทักษะอาชีพสำหรับชาวต่างชาติ',
      points: [
        'ศูนย์ครอบครัวซองนัมให้คำปรึกษา สอนภาษาเกาหลี และช่วยเหลือฉุกเฉินแก่ชาวต่างชาติ',
        'ตั้งแต่กุมภาพันธ์ถึงธันวาคม 2026 มีโปรแกรมฝึกทักษะอาชีพ 5 หลักสูตร',
        'เช่น หลักสูตรใบรับรองคอมพิวเตอร์และบาริสต้า การตัดเย็บ และช่วยค่าเรียนผู้ดูแลผู้สูงอายุ'
      ] },
    id: { title: 'Seongnam: konsultasi dan pelatihan keterampilan kerja warga asing',
      points: [
        'Pusat Keluarga Seongnam memberi konsultasi, kelas bahasa Korea, dan bantuan darurat untuk warga asing.',
        'Februari-Desember 2026 ada lima program pelatihan keterampilan kerja.',
        'Antara lain kelas sertifikat komputer dan barista, menjahit, serta bantuan biaya pelatihan perawat lansia.'
      ] }
  },
  {
    key: 'l-gyeonggi-gwangju-shelter-program-2026',
    tagKey: 'local',
    region: 'gyeonggi',
    source: '광주시 (법무부 2026년 외국인정책 시행계획 경기도, 자체과제 3-3-22)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493584/download.do',
    date: '2026-04-01',
    checked: '2026-10-28',
    ko: { title: '경기 광주시 외국인근로자 쉼터 상담·취업역량 프로그램',
      points: [
        '경기 광주시는 관내 외국인근로자 쉼터의 프로그램을 지원합니다.',
        '2026년 4월부터 12월까지 쉼터에 머무는 근로자에게 상담과 취업역량 강화 교육을 제공합니다.',
        '2025년에는 한국어 교육, 취업 면접 통역, 고충 상담 등을 운영했습니다.'
      ] },
    en: { title: 'Gwangju (Gyeonggi) shelter counseling and job-readiness programs for foreign workers',
      points: [
        'Gwangju City in Gyeonggi supports programs at local shelters for foreign workers.',
        'From April to December 2026, workers staying at the shelters get counseling and job-readiness training.',
        'In 2025 the programs included Korean classes, interpreting for job interviews and grievance counseling.'
      ] },
    vi: { title: 'Gwangju (Gyeonggi): tư vấn và chương trình tìm việc tại nhà tạm trú lao động nước ngoài',
      points: [
        'Thành phố Gwangju (Gyeonggi) hỗ trợ chương trình tại các nhà tạm trú cho lao động nước ngoài.',
        'Từ tháng 4 đến tháng 12/2026, lao động ở nhà tạm trú được tư vấn và đào tạo kỹ năng tìm việc.',
        'Năm 2025 có lớp tiếng Hàn, phiên dịch phỏng vấn xin việc và tư vấn khó khăn.'
      ] },
    th: { title: 'เมืองควังจู (คยองกี) ให้คำปรึกษาและโปรแกรมเตรียมหางานที่ที่พักพิงแรงงานต่างชาติ',
      points: [
        'เมืองควังจู (คยองกี) สนับสนุนโปรแกรมที่ที่พักพิงแรงงานต่างชาติในพื้นที่',
        'ตั้งแต่เมษายนถึงธันวาคม 2026 แรงงานที่พักในที่พักพิงได้รับคำปรึกษาและการฝึกเตรียมหางาน',
        'ในปี 2025 มีการสอนภาษาเกาหลี ล่ามสัมภาษณ์งาน และให้คำปรึกษาปัญหา'
      ] },
    id: { title: 'Gwangju (Gyeonggi): konsultasi dan program kesiapan kerja di shelter pekerja asing',
      points: [
        'Kota Gwangju (Gyeonggi) mendukung program di shelter pekerja asing setempat.',
        'April-Desember 2026 pekerja yang tinggal di shelter mendapat konsultasi dan pelatihan kesiapan kerja.',
        'Pada 2025 ada kelas bahasa Korea, penerjemah wawancara kerja, dan konsultasi keluhan.'
      ] }
  },
  {
    key: 'l-jeonbuk-visa-voucher-2026',
    tagKey: 'local',
    region: 'jeonbuk',
    source: '전북특별자치도 (법무부 2026년 외국인정책 시행계획)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493588/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '지역기반 비자 승급 지원금(바우처 30만원)',
      points: [
        '2026년에 지역특화형 비자나 숙련기능인력(E-7-4) 비자로 바꾼 외국인에게 30만원 바우처를 줍니다.',
        '올해 지원 목표 인원은 500명입니다.',
        '사업은 도가 시·군에 맡겨 진행하므로 사는 곳의 시·군청에 신청 방법을 문의하세요.'
      ] },
    en: { title: 'Visa upgrade grant (300,000 won voucher)',
      points: [
        'Foreigners who switch to a regional visa or the skilled worker (E-7-4) visa in 2026 get a 300,000 won voucher.',
        'The target for this year is 500 people.',
        'Cities and counties run the program, so ask your local city or county office how to apply.'
      ] },
    vi: { title: 'Hỗ trợ nâng cấp visa (phiếu 300.000 won)',
      points: [
        'Người nước ngoài chuyển sang visa đặc thù vùng hoặc visa lao động lành nghề (E-7-4) trong năm 2026 được nhận phiếu 300.000 won.',
        'Mục tiêu năm nay là 500 người.',
        'Chương trình do các thành phố, huyện thực hiện, hãy hỏi ủy ban nơi bạn sống về cách đăng ký.'
      ] },
    th: { title: 'เงินสนับสนุนการเปลี่ยนวีซ่า (บัตรกำนัล 300,000 วอน)',
      points: [
        'ชาวต่างชาติที่เปลี่ยนเป็นวีซ่าเฉพาะภูมิภาคหรือวีซ่าแรงงานฝีมือ (E-7-4) ในปี 2026 จะได้รับบัตรกำนัล 300,000 วอน',
        'เป้าหมายปีนี้คือ 500 คน',
        'เมืองและอำเภอเป็นผู้ดำเนินการ โปรดสอบถามวิธีสมัครที่สำนักงานเมืองหรืออำเภอที่คุณอาศัยอยู่'
      ] },
    id: { title: 'Bantuan peningkatan visa (voucher 300.000 won)',
      points: [
        'Warga asing yang beralih ke visa khusus daerah atau visa tenaga terampil (E-7-4) pada 2026 mendapat voucher 300.000 won.',
        'Target tahun ini adalah 500 orang.',
        'Program dijalankan oleh kota dan kabupaten, jadi tanyakan cara mendaftar ke kantor kota atau kabupaten tempat Anda tinggal.'
      ] }
  },
  {
    key: 'l-jeonbuk-1city1center-2026',
    tagKey: 'local',
    region: 'jeonbuk',
    source: '전북특별자치도 (법무부 2026년 외국인정책 시행계획)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493588/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '1시군 1외국인지원센터 고충 상담',
      points: [
        '전북 13개 시·군의 가족센터·일자리센터 등에 외국인 전담 인력을 두어 고충 상담을 합니다.',
        '전북외국인근로자지원센터와 연계한 한국어·직무 교육도 받을 수 있습니다.',
        '사는 시·군의 가족센터나 시·군청에 외국인 지원 창구를 문의하세요.'
      ] },
    en: { title: 'One foreigner support center per city and county',
      points: [
        'Thirteen cities and counties in Jeonbuk have staff for foreigners at family or job centers who handle complaints and problems.',
        'You can also join Korean and job training linked with the Jeonbuk foreign worker support center.',
        'Ask your local family center or city or county office about the foreigner support desk.'
      ] },
    vi: { title: 'Mỗi thành phố, huyện một trung tâm hỗ trợ người nước ngoài',
      points: [
        '13 thành phố, huyện ở Jeonbuk bố trí nhân viên chuyên trách tại trung tâm gia đình, trung tâm việc làm để tư vấn khó khăn.',
        'Bạn cũng có thể học tiếng Hàn và đào tạo nghề liên kết với trung tâm hỗ trợ lao động nước ngoài Jeonbuk.',
        'Hãy hỏi trung tâm gia đình hoặc ủy ban nơi bạn sống về quầy hỗ trợ người nước ngoài.'
      ] },
    th: { title: 'ศูนย์ช่วยเหลือชาวต่างชาติหนึ่งแห่งต่อหนึ่งเมืองหรืออำเภอ',
      points: [
        '13 เมืองและอำเภอในจอนบุกมีเจ้าหน้าที่ดูแลชาวต่างชาติที่ศูนย์ครอบครัวหรือศูนย์จัดหางานเพื่อรับปรึกษาปัญหา',
        'สามารถเรียนภาษาเกาหลีและฝึกอาชีพที่เชื่อมกับศูนย์ช่วยเหลือแรงงานต่างชาติจอนบุกได้ด้วย',
        'โปรดสอบถามช่องทางช่วยเหลือชาวต่างชาติที่ศูนย์ครอบครัวหรือสำนักงานเมืองหรืออำเภอของคุณ'
      ] },
    id: { title: 'Satu pusat layanan warga asing di tiap kota dan kabupaten',
      points: [
        '13 kota dan kabupaten di Jeonbuk menempatkan petugas khusus warga asing di pusat keluarga atau pusat kerja untuk konsultasi masalah.',
        'Anda juga bisa ikut kelas bahasa Korea dan pelatihan kerja yang terhubung dengan pusat pekerja asing Jeonbuk.',
        'Tanyakan layanan warga asing di pusat keluarga atau kantor kota atau kabupaten Anda.'
      ] }
  },
  {
    key: 'l-jeonbuk-jeonju-shelter-2026',
    tagKey: 'local',
    region: 'jeonbuk',
    source: '전주시 (법무부 2026년 외국인정책 시행계획)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493588/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '전주시 외국인근로자 쉼터',
      points: [
        '갑자기 일자리를 잃는 등으로 머물 곳이 필요한 E-9·H-2 근로자에게 임시 숙식을 제공합니다.',
        '재취업 지원과 통번역, 노동·체류·의료·법률 상담도 함께 합니다.',
        '2026년 1월부터 12월까지 운영하며, 전주시 인구정책과에 문의하세요.'
      ] },
    en: { title: 'Jeonju shelter for foreign workers',
      points: [
        'E-9 and H-2 workers who suddenly lose their job and need a place to stay get temporary food and lodging.',
        'It also helps with finding new work, interpreting, and labor, visa, medical and legal counseling.',
        'It runs from January to December 2026; contact the Jeonju City population policy division.'
      ] },
    vi: { title: 'Jeonju: nhà tạm trú cho lao động nước ngoài',
      points: [
        'Lao động E-9, H-2 đột ngột mất việc và cần chỗ ở được cung cấp chỗ ở và bữa ăn tạm thời.',
        'Nơi này còn hỗ trợ tìm việc mới, phiên dịch và tư vấn lao động, lưu trú, y tế, pháp luật.',
        'Hoạt động từ tháng 1 đến tháng 12 năm 2026, liên hệ phòng chính sách dân số thành phố Jeonju.'
      ] },
    th: { title: 'ที่พักพิงแรงงานต่างชาติเมืองจอนจู',
      points: [
        'แรงงาน E-9 และ H-2 ที่ตกงานกะทันหันและต้องการที่พัก จะได้รับที่พักและอาหารชั่วคราว',
        'มีบริการช่วยหางานใหม่ ล่ามแปล และให้คำปรึกษาด้านแรงงาน วีซ่า การแพทย์ และกฎหมาย',
        'เปิดตั้งแต่มกราคมถึงธันวาคม 2026 ติดต่อฝ่ายนโยบายประชากรของเมืองจอนจู'
      ] },
    id: { title: 'Jeonju: rumah singgah pekerja asing',
      points: [
        'Pekerja E-9 dan H-2 yang tiba-tiba kehilangan pekerjaan dan butuh tempat tinggal mendapat makan dan penginapan sementara.',
        'Ada juga bantuan mencari kerja baru, penerjemahan, serta konsultasi kerja, izin tinggal, kesehatan dan hukum.',
        'Beroperasi Januari sampai Desember 2026; hubungi bagian kebijakan kependudukan Kota Jeonju.'
      ] }
  },
  {
    key: 'l-jeonbuk-village-school-2026',
    tagKey: 'local',
    region: 'jeonbuk',
    source: '전북특별자치도 (법무부 2026년 외국인정책 시행계획)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493588/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '글로벌마을학당 한국어 교실',
      points: [
        '시·군 가족센터가 운영하는 마을학당에서 수준별 한국어 수업을 합니다.',
        '결혼이민자뿐 아니라 외국인노동자 등 외국인주민도 대상에 들어갑니다.',
        '가까운 시·군 가족센터에 수업 시간과 신청 방법을 문의하세요.'
      ] },
    en: { title: 'Global village school Korean classes',
      points: [
        'Village schools run by city and county family centers offer Korean classes by level.',
        'Besides marriage migrants, other foreign residents such as migrant workers can also join.',
        'Ask your nearest family center about class times and how to sign up.'
      ] },
    vi: { title: 'Lớp tiếng Hàn trường làng toàn cầu',
      points: [
        'Các trường làng do trung tâm gia đình thành phố, huyện vận hành mở lớp tiếng Hàn theo trình độ.',
        'Ngoài người kết hôn di trú, cư dân nước ngoài như lao động nhập cư cũng có thể tham gia.',
        'Hãy hỏi trung tâm gia đình gần nhất về giờ học và cách đăng ký.'
      ] },
    th: { title: 'ห้องเรียนภาษาเกาหลีโรงเรียนหมู่บ้านโลก',
      points: [
        'โรงเรียนหมู่บ้านที่ศูนย์ครอบครัวของเมืองและอำเภอดำเนินการ เปิดสอนภาษาเกาหลีตามระดับ',
        'นอกจากผู้ย้ายถิ่นจากการสมรส ผู้พำนักต่างชาติอื่นอย่างแรงงานต่างชาติก็เข้าร่วมได้',
        'โปรดสอบถามเวลาเรียนและวิธีสมัครที่ศูนย์ครอบครัวใกล้บ้าน'
      ] },
    id: { title: 'Kelas bahasa Korea sekolah desa global',
      points: [
        'Sekolah desa yang dikelola pusat keluarga kota dan kabupaten membuka kelas bahasa Korea sesuai tingkat.',
        'Selain migran pernikahan, warga asing lain seperti pekerja migran juga bisa ikut.',
        'Tanyakan jadwal kelas dan cara mendaftar ke pusat keluarga terdekat.'
      ] }
  },
  {
    key: 'l-jg-worker-ngo-support-2026',
    tagKey: 'local',
    region: 'jeonnamgwangju',
    source: '광주광역시 (법무부 2026년 외국인정책 시행계획)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493577/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '광주 외국인노동자 지원단체 쉼터·노동법 교육',
      points: [
        '광주시가 외국인노동자 지원 민간단체 11곳 안팎에 1억8천만원을 지원합니다.',
        '단체들은 한국어·노동법·산재 교육, 법률 상담, 국가별 공동체 활동을 운영합니다.',
        '사업장 변경 때 머물 수 있는 쉼터도 운영합니다(2025년 5곳).'
      ] },
    en: { title: 'Gwangju migrant worker groups: shelters and labor law classes',
      points: [
        'Gwangju gives 180 million won to about 11 nonprofit groups that support migrant workers.',
        'The groups run Korean, labor law and industrial accident classes, legal counseling and national community activities.',
        'They also run shelters for workers changing workplaces (5 shelters in 2025).'
      ] },
    vi: { title: 'Gwangju: nhà tạm trú và lớp luật lao động của các tổ chức hỗ trợ',
      points: [
        'Thành phố Gwangju hỗ trợ 180 triệu won cho khoảng 11 tổ chức phi lợi nhuận hỗ trợ lao động nước ngoài.',
        'Các tổ chức mở lớp tiếng Hàn, luật lao động, tai nạn lao động, tư vấn pháp lý và hoạt động cộng đồng theo quốc gia.',
        'Họ cũng có nhà tạm trú cho người đang chuyển nơi làm việc (5 nơi năm 2025).'
      ] },
    th: { title: 'กลุ่มช่วยเหลือแรงงานต่างชาติกวางจู ที่พักพิงและอบรมกฎหมายแรงงาน',
      points: [
        'เมืองกวางจูสนับสนุน 180 ล้านวอนแก่องค์กรไม่แสวงกำไรราว 11 แห่งที่ช่วยเหลือแรงงานต่างชาติ',
        'องค์กรเหล่านี้สอนภาษาเกาหลี กฎหมายแรงงาน อุบัติเหตุจากการทำงาน ให้คำปรึกษากฎหมาย และจัดกิจกรรมชุมชนตามสัญชาติ',
        'มีที่พักพิงสำหรับผู้ที่กำลังเปลี่ยนที่ทำงานด้วย (5 แห่งในปี 2025)'
      ] },
    id: { title: 'Gwangju: rumah singgah dan kelas hukum kerja dari lembaga pendamping',
      points: [
        'Kota Gwangju memberi 180 juta won kepada sekitar 11 lembaga nirlaba pendamping pekerja migran.',
        'Lembaga ini membuka kelas bahasa Korea, hukum kerja, kecelakaan kerja, konsultasi hukum dan kegiatan komunitas per negara.',
        'Mereka juga mengelola rumah singgah bagi pekerja yang pindah tempat kerja (5 tempat pada 2025).'
      ] }
  },
  {
    key: 'l-jg-free-clinic-2026',
    tagKey: 'local',
    region: 'jeonnamgwangju',
    source: '광주광역시 (법무부 2026년 외국인정책 시행계획)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493577/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '광주 외국인근로자 일요 무료진료소',
      points: [
        '광주시 지원으로 외국인노동자 등에게 1차 진료와 약, 건강검진, 예방접종을 무료로 제공합니다.',
        '2025년에는 광주이주민건강센터가 매주 일요일 진료소를 열었습니다.',
        '2026년은 4월부터 12월까지 운영하며, 수행기관은 공모로 정합니다.'
      ] },
    en: { title: 'Gwangju Sunday free clinic for foreign workers',
      points: [
        'With city support, migrant workers and others get free basic care, medicine, health checkups and vaccinations.',
        'In 2025 the Gwangju Migrant Health Center ran the clinic every Sunday.',
        'In 2026 it runs from April to December, with the operator chosen by open call.'
      ] },
    vi: { title: 'Gwangju: phòng khám miễn phí Chủ nhật cho lao động nước ngoài',
      points: [
        'Với hỗ trợ của thành phố, lao động nước ngoài được khám cơ bản, nhận thuốc, khám sức khỏe và tiêm phòng miễn phí.',
        'Năm 2025, Trung tâm sức khỏe người di trú Gwangju mở phòng khám vào mỗi Chủ nhật.',
        'Năm 2026 hoạt động từ tháng 4 đến tháng 12, đơn vị thực hiện được chọn qua tuyển chọn công khai.'
      ] },
    th: { title: 'คลินิกฟรีวันอาทิตย์สำหรับแรงงานต่างชาติกวางจู',
      points: [
        'ด้วยการสนับสนุนของเมือง แรงงานต่างชาติได้รับการรักษาเบื้องต้น ยา ตรวจสุขภาพ และฉีดวัคซีนฟรี',
        'ปี 2025 ศูนย์สุขภาพผู้ย้ายถิ่นกวางจูเปิดคลินิกทุกวันอาทิตย์',
        'ปี 2026 เปิดตั้งแต่เมษายนถึงธันวาคม โดยคัดเลือกผู้ดำเนินการผ่านการประกาศรับสมัคร'
      ] },
    id: { title: 'Gwangju: klinik gratis hari Minggu untuk pekerja asing',
      points: [
        'Dengan dukungan kota, pekerja migran mendapat pemeriksaan dasar, obat, cek kesehatan dan vaksinasi gratis.',
        'Pada 2025 Pusat Kesehatan Migran Gwangju membuka klinik setiap hari Minggu.',
        'Pada 2026 klinik beroperasi April sampai Desember, dengan pelaksana dipilih lewat seleksi terbuka.'
      ] }
  },
  {
    key: 'l-jg-medical-interpreter-2026',
    tagKey: 'local',
    region: 'jeonnamgwangju',
    source: '광주광역시 (법무부 2026년 외국인정책 시행계획)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493577/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '광주 의료 통번역 활동가 동행 통역',
      points: [
        '병원에 갈 때 의료 통번역 활동가가 접수부터 진료, 수납까지 동행하거나 전화로 통역합니다.',
        '동의서 같은 병원 서류 번역도 도와줍니다.',
        '외국인주민 본인이나 외국인주민 친화병원이 요청할 수 있습니다(2026년 3월부터).'
      ] },
    en: { title: 'Gwangju medical interpreters who go with you',
      points: [
        'When you visit a hospital, a trained medical interpreter goes with you from reception to treatment and payment, or interprets by phone.',
        'They also help translate hospital papers such as consent forms.',
        'Foreign residents themselves or foreigner-friendly hospitals can request this (from March 2026).'
      ] },
    vi: { title: 'Gwangju: phiên dịch viên y tế đi cùng',
      points: [
        'Khi đi bệnh viện, phiên dịch viên y tế đi cùng bạn từ tiếp nhận, khám đến thanh toán, hoặc dịch qua điện thoại.',
        'Họ cũng giúp dịch giấy tờ bệnh viện như giấy đồng ý.',
        'Cư dân nước ngoài hoặc bệnh viện thân thiện với người nước ngoài có thể yêu cầu (từ tháng 3/2026).'
      ] },
    th: { title: 'ล่ามทางการแพทย์ที่ไปโรงพยาบาลพร้อมคุณในกวางจู',
      points: [
        'เมื่อไปโรงพยาบาล ล่ามทางการแพทย์จะไปด้วยตั้งแต่ลงทะเบียน ตรวจ จนถึงชำระเงิน หรือแปลทางโทรศัพท์',
        'ช่วยแปลเอกสารโรงพยาบาล เช่น หนังสือยินยอม',
        'ผู้พำนักต่างชาติหรือโรงพยาบาลที่เป็นมิตรกับชาวต่างชาติขอใช้บริการได้ (ตั้งแต่มีนาคม 2026)'
      ] },
    id: { title: 'Gwangju: penerjemah medis pendamping',
      points: [
        'Saat ke rumah sakit, penerjemah medis mendampingi Anda dari pendaftaran, pemeriksaan sampai pembayaran, atau menerjemahkan lewat telepon.',
        'Mereka juga membantu menerjemahkan dokumen rumah sakit seperti formulir persetujuan.',
        'Warga asing sendiri atau rumah sakit ramah warga asing dapat memintanya (mulai Maret 2026).'
      ] }
  },
  {
    key: 'l-jg-friendly-hospital-2026',
    tagKey: 'local',
    region: 'jeonnamgwangju',
    source: '광주광역시 (법무부 2026년 외국인정책 시행계획)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493577/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '광주 외국인주민 친화병원 20곳',
      points: [
        '광주시가 통역 지원 체계를 갖춘 병원 20곳을 외국인주민 친화병원으로 지정해 운영합니다.',
        '친화병원은 보험 기준 진료비 적용, 진료 거부 금지, 과잉진료 지양에 동의한 곳입니다.',
        '종합병원, 병원, 치과, 한방병원, 의원 등이 포함되어 있습니다.'
      ] },
    en: { title: '20 foreigner-friendly hospitals in Gwangju',
      points: [
        'Gwangju has named 20 hospitals with interpreting support as foreigner-friendly hospitals.',
        'These hospitals agreed to charge insurance-standard fees, not refuse patients and avoid unnecessary treatment.',
        'They include general hospitals, hospitals, dental, Korean medicine and clinics.'
      ] },
    vi: { title: '20 bệnh viện thân thiện với người nước ngoài ở Gwangju',
      points: [
        'Gwangju chỉ định 20 bệnh viện có hỗ trợ phiên dịch là bệnh viện thân thiện với cư dân nước ngoài.',
        'Các bệnh viện này cam kết tính phí theo chuẩn bảo hiểm, không từ chối khám và tránh điều trị quá mức.',
        'Gồm bệnh viện đa khoa, bệnh viện, nha khoa, đông y và phòng khám.'
      ] },
    th: { title: 'โรงพยาบาลที่เป็นมิตรกับชาวต่างชาติ 20 แห่งในกวางจู',
      points: [
        'กวางจูกำหนดโรงพยาบาล 20 แห่งที่มีระบบล่ามเป็นโรงพยาบาลที่เป็นมิตรกับชาวต่างชาติ',
        'โรงพยาบาลเหล่านี้ตกลงคิดค่ารักษาตามมาตรฐานประกัน ไม่ปฏิเสธผู้ป่วย และหลีกเลี่ยงการรักษาเกินจำเป็น',
        'มีทั้งโรงพยาบาลทั่วไป โรงพยาบาล ทันตกรรม แพทย์แผนเกาหลี และคลินิก'
      ] },
    id: { title: '20 rumah sakit ramah warga asing di Gwangju',
      points: [
        'Gwangju menetapkan 20 rumah sakit dengan layanan penerjemah sebagai rumah sakit ramah warga asing.',
        'Rumah sakit ini setuju memakai tarif standar asuransi, tidak menolak pasien dan menghindari perawatan berlebihan.',
        'Termasuk rumah sakit umum, rumah sakit, gigi, pengobatan Korea dan klinik.'
      ] }
  },
  {
    key: 'l-jg-119-interpret-2026',
    tagKey: 'local',
    region: 'jeonnamgwangju',
    source: '광주광역시 소방안전본부 (법무부 2026년 외국인정책 시행계획)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493577/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '광주 119 신고 외국어 3자 통역',
      points: [
        '광주에서 119에 신고하면 신고자, 상황실, 통역 도우미가 동시에 통화하는 3자 통역을 이용할 수 있습니다.',
        '13개국 언어 통역 도우미 50명이 활동합니다.',
        '한국어가 어려워도 화재·구조·구급 상황에서 바로 119에 전화하세요.'
      ] },
    en: { title: 'Gwangju 119 three-way interpreting',
      points: [
        'When you call 119 in Gwangju, you, the control room and an interpreter can talk at the same time.',
        'About 50 volunteer interpreters cover 13 languages.',
        'Even if your Korean is weak, call 119 right away for fire, rescue or medical emergencies.'
      ] },
    vi: { title: 'Gwangju: phiên dịch ba bên khi gọi 119',
      points: [
        'Khi gọi 119 ở Gwangju, bạn, phòng điều hành và phiên dịch viên có thể nói chuyện cùng lúc.',
        'Khoảng 50 tình nguyện viên phiên dịch 13 ngôn ngữ.',
        'Dù tiếng Hàn kém, hãy gọi ngay 119 khi có cháy, cứu hộ hoặc cấp cứu.'
      ] },
    th: { title: 'ล่ามสามสายเมื่อโทร 119 ในกวางจู',
      points: [
        'เมื่อโทร 119 ในกวางจู คุณ ศูนย์สั่งการ และล่ามสามารถคุยพร้อมกันได้',
        'มีล่ามอาสาประมาณ 50 คน ครอบคลุม 13 ภาษา',
        'แม้พูดเกาหลีไม่คล่อง ให้โทร 119 ทันทีเมื่อเกิดไฟไหม้ ต้องการกู้ภัย หรือเจ็บป่วยฉุกเฉิน'
      ] },
    id: { title: 'Gwangju: penerjemah tiga arah saat menelepon 119',
      points: [
        'Saat menelepon 119 di Gwangju, Anda, ruang kendali dan penerjemah dapat berbicara bersamaan.',
        'Sekitar 50 relawan penerjemah melayani 13 bahasa.',
        'Meski bahasa Korea Anda terbatas, segera telepon 119 untuk kebakaran, penyelamatan atau darurat medis.'
      ] }
  },
  {
    key: 'l-jg-gwangsan-emergency-2026',
    tagKey: 'local',
    region: 'jeonnamgwangju',
    source: '광주 광산구 (법무부 2026년 외국인정책 시행계획)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493577/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '광산구 외국인주민 긴급지원',
      points: [
        '광산구에 90일 이상 산 외국인이 1년 안에 실직, 큰 병이나 부상 등 위기를 겪어 생계가 어려우면 지원합니다.',
        '생계비 1인 73만원, 의료비 최대 100만원, 해산비 70만원, 장제비 80만원입니다.',
        '소득은 기준 중위소득 75% 이하여야 하고, 예산이 다 쓰이면 일찍 끝날 수 있으니 광산구 이주민정책과에 문의하세요.'
      ] },
    en: { title: 'Gwangsan-gu emergency aid for foreign residents',
      points: [
        'Foreigners living in Gwangsan-gu for 90+ days who face a crisis such as job loss, serious illness or injury within a year can get help.',
        'Living costs 730,000 won per person, medical costs up to 1 million won, childbirth 700,000 won, funeral 800,000 won.',
        'Income must be 75% or less of the median income; it may end early when the budget runs out, so ask the Gwangsan-gu migrant policy division.'
      ] },
    vi: { title: 'Gwangsan-gu: hỗ trợ khẩn cấp cho cư dân nước ngoài',
      points: [
        'Người nước ngoài sống ở Gwangsan-gu từ 90 ngày trở lên gặp khủng hoảng như mất việc, bệnh nặng, chấn thương trong vòng 1 năm có thể được hỗ trợ.',
        'Sinh hoạt phí 730.000 won/người, y tế tối đa 1 triệu won, sinh con 700.000 won, tang lễ 800.000 won.',
        'Thu nhập phải từ 75% thu nhập trung vị trở xuống; có thể kết thúc sớm khi hết ngân sách, hãy hỏi phòng chính sách người di trú Gwangsan-gu.'
      ] },
    th: { title: 'เงินช่วยเหลือฉุกเฉินสำหรับชาวต่างชาติเขตควังซาน',
      points: [
        'ชาวต่างชาติที่อาศัยในเขตควังซาน 90 วันขึ้นไปและประสบวิกฤต เช่น ตกงาน ป่วยหนัก หรือบาดเจ็บภายใน 1 ปี ขอรับความช่วยเหลือได้',
        'ค่าครองชีพ 730,000 วอนต่อคน ค่ารักษาสูงสุด 1 ล้านวอน ค่าคลอด 700,000 วอน ค่าจัดงานศพ 800,000 วอน',
        'รายได้ต้องไม่เกิน 75% ของรายได้มัธยฐาน และอาจปิดก่อนกำหนดเมื่องบหมด โปรดสอบถามฝ่ายนโยบายผู้ย้ายถิ่นเขตควังซาน'
      ] },
    id: { title: 'Gwangsan-gu: bantuan darurat warga asing',
      points: [
        'Warga asing yang tinggal di Gwangsan-gu 90 hari atau lebih dan mengalami krisis seperti kehilangan kerja, sakit parah atau cedera dalam setahun bisa dibantu.',
        'Biaya hidup 730.000 won per orang, biaya medis maksimal 1 juta won, persalinan 700.000 won, pemakaman 800.000 won.',
        'Penghasilan harus 75% atau kurang dari median; bisa berakhir lebih awal jika anggaran habis, jadi tanyakan ke bagian kebijakan migran Gwangsan-gu.'
      ] }
  },
  {
    key: 'l-jg-kpoint-e74-2026',
    tagKey: 'local',
    region: 'jeonnamgwangju',
    source: '전라남도 (법무부 2026년 외국인정책 시행계획)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493589/download.do',
    date: '2026-02-01',
    checked: '2026-10-28',
    ko: { title: '숙련기능인력(K-point E74) 광역 추천',
      points: [
        '전남 기업에서 1년 이상 일한 E-9 등 근로자는 광역단체장 추천을 받아 E-7-4·E-7-4R 비자 전환에 도전할 수 있습니다.',
        '추천을 받으면 K-point 평가에서 30~50점 가점을 받으며, 전환 뒤 도내에 2년 이상 살아야 합니다.',
        '시·군별 쿼터 없이 수시·선착순으로 시·군청에서 접수하고, 쿼터가 다 차면 마감됩니다.'
      ] },
    en: { title: 'Provincial recommendation for skilled worker visa (K-point E74)',
      points: [
        'E-9 and other workers with 1+ year at a company in Jeonnam can seek the governor’s recommendation to switch to E-7-4 or E-7-4R.',
        'A recommendation adds 30 to 50 K-point points, and you must live in the area for 2+ years after switching.',
        'City and county offices take applications any time, first come first served, until the quota is used up.'
      ] },
    vi: { title: 'Đề cử cấp tỉnh cho visa lao động lành nghề (K-point E74)',
      points: [
        'Lao động E-9 và khác làm việc từ 1 năm trở lên tại doanh nghiệp Jeonnam có thể xin đề cử để chuyển sang E-7-4 hoặc E-7-4R.',
        'Được đề cử sẽ cộng 30-50 điểm K-point, và sau khi chuyển phải sống trong vùng từ 2 năm trở lên.',
        'Ủy ban thành phố, huyện nhận hồ sơ bất cứ lúc nào theo thứ tự đến trước, cho đến khi hết chỉ tiêu.'
      ] },
    th: { title: 'การรับรองระดับจังหวัดสำหรับวีซ่าแรงงานฝีมือ (K-point E74)',
      points: [
        'แรงงาน E-9 และอื่นๆ ที่ทำงานในบริษัทในชอนนัม 1 ปีขึ้นไป ขอรับการรับรองเพื่อเปลี่ยนเป็น E-7-4 หรือ E-7-4R ได้',
        'การรับรองให้คะแนน K-point เพิ่ม 30-50 คะแนน และหลังเปลี่ยนวีซ่าต้องอาศัยในพื้นที่ 2 ปีขึ้นไป',
        'สำนักงานเมืองและอำเภอรับสมัครตลอด ตามลำดับก่อนหลัง จนกว่าโควตาจะเต็ม'
      ] },
    id: { title: 'Rekomendasi provinsi untuk visa tenaga terampil (K-point E74)',
      points: [
        'Pekerja E-9 dan lainnya yang sudah 1 tahun lebih bekerja di perusahaan di Jeonnam bisa meminta rekomendasi untuk beralih ke E-7-4 atau E-7-4R.',
        'Rekomendasi menambah 30-50 poin K-point, dan setelah beralih Anda harus tinggal di daerah ini 2 tahun lebih.',
        'Kantor kota dan kabupaten menerima pendaftaran kapan saja, siapa cepat dia dapat, sampai kuota habis.'
      ] }
  },
  {
    key: 'l-jg-legal-counsel-16-2026',
    tagKey: 'local',
    region: 'jeonnamgwangju',
    source: '전라남도 (법무부 2026년 외국인정책 시행계획)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493589/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '외국인주민 노동·법률 상담과 찾아가는 이동상담',
      points: [
        '전남 지역 16개 수행기관이 외국인 근로자 등에게 노동·법률 상담과 통번역을 지원합니다.',
        '일터 가까이로 찾아가는 이동상담과 한국어 교육, 문화체험도 합니다.',
        '2026년 1월부터 12월까지 운영하며, 가까운 기관은 시·군청에 문의하세요.'
      ] },
    en: { title: 'Labor and legal counseling for foreign residents, with mobile visits',
      points: [
        'Sixteen agencies in the Jeonnam area give foreign workers labor and legal counseling and interpreting.',
        'They also offer mobile counseling near workplaces, Korean classes and cultural activities.',
        'It runs from January to December 2026; ask your city or county office for the nearest agency.'
      ] },
    vi: { title: 'Tư vấn lao động, pháp lý và tư vấn lưu động cho cư dân nước ngoài',
      points: [
        '16 cơ quan ở khu vực Jeonnam tư vấn lao động, pháp lý và phiên dịch cho lao động nước ngoài.',
        'Họ còn tư vấn lưu động gần nơi làm việc, dạy tiếng Hàn và tổ chức trải nghiệm văn hóa.',
        'Hoạt động từ tháng 1 đến tháng 12/2026, hãy hỏi ủy ban thành phố, huyện về cơ quan gần nhất.'
      ] },
    th: { title: 'ให้คำปรึกษาด้านแรงงานและกฎหมายพร้อมบริการเคลื่อนที่',
      points: [
        'หน่วยงาน 16 แห่งในพื้นที่ชอนนัมให้คำปรึกษาด้านแรงงาน กฎหมาย และล่ามแปลแก่แรงงานต่างชาติ',
        'มีบริการให้คำปรึกษาเคลื่อนที่ใกล้ที่ทำงาน สอนภาษาเกาหลี และกิจกรรมวัฒนธรรม',
        'เปิดตั้งแต่มกราคมถึงธันวาคม 2026 สอบถามหน่วยงานใกล้บ้านที่สำนักงานเมืองหรืออำเภอ'
      ] },
    id: { title: 'Konsultasi kerja dan hukum untuk warga asing, termasuk layanan keliling',
      points: [
        '16 lembaga di wilayah Jeonnam memberi konsultasi kerja, hukum dan penerjemahan bagi pekerja asing.',
        'Ada juga konsultasi keliling dekat tempat kerja, kelas bahasa Korea dan kegiatan budaya.',
        'Berlangsung Januari sampai Desember 2026; tanyakan lembaga terdekat ke kantor kota atau kabupaten.'
      ] }
  },
  {
    key: 'l-jg-yeongam-center-2026',
    tagKey: 'local',
    region: 'jeonnamgwangju',
    source: '영암군 (법무부 2026년 외국인정책 시행계획)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493589/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '영암군 외국인주민지원센터 상담·사회통합프로그램',
      points: [
        '영암군 삼호읍 대불주거9로 21에 있는 센터에서 비자, 임금체불, 산재, 사업장 변경 상담을 합니다.',
        '법무부 사회통합프로그램(0~4단계)과 생활법률·안전 교육을 운영합니다.',
        '세한대학교가 위탁 운영하며 통번역과 문화 프로그램도 지원합니다.'
      ] },
    en: { title: 'Yeongam foreign resident center: counseling and KIIP',
      points: [
        'The center at 21 Daebuljugeo 9-ro, Samho-eup, Yeongam gives counseling on visas, unpaid wages, work injuries and workplace changes.',
        'It runs the Korea Immigration and Integration Program (levels 0 to 4) and daily law and safety classes.',
        'Sehan University runs it, and it also offers interpreting and cultural programs.'
      ] },
    vi: { title: 'Yeongam: trung tâm cư dân nước ngoài, tư vấn và chương trình hội nhập',
      points: [
        'Trung tâm tại 21 Daebuljugeo 9-ro, Samho-eup, Yeongam tư vấn visa, nợ lương, tai nạn lao động, chuyển nơi làm việc.',
        'Có chương trình hội nhập xã hội KIIP (cấp 0-4) và lớp pháp luật đời sống, an toàn.',
        'Đại học Sehan vận hành, có hỗ trợ phiên dịch và chương trình văn hóa.'
      ] },
    th: { title: 'ศูนย์ช่วยเหลือชาวต่างชาติยองอัม ให้คำปรึกษาและโครงการบูรณาการ',
      points: [
        'ศูนย์ที่ 21 Daebuljugeo 9-ro, Samho-eup, Yeongam ให้คำปรึกษาเรื่องวีซ่า ค่าจ้างค้าง อุบัติเหตุจากงาน และการเปลี่ยนที่ทำงาน',
        'มีโครงการบูรณาการทางสังคม KIIP (ระดับ 0-4) และอบรมกฎหมายในชีวิตประจำวันและความปลอดภัย',
        'มหาวิทยาลัยเซฮันดำเนินการ มีบริการล่ามและกิจกรรมวัฒนธรรม'
      ] },
    id: { title: 'Yeongam: pusat warga asing, konsultasi dan program integrasi',
      points: [
        'Pusat di 21 Daebuljugeo 9-ro, Samho-eup, Yeongam melayani konsultasi visa, gaji tertunggak, kecelakaan kerja dan pindah tempat kerja.',
        'Ada Program Integrasi Sosial KIIP (level 0-4) serta kelas hukum sehari-hari dan keselamatan.',
        'Dikelola Universitas Sehan, juga menyediakan penerjemahan dan program budaya.'
      ] }
  },
  {
    key: 'l-jg-yeosu-center-2026',
    tagKey: 'local',
    region: 'jeonnamgwangju',
    source: '여수시 (법무부 2026년 외국인정책 시행계획)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493589/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '여수시 외국인주민종합지원센터 통번역·상담',
      points: [
        '여수시 가족+센터가 운영하는 센터에서 체류, 임금체불, 산재 상담을 합니다.',
        '통번역과 관공서 동행을 지원하고, 사업장 방문 상담도 합니다.',
        '2025년에는 한국어 3개 반을 연중 운영하고 직업능력개발 교육도 했습니다.'
      ] },
    en: { title: 'Yeosu foreign resident support center: interpreting and counseling',
      points: [
        'The center run by the Yeosu Family Plus Center gives counseling on visas, unpaid wages and work injuries.',
        'It offers interpreting, goes with you to public offices and visits workplaces.',
        'In 2025 it ran three Korean classes all year and job skills training.'
      ] },
    vi: { title: 'Yeosu: trung tâm hỗ trợ cư dân nước ngoài, phiên dịch và tư vấn',
      points: [
        'Trung tâm do Trung tâm Gia đình+ Yeosu vận hành tư vấn lưu trú, nợ lương, tai nạn lao động.',
        'Hỗ trợ phiên dịch, đi cùng đến cơ quan nhà nước và đến tận nơi làm việc tư vấn.',
        'Năm 2025 có 3 lớp tiếng Hàn quanh năm và đào tạo kỹ năng nghề.'
      ] },
    th: { title: 'ศูนย์ช่วยเหลือชาวต่างชาติยอซู ล่ามและให้คำปรึกษา',
      points: [
        'ศูนย์ที่ดำเนินการโดยศูนย์ครอบครัวพลัสยอซูให้คำปรึกษาเรื่องการพำนัก ค่าจ้างค้าง และอุบัติเหตุจากงาน',
        'มีล่าม พาไปหน่วยงานราชการ และไปให้คำปรึกษาถึงที่ทำงาน',
        'ปี 2025 เปิดห้องเรียนภาษาเกาหลี 3 ห้องตลอดปีและอบรมพัฒนาทักษะอาชีพ'
      ] },
    id: { title: 'Yeosu: pusat layanan warga asing, penerjemahan dan konsultasi',
      points: [
        'Pusat yang dikelola Pusat Keluarga Plus Yeosu melayani konsultasi izin tinggal, gaji tertunggak dan kecelakaan kerja.',
        'Ada penerjemahan, pendampingan ke kantor pemerintah dan kunjungan ke tempat kerja.',
        'Pada 2025 ada 3 kelas bahasa Korea sepanjang tahun dan pelatihan keterampilan kerja.'
      ] }
  },
  {
    key: 'l-jg-daebul-dorm-2026',
    tagKey: 'local',
    region: 'jeonnamgwangju',
    source: '영암군 (법무부 2026년 외국인정책 시행계획)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493589/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '영암군 대불산단 근로자복지센터 기숙사',
      points: [
        '영암 대불산단의 내·외국인 근로자복지센터는 근로자 기숙사(총 138실)를 운영합니다.',
        '입주자는 연중 수시로 모집하며, 2025년 9월 기준 외국인 72명이 살고 있습니다.',
        '한국산업단지공단 대불지사가 위탁 운영하니 입주는 회사나 공단에 문의하세요.'
      ] },
    en: { title: 'Yeongam Daebul Industrial Complex worker dormitory',
      points: [
        'The worker welfare center in Daebul Industrial Complex, Yeongam runs a dormitory with 138 rooms for Korean and foreign workers.',
        'Residents are recruited throughout the year; 72 foreigners lived there as of September 2025.',
        'The Korea Industrial Complex Corporation Daebul branch runs it, so ask your company or the corporation about moving in.'
      ] },
    vi: { title: 'Yeongam: ký túc xá trung tâm phúc lợi KCN Daebul',
      points: [
        'Trung tâm phúc lợi người lao động ở KCN Daebul, Yeongam có ký túc xá 138 phòng cho lao động Hàn và nước ngoài.',
        'Tuyển người ở quanh năm; tính đến tháng 9/2025 có 72 người nước ngoài đang ở.',
        'Chi nhánh Daebul của Tổng công ty KCN Hàn Quốc vận hành, hãy hỏi công ty hoặc chi nhánh để vào ở.'
      ] },
    th: { title: 'หอพักศูนย์สวัสดิการแรงงานนิคมแทบุล ยองอัม',
      points: [
        'ศูนย์สวัสดิการแรงงานในนิคมอุตสาหกรรมแทบุล ยองอัม มีหอพัก 138 ห้องสำหรับแรงงานเกาหลีและต่างชาติ',
        'รับผู้พักตลอดปี ณ กันยายน 2025 มีชาวต่างชาติพักอยู่ 72 คน',
        'สาขาแทบุลของการนิคมอุตสาหกรรมเกาหลีเป็นผู้ดูแล โปรดสอบถามบริษัทหรือการนิคมเรื่องเข้าพัก'
      ] },
    id: { title: 'Yeongam: asrama pusat kesejahteraan pekerja Daebul',
      points: [
        'Pusat kesejahteraan pekerja di Kawasan Industri Daebul, Yeongam mengelola asrama 138 kamar untuk pekerja Korea dan asing.',
        'Penghuni diterima sepanjang tahun; per September 2025 ada 72 warga asing yang tinggal.',
        'Dikelola cabang Daebul Korea Industrial Complex Corporation, jadi tanyakan ke perusahaan atau kantor tersebut untuk masuk.'
      ] }
  },
  {
    key: 'l-jg-safety-app-2026',
    tagKey: 'local',
    region: 'jeonnamgwangju',
    source: '전남자치경찰위원회 (법무부 2026년 외국인정책 시행계획)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493589/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '다국어 안전전남 앱',
      points: [
        '전남자치경찰위원회가 만든 앱으로 치안·교통안전 정보와 재난문자를 여러 언어로 받을 수 있습니다.',
        '112·119 긴급신고를 한 번에 연결하고, 날씨·환율과 외국인 지원기관 정보도 봅니다.',
        '영어, 중국어, 베트남어, 우즈베크어, 캄보디아어, 네팔어 등을 지원합니다.'
      ] },
    en: { title: 'Multilingual Safe Jeonnam app',
      points: [
        'An app by the Jeonnam autonomous police committee gives safety, traffic and disaster alerts in several languages.',
        'It connects to 112 and 119 with one touch and shows weather, exchange rates and support centers.',
        'It supports English, Chinese, Vietnamese, Uzbek, Khmer, Nepali and more.'
      ] },
    vi: { title: 'Ứng dụng đa ngữ An toàn Jeonnam',
      points: [
        'Ứng dụng của Ủy ban cảnh sát tự trị Jeonnam gửi thông tin an ninh, giao thông và tin nhắn thiên tai bằng nhiều ngôn ngữ.',
        'Gọi khẩn cấp 112, 119 bằng một chạm, xem thời tiết, tỷ giá và cơ quan hỗ trợ người nước ngoài.',
        'Hỗ trợ tiếng Anh, Trung, Việt, Uzbek, Campuchia, Nepal và khác.'
      ] },
    th: { title: 'แอปความปลอดภัยชอนนัมหลายภาษา',
      points: [
        'แอปของคณะกรรมการตำรวจท้องถิ่นชอนนัมแจ้งข้อมูลความปลอดภัย การจราจร และข้อความภัยพิบัติหลายภาษา',
        'โทรฉุกเฉิน 112 และ 119 ได้ด้วยการแตะครั้งเดียว ดูสภาพอากาศ อัตราแลกเปลี่ยน และหน่วยงานช่วยเหลือ',
        'รองรับภาษาอังกฤษ จีน เวียดนาม อุซเบก กัมพูชา เนปาล และอื่นๆ'
      ] },
    id: { title: 'Aplikasi multibahasa Jeonnam Aman',
      points: [
        'Aplikasi dari komite polisi otonom Jeonnam memberi info keamanan, lalu lintas dan pesan bencana dalam beberapa bahasa.',
        'Panggilan darurat 112 dan 119 dengan sekali sentuh, serta info cuaca, kurs dan lembaga pendukung.',
        'Mendukung bahasa Inggris, Tiongkok, Vietnam, Uzbek, Khmer, Nepal dan lainnya.'
      ] }
  },
  {
    key: 'l-jg-mokpo-counsel-2026',
    tagKey: 'local',
    region: 'jeonnamgwangju',
    source: '목포시 (법무부 2026년 외국인정책 시행계획)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493589/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '목포시 외국인근로자 상담센터',
      points: [
        '목포시가 (사)전남이주민통합지원센터에 맡겨 외국인 근로자 상담센터를 운영합니다.',
        '통역과 법률·의료 상담 등을 지원합니다.',
        '2026년 1월부터 12월까지 운영합니다.'
      ] },
    en: { title: 'Mokpo foreign worker counseling center',
      points: [
        'Mokpo City runs a foreign worker counseling center through the Jeonnam Migrant Integration Support Center.',
        'It helps with interpreting and legal and medical counseling.',
        'It runs from January to December 2026.'
      ] },
    vi: { title: 'Mokpo: trung tâm tư vấn lao động nước ngoài',
      points: [
        'Thành phố Mokpo giao Trung tâm hỗ trợ hội nhập người di trú Jeonnam vận hành trung tâm tư vấn lao động nước ngoài.',
        'Hỗ trợ phiên dịch và tư vấn pháp lý, y tế.',
        'Hoạt động từ tháng 1 đến tháng 12/2026.'
      ] },
    th: { title: 'ศูนย์ให้คำปรึกษาแรงงานต่างชาติเมืองมกโพ',
      points: [
        'เมืองมกโพมอบหมายให้ศูนย์สนับสนุนการบูรณาการผู้ย้ายถิ่นชอนนัมดำเนินการศูนย์ให้คำปรึกษาแรงงานต่างชาติ',
        'ช่วยเรื่องล่าม และให้คำปรึกษาด้านกฎหมายและการแพทย์',
        'เปิดตั้งแต่มกราคมถึงธันวาคม 2026'
      ] },
    id: { title: 'Mokpo: pusat konsultasi pekerja asing',
      points: [
        'Kota Mokpo mengelola pusat konsultasi pekerja asing melalui Pusat Dukungan Integrasi Migran Jeonnam.',
        'Membantu penerjemahan serta konsultasi hukum dan medis.',
        'Beroperasi Januari sampai Desember 2026.'
      ] }
  },
  {
    key: 'l-jeju-shelter-2026',
    tagKey: 'local',
    region: 'jeju',
    source: '제주특별자치도 외국인노동자지원센터',
    url: 'http://jejumwc.kr/index.php/contents/consult/refuge',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '외국인노동자 쉼터 무료 숙식',
      points: [
        '임금체불, 폭행, 사업장 이동, 산재, 인권침해 등으로 머물 곳이 없는 외국인노동자에게 무료 숙식을 제공합니다.',
        '쉼터에 있는 동안 문제 해결 상담과 제주 문화체험 같은 정서 지원 프로그램도 받습니다.',
        '센터를 방문하거나 누리집에서 입소를 신청합니다(064-712-1141).'
      ] },
    en: { title: 'Free shelter for migrant workers',
      points: [
        'Migrant workers with no place to stay due to unpaid wages, assault, job changes, work injuries or rights abuse get free food and lodging.',
        'While there, you get counseling to solve the problem and emotional support such as Jeju cultural outings.',
        'Apply by visiting the center or on its website (064-712-1141).'
      ] },
    vi: { title: 'Nhà tạm trú miễn phí cho lao động nước ngoài',
      points: [
        'Lao động nước ngoài không có chỗ ở vì nợ lương, bị hành hung, chuyển nơi làm, tai nạn lao động, bị xâm phạm quyền được ở và ăn miễn phí.',
        'Trong thời gian ở, bạn được tư vấn giải quyết vấn đề và tham gia chương trình hỗ trợ tinh thần như trải nghiệm văn hóa Jeju.',
        'Đăng ký tại trung tâm hoặc trên trang web (064-712-1141).'
      ] },
    th: { title: 'ที่พักพิงฟรีสำหรับแรงงานต่างชาติ',
      points: [
        'แรงงานต่างชาติที่ไม่มีที่พักเพราะค่าจ้างค้าง ถูกทำร้าย เปลี่ยนที่ทำงาน อุบัติเหตุจากงาน หรือถูกละเมิดสิทธิ ได้รับที่พักและอาหารฟรี',
        'ระหว่างพักจะได้รับคำปรึกษาเพื่อแก้ปัญหาและกิจกรรมดูแลจิตใจ เช่น ทัศนศึกษาวัฒนธรรมเชจู',
        'สมัครที่ศูนย์หรือทางเว็บไซต์ (064-712-1141)'
      ] },
    id: { title: 'Rumah singgah gratis untuk pekerja migran',
      points: [
        'Pekerja migran tanpa tempat tinggal karena gaji tertunggak, kekerasan, pindah kerja, kecelakaan kerja atau pelanggaran hak mendapat makan dan penginapan gratis.',
        'Selama tinggal, Anda mendapat konsultasi penyelesaian masalah dan program dukungan emosional seperti wisata budaya Jeju.',
        'Daftar dengan datang ke pusat atau lewat situs web (064-712-1141).'
      ] }
  },
  {
    key: 'l-jeju-korean-night-weekend-2026',
    tagKey: 'local',
    region: 'jeju',
    source: '제주특별자치도 외국인노동자지원센터',
    url: 'http://jejumwc.kr/index.php/contents/korean/info',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '외국인노동자 야간·주말 한국어 교육',
      points: [
        '야간반은 매주 화·수 19~21시, 주말반은 매주 일요일 14~19시에 수업합니다.',
        '기초·초급부터 중급, 한국어능력시험(TOPIK II) 대비반까지 있습니다.',
        '2학기는 7~8월에 접수하고 신분증을 가지고 센터 방문이나 누리집으로 신청합니다.'
      ] },
    en: { title: 'Evening and weekend Korean classes for migrant workers',
      points: [
        'Evening classes run Tue and Wed 7 to 9 pm, and weekend classes run Sundays 2 to 7 pm.',
        'Levels go from basic and beginner to intermediate, plus a TOPIK II prep class.',
        'Second-term sign-up is in July and August; apply at the center with your ID or on the website.'
      ] },
    vi: { title: 'Lớp tiếng Hàn buổi tối và cuối tuần cho lao động nước ngoài',
      points: [
        'Lớp tối học thứ Ba, thứ Tư 19-21 giờ; lớp cuối tuần học Chủ nhật 14-19 giờ.',
        'Có trình độ cơ bản, sơ cấp, trung cấp và lớp luyện thi TOPIK II.',
        'Học kỳ 2 nhận đăng ký tháng 7-8; mang thẻ tùy thân đến trung tâm hoặc đăng ký trên web.'
      ] },
    th: { title: 'เรียนภาษาเกาหลีภาคค่ำและวันหยุดสำหรับแรงงานต่างชาติ',
      points: [
        'ภาคค่ำเรียนวันอังคารและพุธ 19.00-21.00 น. ภาควันหยุดเรียนวันอาทิตย์ 14.00-19.00 น.',
        'มีระดับพื้นฐาน ต้น กลาง และห้องเตรียมสอบ TOPIK II',
        'ภาคเรียนที่ 2 รับสมัครกรกฎาคม-สิงหาคม นำบัตรประจำตัวไปสมัครที่ศูนย์หรือสมัครทางเว็บไซต์'
      ] },
    id: { title: 'Kelas bahasa Korea malam dan akhir pekan untuk pekerja migran',
      points: [
        'Kelas malam setiap Selasa dan Rabu pukul 19.00-21.00, kelas akhir pekan setiap Minggu pukul 14.00-19.00.',
        'Tingkatnya dari dasar, pemula, menengah, sampai kelas persiapan TOPIK II.',
        'Pendaftaran semester 2 pada Juli-Agustus; daftar di pusat dengan membawa kartu identitas atau lewat situs web.'
      ] }
  },
  {
    key: 'l-jeju-guidebook-2026',
    tagKey: 'local',
    region: 'jeju',
    source: '제주특별자치도 (외국인노동자지원센터 공지)',
    url: 'http://jejumwc.kr/index.php/contents/inform/notice?act=view&seq=6965',
    date: '2026-08-07',
    checked: '2026-10-28',
    ko: { title: '2026 제주 외국인주민 생활 가이드북',
      points: [
        '제주도가 외국인주민을 위한 2026년 생활 가이드북을 전자책으로 냈습니다.',
        '한국어, 영어, 중국어, 베트남어, 인도네시아어로 볼 수 있습니다.',
        '외국인노동자지원센터 공지사항이나 제주도 누리집 전자책 메뉴에서 무료로 봅니다.'
      ] },
    en: { title: '2026 Jeju living guidebook for foreign residents',
      points: [
        'Jeju Province released a 2026 living guidebook for foreign residents as an e-book.',
        'It is available in Korean, English, Chinese, Vietnamese and Indonesian.',
        'Read it free from the foreign worker support center notices or the e-book menu of the Jeju Province website.'
      ] },
    vi: { title: 'Sổ tay đời sống Jeju 2026 cho cư dân nước ngoài',
      points: [
        'Tỉnh Jeju phát hành sổ tay đời sống 2026 cho cư dân nước ngoài dưới dạng sách điện tử.',
        'Có tiếng Hàn, Anh, Trung, Việt và Indonesia.',
        'Đọc miễn phí tại mục thông báo của trung tâm hỗ trợ lao động nước ngoài hoặc mục sách điện tử trên web tỉnh Jeju.'
      ] },
    th: { title: 'คู่มือการใช้ชีวิตในเชจูปี 2026 สำหรับชาวต่างชาติ',
      points: [
        'จังหวัดเชจูออกคู่มือการใช้ชีวิตปี 2026 สำหรับผู้พำนักต่างชาติในรูปแบบอีบุ๊ก',
        'มีภาษาเกาหลี อังกฤษ จีน เวียดนาม และอินโดนีเซีย',
        'อ่านฟรีได้ที่ประกาศของศูนย์ช่วยเหลือแรงงานต่างชาติหรือเมนูอีบุ๊กบนเว็บไซต์จังหวัดเชจู'
      ] },
    id: { title: 'Buku panduan hidup di Jeju 2026 untuk warga asing',
      points: [
        'Provinsi Jeju menerbitkan buku panduan hidup 2026 untuk warga asing dalam bentuk e-book.',
        'Tersedia dalam bahasa Korea, Inggris, Tiongkok, Vietnam dan Indonesia.',
        'Baca gratis di pengumuman pusat pekerja asing atau menu e-book situs Provinsi Jeju.'
      ] }
  },
  {
    key: 'l-jeju-kiip-2026',
    tagKey: 'local',
    region: 'jeju',
    source: '제주특별자치도 외국인노동자지원센터',
    url: 'http://jejumwc.kr/index.php/contents/inform/kiip',
    date: '2026-07-23',
    checked: '2026-10-28',
    ko: { title: '사회통합프로그램(KIIP) 제주거점 수업·온라인 화상교육',
      points: [
        '외국인노동자지원센터는 법무부 사회통합프로그램 제주거점으로 학기별 한국어·한국사회 수업을 합니다.',
        '2026년 3학기 교육 일정과 온라인 화상교육 3학기 개설 계획이 공지되었습니다.',
        '신청은 사회통합정보망(socinet.go.kr)에서 하고, 일정은 센터 누리집에서 확인하세요.'
      ] },
    en: { title: 'KIIP classes at the Jeju hub and online video classes',
      points: [
        'The migrant worker support center is a Jeju hub of the Korea Immigration and Integration Program, with Korean language and society classes each term.',
        'The schedule for the third term of 2026 and online video classes for that term were posted.',
        'Apply on the Socinet site (socinet.go.kr) and check schedules on the center website.'
      ] },
    vi: { title: 'Chương trình hội nhập KIIP tại điểm Jeju và lớp trực tuyến',
      points: [
        'Trung tâm hỗ trợ lao động nước ngoài là điểm KIIP tại Jeju, mở lớp tiếng Hàn và xã hội Hàn Quốc theo học kỳ.',
        'Đã thông báo lịch học kỳ 3 năm 2026 và kế hoạch lớp học trực tuyến qua video.',
        'Đăng ký trên Socinet (socinet.go.kr) và xem lịch trên web của trung tâm.'
      ] },
    th: { title: 'โครงการบูรณาการ KIIP ศูนย์เชจูและเรียนออนไลน์',
      points: [
        'ศูนย์ช่วยเหลือแรงงานต่างชาติเป็นศูนย์ KIIP ในเชจู เปิดสอนภาษาและสังคมเกาหลีแต่ละภาคเรียน',
        'มีประกาศตารางภาคเรียนที่ 3 ปี 2026 และแผนเปิดเรียนออนไลน์ผ่านวิดีโอ',
        'สมัครทาง Socinet (socinet.go.kr) และดูตารางที่เว็บไซต์ของศูนย์'
      ] },
    id: { title: 'Kelas KIIP di pusat Jeju dan kelas video daring',
      points: [
        'Pusat pekerja migran adalah titik KIIP di Jeju, membuka kelas bahasa dan masyarakat Korea setiap semester.',
        'Jadwal semester 3 tahun 2026 dan rencana kelas video daring telah diumumkan.',
        'Daftar lewat Socinet (socinet.go.kr) dan cek jadwal di situs pusat.'
      ] }
  },
  {
    key: 'l-jg-onestop-day-2026',
    tagKey: 'local',
    region: 'jeonnamgwangju',
    source: '전남광주외국인주민지원센터 (광주국제교류센터)',
    url: 'https://girc.or.kr/notice/301',
    date: '2026-10-06',
    checked: '2026-10-28',
    ko: { title: '원스톱 상담의 날(매월 일요일 전문가 상담)',
      points: [
        '비자·체류, 법률·인권, 노동·산재, 세무, 건강 분야 전문가에게 직접 상담받을 수 있습니다.',
        '2026년에는 3월부터 매달 한 번 일요일 오후(13~16시)에 광산구 풍영로145번길 82 센터에서 열렸습니다.',
        '광주·전남에 사는 외국인 누구나 무료로 이용하며, 다음 일정은 1644-3828이나 센터 공지에서 확인하세요.'
      ] },
    en: { title: 'One-stop counseling day (monthly Sunday expert advice)',
      points: [
        'You can talk directly with experts on visas, law and rights, labor and work injuries, taxes and health.',
        'In 2026 it has been held once a month on a Sunday afternoon (1 to 4 pm) since March at the center, 82 Pungyeong-ro 145beon-gil, Gwangsan-gu.',
        'Any foreigner living in Gwangju or Jeonnam can use it for free; check the next date at 1644-3828 or the center notices.'
      ] },
    vi: { title: 'Ngày tư vấn một cửa (chuyên gia tư vấn Chủ nhật hằng tháng)',
      points: [
        'Bạn được tư vấn trực tiếp với chuyên gia về visa, pháp luật, nhân quyền, lao động, tai nạn lao động, thuế và sức khỏe.',
        'Năm 2026, từ tháng 3 mỗi tháng tổ chức một lần vào chiều Chủ nhật (13-16 giờ) tại trung tâm, 82 Pungyeong-ro 145beon-gil, Gwangsan-gu.',
        'Mọi người nước ngoài sống ở Gwangju, Jeonnam được dùng miễn phí; xem lịch tiếp theo qua 1644-3828 hoặc thông báo của trung tâm.'
      ] },
    th: { title: 'วันให้คำปรึกษาแบบครบวงจร (ผู้เชี่ยวชาญทุกเดือนวันอาทิตย์)',
      points: [
        'ปรึกษาผู้เชี่ยวชาญได้โดยตรงเรื่องวีซ่า กฎหมายและสิทธิ แรงงานและอุบัติเหตุจากงาน ภาษี และสุขภาพ',
        'ปี 2026 จัดเดือนละครั้งในบ่ายวันอาทิตย์ (13.00-16.00 น.) ตั้งแต่มีนาคม ที่ศูนย์ 82 Pungyeong-ro 145beon-gil เขตควังซาน',
        'ชาวต่างชาติทุกคนที่อาศัยในกวางจูหรือชอนนัมใช้บริการได้ฟรี ตรวจสอบวันถัดไปที่ 1644-3828 หรือประกาศของศูนย์'
      ] },
    id: { title: 'Hari konsultasi satu atap (konsultasi ahli setiap bulan hari Minggu)',
      points: [
        'Anda bisa berkonsultasi langsung dengan ahli soal visa, hukum dan hak, kerja dan kecelakaan kerja, pajak serta kesehatan.',
        'Pada 2026 diadakan sebulan sekali pada Minggu siang (13.00-16.00) sejak Maret di pusat, 82 Pungyeong-ro 145beon-gil, Gwangsan-gu.',
        'Semua warga asing di Gwangju atau Jeonnam bisa memakainya gratis; cek jadwal berikutnya di 1644-3828 atau pengumuman pusat.'
      ] }
  },
  {
    key: 'l-jg-life-guide-volunteer-2026',
    tagKey: 'local',
    region: 'jeonnamgwangju',
    source: '전남광주외국인주민지원센터 (광주국제교류센터)',
    url: 'https://girc.or.kr/notice/222',
    date: '2026-03-06',
    checked: '2026-10-28',
    until: '2026-12-20',
    ko: { title: '광주생활이끄미 통역·생활지원 서비스',
      points: [
        '자원활동가가 외국인주민의 광주 생활을 돕기 위해 통역과 생활지원을 합니다.',
        '전남광주외국인주민지원센터가 운영하며, 2026년 12월 20일까지 신청할 수 있습니다.',
        '센터 공지의 구글폼으로 신청하고, 문의는 1644-3828입니다.'
      ] },
    en: { title: 'Gwangju life helper interpreting and daily support',
      points: [
        'Volunteers help foreign residents with interpreting and daily life support in Gwangju.',
        'The Jeonnam-Gwangju foreign resident support center runs it, and you can apply until 20 December 2026.',
        'Apply through the Google Form in the center notice; call 1644-3828 for questions.'
      ] },
    vi: { title: 'Dịch vụ phiên dịch và hỗ trợ đời sống Gwangju',
      points: [
        'Tình nguyện viên giúp cư dân nước ngoài phiên dịch và hỗ trợ sinh hoạt tại Gwangju.',
        'Trung tâm hỗ trợ cư dân nước ngoài Jeonnam-Gwangju vận hành, đăng ký đến ngày 20/12/2026.',
        'Đăng ký qua Google Form trong thông báo của trung tâm; hỏi đáp gọi 1644-3828.'
      ] },
    th: { title: 'บริการล่ามและช่วยเหลือชีวิตประจำวันในกวางจู',
      points: [
        'อาสาสมัครช่วยผู้พำนักต่างชาติเรื่องล่ามและการใช้ชีวิตในกวางจู',
        'ศูนย์ช่วยเหลือชาวต่างชาติชอนนัม-กวางจูเป็นผู้ดำเนินการ สมัครได้ถึง 20 ธันวาคม 2026',
        'สมัครผ่าน Google Form ในประกาศของศูนย์ สอบถามโทร 1644-3828'
      ] },
    id: { title: 'Layanan penerjemahan dan bantuan hidup di Gwangju',
      points: [
        'Relawan membantu warga asing dengan penerjemahan dan dukungan kehidupan sehari-hari di Gwangju.',
        'Dikelola pusat warga asing Jeonnam-Gwangju, dan pendaftaran dibuka sampai 20 Desember 2026.',
        'Daftar lewat Google Form di pengumuman pusat; tanya lewat 1644-3828.'
      ] }
  },
  {
    key: 'l-jg-pyeongdong-korean-2026',
    tagKey: 'local',
    region: 'jeonnamgwangju',
    source: '전남광주외국인주민지원센터 (광주국제교류센터)',
    url: 'https://girc.or.kr/notice/296',
    date: '2026-09-28',
    checked: '2026-10-28',
    ko: { title: '광산구 평동 찾아가는 한국어교실',
      points: [
        '직장과 기숙사가 가까운 평동비즈니스센터에서 센터 한국어 수업을 들을 수 있습니다.',
        '3학기에는 TOPIK 1~2급반과 처음 배우는 사람을 위한 일반 한국어 1단계반이 있습니다.',
        '10월 18일(일)에 개강했으며, 남은 자리와 신청은 1644-3828로 문의하세요.'
      ] },
    en: { title: 'Gwangsan-gu Pyeongdong outreach Korean class',
      points: [
        'You can take the center’s Korean classes at the Pyeongdong Business Center, near workplaces and dormitories.',
        'The third term has a TOPIK level 1 to 2 class and a level 1 general Korean class for beginners.',
        'Classes began on Sunday 18 October; call 1644-3828 about open seats and sign-up.'
      ] },
    vi: { title: 'Gwangsan-gu: lớp tiếng Hàn lưu động tại Pyeongdong',
      points: [
        'Bạn có thể học tiếng Hàn của trung tâm tại Trung tâm kinh doanh Pyeongdong, gần nơi làm việc và ký túc xá.',
        'Học kỳ 3 có lớp TOPIK cấp 1-2 và lớp tiếng Hàn cơ bản cấp 1 cho người mới học.',
        'Khai giảng Chủ nhật 18/10; hỏi chỗ trống và đăng ký qua 1644-3828.'
      ] },
    th: { title: 'ห้องเรียนภาษาเกาหลีเคลื่อนที่ที่พยองดง เขตควังซาน',
      points: [
        'เรียนภาษาเกาหลีของศูนย์ได้ที่ศูนย์ธุรกิจพยองดง ใกล้ที่ทำงานและหอพัก',
        'ภาคเรียนที่ 3 มีห้อง TOPIK ระดับ 1-2 และห้องภาษาเกาหลีทั่วไประดับ 1 สำหรับผู้เริ่มต้น',
        'เปิดเรียนวันอาทิตย์ที่ 18 ตุลาคม สอบถามที่ว่างและการสมัครที่ 1644-3828'
      ] },
    id: { title: 'Gwangsan-gu: kelas bahasa Korea keliling di Pyeongdong',
      points: [
        'Anda bisa ikut kelas bahasa Korea pusat di Pyeongdong Business Center, dekat tempat kerja dan asrama.',
        'Semester 3 ada kelas TOPIK level 1-2 dan kelas bahasa Korea umum level 1 untuk pemula.',
        'Kelas dimulai Minggu 18 Oktober; tanyakan kursi kosong dan pendaftaran ke 1644-3828.'
      ] }
  },
  {
    key: 'l-jg-settlement-edu-2026',
    tagKey: 'local',
    region: 'jeonnamgwangju',
    source: '전남광주외국인주민지원센터 (광주국제교류센터)',
    url: 'https://girc.or.kr/notice/280',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '외국인주민 광주생활 정착교육·정보화교육',
      points: [
        '센터가 거의 매달 생활법률, 전세사기 예방, 세무(종합소득세·연말정산), 금융, 교통안전 같은 정착교육을 엽니다.',
        '휴대폰 앱 활용, AI 활용 같은 정보화교육과 운전면허 필기, 지게차, 제빵 같은 취업역량 교육도 있습니다.',
        '광주·전남 외국인이 대상이며, 과정마다 센터 공지에서 모집하니 1644-3828로 문의하세요.'
      ] },
    en: { title: 'Gwangju settlement and digital skills classes for foreign residents',
      points: [
        'Almost every month the center holds settlement classes on daily law, rental fraud prevention, taxes, finance and traffic safety.',
        'There are also digital classes such as using phone apps and AI, plus job classes such as the driving test, forklift and baking.',
        'They are for foreigners in Gwangju and Jeonnam; each course is announced in the center notices, so call 1644-3828.'
      ] },
    vi: { title: 'Gwangju: lớp định cư và tin học cho cư dân nước ngoài',
      points: [
        'Gần như mỗi tháng trung tâm mở lớp định cư về pháp luật đời sống, phòng lừa đảo thuê nhà, thuế, tài chính, an toàn giao thông.',
        'Còn có lớp tin học như dùng ứng dụng điện thoại, AI, và lớp nghề như thi bằng lái lý thuyết, xe nâng, làm bánh.',
        'Dành cho người nước ngoài ở Gwangju, Jeonnam; mỗi khóa đăng trên thông báo của trung tâm, hãy gọi 1644-3828.'
      ] },
    th: { title: 'อบรมการตั้งถิ่นฐานและทักษะดิจิทัลในกวางจู',
      points: [
        'เกือบทุกเดือนศูนย์จัดอบรมเรื่องกฎหมายในชีวิตประจำวัน ป้องกันการโกงเช่าบ้าน ภาษี การเงิน และความปลอดภัยทางถนน',
        'มีอบรมดิจิทัล เช่น การใช้แอปมือถือและ AI และอบรมอาชีพ เช่น สอบใบขับขี่ภาคทฤษฎี รถยก และทำขนมปัง',
        'สำหรับชาวต่างชาติในกวางจูและชอนนัม แต่ละหลักสูตรประกาศในหน้าประกาศของศูนย์ โทร 1644-3828'
      ] },
    id: { title: 'Gwangju: kelas adaptasi dan digital untuk warga asing',
      points: [
        'Hampir setiap bulan pusat mengadakan kelas adaptasi tentang hukum sehari-hari, pencegahan penipuan sewa, pajak, keuangan dan keselamatan lalu lintas.',
        'Ada juga kelas digital seperti memakai aplikasi ponsel dan AI, serta kelas kerja seperti ujian teori SIM, forklift dan membuat roti.',
        'Untuk warga asing di Gwangju dan Jeonnam; tiap kursus diumumkan di pengumuman pusat, hubungi 1644-3828.'
      ] }
  },
  {
    key: 'l-jeonbuk-name-helmet-2026',
    tagKey: 'local',
    region: 'jeonbuk',
    source: '전북국제협력진흥원 (전북외국인근로자지원센터 공고 제2026-60호)',
    url: 'https://www.jbica.kr/main/?menu=222&mode=view&no=25',
    date: '2026-10-06',
    checked: '2026-10-28',
    ko: { title: '이름 표기 안전모 「이름을 불러주세요!」 캠페인',
      points: [
        '전북외국인근로자지원센터가 외국인 근로자 이름을 모국어와 한국어로 새긴 KC 인증 안전모를 줍니다.',
        '참여 사업장에는 노동 권익 안내, 찾아가는 전문가 상담, 산업안전 VR 체험도 운영합니다(10~11월).',
        '신청은 회사가 하므로 회사에 참여를 요청해 보세요(안전모 44개 소진 시 마감, 문의 063-280-6180).'
      ] },
    en: { title: 'Name helmet campaign “Call me by my name!”',
      points: [
        'The Jeonbuk foreign worker support center gives KC-certified helmets printed with workers’ names in their language and Korean.',
        'Joining workplaces also get labor rights info, on-site expert counseling and industrial safety VR (October to November).',
        'Companies apply, so ask your employer to join (ends when 44 helmets are used up; call 063-280-6180).'
      ] },
    vi: { title: 'Chiến dịch mũ bảo hộ in tên “Hãy gọi tên tôi!”',
      points: [
        'Trung tâm hỗ trợ lao động nước ngoài Jeonbuk tặng mũ bảo hộ chuẩn KC in tên người lao động bằng tiếng mẹ đẻ và tiếng Hàn.',
        'Nơi làm việc tham gia còn được hướng dẫn quyền lao động, chuyên gia đến tư vấn và trải nghiệm VR an toàn lao động (tháng 10-11).',
        'Công ty là bên đăng ký, hãy đề nghị công ty tham gia (hết khi đủ 44 mũ; hỏi 063-280-6180).'
      ] },
    th: { title: 'แคมเปญหมวกนิรภัยพิมพ์ชื่อ “เรียกชื่อฉันนะ!”',
      points: [
        'ศูนย์ช่วยเหลือแรงงานต่างชาติจอนบุกแจกหมวกนิรภัยมาตรฐาน KC ที่พิมพ์ชื่อแรงงานเป็นภาษาของตนและภาษาเกาหลี',
        'สถานประกอบการที่เข้าร่วมจะได้รับข้อมูลสิทธิแรงงาน ผู้เชี่ยวชาญไปให้คำปรึกษา และ VR ความปลอดภัย (ตุลาคม-พฤศจิกายน)',
        'บริษัทเป็นผู้สมัคร จึงขอให้นายจ้างเข้าร่วม (ปิดเมื่อหมวก 44 ใบหมด สอบถาม 063-280-6180)'
      ] },
    id: { title: 'Kampanye helm bernama “Panggil namaku!”',
      points: [
        'Pusat pekerja asing Jeonbuk memberi helm bersertifikat KC bertuliskan nama pekerja dalam bahasa ibu dan bahasa Korea.',
        'Tempat kerja peserta juga mendapat info hak kerja, konsultasi ahli di lokasi dan VR keselamatan kerja (Oktober-November).',
        'Perusahaan yang mendaftar, jadi minta pemberi kerja Anda ikut (selesai jika 44 helm habis; tanya 063-280-6180).'
      ] }
  },
  {
    key: 'l-seoul-foreign-resident-center-2026',
    tagKey: 'local',
    region: 'seoul',
    source: '서울특별시 (법무부 2026년 외국인정책 시행계획 서울편; 서울노동포털 외국인근로자 지원기관)',
    url: 'https://www.seoullabor.or.kr/portal/cnts/selectContents.do?cntnts_id=A1000076',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '서울외국인주민센터 법률·노무·심리 상담',
      points: [
        '영등포구 도신로 40에 있는 서울시 외국인 종합지원기관입니다.',
        '다국어 생활상담과 법률·노무 전문상담, 심리상담을 제공합니다.',
        '생활한국어·컴퓨터 교육도 운영하며 문의는 02-2229-4900입니다.'
      ] },
    en: { title: 'Seoul Foreign Resident Center legal, labor and counseling support',
      points: [
        'It is Seoul’s main support center for foreign residents, at 40 Dosin-ro, Yeongdeungpo-gu.',
        'It offers multilingual daily-life counseling plus expert legal, labor and psychological counseling.',
        'It also runs everyday Korean and computer classes; call 02-2229-4900.'
      ] },
    vi: { title: 'Trung tâm Cư dân Nước ngoài Seoul: tư vấn pháp lý, lao động, tâm lý',
      points: [
        'Đây là cơ quan hỗ trợ tổng hợp người nước ngoài của Seoul tại số 40 Dosin-ro, Yeongdeungpo-gu.',
        'Trung tâm tư vấn đời sống đa ngôn ngữ và tư vấn chuyên môn về pháp lý, lao động, tâm lý.',
        'Có lớp tiếng Hàn đời sống và tin học; liên hệ 02-2229-4900.'
      ] },
    th: { title: 'ศูนย์ผู้พำนักชาวต่างชาติโซล ปรึกษากฎหมาย แรงงาน และจิตใจ',
      points: [
        'เป็นศูนย์ช่วยเหลือชาวต่างชาติหลักของโซล ตั้งอยู่ที่ 40 Dosin-ro เขตยองดึงโพ',
        'ให้คำปรึกษาชีวิตประจำวันหลายภาษา และปรึกษาเฉพาะด้านกฎหมาย แรงงาน และจิตใจ',
        'มีชั้นเรียนภาษาเกาหลีและคอมพิวเตอร์ด้วย ติดต่อ 02-2229-4900'
      ] },
    id: { title: 'Pusat Warga Asing Seoul: konsultasi hukum, ketenagakerjaan, psikologis',
      points: [
        'Ini pusat layanan utama warga asing milik Kota Seoul di 40 Dosin-ro, Yeongdeungpo-gu.',
        'Tersedia konsultasi kehidupan multibahasa serta konsultasi ahli hukum, ketenagakerjaan, dan psikologis.',
        'Ada juga kelas bahasa Korea sehari-hari dan komputer; hubungi 02-2229-4900.'
      ] }
  },
  {
    key: 'l-seoul-global-village-centers-2026',
    tagKey: 'local',
    region: 'seoul',
    source: '서울특별시 (법무부 2026년 외국인정책 시행계획 서울편 3-3-1)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493573/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '글로벌빌리지센터 7곳 생활상담·한국어 강좌',
      points: [
        '서울시는 외국인 밀집지역에 글로벌빌리지센터 7곳을 운영합니다.',
        '연남·강남·서래·이태원·이촌·성북·금천(가산로 116) 센터가 있습니다.',
        '생활상담과 한국어 강좌, 문화체험을 이용할 수 있습니다.'
      ] },
    en: { title: 'Seven Global Village Centers for daily-life counseling and Korean classes',
      points: [
        'Seoul runs seven Global Village Centers in areas with many foreign residents.',
        'They are in Yeonnam, Gangnam, Seorae, Itaewon, Ichon, Seongbuk and Geumcheon (116 Gasan-ro).',
        'You can use daily-life counseling, Korean classes and cultural programs.'
      ] },
    vi: { title: '7 Trung tâm Global Village: tư vấn đời sống và lớp tiếng Hàn',
      points: [
        'Seoul vận hành 7 Trung tâm Global Village ở khu đông người nước ngoài.',
        'Các trung tâm ở Yeonnam, Gangnam, Seorae, Itaewon, Ichon, Seongbuk và Geumcheon (116 Gasan-ro).',
        'Bạn có thể nhận tư vấn đời sống, học tiếng Hàn và tham gia trải nghiệm văn hóa.'
      ] },
    th: { title: 'ศูนย์โกลบอลวิลเลจ 7 แห่ง ปรึกษาชีวิตประจำวันและเรียนภาษาเกาหลี',
      points: [
        'โซลเปิดศูนย์โกลบอลวิลเลจ 7 แห่งในย่านที่มีชาวต่างชาติอาศัยมาก',
        'ได้แก่ ยอนนัม คังนัม ซอแร อิแทวอน อีชน ซองบุก และคึมชอน (116 Gasan-ro)',
        'ใช้บริการปรึกษาชีวิตประจำวัน เรียนภาษาเกาหลี และกิจกรรมวัฒนธรรมได้'
      ] },
    id: { title: '7 Global Village Center: konsultasi kehidupan dan kelas bahasa Korea',
      points: [
        'Seoul mengelola 7 Global Village Center di kawasan padat warga asing.',
        'Lokasinya di Yeonnam, Gangnam, Seorae, Itaewon, Ichon, Seongbuk, dan Geumcheon (116 Gasan-ro).',
        'Tersedia konsultasi kehidupan, kelas bahasa Korea, dan program budaya.'
      ] }
  },
  {
    key: 'l-seoul-yeongdeungpo-dadream-2026',
    tagKey: 'local',
    region: 'seoul',
    source: '영등포구청 (다드림문화복합센터 안내; 법무부 2026년 외국인정책 시행계획 서울편 3-3-4)',
    url: 'https://www.ydp.go.kr/www/contents.do?key=3316',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '영등포구 다드림문화복합센터 한국어·무료 법률상담',
      points: [
        '영등포구 대림로21길 11에 있는 외국인 지원 센터로 한국어 교실을 운영합니다.',
        '출입국·노동·산재 등 생활법률 무료 상담을 연중 제공합니다.',
        '토요일 오전에도 열며 프로그램 문의는 02-2670-1636입니다.'
      ] },
    en: { title: 'Yeongdeungpo-gu Dadream Center Korean classes and free legal advice',
      points: [
        'This support center at 11 Daerim-ro 21-gil, Yeongdeungpo-gu, runs Korean classes.',
        'It gives free everyday legal advice all year on immigration, labor and industrial accidents.',
        'It is also open Saturday mornings; program inquiries 02-2670-1636.'
      ] },
    vi: { title: 'Trung tâm Dadream quận Yeongdeungpo: tiếng Hàn và tư vấn pháp lý miễn phí',
      points: [
        'Trung tâm hỗ trợ tại số 11 Daerim-ro 21-gil, Yeongdeungpo-gu có lớp tiếng Hàn.',
        'Tư vấn pháp luật đời sống miễn phí quanh năm về xuất nhập cảnh, lao động, tai nạn lao động.',
        'Mở cửa cả sáng thứ Bảy; hỏi chương trình qua 02-2670-1636.'
      ] },
    th: { title: 'ศูนย์ดาดรีม เขตยองดึงโพ เรียนภาษาเกาหลีและปรึกษากฎหมายฟรี',
      points: [
        'ศูนย์ที่ 11 Daerim-ro 21-gil เขตยองดึงโพ เปิดชั้นเรียนภาษาเกาหลี',
        'ให้คำปรึกษากฎหมายฟรีตลอดปี เรื่องตรวจคนเข้าเมือง แรงงาน และอุบัติเหตุจากการทำงาน',
        'เปิดเช้าวันเสาร์ด้วย สอบถามโปรแกรม 02-2670-1636'
      ] },
    id: { title: 'Pusat Dadream Yeongdeungpo-gu: kelas bahasa Korea dan konsultasi hukum gratis',
      points: [
        'Pusat di 11 Daerim-ro 21-gil, Yeongdeungpo-gu, ini membuka kelas bahasa Korea.',
        'Ada konsultasi hukum sehari-hari gratis sepanjang tahun soal imigrasi, kerja, dan kecelakaan kerja.',
        'Buka juga Sabtu pagi; info program 02-2670-1636.'
      ] }
  },
  {
    key: 'l-seoul-construction-safety-2026',
    tagKey: 'local',
    region: 'seoul',
    source: '서울특별시 도시기반시설본부 (법무부 2026년 외국인정책 시행계획 서울편 4-1-3)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493573/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '외국인 근로자 건설안전교육(시 발주 공사장)',
      points: [
        '서울시 도시기반시설본부 발주 공사장의 외국인 근로자가 대상입니다.',
        '현장 안전교육장에서 건설안전 기본수칙을 회당 2시간 교육합니다.',
        '하반기 교육은 2026년 11월에 진행합니다.'
      ] },
    en: { title: 'Construction safety training for foreign workers at city-ordered sites',
      points: [
        'It is for foreign workers at construction sites ordered by Seoul’s Infrastructure Headquarters.',
        'Two-hour sessions on basic construction safety rules are held at on-site training rooms.',
        'The second-half sessions take place in November 2026.'
      ] },
    vi: { title: 'Đào tạo an toàn xây dựng cho lao động nước ngoài tại công trình của thành phố',
      points: [
        'Đối tượng là lao động nước ngoài tại công trình do Trụ sở Hạ tầng Đô thị Seoul đặt hàng.',
        'Mỗi buổi 2 giờ hướng dẫn quy tắc an toàn xây dựng cơ bản tại phòng đào tạo công trường.',
        'Đợt nửa cuối năm diễn ra vào tháng 11/2026.'
      ] },
    th: { title: 'อบรมความปลอดภัยงานก่อสร้างสำหรับแรงงานต่างชาติในไซต์ของเมือง',
      points: [
        'สำหรับแรงงานต่างชาติในไซต์ก่อสร้างที่สำนักงานโครงสร้างพื้นฐานโซลเป็นผู้ว่าจ้าง',
        'อบรมกฎความปลอดภัยพื้นฐานครั้งละ 2 ชั่วโมงที่ห้องอบรมในไซต์',
        'รอบครึ่งปีหลังจัดในเดือนพฤศจิกายน 2026'
      ] },
    id: { title: 'Pelatihan keselamatan konstruksi bagi pekerja asing di proyek kota',
      points: [
        'Sasarannya pekerja asing di proyek yang dipesan Kantor Infrastruktur Kota Seoul.',
        'Sesi 2 jam tentang aturan dasar keselamatan konstruksi diadakan di ruang pelatihan lokasi.',
        'Sesi semester kedua berlangsung pada November 2026.'
      ] }
  },
  {
    key: 'l-seoul-guro-safety-insurance-2026',
    tagKey: 'local',
    region: 'seoul',
    source: '구로구청 (2026 구민 지원 안내)',
    url: 'https://www.guro.go.kr/2026support/index.htm',
    date: '2026-03-01',
    checked: '2026-10-28',
    ko: { title: '구로구 구민안전보험 등록외국인 자동 가입',
      points: [
        '구로구에 주민등록된 구민과 등록외국인은 구민안전보험에 자동 가입됩니다.',
        '예상치 못한 재난·사고로 피해를 입으면 보험금을 청구할 수 있습니다.',
        '보장 기간은 2026년 3월 1일부터 2027년 2월 28일까지이며 문의는 1577-5939입니다.'
      ] },
    en: { title: 'Guro-gu citizen safety insurance covers registered foreigners',
      points: [
        'Registered residents of Guro-gu, including registered foreigners, are enrolled automatically.',
        'You can claim benefits if you are harmed by an unexpected disaster or accident.',
        'Coverage runs from March 1, 2026 to February 28, 2027; call 1577-5939.'
      ] },
    vi: { title: 'Bảo hiểm an toàn cư dân quận Guro tự động cho người nước ngoài đã đăng ký',
      points: [
        'Cư dân Guro-gu, kể cả người nước ngoài đã đăng ký, được tự động tham gia.',
        'Nếu bị thiệt hại do thiên tai hoặc tai nạn bất ngờ, bạn có thể yêu cầu bồi thường.',
        'Thời hạn từ 1/3/2026 đến 28/2/2027; liên hệ 1577-5939.'
      ] },
    th: { title: 'ประกันความปลอดภัยชาวเขตคูโร คุ้มครองชาวต่างชาติที่ลงทะเบียน',
      points: [
        'ผู้มีทะเบียนในเขตคูโร รวมถึงชาวต่างชาติที่ลงทะเบียน ได้รับความคุ้มครองอัตโนมัติ',
        'หากได้รับความเสียหายจากภัยพิบัติหรืออุบัติเหตุ สามารถเรียกร้องค่าสินไหมได้',
        'คุ้มครอง 1 มี.ค. 2026 ถึง 28 ก.พ. 2027 ติดต่อ 1577-5939'
      ] },
    id: { title: 'Asuransi keselamatan warga Guro-gu untuk WNA terdaftar',
      points: [
        'Warga terdaftar Guro-gu, termasuk WNA terdaftar, otomatis menjadi peserta.',
        'Anda bisa mengajukan klaim jika menjadi korban bencana atau kecelakaan tak terduga.',
        'Masa perlindungan 1 Maret 2026 sampai 28 Februari 2027; hubungi 1577-5939.'
      ] }
  },
  {
    key: 'l-incheon-ppuri-worker-center-2026',
    tagKey: 'local',
    region: 'incheon',
    source: '인천광역시 (법무부 2026년 외국인정책 시행계획 인천편 3-3-②)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493576/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '서구 뿌리산업 외국인근로자센터 한국어·통번역·E-7-4 전환 지원',
      points: [
        '인천 서구 뿌리산업 외국인근로자센터는 인천외국인종합지원센터가 운영합니다.',
        '입문·초급·TOPIK 한국어 교실과 사회통합프로그램, 취업교육을 운영합니다.',
        '9개 언어 통번역과 숙련기능인력(E-7-4) 비자 전환을 지원합니다.'
      ] },
    en: { title: 'Seo-gu Root Industry Foreign Worker Center: Korean, interpreting, E-7-4 help',
      points: [
        'The center in Seo-gu, Incheon, is run by the Incheon Foreign Residents Support Center.',
        'It offers beginner and TOPIK Korean classes, the KIIP program and job training.',
        'It provides interpreting in nine languages and helps with switching to the E-7-4 skilled worker visa.'
      ] },
    vi: { title: 'Trung tâm Lao động Nước ngoài Công nghiệp Gốc quận Seo: tiếng Hàn, phiên dịch, hỗ trợ E-7-4',
      points: [
        'Trung tâm ở quận Seo, Incheon do Trung tâm Hỗ trợ Tổng hợp Người nước ngoài Incheon vận hành.',
        'Có lớp tiếng Hàn nhập môn, sơ cấp, TOPIK, chương trình KIIP và đào tạo việc làm.',
        'Hỗ trợ phiên dịch 9 ngôn ngữ và chuyển đổi sang visa lao động lành nghề E-7-4.'
      ] },
    th: { title: 'ศูนย์แรงงานต่างชาติอุตสาหกรรมฐานราก เขตซอ ภาษาเกาหลี ล่าม และช่วยเปลี่ยนวีซ่า E-7-4',
      points: [
        'ศูนย์ในเขตซอ อินชอน ดำเนินการโดยศูนย์ช่วยเหลือชาวต่างชาติอินชอน',
        'มีชั้นเรียนภาษาเกาหลีเบื้องต้น ระดับต้น TOPIK โปรแกรม KIIP และอบรมหางาน',
        'มีล่าม 9 ภาษา และช่วยเปลี่ยนเป็นวีซ่าแรงงานฝีมือ E-7-4'
      ] },
    id: { title: 'Pusat Pekerja Asing Industri Dasar Seo-gu: bahasa Korea, penerjemah, bantuan E-7-4',
      points: [
        'Pusat di Seo-gu, Incheon, ini dikelola Pusat Dukungan Warga Asing Incheon.',
        'Tersedia kelas bahasa Korea dasar dan TOPIK, program KIIP, serta pelatihan kerja.',
        'Ada layanan penerjemah 9 bahasa dan bantuan alih status ke visa pekerja terampil E-7-4.'
      ] }
  },
  {
    key: 'l-incheon-comprehensive-center-2026',
    tagKey: 'local',
    region: 'incheon',
    source: '인천광역시 (법무부 2026년 외국인정책 시행계획 인천편 3-2-1)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493576/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '인천외국인종합지원센터 노무 상담·긴급지원',
      points: [
        '외국인근로자 등 인천 거주 외국인에게 생활·법률·노무 종합상담과 무료 통역을 제공합니다.',
        '복지 사각지대에 놓인 외국인을 찾아 긴급지원과 사례관리를 합니다.',
        '한국어 교육과 사회통합프로그램도 운영합니다.'
      ] },
    en: { title: 'Incheon Foreign Residents Support Center: labor counseling and emergency aid',
      points: [
        'It gives foreign residents, including workers, free daily-life, legal and labor counseling and interpreting.',
        'It finds foreigners in welfare blind spots and provides emergency support and case management.',
        'It also runs Korean classes and the KIIP program.'
      ] },
    vi: { title: 'Trung tâm Hỗ trợ Tổng hợp Người nước ngoài Incheon: tư vấn lao động, hỗ trợ khẩn cấp',
      points: [
        'Trung tâm tư vấn đời sống, pháp lý, lao động và phiên dịch miễn phí cho người nước ngoài, kể cả lao động.',
        'Trung tâm tìm người nước ngoài gặp khó khăn để hỗ trợ khẩn cấp và quản lý trường hợp.',
        'Có lớp tiếng Hàn và chương trình KIIP.'
      ] },
    th: { title: 'ศูนย์ช่วยเหลือชาวต่างชาติอินชอน ปรึกษาแรงงานและช่วยเหลือฉุกเฉิน',
      points: [
        'ให้คำปรึกษาชีวิตประจำวัน กฎหมาย แรงงาน และล่ามฟรีแก่ชาวต่างชาติรวมถึงแรงงาน',
        'ค้นหาชาวต่างชาติที่ตกหล่นจากสวัสดิการ เพื่อช่วยเหลือฉุกเฉินและติดตามดูแล',
        'มีชั้นเรียนภาษาเกาหลีและโปรแกรม KIIP ด้วย'
      ] },
    id: { title: 'Pusat Dukungan Warga Asing Incheon: konsultasi kerja dan bantuan darurat',
      points: [
        'Pusat ini memberi konsultasi kehidupan, hukum, dan ketenagakerjaan serta penerjemah gratis bagi warga asing.',
        'Pusat ini mencari warga asing yang luput dari layanan sosial untuk bantuan darurat dan pendampingan.',
        'Tersedia juga kelas bahasa Korea dan program KIIP.'
      ] }
  },
  {
    key: 'l-incheon-citizen-safety-insurance-2026',
    tagKey: 'local',
    region: 'incheon',
    source: '인천광역시 (법무부 2026년 외국인정책 시행계획 인천편 4-1-1)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493576/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '인천 시민안전보험 등록외국인 포함',
      points: [
        '인천시 시민안전보험은 등록외국인을 포함한 시민 전체가 자동 가입됩니다.',
        '자연재해, 화재·붕괴, 대중교통 사고 등 14개 항목을 보장합니다.',
        '대중교통 이용 중 사망 시 2천만 원이며 청구권은 3년입니다.'
      ] },
    en: { title: 'Incheon citizen safety insurance includes registered foreigners',
      points: [
        'All Incheon residents, including registered foreigners, are covered automatically.',
        'It covers 14 items such as natural disasters, fires and collapses, and public transport accidents.',
        'Death while using public transport pays 20 million won, and claims can be made within 3 years.'
      ] },
    vi: { title: 'Bảo hiểm an toàn thị dân Incheon gồm cả người nước ngoài đã đăng ký',
      points: [
        'Mọi cư dân Incheon, kể cả người nước ngoài đã đăng ký, được tự động bảo hiểm.',
        'Bảo hiểm 14 hạng mục như thiên tai, cháy nổ sập đổ, tai nạn giao thông công cộng.',
        'Tử vong khi đi phương tiện công cộng được 20 triệu won; thời hạn yêu cầu là 3 năm.'
      ] },
    th: { title: 'ประกันความปลอดภัยพลเมืองอินชอน รวมชาวต่างชาติที่ลงทะเบียน',
      points: [
        'ชาวอินชอนทุกคน รวมถึงชาวต่างชาติที่ลงทะเบียน ได้รับความคุ้มครองอัตโนมัติ',
        'คุ้มครอง 14 รายการ เช่น ภัยธรรมชาติ ไฟไหม้ อาคารถล่ม และอุบัติเหตุขนส่งสาธารณะ',
        'เสียชีวิตขณะใช้ขนส่งสาธารณะได้ 20 ล้านวอน และยื่นเรียกร้องได้ภายใน 3 ปี'
      ] },
    id: { title: 'Asuransi keselamatan warga Incheon termasuk WNA terdaftar',
      points: [
        'Semua warga Incheon, termasuk WNA terdaftar, otomatis terlindungi.',
        'Ada 14 jenis perlindungan seperti bencana alam, kebakaran dan runtuhan, serta kecelakaan transportasi umum.',
        'Kematian saat naik transportasi umum dibayar 20 juta won; klaim bisa diajukan dalam 3 tahun.'
      ] }
  },
  {
    key: 'l-gangwon-wonju-center-2026',
    tagKey: 'local',
    region: 'gangwon',
    source: '원주시·강원특별자치도 (법무부 2026년 외국인정책 시행계획 강원편 3-3-7)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493585/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '원주시 외국인주민지원센터 노동·의료 상담과 한국어',
      points: [
        '원주시 외국인주민지원센터는 도와 시의 지원으로 운영됩니다.',
        '노동·체류·인권·의료 고충 상담과 법률·통역 서비스를 제공합니다.',
        '생활한국어 교육은 근로자 여건에 맞춰 평일 야간과 주말에 운영합니다.'
      ] },
    en: { title: 'Wonju-si Foreign Residents Center: labor and medical counseling, Korean',
      points: [
        'The Wonju Foreign Residents Support Center runs with city and provincial support.',
        'It counsels on labor, stay status, human rights and medical problems, with legal and interpreting help.',
        'Everyday Korean classes run on weekday evenings and weekends to fit workers’ schedules.'
      ] },
    vi: { title: 'Trung tâm Cư dân Nước ngoài thành phố Wonju: tư vấn lao động, y tế, tiếng Hàn',
      points: [
        'Trung tâm Hỗ trợ Cư dân Nước ngoài Wonju hoạt động với hỗ trợ của thành phố và tỉnh.',
        'Tư vấn về lao động, lưu trú, nhân quyền, y tế, kèm hỗ trợ pháp lý và phiên dịch.',
        'Lớp tiếng Hàn đời sống mở buổi tối ngày thường và cuối tuần cho người lao động.'
      ] },
    th: { title: 'ศูนย์ชาวต่างชาติเมืองวอนจู ปรึกษาแรงงาน การแพทย์ และเรียนภาษาเกาหลี',
      points: [
        'ศูนย์ช่วยเหลือชาวต่างชาติวอนจูดำเนินงานด้วยการสนับสนุนของเมืองและจังหวัด',
        'ให้คำปรึกษาด้านแรงงาน การพำนัก สิทธิมนุษยชน และการแพทย์ พร้อมบริการกฎหมายและล่าม',
        'ชั้นเรียนภาษาเกาหลีจัดช่วงค่ำวันธรรมดาและวันหยุดเพื่อให้แรงงานเรียนได้'
      ] },
    id: { title: 'Pusat Warga Asing Kota Wonju: konsultasi kerja, medis, bahasa Korea',
      points: [
        'Pusat Dukungan Warga Asing Wonju berjalan dengan dukungan kota dan provinsi.',
        'Tersedia konsultasi masalah kerja, izin tinggal, HAM, dan medis, serta bantuan hukum dan penerjemah.',
        'Kelas bahasa Korea sehari-hari diadakan malam hari kerja dan akhir pekan sesuai waktu pekerja.'
      ] }
  },
  {
    key: 'l-gangwon-safety-community-2026',
    tagKey: 'local',
    region: 'gangwon',
    source: '강원특별자치도·강원특별자치도경제진흥원 (법무부 2026년 외국인정책 시행계획 강원편 3-2-25)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493585/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '외국인 생활안전 교육·국가별 커뮤니티 지원(2026 신규)',
      points: [
        '강원도는 2026년 외국인 대상 생활안전 교육을 새로 시작합니다.',
        '교통법규, 산불·폭우, 응급상황 대처, 범죄예방을 연 2~4회 교육합니다.',
        '국가별 외국인 커뮤니티의 취미·봉사 활동을 공모로 선정해 지원합니다.'
      ] },
    en: { title: 'Safety training and national community support for foreigners (new in 2026)',
      points: [
        'Gangwon Province starts daily-life safety training for foreign residents in 2026.',
        'Two to four sessions a year cover traffic rules, wildfires and heavy rain, emergencies and crime prevention.',
        'Foreign national communities can apply for support for hobby and volunteer activities.'
      ] },
    vi: { title: 'Đào tạo an toàn và hỗ trợ cộng đồng theo quốc gia cho người nước ngoài (mới 2026)',
      points: [
        'Tỉnh Gangwon bắt đầu đào tạo an toàn đời sống cho người nước ngoài từ năm 2026.',
        'Mỗi năm 2–4 buổi về luật giao thông, cháy rừng và mưa lớn, xử lý khẩn cấp, phòng chống tội phạm.',
        'Cộng đồng người nước ngoài theo quốc gia có thể đăng ký nhận hỗ trợ hoạt động sở thích, tình nguyện.'
      ] },
    th: { title: 'อบรมความปลอดภัยและสนับสนุนชุมชนแต่ละชาติ สำหรับชาวต่างชาติ (ใหม่ปี 2026)',
      points: [
        'จังหวัดคังวอนเริ่มอบรมความปลอดภัยในชีวิตประจำวันสำหรับชาวต่างชาติในปี 2026',
        'จัดปีละ 2–4 ครั้ง เรื่องกฎจราจร ไฟป่าและฝนตกหนัก เหตุฉุกเฉิน และการป้องกันอาชญากรรม',
        'ชุมชนชาวต่างชาติแต่ละประเทศสมัครรับการสนับสนุนกิจกรรมงานอดิเรกและจิตอาสาได้'
      ] },
    id: { title: 'Pelatihan keselamatan dan dukungan komunitas negara asal (baru 2026)',
      points: [
        'Provinsi Gangwon memulai pelatihan keselamatan sehari-hari bagi warga asing pada 2026.',
        'Ada 2–4 sesi per tahun tentang aturan lalu lintas, kebakaran hutan dan hujan lebat, darurat, dan pencegahan kejahatan.',
        'Komunitas warga asing per negara bisa mengajukan dukungan kegiatan hobi dan relawan.'
      ] }
  },
  {
    key: 'l-gangwon-sokcho-korean-2026',
    tagKey: 'local',
    region: 'gangwon',
    source: '속초시·(사)속초해양산업단지협의회 (법무부 2026년 외국인정책 시행계획 강원편 3-1-1)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493585/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '속초 해양산업단지 외국인근로자 한국어 교육',
      points: [
        '속초해양산업단지 내 외국인근로자를 위한 한국어 교육입니다.',
        '단지 지원센터는 법무부 사회통합프로그램 운영기관으로 지정되어 있습니다.',
        '2026년에는 0·1단계 신규 모집과 2·3단계 과정을 운영합니다.'
      ] },
    en: { title: 'Sokcho Marine Industrial Complex Korean classes for foreign workers',
      points: [
        'Korean classes are offered for foreign workers in the Sokcho Marine Industrial Complex.',
        'The complex support center is an official KIIP (social integration program) operator.',
        'In 2026 it recruits new level 0–1 learners and runs levels 2 and 3.'
      ] },
    vi: { title: 'Lớp tiếng Hàn cho lao động nước ngoài tại Khu công nghiệp biển Sokcho',
      points: [
        'Lớp tiếng Hàn dành cho lao động nước ngoài trong Khu công nghiệp biển Sokcho.',
        'Trung tâm hỗ trợ khu công nghiệp là cơ sở được chỉ định dạy chương trình KIIP.',
        'Năm 2026 tuyển mới cấp 0–1 và mở lớp cấp 2, 3.'
      ] },
    th: { title: 'ชั้นเรียนภาษาเกาหลีสำหรับแรงงานต่างชาติ นิคมอุตสาหกรรมทางทะเลซกโช',
      points: [
        'เปิดสอนภาษาเกาหลีให้แรงงานต่างชาติในนิคมอุตสาหกรรมทางทะเลซกโช',
        'ศูนย์สนับสนุนนิคมได้รับแต่งตั้งเป็นหน่วยจัดโปรแกรม KIIP',
        'ปี 2026 รับสมัครระดับ 0–1 ใหม่ และเปิดระดับ 2 และ 3'
      ] },
    id: { title: 'Kelas bahasa Korea pekerja asing Kawasan Industri Kelautan Sokcho',
      points: [
        'Kelas bahasa Korea untuk pekerja asing di Kawasan Industri Kelautan Sokcho.',
        'Pusat dukungan kawasan ditetapkan sebagai penyelenggara resmi program KIIP.',
        'Pada 2026 dibuka pendaftaran baru level 0–1 serta kelas level 2 dan 3.'
      ] }
  },
  {
    key: 'l-gangwon-fishing-crew-housing-2026',
    tagKey: 'local',
    region: 'gangwon',
    source: '강원특별자치도·동해안 6개 시군 (법무부 2026년 외국인정책 시행계획 강원편 4-1-3)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493585/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '동해안 외국인 어선원 복지회관 숙소 지원',
      points: [
        '동해안 시군은 외국인 어선원 복지회관 숙소를 운영합니다.',
        '강릉·동해·속초·삼척·고성에 복지회관 12곳이 있습니다.',
        '공공요금·난방비 등 숙소 비용 일부를 도와 시군이 지원합니다.'
      ] },
    en: { title: 'East Coast welfare hall housing for foreign fishing crew',
      points: [
        'East Coast cities and counties run welfare hall housing for foreign fishing crew.',
        'There are 12 halls in Gangneung, Donghae, Sokcho, Samcheok and Goseong.',
        'The province and local governments pay part of utilities, heating and other housing costs.'
      ] },
    vi: { title: 'Nhà phúc lợi cho thuyền viên nước ngoài vùng biển phía Đông',
      points: [
        'Các địa phương ven biển phía Đông vận hành nhà ở phúc lợi cho thuyền viên nước ngoài.',
        'Có 12 nhà phúc lợi ở Gangneung, Donghae, Sokcho, Samcheok và Goseong.',
        'Tỉnh và địa phương hỗ trợ một phần tiền điện nước, sưởi và chi phí nhà ở.'
      ] },
    th: { title: 'ที่พักหอสวัสดิการลูกเรือประมงต่างชาติ ชายฝั่งตะวันออก',
      points: [
        'เมืองและอำเภอชายฝั่งตะวันออกจัดที่พักหอสวัสดิการสำหรับลูกเรือประมงต่างชาติ',
        'มีหอสวัสดิการ 12 แห่งในคังนึง ทงแฮ ซกโช ซัมช็อก และโกซอง',
        'จังหวัดและท้องถิ่นช่วยจ่ายค่าสาธารณูปโภค ค่าทำความร้อน และค่าที่พักบางส่วน'
      ] },
    id: { title: 'Asrama balai kesejahteraan awak kapal ikan asing di Pantai Timur',
      points: [
        'Kota dan kabupaten Pantai Timur menyediakan asrama balai kesejahteraan bagi awak kapal ikan asing.',
        'Ada 12 balai di Gangneung, Donghae, Sokcho, Samcheok, dan Goseong.',
        'Provinsi dan daerah menanggung sebagian biaya utilitas, pemanas, dan biaya asrama lainnya.'
      ] }
  },
  {
    key: 'l-gangwon-jeongseon-interpreting-2026',
    tagKey: 'local',
    region: 'gangwon',
    source: '정선군 민원과·정선군가족센터 (법무부 2026년 외국인정책 시행계획 강원편 3-3-22)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493585/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '정선군 군청·행정복지센터 민원 통역 서비스',
      points: [
        '정선군청과 읍·면 행정복지센터를 찾는 외국인에게 통역을 지원합니다.',
        '네팔어·베트남어·영어·우즈벡어·태국어·라오스어를 음성·영상통화로 통역합니다.',
        '주요 민원서식 외국어 해석본도 민원실에 비치되어 있습니다.'
      ] },
    en: { title: 'Jeongseon-gun interpreting at county and community offices',
      points: [
        'Foreigners visiting Jeongseon County Office or town offices can get interpreting help.',
        'Nepali, Vietnamese, English, Uzbek, Thai and Lao are interpreted by voice or video call.',
        'Translated versions of key application forms are kept at the civil service desk.'
      ] },
    vi: { title: 'Phiên dịch thủ tục hành chính tại huyện Jeongseon',
      points: [
        'Người nước ngoài đến Ủy ban huyện Jeongseon hoặc trung tâm hành chính xã được hỗ trợ phiên dịch.',
        'Phiên dịch tiếng Nepal, Việt, Anh, Uzbek, Thái, Lào qua gọi thoại hoặc video.',
        'Bản dịch các mẫu đơn chính được đặt sẵn tại phòng tiếp dân.'
      ] },
    th: { title: 'บริการล่ามติดต่อราชการ อำเภอช็องซอน',
      points: [
        'ชาวต่างชาติที่ไปที่ว่าการอำเภอช็องซอนหรือศูนย์บริการตำบลได้รับบริการล่าม',
        'มีล่ามภาษาเนปาล เวียดนาม อังกฤษ อุซเบก ไทย และลาว ผ่านโทรศัพท์หรือวิดีโอคอล',
        'มีแบบฟอร์มคำร้องหลักฉบับแปลวางไว้ที่ห้องบริการประชาชน'
      ] },
    id: { title: 'Layanan penerjemah urusan administrasi Jeongseon-gun',
      points: [
        'WNA yang datang ke kantor kabupaten Jeongseon atau kantor kecamatan bisa mendapat penerjemah.',
        'Tersedia bahasa Nepal, Vietnam, Inggris, Uzbek, Thai, dan Laos lewat telepon atau video call.',
        'Terjemahan formulir permohonan utama tersedia di loket layanan.'
      ] }
  },
  {
    key: 'l-gangwon-samcheok-korean-2026',
    tagKey: 'local',
    region: 'gangwon',
    source: '삼척시·삼척시가족센터 (법무부 2026년 외국인정책 시행계획 강원편 3-2-13)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493585/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '삼척시 외국인 행복삼척 살아가기 한국어 교육',
      points: [
        '삼척시가족센터가 관내 외국인근로자 등에게 한국어 교육을 제공합니다.',
        '2019년부터 외국인 선원반도 운영하고 있습니다.',
        '2026년 4월부터 12월까지 한국어와 지역문화 탐방 프로그램을 진행합니다.'
      ] },
    en: { title: 'Samcheok-si Happy Samcheok Korean classes for foreigners',
      points: [
        'Samcheok Family Center offers Korean classes to local foreigners, including workers.',
        'A class for foreign seafarers has run since 2019.',
        'Korean classes and local culture tours run from April to December 2026.'
      ] },
    vi: { title: 'Lớp tiếng Hàn Happy Samcheok cho người nước ngoài ở Samcheok',
      points: [
        'Trung tâm Gia đình Samcheok dạy tiếng Hàn cho người nước ngoài trong vùng, kể cả lao động.',
        'Từ năm 2019 có lớp riêng cho thuyền viên nước ngoài.',
        'Từ tháng 4 đến tháng 12/2026 có lớp tiếng Hàn và chương trình tham quan văn hóa địa phương.'
      ] },
    th: { title: 'ซัมช็อก ชั้นเรียนภาษาเกาหลี แฮปปี้ซัมช็อก สำหรับชาวต่างชาติ',
      points: [
        'ศูนย์ครอบครัวซัมช็อกสอนภาษาเกาหลีให้ชาวต่างชาติในพื้นที่ รวมถึงแรงงาน',
        'มีห้องเรียนสำหรับลูกเรือต่างชาติตั้งแต่ปี 2019',
        'ปี 2026 จัดเรียนภาษาเกาหลีและทัศนศึกษาวัฒนธรรมท้องถิ่นช่วงเมษายนถึงธันวาคม'
      ] },
    id: { title: 'Kelas bahasa Korea Happy Samcheok untuk warga asing di Samcheok',
      points: [
        'Pusat Keluarga Samcheok memberi kelas bahasa Korea bagi warga asing setempat, termasuk pekerja.',
        'Kelas khusus awak kapal asing berjalan sejak 2019.',
        'Kelas bahasa Korea dan wisata budaya lokal berlangsung April sampai Desember 2026.'
      ] }
  },
  {
    key: 'l-seoul-guro-kmwa-center-2026',
    tagKey: 'local',
    region: 'seoul',
    source: '한국산업인력공단 EPS 외국인력지원센터 안내 (한국이주노동자복지회)',
    url: 'https://eps.hrdkorea.or.kr/e9/user/intro/intro.do?method=workerCenterApp',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '구로구 한국이주노동자복지회 외국인력지원센터',
      points: [
        '구로구 한국이주노동자복지회는 고용허가제 외국인력지원센터로 지정된 기관입니다.',
        '고충상담과 한국어·생활법률·한국문화 교육을 받을 수 있습니다.',
        '문의 전화는 02-858-4115입니다.'
      ] },
    en: { title: 'Guro-gu Korea Migrant Workers Welfare Center support',
      points: [
        'In Guro-gu, the Korea Migrant Workers Welfare Association is a designated EPS foreign worker support center.',
        'You can get grievance counseling and Korean, everyday law and Korean culture classes.',
        'Call 02-858-4115.'
      ] },
    vi: { title: 'Hội Phúc lợi Lao động Di cư Hàn Quốc tại quận Guro',
      points: [
        'Tại Guro-gu, Hội Phúc lợi Lao động Di cư Hàn Quốc là trung tâm hỗ trợ lao động EPS được chỉ định.',
        'Bạn được tư vấn khiếu nại và học tiếng Hàn, pháp luật đời sống, văn hóa Hàn.',
        'Liên hệ 02-858-4115.'
      ] },
    th: { title: 'ศูนย์สวัสดิการแรงงานข้ามชาติเกาหลี เขตคูโร',
      points: [
        'ในเขตคูโร สมาคมสวัสดิการแรงงานข้ามชาติเกาหลีเป็นศูนย์ช่วยเหลือแรงงาน EPS ที่ได้รับแต่งตั้ง',
        'รับคำปรึกษาเรื่องร้องทุกข์ และเรียนภาษาเกาหลี กฎหมายในชีวิตประจำวัน และวัฒนธรรมเกาหลีได้',
        'ติดต่อ 02-858-4115'
      ] },
    id: { title: 'Pusat Kesejahteraan Pekerja Migran Korea di Guro-gu',
      points: [
        'Di Guro-gu, Asosiasi Kesejahteraan Pekerja Migran Korea adalah pusat dukungan pekerja EPS resmi.',
        'Anda bisa mendapat konsultasi keluhan serta kelas bahasa Korea, hukum sehari-hari, dan budaya Korea.',
        'Hubungi 02-858-4115.'
      ] }
  },
  {
    key: 'l-gangwon-gangneung-worker-center-2026',
    tagKey: 'local',
    region: 'gangwon',
    source: '강릉시 외국인근로자 지원센터 (센터 공식 누리집; 법무부 2026년 외국인정책 시행계획 강원편 3-3-7)',
    url: 'https://www.gnscfw.org/2',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '강릉시 외국인근로자 지원센터 상담·통역·한국어',
      points: [
        '강릉시가 직접 설립해 운영하는 외국인근로자 지원센터입니다.',
        '고충상담, 통역, 한국어 교실, 의료 지원, 국가별 커뮤니티 교류를 지원합니다.',
        '일~목 09:00~18:00 운영하며 문의는 033-655-8956입니다.'
      ] },
    en: { title: 'Gangneung-si Foreign Workers Support Center: counseling, interpreting, Korean',
      points: [
        'The center is set up and run directly by Gangneung City.',
        'It offers grievance counseling, interpreting, Korean classes, medical support and community exchange.',
        'Open Sunday to Thursday, 09:00–18:00; call 033-655-8956.'
      ] },
    vi: { title: 'Trung tâm Hỗ trợ Lao động Nước ngoài thành phố Gangneung: tư vấn, phiên dịch, tiếng Hàn',
      points: [
        'Trung tâm do thành phố Gangneung trực tiếp thành lập và vận hành.',
        'Có tư vấn khiếu nại, phiên dịch, lớp tiếng Hàn, hỗ trợ y tế và giao lưu cộng đồng.',
        'Mở cửa Chủ nhật đến thứ Năm, 09:00–18:00; liên hệ 033-655-8956.'
      ] },
    th: { title: 'ศูนย์ช่วยเหลือแรงงานต่างชาติเมืองคังนึง ปรึกษา ล่าม และภาษาเกาหลี',
      points: [
        'เมืองคังนึงจัดตั้งและดำเนินการศูนย์นี้โดยตรง',
        'ให้คำปรึกษาเรื่องร้องทุกข์ ล่าม ชั้นเรียนภาษาเกาหลี การช่วยเหลือด้านการแพทย์ และกิจกรรมชุมชน',
        'เปิดวันอาทิตย์ถึงพฤหัสบดี 09:00–18:00 ติดต่อ 033-655-8956'
      ] },
    id: { title: 'Pusat Dukungan Pekerja Asing Kota Gangneung: konsultasi, penerjemah, bahasa Korea',
      points: [
        'Pusat ini didirikan dan dikelola langsung oleh Kota Gangneung.',
        'Tersedia konsultasi keluhan, penerjemah, kelas bahasa Korea, bantuan medis, dan pertukaran komunitas.',
        'Buka Minggu–Kamis pukul 09:00–18:00; hubungi 033-655-8956.'
      ] }
  },
  {
    key: 'l-gangwon-wonju-shelter-2026',
    tagKey: 'local',
    region: 'gangwon',
    source: '한국산업인력공단 EPS 외국인력지원센터 안내 ((사)함께하는 공동체)',
    url: 'https://eps.hrdkorea.or.kr/e9/user/intro/intro.do?method=workerCenterApp',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '원주시 문막 외국인근로자 쉼터(함께하는 공동체)',
      points: [
        '원주시 문막읍의 (사)함께하는 공동체는 쉼터를 갖춘 외국인력지원센터입니다.',
        '고용허가제 근로자의 고충상담과 한국어·생활법률 교육을 지원합니다.',
        '문의 전화는 070-7521-8097입니다.'
      ] },
    en: { title: 'Wonju-si Munmak shelter for foreign workers (Hamkkehaneun Gongdongche)',
      points: [
        'Hamkkehaneun Gongdongche in Munmak-eup, Wonju, is a foreign worker support center with a shelter.',
        'It offers grievance counseling and Korean and everyday law classes for EPS workers.',
        'Call 070-7521-8097.'
      ] },
    vi: { title: 'Nhà tạm trú cho lao động nước ngoài ở Munmak, thành phố Wonju',
      points: [
        'Tổ chức Hamkkehaneun Gongdongche ở Munmak-eup, Wonju là trung tâm hỗ trợ lao động có nhà tạm trú.',
        'Trung tâm tư vấn khiếu nại và dạy tiếng Hàn, pháp luật đời sống cho lao động EPS.',
        'Liên hệ 070-7521-8097.'
      ] },
    th: { title: 'วอนจู ที่พักพิงแรงงานต่างชาติมุนมัก (ฮัมเก ฮานึน คงดงเช)',
      points: [
        'องค์กรฮัมเก ฮานึน คงดงเช ที่มุนมักอึบ วอนจู เป็นศูนย์ช่วยเหลือแรงงานที่มีที่พักพิง',
        'ให้คำปรึกษาเรื่องร้องทุกข์ และสอนภาษาเกาหลีและกฎหมายในชีวิตประจำวันแก่แรงงาน EPS',
        'ติดต่อ 070-7521-8097'
      ] },
    id: { title: 'Shelter pekerja asing Munmak, Kota Wonju (Hamkkehaneun Gongdongche)',
      points: [
        'Hamkkehaneun Gongdongche di Munmak-eup, Wonju, adalah pusat dukungan pekerja asing yang memiliki shelter.',
        'Tersedia konsultasi keluhan serta kelas bahasa Korea dan hukum sehari-hari bagi pekerja EPS.',
        'Hubungi 070-7521-8097.'
      ] }
  },
  {
    key: 'l-busan-medical-interpreting-2026',
    tagKey: 'local',
    region: 'busan',
    source: '부산광역시 (법무부 2026년 외국인정책 시행계획)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493574/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '외국인주민 의료통역 지원',
      points: [
        '부산의료원에 베트남어·중국어·필리핀어·러시아어 의료통역사가 상주합니다.',
        '부산 전 지역 병원에 네팔어·캄보디아어·미얀마어 등 동행 통역도 지원합니다.',
        '부산외국인주민지원센터에 전화로 예약하면 됩니다.'
      ] },
    en: { title: 'Medical interpreting for foreign residents',
      points: [
        'Interpreters for Vietnamese, Chinese, Filipino and Russian work full-time at Busan Medical Center.',
        'Escort interpreting in Nepali, Khmer, Burmese and more is available at hospitals across Busan.',
        'Book by phone through the Busan Foreign Residents Support Center.'
      ] },
    vi: { title: 'Hỗ trợ phiên dịch y tế cho cư dân nước ngoài',
      points: [
        'Phiên dịch viên tiếng Việt, Trung, Philippines, Nga làm việc thường trực tại Bệnh viện Busan.',
        'Có phiên dịch đi cùng bằng tiếng Nepal, Campuchia, Myanmar… tại các bệnh viện khắp Busan.',
        'Đặt lịch qua điện thoại với Trung tâm hỗ trợ cư dân nước ngoài Busan.'
      ] },
    th: { title: 'บริการล่ามทางการแพทย์สำหรับชาวต่างชาติ',
      points: [
        'มีล่ามภาษาเวียดนาม จีน ฟิลิปปินส์ และรัสเซียประจำที่โรงพยาบาลปูซาน',
        'มีล่ามไปด้วยที่โรงพยาบาลทั่วปูซาน เช่น ภาษาเนปาล กัมพูชา และเมียนมา',
        'จองทางโทรศัพท์กับศูนย์สนับสนุนผู้พำนักชาวต่างชาติปูซาน'
      ] },
    id: { title: 'Bantuan juru bahasa medis bagi warga asing',
      points: [
        'Juru bahasa Vietnam, Tionghoa, Filipina, dan Rusia bertugas tetap di Busan Medical Center.',
        'Pendampingan juru bahasa Nepal, Khmer, Myanmar, dan lainnya tersedia di rumah sakit seluruh Busan.',
        'Pesan lewat telepon ke Pusat Dukungan Warga Asing Busan.'
      ] }
  },
  {
    key: 'l-busan-tb-screening-2026',
    tagKey: 'local',
    region: 'busan',
    source: '부산광역시 (법무부 2026년 외국인정책 시행계획)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493574/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '외국인근로자 등 결핵 검진',
      points: [
        '부산시가 외국인근로자 등에게 흉부 X선 촬영과 객담검사를 지원합니다.',
        '대한결핵협회 이동검진 차량이 외국인이 많은 지역과 선교단체·복지시설을 찾아갑니다.',
        '이상 소견이 있으면 정밀검사와 보건소·병원 진료로 연결됩니다.'
      ] },
    en: { title: 'Tuberculosis screening for foreign workers',
      points: [
        'Busan City supports chest X-rays and sputum tests for foreign workers and others.',
        'A Korean National Tuberculosis Association mobile unit visits migrant areas, missions and welfare facilities.',
        'If a problem is found, you are referred for further tests and treatment.'
      ] },
    vi: { title: 'Khám sàng lọc lao cho lao động nước ngoài',
      points: [
        'Thành phố Busan hỗ trợ chụp X-quang ngực và xét nghiệm đờm cho lao động nước ngoài.',
        'Xe khám lưu động của Hiệp hội Chống lao đến khu đông người nước ngoài, nhà thờ và cơ sở phúc lợi.',
        'Nếu có bất thường, bạn được chuyển đi xét nghiệm và điều trị thêm.'
      ] },
    th: { title: 'ตรวจคัดกรองวัณโรคสำหรับแรงงานต่างชาติ',
      points: [
        'เมืองปูซานสนับสนุนการเอกซเรย์ทรวงอกและตรวจเสมหะให้แรงงานต่างชาติ',
        'รถตรวจเคลื่อนที่ของสมาคมวัณโรคไปยังย่านชาวต่างชาติ องค์กรศาสนา และสถานสงเคราะห์',
        'หากพบความผิดปกติ จะส่งต่อเพื่อตรวจเพิ่มและรักษา'
      ] },
    id: { title: 'Pemeriksaan TBC bagi pekerja asing',
      points: [
        'Kota Busan mendukung rontgen dada dan tes dahak bagi pekerja asing.',
        'Mobil periksa keliling Asosiasi TBC Korea mendatangi kawasan pekerja asing, lembaga misi, dan panti sosial.',
        'Jika ada kelainan, Anda dirujuk untuk tes lanjutan dan pengobatan.'
      ] }
  },
  {
    key: 'l-busan-expert-counseling-2026',
    tagKey: 'local',
    region: 'busan',
    source: '부산광역시 (법무부 2026년 외국인정책 시행계획)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493574/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '분야별 전문가 예약 상담',
      points: [
        '부산외국인주민지원센터와 부산글로벌도시재단이 전문가 상담을 예약제로 운영합니다.',
        '체류·노무·법률·세무·금융 등 9개 분야 전문가와 상담할 수 있습니다.',
        '전화·방문·카카오톡·페이스북으로 먼저 상담을 신청합니다.'
      ] },
    en: { title: 'Expert counseling by appointment',
      points: [
        'The Busan Foreign Residents Support Center and Busan Global City Foundation offer expert counseling by appointment.',
        'Experts cover nine fields including visas, labor, law, tax and finance.',
        'Apply first by phone, in person, KakaoTalk or Facebook.'
      ] },
    vi: { title: 'Tư vấn chuyên gia theo lịch hẹn',
      points: [
        'Trung tâm hỗ trợ cư dân nước ngoài Busan và Quỹ Busan Global tư vấn chuyên gia theo lịch hẹn.',
        'Có chuyên gia 9 lĩnh vực như lưu trú, lao động, pháp luật, thuế, tài chính.',
        'Đăng ký trước qua điện thoại, trực tiếp, KakaoTalk hoặc Facebook.'
      ] },
    th: { title: 'ปรึกษาผู้เชี่ยวชาญแบบนัดหมาย',
      points: [
        'ศูนย์สนับสนุนผู้พำนักชาวต่างชาติปูซานและมูลนิธิ Busan Global ให้คำปรึกษาผู้เชี่ยวชาญแบบนัดหมาย',
        'มีผู้เชี่ยวชาญ 9 ด้าน เช่น วีซ่า แรงงาน กฎหมาย ภาษี และการเงิน',
        'สมัครก่อนทางโทรศัพท์ เดินทางไป KakaoTalk หรือ Facebook'
      ] },
    id: { title: 'Konsultasi ahli dengan janji temu',
      points: [
        'Pusat Dukungan Warga Asing Busan dan Yayasan Busan Global membuka konsultasi ahli dengan janji temu.',
        'Ahli tersedia di 9 bidang, antara lain izin tinggal, ketenagakerjaan, hukum, pajak, dan keuangan.',
        'Daftar dulu lewat telepon, datang langsung, KakaoTalk, atau Facebook.'
      ] }
  },
  {
    key: 'l-busan-gangseo-korean-2026',
    tagKey: 'local',
    region: 'busan',
    source: '부산 강서구 (법무부 2026년 외국인정책 시행계획)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493574/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '부산 강서구 거주 외국인 한국어교실·문화체험',
      points: [
        '부산 강서구가 거주 외국인을 위한 한국어교실과 생활 상담을 운영합니다.',
        '한국문화 체험과 멘토링 프로그램도 함께 진행합니다.',
        '수행기관을 매년 공모로 정하므로 일정은 강서구청에 확인하세요.'
      ] },
    en: { title: 'Busan Gangseo-gu Korean classes and culture programs',
      points: [
        'Gangseo-gu in Busan runs Korean classes and daily-life counseling for foreign residents.',
        'Korean culture experiences and mentoring are also offered.',
        'The operator is chosen each year, so check the schedule with Gangseo-gu Office.'
      ] },
    vi: { title: 'Lớp tiếng Hàn và trải nghiệm văn hóa quận Gangseo, Busan',
      points: [
        'Quận Gangseo (Busan) mở lớp tiếng Hàn và tư vấn đời sống cho người nước ngoài.',
        'Có thêm chương trình trải nghiệm văn hóa Hàn và cố vấn.',
        'Đơn vị thực hiện được chọn hằng năm, hãy hỏi lịch tại Văn phòng quận Gangseo.'
      ] },
    th: { title: 'เขตคังซอ ปูซาน ห้องเรียนภาษาเกาหลีและกิจกรรมวัฒนธรรม',
      points: [
        'เขตคังซอในปูซานเปิดห้องเรียนภาษาเกาหลีและให้คำปรึกษาด้านชีวิตประจำวันแก่ชาวต่างชาติ',
        'มีกิจกรรมสัมผัสวัฒนธรรมเกาหลีและการเป็นพี่เลี้ยงด้วย',
        'ผู้ดำเนินงานคัดเลือกทุกปี จึงควรสอบถามตารางที่สำนักงานเขตคังซอ'
      ] },
    id: { title: 'Kelas bahasa Korea dan program budaya Gangseo-gu, Busan',
      points: [
        'Gangseo-gu di Busan membuka kelas bahasa Korea dan konsultasi kehidupan bagi warga asing.',
        'Ada juga pengalaman budaya Korea dan program mentoring.',
        'Pelaksana dipilih setiap tahun, jadi tanyakan jadwal ke Kantor Gangseo-gu.'
      ] }
  },
  {
    key: 'l-daegu-migrant-center-counseling-2026',
    tagKey: 'local',
    region: 'daegu',
    source: '대구광역시 (법무부 2026년 외국인정책 시행계획)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493575/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '대구이주민선교센터 고충상담 지원',
      points: [
        '대구시가 지원하는 대구이주민선교센터에서 임금체불·산업재해·출입국 문제를 상담합니다.',
        '민·형사 사건 상담과 통·번역, 의료 지원도 받을 수 있습니다.',
        '외국인주민과 다문화가족 누구나 이용할 수 있습니다.'
      ] },
    en: { title: 'Grievance counseling at Daegu Migrant Mission Center',
      points: [
        'The city-funded Daegu Migrant Mission Center counsels on unpaid wages, industrial accidents and immigration issues.',
        'Help with civil and criminal cases, interpreting and medical support is also available.',
        'Any foreign resident or multicultural family can use it.'
      ] },
    vi: { title: 'Tư vấn khiếu nại tại Trung tâm Truyền giáo Di dân Daegu',
      points: [
        'Trung tâm Truyền giáo Di dân Daegu do thành phố hỗ trợ tư vấn nợ lương, tai nạn lao động, xuất nhập cảnh.',
        'Có hỗ trợ vụ việc dân sự, hình sự, phiên dịch và y tế.',
        'Mọi cư dân nước ngoài và gia đình đa văn hóa đều có thể sử dụng.'
      ] },
    th: { title: 'ปรึกษาปัญหาที่ศูนย์มิชชันผู้ย้ายถิ่นแทกู',
      points: [
        'ศูนย์มิชชันผู้ย้ายถิ่นแทกูซึ่งเมืองสนับสนุน ให้คำปรึกษาเรื่องค่าจ้างค้าง อุบัติเหตุจากงาน และตรวจคนเข้าเมือง',
        'มีความช่วยเหลือคดีแพ่งและอาญา ล่าม และการแพทย์ด้วย',
        'ชาวต่างชาติและครอบครัวพหุวัฒนธรรมทุกคนใช้บริการได้'
      ] },
    id: { title: 'Konsultasi pengaduan di Daegu Migrant Mission Center',
      points: [
        'Daegu Migrant Mission Center yang didanai kota melayani soal upah tak dibayar, kecelakaan kerja, dan imigrasi.',
        'Tersedia juga bantuan kasus perdata dan pidana, juru bahasa, serta medis.',
        'Semua warga asing dan keluarga multikultural boleh menggunakannya.'
      ] }
  },
  {
    key: 'l-daegu-dalseo-emergency-relief-2026',
    tagKey: 'local',
    region: 'daegu',
    source: '대구 달서구 (법무부 2026년 외국인정책 시행계획)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493575/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '대구 달서구 외국인주민 긴급구호비',
      points: [
        '달서구에 사는 외국인주민이 질병·재해로 생계가 어려우면 긴급구호비를 받을 수 있습니다.',
        '1세대당 50만원 이내를 계좌로 지급합니다.',
        '동 행정복지센터나 외국인 지원기관 추천 후 구청 심의로 결정됩니다.'
      ] },
    en: { title: 'Daegu Dalseo-gu emergency relief for foreign residents',
      points: [
        'Foreign residents of Dalseo-gu facing hardship from illness or disaster can get emergency relief.',
        'Up to 500,000 won per household is paid to a bank account.',
        'After a referral from a community center or support group, the district office reviews and decides.'
      ] },
    vi: { title: 'Quận Dalseo, Daegu: tiền cứu trợ khẩn cấp cho cư dân nước ngoài',
      points: [
        'Cư dân nước ngoài ở quận Dalseo gặp khó khăn do bệnh tật, thiên tai có thể nhận tiền cứu trợ.',
        'Mỗi hộ nhận tối đa 500.000 won qua tài khoản.',
        'Sau khi trung tâm phường hoặc tổ chức hỗ trợ giới thiệu, quận sẽ xét duyệt.'
      ] },
    th: { title: 'เขตทัลซอ แทกู เงินช่วยเหลือฉุกเฉินสำหรับชาวต่างชาติ',
      points: [
        'ชาวต่างชาติในเขตทัลซอที่ลำบากเพราะเจ็บป่วยหรือภัยพิบัติ รับเงินช่วยเหลือฉุกเฉินได้',
        'จ่ายเข้าบัญชีไม่เกิน 500,000 วอนต่อครัวเรือน',
        'เมื่อศูนย์บริการชุมชนหรือองค์กรช่วยเหลือแนะนำแล้ว สำนักงานเขตจะพิจารณา'
      ] },
    id: { title: 'Dana darurat warga asing Dalseo-gu, Daegu',
      points: [
        'Warga asing di Dalseo-gu yang kesulitan karena sakit atau bencana bisa menerima dana darurat.',
        'Maksimal 500.000 won per rumah tangga ditransfer ke rekening.',
        'Setelah rujukan dari kantor kelurahan atau lembaga pendukung, kantor distrik meninjau dan memutuskan.'
      ] }
  },
  {
    key: 'l-ulsan-donggu-sunday-korean-2026',
    tagKey: 'local',
    region: 'ulsan',
    source: '울산 동구 (법무부 2026년 외국인정책 시행계획)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493579/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '울산 동구 일요 한국어교실(TOPIK 대비)',
      points: [
        '울산 동구가 노동자지원센터에서 외국인주민 한국어교실을 운영합니다.',
        '생활한국어반과 TOPIK 대비반이 있으며 2025년에는 매주 일요일에 열렸습니다.',
        '상반기(3~7월)와 하반기(8~12월)로 반기마다 약 80명을 모집합니다.'
      ] },
    en: { title: 'Ulsan Dong-gu Sunday Korean classes (TOPIK prep)',
      points: [
        'Dong-gu in Ulsan runs Korean classes for foreign residents at its workers support center.',
        'There are daily-life Korean and TOPIK prep classes, held on Sundays in 2025.',
        'About 80 people are recruited for each half: March to July and August to December.'
      ] },
    vi: { title: 'Quận Dong, Ulsan: lớp tiếng Hàn Chủ nhật (luyện TOPIK)',
      points: [
        'Quận Dong (Ulsan) mở lớp tiếng Hàn cho người nước ngoài tại trung tâm hỗ trợ người lao động.',
        'Có lớp tiếng Hàn đời sống và lớp luyện TOPIK, năm 2025 học vào Chủ nhật.',
        'Mỗi nửa năm (tháng 3–7, tháng 8–12) tuyển khoảng 80 người.'
      ] },
    th: { title: 'เขตทง อุลซาน ห้องเรียนภาษาเกาหลีวันอาทิตย์ (เตรียมสอบ TOPIK)',
      points: [
        'เขตทงในอุลซานเปิดห้องเรียนภาษาเกาหลีที่ศูนย์สนับสนุนแรงงาน',
        'มีชั้นภาษาเกาหลีในชีวิตประจำวันและชั้นเตรียม TOPIK ปี 2025 เรียนทุกวันอาทิตย์',
        'รับสมัครราว 80 คนต่อครึ่งปี คือ มี.ค.–ก.ค. และ ส.ค.–ธ.ค.'
      ] },
    id: { title: 'Kelas bahasa Korea hari Minggu Dong-gu, Ulsan (persiapan TOPIK)',
      points: [
        'Dong-gu di Ulsan membuka kelas bahasa Korea di pusat dukungan pekerja.',
        'Ada kelas bahasa sehari-hari dan persiapan TOPIK, pada 2025 diadakan tiap Minggu.',
        'Sekitar 80 orang direkrut tiap semester: Maret–Juli dan Agustus–Desember.'
      ] }
  },
  {
    key: 'l-ulsan-donggu-vacant-house-rental-2026',
    tagKey: 'local',
    region: 'ulsan',
    source: '울산광역시·동구 (법무부 2026년 외국인정책 시행계획)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493579/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '울산 동구 빈집 리모델링 외국인근로자 임대주택',
      points: [
        '울산시와 동구가 빈집을 고쳐 외국인근로자에게 시세보다 싼 임대주택을 제공합니다.',
        '2026년 빈집 3곳이 대상이며 임대료 상한 10만원, 임대기간 최대 5년으로 계획되어 있습니다.',
        '외국인 대학생과 주거취약계층도 입주할 수 있으며 임차인 모집은 동구가 합니다.'
      ] },
    en: { title: 'Ulsan Dong-gu low-rent housing from renovated empty homes',
      points: [
        'Ulsan City and Dong-gu renovate empty houses and rent them to foreign workers below market price.',
        'Three houses are planned for 2026, with rent capped at 100,000 won and leases up to five years.',
        'Foreign students and other vulnerable residents may also apply, and Dong-gu recruits tenants.'
      ] },
    vi: { title: 'Quận Dong, Ulsan: nhà thuê giá rẻ từ nhà bỏ trống cải tạo',
      points: [
        'Thành phố Ulsan và quận Dong sửa nhà bỏ trống để cho lao động nước ngoài thuê rẻ hơn giá thị trường.',
        'Năm 2026 có 3 căn, tiền thuê tối đa 100.000 won, thời hạn tối đa 5 năm.',
        'Du học sinh và người khó khăn về nhà ở cũng được đăng ký, quận Dong tuyển người thuê.'
      ] },
    th: { title: 'เขตทง อุลซาน บ้านเช่าราคาถูกจากบ้านร้างที่ปรับปรุง',
      points: [
        'เมืองอุลซานและเขตทงปรับปรุงบ้านร้างให้แรงงานต่างชาติเช่าในราคาต่ำกว่าตลาด',
        'ปี 2026 มี 3 หลัง ค่าเช่าสูงสุด 100,000 วอน ระยะเช่าสูงสุด 5 ปี',
        'นักศึกษาต่างชาติและกลุ่มเปราะบางด้านที่อยู่อาศัยสมัครได้ เขตทงเป็นผู้รับสมัครผู้เช่า'
      ] },
    id: { title: 'Rumah sewa murah dari rumah kosong direnovasi, Dong-gu Ulsan',
      points: [
        'Kota Ulsan dan Dong-gu merenovasi rumah kosong untuk disewakan murah kepada pekerja asing.',
        'Tiga rumah direncanakan pada 2026, sewa maksimal 100.000 won dan masa sewa hingga 5 tahun.',
        'Mahasiswa asing dan warga rentan juga bisa mendaftar, dan Dong-gu merekrut penyewa.'
      ] }
  },
  {
    key: 'l-ulsan-ulju-visiting-korean-2026',
    tagKey: 'local',
    region: 'ulsan',
    source: '울산 울주군 (법무부 2026년 외국인정책 시행계획)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493579/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '울산 울주군 찾아가는 한국어교육',
      points: [
        '울주군가족센터가 남부·서부·중부 권역별로 찾아가는 한국어교육을 운영합니다.',
        '외국인반과 야간반이 있고 온라인 수업도 함께 합니다.',
        '1분기에 수강생을 모집해 12월까지 진행합니다.'
      ] },
    en: { title: 'Ulsan Ulju-gun visiting Korean classes',
      points: [
        'Ulju-gun Family Center runs visiting Korean classes in the southern, western and central areas.',
        'There are classes for foreigners and evening classes, plus online lessons.',
        'Students are recruited in the first quarter and classes run until December.'
      ] },
    vi: { title: 'Huyện Ulju, Ulsan: lớp tiếng Hàn lưu động',
      points: [
        'Trung tâm Gia đình huyện Ulju mở lớp tiếng Hàn lưu động ở các khu Nam, Tây, Trung.',
        'Có lớp dành cho người nước ngoài, lớp buổi tối và học trực tuyến.',
        'Tuyển học viên vào quý 1 và học đến tháng 12.'
      ] },
    th: { title: 'อำเภออุลจู อุลซาน ห้องเรียนภาษาเกาหลีเคลื่อนที่',
      points: [
        'ศูนย์ครอบครัวอุลจูจัดสอนภาษาเกาหลีถึงพื้นที่ทั้งเขตใต้ ตะวันตก และกลาง',
        'มีชั้นสำหรับชาวต่างชาติ ชั้นภาคค่ำ และเรียนออนไลน์',
        'รับสมัครในไตรมาสแรกและเรียนถึงเดือนธันวาคม'
      ] },
    id: { title: 'Kelas bahasa Korea keliling Ulju-gun, Ulsan',
      points: [
        'Pusat Keluarga Ulju-gun membuka kelas bahasa Korea keliling di wilayah selatan, barat, dan tengah.',
        'Ada kelas khusus warga asing, kelas malam, dan pelajaran daring.',
        'Peserta direkrut pada kuartal pertama dan kelas berjalan sampai Desember.'
      ] }
  },
  {
    key: 'l-ulsan-ulju-settlement-2026',
    tagKey: 'local',
    region: 'ulsan',
    source: '울산 울주군 (법무부 2026년 외국인정책 시행계획)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493579/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '울산 울주군 외국인주민 정착지원 프로그램',
      points: [
        '울주군이 남부종합사회복지관에 맡겨 외국인주민 한국어교육을 연중 운영합니다.',
        '2분기부터 요리·공예·건강 등 내·외국인 통합 프로그램도 열립니다.',
        '2025년에는 외국인 도움센터 상담도 함께 운영했습니다.'
      ] },
    en: { title: 'Ulsan Ulju-gun settlement program for foreign residents',
      points: [
        'Ulju-gun runs year-round Korean classes for foreign residents through Nambu Community Welfare Center.',
        'From the second quarter, joint programs with Koreans on cooking, crafts and health open.',
        'In 2025 it also ran a foreigner help desk for counseling.'
      ] },
    vi: { title: 'Huyện Ulju, Ulsan: chương trình hỗ trợ định cư',
      points: [
        'Huyện Ulju giao Phúc lợi xã hội Nambu mở lớp tiếng Hàn quanh năm cho cư dân nước ngoài.',
        'Từ quý 2 có chương trình chung với người Hàn về nấu ăn, thủ công, sức khỏe.',
        'Năm 2025 còn có bàn tư vấn hỗ trợ người nước ngoài.'
      ] },
    th: { title: 'อำเภออุลจู อุลซาน โครงการช่วยตั้งถิ่นฐานสำหรับชาวต่างชาติ',
      points: [
        'อำเภออุลจูมอบให้ศูนย์สวัสดิการนัมบูสอนภาษาเกาหลีแก่ชาวต่างชาติตลอดปี',
        'ตั้งแต่ไตรมาส 2 มีกิจกรรมร่วมกับคนเกาหลี เช่น ทำอาหาร งานฝีมือ และสุขภาพ',
        'ปี 2025 ยังมีจุดให้คำปรึกษาช่วยเหลือชาวต่างชาติด้วย'
      ] },
    id: { title: 'Program pendampingan menetap Ulju-gun, Ulsan',
      points: [
        'Ulju-gun lewat Pusat Kesejahteraan Nambu membuka kelas bahasa Korea sepanjang tahun bagi warga asing.',
        'Mulai kuartal kedua ada program bersama warga Korea seperti memasak, kerajinan, dan kesehatan.',
        'Pada 2025 juga ada meja bantuan konsultasi untuk warga asing.'
      ] }
  },
  {
    key: 'l-ulsan-bukgu-worker-support-2026',
    tagKey: 'local',
    region: 'ulsan',
    source: '울산 북구 (법무부 2026년 외국인정책 시행계획)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493579/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '울산 북구 외국인근로자 지원사업',
      points: [
        '울산 북구가 울산외국인센터에 맡겨 외국인근로자 고충상담을 운영합니다.',
        '단계별 한국어교육과 문화체험, 화합 활동도 진행합니다.',
        '2014년부터 이어 온 사업으로 2026년에도 연중 운영합니다.'
      ] },
    en: { title: 'Ulsan Buk-gu foreign worker support',
      points: [
        'Buk-gu in Ulsan runs grievance counseling for foreign workers through the Ulsan Foreigners Center.',
        'Step-by-step Korean classes, culture trips and community activities are also offered.',
        'Running since 2014, it continues all year in 2026.'
      ] },
    vi: { title: 'Quận Buk, Ulsan: hỗ trợ lao động nước ngoài',
      points: [
        'Quận Buk (Ulsan) giao Trung tâm Người nước ngoài Ulsan tư vấn khó khăn cho lao động.',
        'Có lớp tiếng Hàn theo cấp độ, trải nghiệm văn hóa và hoạt động giao lưu.',
        'Hoạt động từ năm 2014 và tiếp tục quanh năm 2026.'
      ] },
    th: { title: 'เขตบุก อุลซาน โครงการสนับสนุนแรงงานต่างชาติ',
      points: [
        'เขตบุกในอุลซานมอบให้ศูนย์ชาวต่างชาติอุลซานรับปรึกษาปัญหาแรงงานต่างชาติ',
        'มีการสอนภาษาเกาหลีตามขั้น กิจกรรมวัฒนธรรม และกิจกรรมสานสัมพันธ์',
        'ดำเนินมาตั้งแต่ปี 2014 และจัดต่อเนื่องตลอดปี 2026'
      ] },
    id: { title: 'Dukungan pekerja asing Buk-gu, Ulsan',
      points: [
        'Buk-gu di Ulsan lewat Ulsan Foreigners Center melayani konsultasi keluhan pekerja asing.',
        'Ada kelas bahasa Korea bertahap, wisata budaya, dan kegiatan kebersamaan.',
        'Berjalan sejak 2014 dan berlanjut sepanjang 2026.'
      ] }
  },
  {
    key: 'l-ulsan-hellouai-2026',
    tagKey: 'local',
    region: 'ulsan',
    source: '울산광역시 (법무부 2026년 외국인정책 시행계획, 세계일보)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493579/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '외국인 정착지원 AI 챗봇 HellouAI',
      points: [
        '울산시가 외국인주민을 위한 AI 챗봇 플랫폼 HellouAI를 운영합니다.',
        '생활 질문에 실시간으로 답하고 10개 언어 자동 번역과 서류 작성 사례를 제공합니다.',
        '울산시 누리집이나 울산외국인주민지원센터 누리집(www.usfr.or.kr)에서 이용할 수 있습니다.'
      ] },
    en: { title: 'HellouAI chatbot for settling in Ulsan',
      points: [
        'Ulsan City runs HellouAI, an AI chatbot platform for foreign residents.',
        'It answers daily-life questions in real time, translates into 10 languages and shows document examples.',
        'Access it via the Ulsan City website or the Ulsan Foreign Residents Support Center site (www.usfr.or.kr).'
      ] },
    vi: { title: 'Chatbot AI HellouAI hỗ trợ định cư tại Ulsan',
      points: [
        'Thành phố Ulsan vận hành HellouAI, nền tảng chatbot AI cho cư dân nước ngoài.',
        'Trả lời câu hỏi đời sống tức thì, dịch tự động 10 ngôn ngữ và có mẫu điền giấy tờ.',
        'Truy cập qua trang web thành phố Ulsan hoặc Trung tâm hỗ trợ cư dân nước ngoài (www.usfr.or.kr).'
      ] },
    th: { title: 'แชตบอต AI HellouAI ช่วยการใช้ชีวิตในอุลซาน',
      points: [
        'เมืองอุลซานให้บริการ HellouAI แพลตฟอร์มแชตบอต AI สำหรับชาวต่างชาติ',
        'ตอบคำถามชีวิตประจำวันทันที แปลอัตโนมัติ 10 ภาษา และมีตัวอย่างการกรอกเอกสาร',
        'เข้าใช้ได้ทางเว็บไซต์เมืองอุลซานหรือเว็บไซต์ศูนย์สนับสนุนชาวต่างชาติ (www.usfr.or.kr)'
      ] },
    id: { title: 'Chatbot AI HellouAI untuk menetap di Ulsan',
      points: [
        'Kota Ulsan mengelola HellouAI, platform chatbot AI bagi warga asing.',
        'Menjawab pertanyaan sehari-hari secara langsung, menerjemahkan 10 bahasa, dan memberi contoh pengisian dokumen.',
        'Akses lewat situs Kota Ulsan atau situs Pusat Dukungan Warga Asing Ulsan (www.usfr.or.kr).'
      ] }
  },
  {
    key: 'l-gyeongbuk-gumi-emergency-medical-2026',
    tagKey: 'local',
    region: 'gyeongbuk',
    source: '구미시 (법무부 2026년 외국인정책 시행계획)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493680/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '구미 외국인주민 긴급의료비 지원',
      points: [
        '구미에 사는 외국인주민이 질병·부상으로 수술이나 입원이 필요하면 진료비를 지원합니다.',
        '약제비·본인부담금과 비급여 항목의 50%를 1인 최대 100만원까지 지원합니다.',
        '관내 외국인근로자상담센터(쉼터)를 통해 신청하며 2026년 약 30명이 대상입니다.'
      ] },
    en: { title: 'Gumi emergency medical cost support',
      points: [
        'Foreign residents of Gumi who need surgery or hospitalization due to illness or injury can get help with costs.',
        'It covers medicine, co-payments and 50% of non-covered items, up to 1 million won per person.',
        'Apply through a local foreign worker counseling center or shelter; about 30 people are planned for 2026.'
      ] },
    vi: { title: 'Gumi: hỗ trợ chi phí y tế khẩn cấp',
      points: [
        'Cư dân nước ngoài ở Gumi cần phẫu thuật, nhập viện do bệnh hoặc chấn thương được hỗ trợ viện phí.',
        'Hỗ trợ tiền thuốc, phần tự chi trả và 50% mục ngoài bảo hiểm, tối đa 1 triệu won mỗi người.',
        'Đăng ký qua trung tâm tư vấn lao động nước ngoài (nhà tạm trú) tại Gumi, năm 2026 khoảng 30 người.'
      ] },
    th: { title: 'คูมี ช่วยค่ารักษาพยาบาลฉุกเฉิน',
      points: [
        'ชาวต่างชาติในคูมีที่ต้องผ่าตัดหรือนอนโรงพยาบาลเพราะเจ็บป่วยหรือบาดเจ็บ ได้รับการช่วยค่ารักษา',
        'ช่วยค่ายา ส่วนที่ต้องจ่ายเอง และ 50% ของรายการนอกประกัน สูงสุด 1 ล้านวอนต่อคน',
        'สมัครผ่านศูนย์ปรึกษาแรงงานต่างชาติ (ที่พักพิง) ในคูมี ปี 2026 ราว 30 คน'
      ] },
    id: { title: 'Bantuan biaya medis darurat Gumi',
      points: [
        'Warga asing di Gumi yang perlu operasi atau rawat inap karena sakit atau cedera bisa dibantu biayanya.',
        'Menanggung obat, biaya sendiri, dan 50% item nonasuransi, maksimal 1 juta won per orang.',
        'Daftar lewat pusat konsultasi pekerja asing (shelter) di Gumi; sekitar 30 orang pada 2026.'
      ] }
  },
  {
    key: 'l-gyeongbuk-gyeongsan-health-checkup-2026',
    tagKey: 'local',
    region: 'gyeongbuk',
    source: '경산시 (법무부 2026년 외국인정책 시행계획)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493680/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '경산 외국인근로자 무료 건강검진',
      points: [
        '경산이주노동센터에서 분기마다 외국인근로자와 가족을 위한 무료 건강검진을 합니다.',
        '의사 진료와 결핵검진, 경산시보건소 혈액·소변검사가 함께 진행됩니다.',
        '일정은 센터와 협의해 정하므로 경산이주노동센터에 확인하세요.'
      ] },
    en: { title: 'Gyeongsan free health checkups for foreign workers',
      points: [
        'Gyeongsan Migrant Workers Center holds free health checkups each quarter for foreign workers and families.',
        'Doctor visits, TB screening and blood and urine tests by the public health center are included.',
        'Dates are set with the center, so check with Gyeongsan Migrant Workers Center.'
      ] },
    vi: { title: 'Gyeongsan: khám sức khỏe miễn phí cho lao động nước ngoài',
      points: [
        'Trung tâm Lao động di cư Gyeongsan tổ chức khám sức khỏe miễn phí mỗi quý cho lao động và gia đình.',
        'Có khám bác sĩ, sàng lọc lao, xét nghiệm máu và nước tiểu của trung tâm y tế.',
        'Lịch do trung tâm thống nhất, hãy hỏi Trung tâm Lao động di cư Gyeongsan.'
      ] },
    th: { title: 'คยองซาน ตรวจสุขภาพฟรีสำหรับแรงงานต่างชาติ',
      points: [
        'ศูนย์แรงงานข้ามชาติคยองซานจัดตรวจสุขภาพฟรีทุกไตรมาสสำหรับแรงงานและครอบครัว',
        'มีแพทย์ตรวจ ตรวจวัณโรค และตรวจเลือดกับปัสสาวะโดยศูนย์สาธารณสุข',
        'วันตรวจกำหนดร่วมกับศูนย์ จึงควรสอบถามศูนย์แรงงานข้ามชาติคยองซาน'
      ] },
    id: { title: 'Pemeriksaan kesehatan gratis Gyeongsan',
      points: [
        'Pusat Pekerja Migran Gyeongsan mengadakan cek kesehatan gratis tiap kuartal bagi pekerja asing dan keluarga.',
        'Termasuk pemeriksaan dokter, skrining TBC, serta tes darah dan urine oleh puskesmas.',
        'Jadwal ditentukan bersama pusat, jadi tanyakan ke Pusat Pekerja Migran Gyeongsan.'
      ] }
  },
  {
    key: 'l-gyeongbuk-gyeongsan-sunday-meal-2026',
    tagKey: 'local',
    region: 'gyeongbuk',
    source: '경산시 (법무부 2026년 외국인정책 시행계획)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493680/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '경산 외국인주민 무료급식·문화체험',
      points: [
        '경산시 지원으로 외국인주민에게 무료급식을 제공합니다.',
        '2025년에는 경산외국인센터가 매주 일요일 식사와 간식을 제공했습니다.',
        '한국 전통문화 체험 프로그램도 함께 운영합니다.'
      ] },
    en: { title: 'Gyeongsan free meals and culture programs',
      points: [
        'With Gyeongsan City support, free meals are provided to foreign residents.',
        'In 2025 Gyeongsan Foreigners Center served meals and snacks every Sunday.',
        'Korean traditional culture programs are also offered.'
      ] },
    vi: { title: 'Gyeongsan: bữa ăn miễn phí và trải nghiệm văn hóa',
      points: [
        'Với hỗ trợ của thành phố Gyeongsan, cư dân nước ngoài được ăn miễn phí.',
        'Năm 2025 Trung tâm Người nước ngoài Gyeongsan phục vụ bữa ăn mỗi Chủ nhật.',
        'Có thêm chương trình trải nghiệm văn hóa truyền thống Hàn Quốc.'
      ] },
    th: { title: 'คยองซาน อาหารฟรีและกิจกรรมวัฒนธรรม',
      points: [
        'เมืองคยองซานสนับสนุนอาหารฟรีให้ชาวต่างชาติ',
        'ปี 2025 ศูนย์ชาวต่างชาติคยองซานแจกอาหารและของว่างทุกวันอาทิตย์',
        'มีกิจกรรมสัมผัสวัฒนธรรมดั้งเดิมของเกาหลีด้วย'
      ] },
    id: { title: 'Makan gratis dan program budaya Gyeongsan',
      points: [
        'Dengan dukungan Kota Gyeongsan, warga asing mendapat makan gratis.',
        'Pada 2025 Gyeongsan Foreigners Center menyajikan makanan dan camilan setiap Minggu.',
        'Ada juga program pengalaman budaya tradisional Korea.'
      ] }
  },
  {
    key: 'l-gyeongbuk-gyeongju-shelter-2026',
    tagKey: 'local',
    region: 'gyeongbuk',
    source: '경주시 (법무부 2026년 외국인정책 시행계획)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493680/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '경주 외국인근로자 쉼터',
      points: [
        '경주시가 이직·퇴직으로 머물 곳이 없는 외국인근로자에게 임시 쉼터를 제공합니다.',
        '이용은 1개월이 원칙이고 최대 3개월까지 연장할 수 있으며 2026년 2곳으로 늘립니다.',
        '외국인근로자 상담센터와 연계해 상담과 교육도 받을 수 있습니다.'
      ] },
    en: { title: 'Gyeongju foreign worker shelter',
      points: [
        'Gyeongju City offers temporary shelter to foreign workers with nowhere to stay after changing or leaving jobs.',
        'Stays are one month as a rule, extendable up to three months, and sites grow to two in 2026.',
        'Counseling and education are linked with the foreign worker counseling center.'
      ] },
    vi: { title: 'Gyeongju: nhà tạm trú cho lao động nước ngoài',
      points: [
        'Thành phố Gyeongju cho lao động nước ngoài không có chỗ ở khi đổi hoặc nghỉ việc ở tạm.',
        'Thời gian ở thường 1 tháng, gia hạn tối đa 3 tháng, năm 2026 tăng lên 2 nơi.',
        'Được tư vấn và học tập qua trung tâm tư vấn lao động nước ngoài.'
      ] },
    th: { title: 'คยองจู ที่พักพิงแรงงานต่างชาติ',
      points: [
        'เมืองคยองจูให้ที่พักชั่วคราวแก่แรงงานต่างชาติที่ไม่มีที่อยู่หลังเปลี่ยนหรือออกจากงาน',
        'พักได้ 1 เดือนเป็นหลัก ขยายได้สูงสุด 3 เดือน และปี 2026 เพิ่มเป็น 2 แห่ง',
        'รับคำปรึกษาและการอบรมร่วมกับศูนย์ปรึกษาแรงงานต่างชาติได้'
      ] },
    id: { title: 'Shelter pekerja asing Gyeongju',
      points: [
        'Kota Gyeongju menyediakan tempat tinggal sementara bagi pekerja asing yang tak punya tempat setelah pindah atau berhenti kerja.',
        'Masa tinggal umumnya 1 bulan, bisa diperpanjang hingga 3 bulan, dan bertambah jadi 2 lokasi pada 2026.',
        'Konsultasi dan pendidikan terhubung dengan pusat konsultasi pekerja asing.'
      ] }
  },
  {
    key: 'l-gyeongbuk-chilgok-korean-2026',
    tagKey: 'local',
    region: 'gyeongbuk',
    source: '칠곡군 (법무부 2026년 외국인정책 시행계획)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493680/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '칠곡 외국인근로자 한글교육',
      points: [
        '칠곡군이 왜관산업단지관리공단을 통해 외국인근로자 한글교육을 운영합니다.',
        '초급반·중급반과 TOPIK 1 준비반이 있으며 2월부터 12월까지 수업합니다.',
        '한국 음식 만들기와 관광지 탐방 등 분기별 문화체험도 함께 합니다.'
      ] },
    en: { title: 'Chilgok Korean classes for foreign workers',
      points: [
        'Chilgok-gun runs Korean classes for foreign workers through the Waegwan Industrial Complex office.',
        'Beginner, intermediate and TOPIK 1 prep classes run from February to December.',
        'Quarterly culture activities such as cooking and local tours are included.'
      ] },
    vi: { title: 'Chilgok: lớp tiếng Hàn cho lao động nước ngoài',
      points: [
        'Huyện Chilgok mở lớp tiếng Hàn cho lao động qua Ban quản lý KCN Waegwan.',
        'Có lớp sơ cấp, trung cấp và luyện TOPIK 1, học từ tháng 2 đến tháng 12.',
        'Mỗi quý có hoạt động văn hóa như nấu món Hàn và tham quan.'
      ] },
    th: { title: 'ชิลกก ห้องเรียนภาษาเกาหลีสำหรับแรงงานต่างชาติ',
      points: [
        'อำเภอชิลกกจัดสอนภาษาเกาหลีให้แรงงานต่างชาติผ่านสำนักงานนิคมอุตสาหกรรมแวกวาน',
        'มีชั้นต้น ชั้นกลาง และชั้นเตรียม TOPIK 1 เรียนเดือน ก.พ.–ธ.ค.',
        'มีกิจกรรมวัฒนธรรมทุกไตรมาส เช่น ทำอาหารเกาหลีและเที่ยวชมสถานที่'
      ] },
    id: { title: 'Kelas bahasa Korea pekerja asing Chilgok',
      points: [
        'Chilgok-gun membuka kelas bahasa Korea bagi pekerja asing lewat pengelola Kawasan Industri Waegwan.',
        'Ada kelas pemula, menengah, dan persiapan TOPIK 1 dari Februari sampai Desember.',
        'Tiap kuartal ada kegiatan budaya seperti memasak dan wisata lokal.'
      ] }
  },
  {
    key: 'l-gyeongbuk-pohang-korean-2026',
    tagKey: 'local',
    region: 'gyeongbuk',
    source: '포항시 (법무부 2026년 외국인정책 시행계획)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493680/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '포항 거주 외국인 한국어교실',
      points: [
        '포항시가 거주 외국인을 위한 한국어교실을 상·하반기로 운영합니다.',
        '초급반과 중급반을 따로 두고 학기마다 15주 동안 수업합니다.',
        '모집 공고는 포항시 누리집에 올라오며 수료하면 수료증을 줍니다.'
      ] },
    en: { title: 'Pohang Korean classes for foreign residents',
      points: [
        'Pohang City runs Korean classes for foreign residents in two semesters.',
        'Separate beginner and intermediate classes run for 15 weeks each semester.',
        'Notices are posted on the Pohang City website, and graduates get a certificate.'
      ] },
    vi: { title: 'Pohang: lớp tiếng Hàn cho người nước ngoài',
      points: [
        'Thành phố Pohang mở lớp tiếng Hàn cho người nước ngoài theo 2 học kỳ.',
        'Lớp sơ cấp và trung cấp riêng, mỗi kỳ học 15 tuần.',
        'Thông báo tuyển sinh đăng trên trang web Pohang, học xong được cấp chứng nhận.'
      ] },
    th: { title: 'โพฮัง ห้องเรียนภาษาเกาหลีสำหรับชาวต่างชาติ',
      points: [
        'เมืองโพฮังเปิดห้องเรียนภาษาเกาหลีสำหรับชาวต่างชาติ 2 ภาคเรียน',
        'แยกชั้นต้นและชั้นกลาง เรียนภาคละ 15 สัปดาห์',
        'ประกาศรับสมัครอยู่บนเว็บไซต์เมืองโพฮัง จบหลักสูตรได้ใบประกาศ'
      ] },
    id: { title: 'Kelas bahasa Korea warga asing Pohang',
      points: [
        'Kota Pohang membuka kelas bahasa Korea bagi warga asing dalam dua semester.',
        'Kelas pemula dan menengah terpisah, masing-masing 15 minggu per semester.',
        'Pengumuman ada di situs Kota Pohang, dan lulusan mendapat sertifikat.'
      ] }
  },
  {
    key: 'l-gyeongbuk-gyeongju-sarangbang-2026',
    tagKey: 'local',
    region: 'gyeongbuk',
    source: '경주시 (법무부 2026년 외국인정책 시행계획)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493680/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '경주 외국인주민 사랑방',
      points: [
        '경주시외국인도움센터가 성건동에서 외국인주민 커뮤니티 공간 사랑방을 운영합니다.',
        '3월부터 12월까지 월~금 10:30~18:00에 엽니다.',
        '한글·미술, 요리, 만들기 프로그램과 경주 문화체험 나들이가 있습니다.'
      ] },
    en: { title: 'Gyeongju community lounge for foreign residents',
      points: [
        'Gyeongju Foreigner Help Center runs a community lounge for foreign residents in Seonggeon-dong.',
        'It is open March to December, Monday to Friday, 10:30 to 18:00.',
        'Programs include Korean and art, cooking, crafts and a Gyeongju culture outing.'
      ] },
    vi: { title: 'Gyeongju: phòng sinh hoạt cộng đồng cho cư dân nước ngoài',
      points: [
        'Trung tâm hỗ trợ người nước ngoài Gyeongju mở phòng sinh hoạt tại phường Seonggeon.',
        'Mở từ tháng 3 đến 12, thứ Hai đến thứ Sáu, 10:30–18:00.',
        'Có lớp tiếng Hàn và mỹ thuật, nấu ăn, thủ công và chuyến tham quan Gyeongju.'
      ] },
    th: { title: 'คยองจู ห้องรวมพลชาวต่างชาติ',
      points: [
        'ศูนย์ช่วยเหลือชาวต่างชาติคยองจูเปิดพื้นที่ชุมชนที่ซองกอนดง',
        'เปิด มี.ค.–ธ.ค. วันจันทร์–ศุกร์ 10:30–18:00',
        'มีกิจกรรมภาษาเกาหลีและศิลปะ ทำอาหาร งานประดิษฐ์ และทัศนศึกษาคยองจู'
      ] },
    id: { title: 'Ruang komunitas warga asing Gyeongju',
      points: [
        'Pusat Bantuan Warga Asing Gyeongju membuka ruang komunitas di Seonggeon-dong.',
        'Buka Maret–Desember, Senin–Jumat pukul 10.30–18.00.',
        'Ada program bahasa Korea dan seni, memasak, kerajinan, serta wisata budaya Gyeongju.'
      ] }
  },
  {
    key: 'l-gyeongbuk-seongju-counseling-korean-2026',
    tagKey: 'local',
    region: 'gyeongbuk',
    source: '성주군 (법무부 2026년 외국인정책 시행계획)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493680/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '성주 외국인근로자 일요상담소·한국어교실',
      points: [
        '성주군이 귀화자 코디네이터를 두고 외국인근로자 일요상담소를 운영합니다.',
        '구직·비자·생활 고충을 상담하고 요청하면 기업을 찾아가 직무 통역도 합니다.',
        '지역특화형 비자용 TOPIK 과정을 포함한 초·중급 한국어교실도 학기제로 엽니다.'
      ] },
    en: { title: 'Seongju Sunday counseling and Korean classes',
      points: [
        'Seongju-gun runs a Sunday counseling desk for foreign workers staffed by a naturalized coordinator.',
        'It helps with job search, visa and daily-life problems, and visits companies to interpret on request.',
        'Semester-based beginner and intermediate Korean classes include TOPIK prep for regional visas.'
      ] },
    vi: { title: 'Seongju: tư vấn Chủ nhật và lớp tiếng Hàn',
      points: [
        'Huyện Seongju có điều phối viên đã nhập tịch, mở quầy tư vấn Chủ nhật cho lao động nước ngoài.',
        'Tư vấn tìm việc, visa, đời sống và đến doanh nghiệp phiên dịch khi được yêu cầu.',
        'Có lớp tiếng Hàn sơ, trung cấp theo học kỳ, gồm luyện TOPIK cho visa vùng.'
      ] },
    th: { title: 'ซองจู จุดปรึกษาวันอาทิตย์และห้องเรียนภาษาเกาหลี',
      points: [
        'อำเภอซองจูมีผู้ประสานงานที่โอนสัญชาติ เปิดจุดปรึกษาวันอาทิตย์ให้แรงงานต่างชาติ',
        'ปรึกษาเรื่องหางาน วีซ่า ชีวิตประจำวัน และไปเป็นล่ามที่บริษัทเมื่อร้องขอ',
        'มีห้องเรียนภาษาเกาหลีชั้นต้นและชั้นกลางรายภาคเรียน รวมการเตรียม TOPIK เพื่อวีซ่าเฉพาะภูมิภาค'
      ] },
    id: { title: 'Konsultasi hari Minggu dan kelas bahasa Korea Seongju',
      points: [
        'Seongju-gun membuka meja konsultasi hari Minggu bagi pekerja asing dengan koordinator naturalisasi.',
        'Membantu soal cari kerja, visa, dan kehidupan, serta datang ke perusahaan untuk menerjemahkan bila diminta.',
        'Kelas bahasa Korea pemula dan menengah per semester termasuk persiapan TOPIK untuk visa regional.'
      ] }
  },
  {
    key: 'l-gyeongbuk-visa-hope-link-2026',
    tagKey: 'local',
    region: 'gyeongbuk',
    source: '경상북도 (법무부 2026년 외국인정책 시행계획)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493680/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '지역기반비자 희망이음사업(정착 지원)',
      points: [
        '경상북도가 20개 시·군 가족센터에 전담인력을 두고 지역특화형·광역형 비자 외국인의 정착을 돕습니다.',
        '사례관리, 정착 주거 지원, 본인·배우자 취업 연계, 통·번역을 제공합니다.',
        '경주·경산·칠곡·영천 등 20개 시·군 가족센터에서 이용할 수 있습니다.'
      ] },
    en: { title: 'Regional visa Hope Link settlement support',
      points: [
        'Gyeongbuk places dedicated staff at family centers in 20 cities and counties to help regional visa holders settle.',
        'Services include case management, housing support, job links for holders and spouses, and interpreting.',
        'It is available at family centers in 20 areas including Gyeongju, Gyeongsan, Chilgok and Yeongcheon.'
      ] },
    vi: { title: 'Chương trình Hope Link hỗ trợ định cư cho visa vùng',
      points: [
        'Gyeongbuk bố trí nhân viên chuyên trách tại trung tâm gia đình 20 thành phố, huyện để hỗ trợ người có visa vùng.',
        'Có quản lý trường hợp, hỗ trợ nhà ở, kết nối việc làm cho bản thân và vợ/chồng, phiên dịch.',
        'Áp dụng tại 20 nơi như Gyeongju, Gyeongsan, Chilgok, Yeongcheon.'
      ] },
    th: { title: 'โครงการ Hope Link ช่วยตั้งถิ่นฐานสำหรับวีซ่าภูมิภาค',
      points: [
        'คยองบุกจัดเจ้าหน้าที่ประจำศูนย์ครอบครัว 20 เมืองและอำเภอ เพื่อช่วยผู้ถือวีซ่าภูมิภาคตั้งถิ่นฐาน',
        'มีการดูแลรายกรณี ช่วยที่อยู่อาศัย เชื่อมงานให้ตนเองและคู่สมรส และล่าม',
        'ใช้ได้ที่ศูนย์ครอบครัว 20 พื้นที่ เช่น คยองจู คยองซาน ชิลกก และยองชอน'
      ] },
    id: { title: 'Program Hope Link pendampingan visa regional',
      points: [
        'Gyeongbuk menempatkan staf khusus di pusat keluarga 20 kota dan kabupaten untuk membantu pemegang visa regional menetap.',
        'Layanan berupa manajemen kasus, bantuan hunian, penyaluran kerja bagi pemegang visa dan pasangan, serta juru bahasa.',
        'Tersedia di 20 daerah antara lain Gyeongju, Gyeongsan, Chilgok, dan Yeongcheon.'
      ] }
  },
  {
    key: 'l-gyeongnam-gimhae-emergency-2026',
    tagKey: 'local',
    region: 'gyeongnam',
    source: '김해시 (법무부 2026년 외국인정책 시행계획)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493681/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '김해 외국인주민 긴급지원',
      points: [
        '김해에 90일 이상 합법 체류한 외국인주민이 실직·산재·질병 등 위기에 처하면 긴급지원을 받을 수 있습니다.',
        '생계비(4인 156만원), 주거비, 의료비(최대 100만원)를 지원합니다.',
        '기준 중위소득 48% 이하 등 소득·재산 기준이 있으며 김해시 여성가족과에 신청합니다.'
      ] },
    en: { title: 'Gimhae emergency support for foreign residents',
      points: [
        'Legal foreign residents in Gimhae for 90+ days facing job loss, work injury or illness can get emergency aid.',
        'It covers living costs (1.56 million won for four people), housing and medical costs up to 1 million won.',
        'Income and asset limits apply, such as 48% of median income; apply to the Gimhae Women and Family Division.'
      ] },
    vi: { title: 'Gimhae: hỗ trợ khẩn cấp cho cư dân nước ngoài',
      points: [
        'Cư dân nước ngoài lưu trú hợp pháp trên 90 ngày ở Gimhae gặp mất việc, tai nạn lao động, bệnh tật được hỗ trợ khẩn cấp.',
        'Hỗ trợ sinh hoạt phí (4 người 1,56 triệu won), tiền nhà, viện phí tối đa 1 triệu won.',
        'Có điều kiện thu nhập, tài sản như dưới 48% thu nhập trung vị; nộp đơn tại Phòng Phụ nữ và Gia đình Gimhae.'
      ] },
    th: { title: 'คิมแฮ ความช่วยเหลือฉุกเฉินสำหรับชาวต่างชาติ',
      points: [
        'ชาวต่างชาติที่อยู่ถูกกฎหมายในคิมแฮเกิน 90 วัน และตกงาน บาดเจ็บจากงาน หรือเจ็บป่วย รับความช่วยเหลือฉุกเฉินได้',
        'ช่วยค่าครองชีพ (4 คน 1.56 ล้านวอน) ค่าที่พัก และค่ารักษาสูงสุด 1 ล้านวอน',
        'มีเกณฑ์รายได้และทรัพย์สิน เช่น ไม่เกิน 48% ของรายได้มัธยฐาน ยื่นที่ฝ่ายสตรีและครอบครัวเมืองคิมแฮ'
      ] },
    id: { title: 'Bantuan darurat warga asing Gimhae',
      points: [
        'Warga asing legal di Gimhae lebih dari 90 hari yang kehilangan kerja, cedera kerja, atau sakit bisa mendapat bantuan darurat.',
        'Bantuan biaya hidup (1,56 juta won untuk 4 orang), tempat tinggal, dan medis hingga 1 juta won.',
        'Ada batas pendapatan dan aset, misalnya di bawah 48% median; ajukan ke Divisi Perempuan dan Keluarga Kota Gimhae.'
      ] }
  },
  {
    key: 'l-gyeongnam-gimhae-gaya-global-2026',
    tagKey: 'local',
    region: 'gyeongnam',
    source: '김해시 (법무부 2026년 외국인정책 시행계획)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493681/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '김해 가야글로벌센터',
      points: [
        '김해시 가야글로벌센터가 외국인주민 한국어교실과 지역사회 적응 프로그램을 운영합니다.',
        '무료 법률상담과 취·창업 정보도 제공합니다.',
        '연중 운영하며 월요일과 화요일은 쉽니다.'
      ] },
    en: { title: 'Gimhae Gaya Global Center',
      points: [
        'Gimhae Gaya Global Center runs Korean classes and adjustment programs for foreign residents.',
        'Free legal counseling and job and startup information are also available.',
        'It is open all year, closed on Mondays and Tuesdays.'
      ] },
    vi: { title: 'Trung tâm Gaya Global Gimhae',
      points: [
        'Trung tâm Gaya Global (Gimhae) mở lớp tiếng Hàn và chương trình thích nghi cho cư dân nước ngoài.',
        'Có tư vấn pháp lý miễn phí và thông tin việc làm, khởi nghiệp.',
        'Mở quanh năm, nghỉ thứ Hai và thứ Ba.'
      ] },
    th: { title: 'ศูนย์คายาโกลบอล คิมแฮ',
      points: [
        'ศูนย์คายาโกลบอลคิมแฮเปิดห้องเรียนภาษาเกาหลีและโปรแกรมปรับตัวสำหรับชาวต่างชาติ',
        'มีปรึกษากฎหมายฟรีและข้อมูลการหางานและเริ่มธุรกิจ',
        'เปิดตลอดปี หยุดวันจันทร์และวันอังคาร'
      ] },
    id: { title: 'Gaya Global Center Gimhae',
      points: [
        'Gaya Global Center di Gimhae membuka kelas bahasa Korea dan program adaptasi bagi warga asing.',
        'Tersedia konsultasi hukum gratis serta info kerja dan usaha.',
        'Buka sepanjang tahun, tutup Senin dan Selasa.'
      ] }
  },
  {
    key: 'l-gyeongnam-gimhae-tech-training-2026',
    tagKey: 'local',
    region: 'gyeongnam',
    source: '김해시 (법무부 2026년 외국인정책 시행계획)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493681/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '김해 외국인주민 자동차정비 기술교육',
      points: [
        '김해시가 외국인근로자 등 외국인주민에게 자동차 정비 등 기술교육을 지원합니다.',
        '2026년 3월부터 12월까지 공모로 뽑힌 비영리단체가 정비업체 실습교육을 합니다.',
        '약 15명 규모이며 2025년에는 한국이주민의집이 수행했습니다.'
      ] },
    en: { title: 'Gimhae car repair skills training',
      points: [
        'Gimhae City supports skills training such as car repair for foreign workers and residents.',
        'From March to December 2026, a selected nonprofit runs hands-on training at a repair shop.',
        'About 15 places; in 2025 it was run by the Korea Migrants House.'
      ] },
    vi: { title: 'Gimhae: đào tạo kỹ năng sửa ô tô',
      points: [
        'Thành phố Gimhae hỗ trợ đào tạo kỹ năng như sửa ô tô cho lao động, cư dân nước ngoài.',
        'Từ tháng 3 đến 12/2026, tổ chức phi lợi nhuận được chọn dạy thực hành tại xưởng sửa xe.',
        'Khoảng 15 người; năm 2025 do Nhà Di dân Hàn Quốc thực hiện.'
      ] },
    th: { title: 'คิมแฮ ฝึกทักษะซ่อมรถยนต์',
      points: [
        'เมืองคิมแฮสนับสนุนการฝึกทักษะ เช่น ซ่อมรถยนต์ ให้แรงงานและชาวต่างชาติ',
        'มี.ค.–ธ.ค. 2026 องค์กรไม่แสวงกำไรที่ได้รับคัดเลือกจัดฝึกปฏิบัติที่อู่ซ่อมรถ',
        'รับราว 15 คน ปี 2025 ดำเนินการโดย Korea Migrants House'
      ] },
    id: { title: 'Pelatihan perbaikan mobil Gimhae',
      points: [
        'Kota Gimhae mendukung pelatihan keterampilan seperti perbaikan mobil bagi pekerja dan warga asing.',
        'Maret–Desember 2026, lembaga nirlaba terpilih mengadakan praktik di bengkel.',
        'Sekitar 15 peserta; pada 2025 dijalankan oleh Korea Migrants House.'
      ] }
  },
  {
    key: 'l-gyeongnam-haman-center-2026',
    tagKey: 'local',
    region: 'gyeongnam',
    source: '함안군 (법무부 2026년 외국인정책 시행계획)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493681/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '함안 외국인지원센터',
      points: [
        '함안군 외국인지원센터가 외국인근로자의 TOPIK 취득과 E-9에서 E-7 비자 전환을 돕습니다.',
        '노무·법률·비자·생활·의료 상담과 한국 기초법·질서·문화 교육을 제공합니다.',
        '2026년 3월부터 12월까지 위탁기관이 운영합니다.'
      ] },
    en: { title: 'Haman Foreigner Support Center',
      points: [
        'Haman-gun Foreigner Support Center helps foreign workers earn TOPIK and switch from E-9 to E-7 visas.',
        'It offers labor, legal, visa, daily-life and medical counseling plus basic law and culture education.',
        'A contracted operator runs it from March to December 2026.'
      ] },
    vi: { title: 'Trung tâm hỗ trợ người nước ngoài Haman',
      points: [
        'Trung tâm ở huyện Haman giúp lao động lấy TOPIK và chuyển visa E-9 sang E-7.',
        'Tư vấn lao động, pháp lý, visa, đời sống, y tế và dạy luật cơ bản, văn hóa Hàn.',
        'Đơn vị được ủy thác vận hành từ tháng 3 đến 12/2026.'
      ] },
    th: { title: 'ศูนย์สนับสนุนชาวต่างชาติฮามัน',
      points: [
        'ศูนย์ในอำเภอฮามันช่วยแรงงานต่างชาติสอบ TOPIK และเปลี่ยนวีซ่า E-9 เป็น E-7',
        'ให้คำปรึกษาแรงงาน กฎหมาย วีซ่า ชีวิตประจำวัน การแพทย์ และสอนกฎหมายพื้นฐานและวัฒนธรรม',
        'หน่วยงานที่ได้รับมอบหมายดำเนินการ มี.ค.–ธ.ค. 2026'
      ] },
    id: { title: 'Pusat Dukungan Warga Asing Haman',
      points: [
        'Pusat di Haman-gun membantu pekerja asing lulus TOPIK dan beralih dari visa E-9 ke E-7.',
        'Ada konsultasi kerja, hukum, visa, kehidupan, dan medis, serta edukasi hukum dasar dan budaya.',
        'Lembaga mitra mengelolanya pada Maret–Desember 2026.'
      ] }
  },
  {
    key: 'l-gyeongnam-haman-medical-fee-2026',
    tagKey: 'local',
    region: 'gyeongnam',
    source: '함안군보건소 (법무부 2026년 외국인정책 시행계획)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493681/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '함안 외국인근로자 진료비 지원',
      points: [
        '함안군보건소가 관내 외국인근로자의 진료·검진·예방접종 비용을 지원합니다.',
        '건강보험이 있는 외국인근로자도 대상이며 1인당 연 20만원 이내입니다.',
        '보건소장이 필요하다고 인정해야 하므로 먼저 보건소에 문의하세요.'
      ] },
    en: { title: 'Haman medical cost support for foreign workers',
      points: [
        'Haman-gun Public Health Center supports treatment, checkup and vaccination costs for local foreign workers.',
        'Insured workers are also eligible, up to 200,000 won per person per year.',
        'The health center director must approve, so ask the health center first.'
      ] },
    vi: { title: 'Haman: hỗ trợ chi phí khám chữa bệnh cho lao động nước ngoài',
      points: [
        'Trung tâm y tế huyện Haman hỗ trợ chi phí khám, kiểm tra sức khỏe, tiêm chủng cho lao động nước ngoài.',
        'Lao động có bảo hiểm y tế cũng được, tối đa 200.000 won mỗi người mỗi năm.',
        'Cần giám đốc trung tâm y tế chấp thuận, hãy hỏi trung tâm trước.'
      ] },
    th: { title: 'ฮามัน ช่วยค่ารักษาสำหรับแรงงานต่างชาติ',
      points: [
        'ศูนย์สาธารณสุขฮามันช่วยค่ารักษา ตรวจสุขภาพ และฉีดวัคซีนแก่แรงงานต่างชาติในพื้นที่',
        'แรงงานที่มีประกันสุขภาพก็มีสิทธิ์ ไม่เกิน 200,000 วอนต่อคนต่อปี',
        'ต้องได้รับการรับรองจากหัวหน้าศูนย์สาธารณสุข จึงควรสอบถามก่อน'
      ] },
    id: { title: 'Bantuan biaya berobat pekerja asing Haman',
      points: [
        'Puskesmas Haman-gun membantu biaya berobat, cek kesehatan, dan vaksinasi pekerja asing setempat.',
        'Pekerja yang punya asuransi kesehatan juga berhak, maksimal 200.000 won per orang per tahun.',
        'Perlu persetujuan kepala puskesmas, jadi tanyakan dulu ke puskesmas.'
      ] }
  },
  {
    key: 'l-gyeongnam-geoje-korean-2026',
    tagKey: 'local',
    region: 'gyeongnam',
    source: '거제시 (법무부 2026년 외국인정책 시행계획)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493681/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '거제 외국인 한글교실·작은다문화학교',
      points: [
        '거제시 조선지원과가 외국인노동자를 위한 사회통합프로그램 한글교실을 운영합니다.',
        '거제시가족센터 작은다문화학교도 한국어·한국문화 13개 반을 엽니다.',
        '2026년 1월부터 12월까지 연중 진행합니다.'
      ] },
    en: { title: 'Geoje Korean classes and Small Multicultural School',
      points: [
        'Geoje City Shipbuilding Support Division runs KIIP-style Korean classes for foreign workers.',
        'The Geoje Family Center Small Multicultural School also offers 13 Korean language and culture classes.',
        'Both run all year from January to December 2026.'
      ] },
    vi: { title: 'Geoje: lớp tiếng Hàn và Trường Đa văn hóa nhỏ',
      points: [
        'Phòng Hỗ trợ Đóng tàu thành phố Geoje mở lớp tiếng Hàn chương trình hội nhập cho lao động nước ngoài.',
        'Trường Đa văn hóa nhỏ của Trung tâm Gia đình Geoje mở 13 lớp tiếng Hàn và văn hóa.',
        'Học quanh năm từ tháng 1 đến 12/2026.'
      ] },
    th: { title: 'คอเจ ห้องเรียนภาษาเกาหลีและโรงเรียนพหุวัฒนธรรมเล็ก',
      points: [
        'ฝ่ายสนับสนุนต่อเรือเมืองคอเจเปิดห้องเรียนภาษาเกาหลีตามโปรแกรมบูรณาการสังคมสำหรับแรงงานต่างชาติ',
        'โรงเรียนพหุวัฒนธรรมเล็กของศูนย์ครอบครัวคอเจเปิด 13 ชั้นภาษาและวัฒนธรรมเกาหลี',
        'เรียนตลอดปี ม.ค.–ธ.ค. 2026'
      ] },
    id: { title: 'Kelas bahasa Korea dan Sekolah Multikultural Kecil Geoje',
      points: [
        'Divisi Dukungan Galangan Kapal Kota Geoje membuka kelas bahasa Korea program integrasi bagi pekerja asing.',
        'Sekolah Multikultural Kecil Pusat Keluarga Geoje juga membuka 13 kelas bahasa dan budaya Korea.',
        'Keduanya berjalan sepanjang tahun, Januari–Desember 2026.'
      ] }
  },
  {
    key: 'l-gyeongnam-miryang-korean-topik-2026',
    tagKey: 'local',
    region: 'gyeongnam',
    source: '밀양시 (법무부 2026년 외국인정책 시행계획)',
    url: 'https://www.immigration.go.kr/bbs/immigration/226/493681/download.do',
    date: '2026-01-01',
    checked: '2026-10-28',
    ko: { title: '밀양 외국인노동자 한국어교실·TOPIK 응시료 지원',
      points: [
        '밀양시가 외국인노동자와 가족을 위한 한국어교실을 지원합니다.',
        '강사료·교재비와 TOPIK 응시료를 지원하며 2026년 약 60명이 대상입니다.',
        '여성가족과의 야간 한국어교실에도 외국인근로자가 참여할 수 있습니다.'
      ] },
    en: { title: 'Miryang Korean classes and TOPIK fee support',
      points: [
        'Miryang City supports Korean classes for foreign workers and their families.',
        'It covers teachers, textbooks and TOPIK exam fees for about 60 people in 2026.',
        'Foreign workers can also join the evening Korean classes run by the Women and Family Division.'
      ] },
    vi: { title: 'Miryang: lớp tiếng Hàn và hỗ trợ lệ phí TOPIK',
      points: [
        'Thành phố Miryang hỗ trợ lớp tiếng Hàn cho lao động nước ngoài và gia đình.',
        'Hỗ trợ tiền giáo viên, giáo trình và lệ phí thi TOPIK cho khoảng 60 người năm 2026.',
        'Lao động nước ngoài cũng có thể học lớp tiếng Hàn buổi tối của Phòng Phụ nữ và Gia đình.'
      ] },
    th: { title: 'มีรยาง ห้องเรียนภาษาเกาหลีและช่วยค่าสอบ TOPIK',
      points: [
        'เมืองมีรยางสนับสนุนห้องเรียนภาษาเกาหลีสำหรับแรงงานต่างชาติและครอบครัว',
        'ช่วยค่าครู ค่าตำรา และค่าสอบ TOPIK ราว 60 คนในปี 2026',
        'แรงงานต่างชาติเข้าร่วมชั้นเรียนภาษาเกาหลีภาคค่ำของฝ่ายสตรีและครอบครัวได้ด้วย'
      ] },
    id: { title: 'Kelas bahasa Korea dan bantuan biaya TOPIK Miryang',
      points: [
        'Kota Miryang mendukung kelas bahasa Korea bagi pekerja asing dan keluarganya.',
        'Menanggung honor guru, buku, dan biaya ujian TOPIK untuk sekitar 60 orang pada 2026.',
        'Pekerja asing juga bisa ikut kelas malam bahasa Korea dari Divisi Perempuan dan Keluarga.'
      ] }
  }
]

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
