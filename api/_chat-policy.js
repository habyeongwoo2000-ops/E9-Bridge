const { KB_TEXT } = require('./_kb');
const SOURCE_LINKS = require('../assets/chat-sources');
const DOCUMENTS = KB_TEXT.split(/\n\s*\n/).filter(Boolean).map((block, i) => {
  const lines = block.trim().split('\n');
  const source = lines.find(line => line.startsWith('근거:'));
  return { id: 'kb-' + (i + 1), title: lines[0].replace(/^\[|\]$/g, ''),
    links: SOURCE_LINKS.byTitle[lines[0].replace(/^\[|\]$/g, '')] || [],
    text: block.trim(), source: source ? source.slice(3).trim() : 'E9-Bridge 등록 상담 창구 안내' };
});
const TEXT = {
  ko: [
    'E9-Bridge는 E-9 외국인근로자의 사업장 변경, 임금체불, 출국 정산과 관련 제도를 안내합니다. 서비스 범위 밖의 질문에는 답변하지 않습니다. “사업장 변경 신청 기한은 언제인가요?”처럼 질문해 주세요.',
    '어떤 도움이 필요한가요? 사업장 변경, 임금체불, 출국 정산 중 궁금한 내용과 상황을 조금 더 알려 주세요. 여권번호·계좌번호 등 개인정보는 적지 마세요.',
    '등록된 자료에서 이 질문에 답할 충분한 근거를 찾지 못했습니다. 질문을 구체적으로 적어 주시거나, 체류·비자는 1345, 근로·임금 문제는 1350 또는 관할 고용센터에 확인해 주세요.'
  ],
  en: [
    'E9-Bridge helps E-9 workers with workplace changes, unpaid wages, departure settlement and related rules. I cannot answer unrelated requests. Try asking: “When must I apply to change workplaces?”',
    'Please explain your question about workplace changes, unpaid wages or departure settlement. Do not include passport or bank account numbers.',
    'The registered references do not provide enough evidence to answer. Please clarify your question, or contact 1345 for immigration and 1350 or your Employment Center for work and wages.'
  ],
  vi: [
    'E9-Bridge hỗ trợ lao động E-9 về chuyển nơi làm việc, nợ lương và quyết toán trước khi xuất cảnh. Tôi không trả lời yêu cầu ngoài phạm vi. Bạn có thể hỏi: “Hạn nộp đơn chuyển nơi làm việc là khi nào?”',
    'Vui lòng mô tả rõ câu hỏi về chuyển nơi làm việc, nợ lương hoặc quyết toán trước khi xuất cảnh. Không ghi số hộ chiếu hoặc tài khoản ngân hàng.',
    'Tài liệu đã đăng ký chưa đủ căn cứ để trả lời. Vui lòng hỏi cụ thể hơn hoặc liên hệ 1345 về cư trú, 1350 hoặc trung tâm việc làm về lao động và tiền lương.'
  ],
  id: [
    'E9-Bridge membantu pekerja E-9 mengenai pindah tempat kerja, upah belum dibayar, dan penyelesaian hak sebelum pulang. Permintaan di luar topik tidak dijawab. Coba tanyakan batas waktu pengajuan pindah kerja.',
    'Jelaskan pertanyaan tentang pindah kerja, upah belum dibayar, atau hak sebelum pulang. Jangan tulis nomor paspor atau rekening bank.',
    'Referensi terdaftar belum cukup untuk menjawab. Perjelas pertanyaan atau hubungi 1345 untuk imigrasi, serta 1350 atau pusat ketenagakerjaan untuk pekerjaan dan upah.'
  ],
  km: [
    'E9-Bridge ផ្តល់ព័ត៌មានអំពីការប្តូរកន្លែងធ្វើការ ប្រាក់ឈ្នួលមិនទាន់បើក និងការទូទាត់មុនចាកចេញ សម្រាប់កម្មករ E-9។ សំណួរក្រៅប្រធានបទ មិនអាចឆ្លើយបានទេ។',
    'សូមបញ្ជាក់សំណួរអំពីការប្តូរកន្លែងធ្វើការ ប្រាក់ឈ្នួល ឬការទូទាត់មុនចាកចេញ។ សូមកុំសរសេរលេខលិខិតឆ្លងដែន ឬគណនីធនាគារ។',
    'ឯកសារដែលបានចុះបញ្ជីមិនមានភស្តុតាងគ្រប់គ្រាន់ដើម្បីឆ្លើយទេ។ សូមបញ្ជាក់សំណួរ ឬទាក់ទង 1345 សម្រាប់អន្តោប្រវេសន៍ និង 1350 ឬមជ្ឈមណ្ឌលការងារសម្រាប់ការងារ និងប្រាក់ឈ្នួល។'
  ],
  ne: [
    'E9-Bridge ले E-9 कामदारलाई कार्यस्थल परिवर्तन, नपाएको तलब र स्वदेश फर्कनुअघिको हिसाबबारे जानकारी दिन्छ। असम्बन्धित प्रश्नको उत्तर दिइँदैन। कार्यस्थल परिवर्तनको आवेदन म्यादबारे सोध्न सक्नुहुन्छ।',
    'कार्यस्थल परिवर्तन, नपाएको तलब वा फर्कनुअघिको हिसाबबारे आफ्नो प्रश्न स्पष्ट पार्नुहोस्। राहदानी वा बैंक खाता नम्बर नलेख्नुहोस्।',
    'दर्ता गरिएका सामग्रीमा उत्तर दिन पर्याप्त आधार भेटिएन। प्रश्न स्पष्ट पार्नुहोस् वा अध्यागमनका लागि 1345 र काम तथा तलबका लागि 1350 वा रोजगार केन्द्रमा सम्पर्क गर्नुहोस्।'
  ]
};
function messages(lang) {
  const t = TEXT[lang] || TEXT.en;
  return { out_of_scope: t[0], needs_clarification: t[1], insufficient_evidence: t[2] };
}
const routeSchema = { type: 'OBJECT', properties: {
  status: { type: 'STRING', enum: ['answer', 'out_of_scope', 'needs_clarification', 'insufficient_evidence'] },
  documentIds: { type: 'ARRAY', items: { type: 'STRING' } }
}, required: ['status', 'documentIds'] };
const answerSchema = { type: 'OBJECT', properties: {
  status: { type: 'STRING', enum: ['answer', 'insufficient_evidence'] },
  answer: { type: 'STRING' }, citations: { type: 'ARRAY', items: { type: 'OBJECT', properties: {
    documentId: { type: 'STRING' }, quote: { type: 'STRING' }
  }, required: ['documentId', 'quote'] } }
}, required: ['status', 'answer', 'citations'] };
function selectDocuments(route) {
  if (!route || !Array.isArray(route.documentIds)) return null;
  if (route.status !== 'answer') return route.documentIds.length ? null : [];
  if (!route.documentIds.length || route.documentIds.length > 4) return null;
  const docs = [...new Set(route.documentIds)].map(id => DOCUMENTS.find(d => d.id === id));
  return docs.every(Boolean) ? docs : null;
}
function validateAnswer(result, selected) {
  if (!result || result.status !== 'answer' || typeof result.answer !== 'string' ||
      !result.answer.trim() || result.answer.length > 4000 || !Array.isArray(result.citations) ||
      !result.citations.length || result.citations.length > 4) return null;
  const docs = [];
  for (const citation of result.citations) {
    if (!citation || typeof citation.quote !== 'string' || citation.quote.trim().length < 8) return null;
    const doc = selected.find(d => d.id === citation.documentId);
    if (!doc || !doc.text.includes(citation.quote)) return null;
    docs.push(doc);
  }
  return [...new Map(docs.map(d => [d.id, d])).values()];
}
module.exports = { DOCUMENTS, messages, routeSchema, answerSchema, selectDocuments, validateAnswer };
