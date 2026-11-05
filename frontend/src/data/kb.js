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

export { KB, FAQ_KB };
