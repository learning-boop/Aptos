/* ────────────────────────────────────────────────────────────────
   SHARED FAQ DATA — Aptos Thread Lift, Newcastle upon Tyne
   Used by the home-page FAQ section AND every treatment page.
   Each question maps to a real search query. `cat` tags drive both
   the on-page filter tabs and which questions appear per page.
   ──────────────────────────────────────────────────────────────── */

export const FAQ_CATEGORIES = [
  { id: 'popular',    label: 'Most Asked' },
  { id: 'treatment',  label: 'The Treatment' },
  { id: 'comparison', label: 'Aptos vs PDO' },
  { id: 'jawline',    label: 'Jowls & Jawline' },
  { id: 'areas',      label: 'Face & Neck Areas' },
  { id: 'cost',       label: 'Cost, Safety & Recovery' },
  { id: 'results',    label: 'Results & Before/After' },
  { id: 'newcastle',  label: 'Newcastle & Booking' },
]

export const FAQS = [
  /* ── CORE TREATMENT ─────────────────────────────────────────── */
  {
    cat: ['treatment', 'popular'],
    q: 'What is an Aptos Thread Lift?',
    a: 'An Aptos Thread Lift is a minimally invasive, non-surgical facelift that uses specialised threads placed beneath the skin to lift sagging tissue and stimulate natural collagen production. For patients in Newcastle with mild to moderate skin laxity around the cheeks, jawline, jowls, neck or brow, it restores fresher facial definition without the incisions, general anaesthetic or long recovery of surgery. At Dr Matla Aesthetics Clinic in Newcastle, every Aptos Thread Lift is planned around your facial anatomy, age, skin quality and the result you want — confirmed at a doctor-led consultation.',
  },
  {
    cat: ['treatment', 'popular'],
    q: 'How does an Aptos Thread Lift work?',
    a: 'Aptos threads are placed under the skin through tiny entry points, where they support and reposition soft tissue to create an immediate lifting effect in areas affected by ageing and loss of firmness. The threads also trigger collagen stimulation — collagen supports skin structure, firmness and elasticity — so results continue to develop gradually over the following weeks and months. The final outcome depends on the treatment area, thread type, number of threads and your natural healing response, which is why a careful consultation decides the safest technique.',
  },
  {
    cat: ['treatment'],
    q: 'Is an Aptos Thread Lift a non-surgical facelift?',
    a: 'Yes. Aptos Thread Lift is one of the most searched non-surgical facelift options in Newcastle because it lifts and refreshes the face without surgical incisions, general anaesthesia or lengthy downtime. A thread facelift can improve sagging cheeks, lower-face laxity, softening jawlines, jowls and early neck laxity, and is best suited to mild-to-moderate sagging rather than severe loose skin. At Dr Matla Clinic, consultation confirms whether Aptos, PDO threads, fillers, skin boosters or a combined approach suits your facial structure.',
  },
  {
    cat: ['treatment'],
    q: 'Who is a good candidate for an Aptos Thread Lift?',
    a: 'A good candidate usually has mild to moderate sagging skin and wants visible, natural-looking improvement without surgery — common concerns include a softening jawline, early jowls, sagging cheeks, mild neck laxity or a tired-looking lower face. It suits people with realistic expectations, good general health and clear treatment goals. It may not suit those with very heavy tissue, advanced skin laxity, active skin infection or certain medical conditions. A doctor-led assessment matches thread lifting to your anatomy and decides whether threads alone or a combined plan is best.',
  },
  {
    cat: ['treatment', 'popular'],
    q: 'What areas can an Aptos Thread Lift treat?',
    a: 'Aptos Thread Lift can address several facial and neck concerns when you are suitable: the cheeks and mid-face, jawline and jowls, neck and lower face, brow and eye area, and selected nose-contouring concerns. For most Newcastle patients the most searched areas are sagging jowls, loose facial skin, lower-face heaviness, neck laxity and loss of jawline definition. The number of threads and placement technique are tailored to your anatomy and desired result, because every face ages differently.',
  },
  {
    cat: ['treatment'],
    q: 'Is an Aptos Thread Lift painful?',
    a: 'Most patients describe an Aptos Thread Lift as manageable rather than painful, because local anaesthetic is used to keep the treatment area comfortable. You may feel pressure, pulling or movement during the procedure, and afterwards mild soreness, tenderness, tightness, swelling or bruising can occur — these effects are usually temporary and are explained during aftercare planning. Choosing an experienced, doctor-led clinic in Newcastle helps keep the experience comfortable and reduces avoidable risks.',
  },
  {
    cat: ['treatment', 'results'],
    q: 'Does an Aptos Thread Lift stimulate collagen?',
    a: 'Yes. An Aptos Thread Lift is designed not only to lift tissue but also to stimulate collagen — a key structural protein that keeps skin firmer, smoother and more elastic. The thread provides an immediate support effect, while your body\u2019s response to it encourages gradual improvement in skin quality, which is why many thread-lift results keep developing over time rather than appearing only on treatment day. Collagen response varies with age, skin health, lifestyle, aftercare and the area treated.',
  },
  {
    cat: ['treatment', 'cost'],
    q: 'Are Aptos threads permanent?',
    a: 'Aptos threads are not a permanent surgical implant. Many Aptos thread types are absorbable and gradually break down in the body while supporting tissue and stimulating collagen. Even after the threads begin to dissolve, collagen stimulation can continue to support the treated area — one reason results often last longer than the threads themselves. Thread-lift results are temporary and maintenance may be recommended, because the face continues to age naturally over time.',
  },
  {
    cat: ['treatment'],
    q: 'What is the best age for an Aptos Thread Lift?',
    a: 'There is no single best age for an Aptos Thread Lift, because skin laxity, facial structure and ageing pattern matter more than age alone. Many patients start considering thread lifting when they first notice early jowls, sagging cheeks, jawline softness or neck laxity. Aptos is generally more suitable for mild to moderate laxity than for very advanced sagging, so some patients are suitable in their late 30s or 40s while others may not need it until later. A personalised assessment gives the most accurate answer.',
  },

  /* ── APTOS vs PDO & COMPARISON ──────────────────────────────── */
  {
    cat: ['comparison', 'popular'],
    q: 'What is the difference between Aptos threads and PDO threads?',
    a: 'Aptos and PDO threads are both used for non-surgical thread lifting, but they are not identical. PDO threads are widely used dissolvable threads that lift and stimulate collagen, while Aptos threads use advanced barbed designs that act like tiny anchors to lift and reposition sagging tissue, often chosen when longer-lasting lifting support is the goal. The best option differs for every patient — some benefit from PDO MINT threads, others from Aptos, and some from a combined plan — decided at consultation based on anatomy, skin laxity, goals, downtime and budget.',
  },
  {
    cat: ['comparison'],
    q: 'Is Aptos better than a PDO Thread Lift?',
    a: 'Aptos is not automatically better for everyone, but it may be more suitable when stronger tissue support, longer-lasting lifting or an advanced thread design is needed. A PDO thread lift can still be very effective for selected patients, particularly for lighter, earlier concerns. The best thread lift depends on your face, skin quality, degree of sagging and desired outcome — so a doctor-led assessment, not online popularity, should decide the plan.',
  },
  {
    cat: ['comparison'],
    q: 'How is Aptos different from a surgical facelift?',
    a: 'A surgical facelift is an invasive procedure that removes and repositions deeper facial tissue and excess skin. An Aptos Thread Lift is minimally invasive and uses threads to lift and support selected areas without incisions or the same downtime. Aptos suits patients who want improvement without committing to surgery and works well for early-to-moderate sagging, but it cannot remove large amounts of excess skin or replace a full surgical facelift in advanced cases. An honest consultation sets realistic expectations.',
  },
  {
    cat: ['comparison'],
    q: 'Can an Aptos Thread Lift replace fillers?',
    a: 'Aptos threads and dermal fillers do different jobs. Threads mainly lift, reposition and support sagging tissue; fillers mainly restore volume, contour features and soften folds. Some patients need lift more than volume, while others benefit from volume support before or after a thread lift — jawline definition, for example, may need lifting, volume balancing or both. A combined plan sometimes produces a better result than one treatment alone, built around your facial structure rather than a single popular option.',
  },
  {
    cat: ['comparison'],
    q: 'Can an Aptos Thread Lift be combined with other treatments?',
    a: 'Yes — when clinically appropriate, an Aptos Thread Lift can be combined with dermal fillers, anti-wrinkle treatments, skin boosters, microneedling, PRP or other collagen-supporting treatments for full-face rejuvenation. Timing matters, because thread lifting involves tissue repositioning and healing, so treatments are often staged to let swelling settle and keep the final result balanced. A doctor-led plan decides the safest order and spacing, with natural facial harmony as the goal rather than over-treatment.',
  },

  /* ── JOWLS, JAWLINE & LOWER FACE ────────────────────────────── */
  {
    cat: ['jawline', 'popular'],
    q: 'What is the best treatment for sagging jowls without surgery?',
    a: 'For sagging jowls without surgery, an Aptos Thread Lift is one of the leading options to consider. Jowls usually appear when the lower face loses support, collagen and firmness, making the jawline look softer or heavier. Aptos threads lift and support selected lower-face tissue, improving jawline definition and reducing the appearance of mild to moderate jowls, sometimes enhanced further with fillers or collagen-stimulating treatments. The right approach depends on why the jowls are present — skin laxity, volume loss, heavy tissue or bone structure.',
  },
  {
    cat: ['jawline', 'popular'],
    q: 'Can an Aptos Thread Lift define the jawline?',
    a: 'Yes — in suitable patients, an Aptos Thread Lift can define the jawline by lifting and supporting tissue that has begun to descend around the lower face, making the jaw appear cleaner, sharper and more structured without surgery. It is especially relevant if your lower face has become soft, heavy or less defined with age, and it can reduce the look of early jowls while improving the transition between jaw and neck. For stronger contouring, threads are sometimes combined with chin or jawline filler.',
  },
  {
    cat: ['jawline'],
    q: 'Can an Aptos Thread Lift lift the lower face?',
    a: 'An Aptos Thread Lift can be used as a lower-face lifting treatment for suitable patients with mild to moderate sagging — one of the most searched areas, because ageing often affects the jawline, mouth corners, marionette area and jowls. Threads are placed to support and reposition soft tissue, improving facial contour and stimulating collagen for firmness over time. Lower-face lifting must be planned carefully, as over-lifting or incorrect vector placement can look unnatural, so a doctor-led approach protects facial balance.',
  },
  {
    cat: ['jawline'],
    q: 'How can I tighten loose facial skin without surgery?',
    a: 'Loose facial skin can be treated in different ways depending on severity and cause. An Aptos Thread Lift may suit mild to moderate sagging, especially around the cheeks, lower face and jawline. Unlike creams or facial exercises, thread lifting works beneath the skin to provide structural support, creating a lifting effect while encouraging collagen production so skin feels firmer. If laxity is very advanced, threads may give only limited improvement, so a consultation decides whether Aptos, PDO threads, skin tightening, fillers or surgery is most appropriate.',
  },
  {
    cat: ['jawline'],
    q: 'Can an Aptos Thread Lift help marionette lines?',
    a: 'An Aptos Thread Lift may improve marionette lines when they are partly caused by lower-face sagging and tissue descent, because supporting the lower face reduces heaviness around the mouth and jawline. However, marionette lines can also stem from volume loss, skin-quality changes or repeated movement, in which case fillers, skin boosters or collagen treatments may be used alongside or instead of threads. The best result comes from identifying the cause of the line rather than treating the line alone.',
  },
  {
    cat: ['jawline', 'areas'],
    q: 'Can an Aptos Thread Lift help a double chin?',
    a: 'An Aptos Thread Lift may improve the lower face and neck contour in some patients, but a double chin can have several causes — fat, skin laxity, jaw structure or posture. If the concern is mainly loose skin and loss of support, threads can help; if it is mainly fat under the chin, fat reduction or skin tightening may be more appropriate before or alongside threads. The consultation identifies the main cause so the plan is realistic and threads are used only where they will genuinely help.',
  },
  {
    cat: ['areas', 'jawline'],
    q: 'Can men have an Aptos Thread Lift?',
    a: 'Yes — men can have an Aptos Thread Lift if they are suitable candidates. Male patients often search for jawline definition, lower-face tightening, neck-contour improvement or a fresher appearance without looking over-treated. Male facial structure needs a different planning approach, because masculine features, beard area, jawline shape and skin thickness affect thread placement and the desired result — usually a stronger, fresher, natural-looking outcome. A consultation decides whether Aptos, PDO threads, fillers or skin tightening best suits the male face.',
  },

  /* ── NECK, BROW, EYE, CHEEK, NOSE ───────────────────────────── */
  {
    cat: ['areas'],
    q: 'Can an Aptos Thread Lift tighten the neck?',
    a: 'An Aptos Thread Lift may improve selected cases of loose neck skin and early neck sagging — many people search for a neck lift without surgery when they notice laxity, softening under the jawline or a less defined neck contour. Threads can support the neck and lower-face area, though neck skin can be more challenging because tissue quality, muscle movement and laxity vary widely. A consultation decides whether Aptos threads alone are suitable or whether a combined plan with skin tightening or injectables gives a better result.',
  },
  {
    cat: ['areas'],
    q: 'Can an Aptos Thread Lift lift sagging cheeks?',
    a: 'Yes — an Aptos Thread Lift can lift and support sagging cheeks in suitable patients. As the mid-face drops with age, cheeks can look flatter, nasolabial folds deeper and the lower face heavier. Threads reposition and support the cheek area for a fresher, more lifted appearance, and in some patients cheek volume loss is also corrected with dermal fillers or collagen-stimulating treatments. A natural result depends on correct placement and understanding how the cheek, jawline and lower face work together.',
  },
  {
    cat: ['areas'],
    q: 'Can an Aptos Thread Lift improve the brow or eye area?',
    a: 'Aptos or thread-lifting techniques may support selected brow and eye-area concerns in suitable patients — people often search for a non-surgical brow lift, fox eye lift, cat eye lift or eye thread lift for a more open, refreshed look without surgery. The brow and eye area need careful planning, because the tissue is delicate and small changes noticeably affect expression, so the aim is a refreshed, balanced result rather than an extreme lift. A consultation assesses brow position, eyelid heaviness, skin quality and symmetry.',
  },
  {
    cat: ['areas'],
    q: 'What is a nose thread lift?',
    a: 'A nose thread lift is a non-surgical treatment that uses threads to support or refine selected nose features — patients often search for it wanting subtle improvement in nasal tip position, bridge definition or contour without surgery. It is different from a surgical rhinoplasty and cannot achieve the same structural change; it may suit selected aesthetic concerns but needs careful assessment because the nose is a sensitive area with important blood supply. Suitability, expected result, risks and alternatives such as filler are discussed at a doctor-led consultation.',
  },

  /* ── COST, SAFETY, RECOVERY & AFTERCARE ─────────────────────── */
  {
    cat: ['cost', 'popular'],
    q: 'How much does an Aptos Thread Lift cost in Newcastle?',
    a: 'The cost of an Aptos Thread Lift in Newcastle depends on the treatment area, number of threads, complexity of the case and whether you need a small targeted lift or a broader full-face rejuvenation plan. Thread-lift treatment typically starts from around \u00a3250, but Aptos pricing varies with the exact plan, so a consultation gives an accurate quote for your number of threads and technique. When comparing prices, weigh medical experience, product quality, safety, aftercare and natural-looking results — not cost alone.',
  },
  {
    cat: ['cost', 'popular'],
    q: 'Is an Aptos Thread Lift safe?',
    a: 'An Aptos Thread Lift can be considered safe when performed on suitable patients by a properly trained medical professional using appropriate technique and aftercare — but, like any procedure involving skin and deeper tissue, it is not risk-free. Possible temporary effects include swelling, bruising, tenderness, tightness, mild asymmetry, dimpling or skin irregularity; more serious complications are uncommon but are discussed at consultation so you can make an informed decision. Safety depends heavily on patient selection, anatomy knowledge, sterile technique and aftercare, which is why doctor-led treatment matters.',
  },
  {
    cat: ['cost', 'popular'],
    q: 'What is the recovery time after an Aptos Thread Lift?',
    a: 'Recovery after an Aptos Thread Lift is usually much shorter than surgical facelift recovery — full recovery is often described as 24 to 48 hours, although mild swelling, bruising, tenderness or tightness can last longer in some patients. You are usually advised to avoid facial massage, heavy exercise, excessive facial movement, dental procedures, heat exposure and sleeping on your face for a short period. Recovery varies by area and individual, so following your clinic\u2019s personalised aftercare plan is important for comfort, safety and the best result.',
  },
  {
    cat: ['cost'],
    q: 'What should I avoid after an Aptos Thread Lift?',
    a: 'After an Aptos Thread Lift you are usually advised to avoid anything that puts unnecessary pressure or movement on the treated area while the tissue settles — this includes facial massage, sleeping on your face, heavy exercise, saunas, excessive heat and wide mouth movements for a period. Common aftercare includes ice packs, avoiding make-up for at least 24 hours, sleeping face-up and elevated for several nights, gentle washing and avoiding intense exercise. Your exact plan comes from the treating doctor, and you should contact the clinic if you notice unusual pain, worsening swelling or signs of infection.',
  },
  {
    cat: ['cost'],
    q: 'Are there side effects after an Aptos Thread Lift?',
    a: 'Side effects can include temporary swelling, bruising, tenderness, tightness, dimpling, mild asymmetry or skin irregularity — these are discussed as part of the consent and aftercare process. Many effects settle as swelling reduces and the tissue adapts, but you should not ignore unusual symptoms such as severe pain, signs of infection, increasing redness or discharge. A safe clinic explains possible side effects before treatment, provides aftercare guidance and advises exactly when to contact the clinic.',
  },
  {
    cat: ['cost'],
    q: 'Who should avoid an Aptos Thread Lift?',
    a: 'An Aptos Thread Lift may not suit everyone. People with active skin infection, active acne in the treatment area, certain autoimmune conditions, bleeding disorders, poor wound healing, pregnancy, breastfeeding, severe medical conditions or unrealistic expectations may not be suitable candidates. Anyone taking blood thinners or with a history of keloid scarring or severe allergies should disclose this at consultation, where the doctor may advise delaying treatment, choosing an alternative or seeking medical clearance. Honest disclosure of medical history is essential — a safe result starts with correct patient selection.',
  },
  {
    cat: ['cost', 'results'],
    q: 'Can I go back to work after an Aptos Thread Lift?',
    a: 'Some patients return to normal light activities soon after an Aptos Thread Lift, but it depends on the area treated, bruising, swelling and the type of work you do — those in public-facing roles may prefer a few days for early swelling or bruising to settle. Although downtime is usually far shorter than surgery, you should still follow aftercare carefully and avoid strenuous activity, facial pressure and unnecessary movement during early healing. Your doctor advises realistic downtime at consultation based on your treatment plan and schedule.',
  },
  {
    cat: ['cost', 'jawline'],
    q: 'Can an Aptos Thread Lift treat deep wrinkles?',
    a: 'An Aptos Thread Lift may improve some wrinkles when they relate to sagging tissue and loss of support — lifting the mid-face or lower face can soften folds or lines caused by tissue descent. However, thread lifting is not the only treatment for wrinkles: fine lines, dynamic wrinkles, etched lines and volume-related folds may need anti-wrinkle treatment, fillers, skin boosters or resurfacing. The best approach identifies whether a wrinkle is caused mainly by movement, volume loss, skin quality or sagging, so treatment targets the real cause.',
  },

  /* ── RESULTS, BEFORE & AFTER, EXPECTATIONS ──────────────────── */
  {
    cat: ['results', 'popular'],
    q: 'How long do Aptos Thread Lift results last?',
    a: 'Aptos Thread Lift results are often described as long-lasting compared with many standard thread-lift options, and can last up to 24 months depending on thread type, area treated, skin condition, age and lifestyle. Some lifting is visible soon after treatment because the threads physically support the tissue, while the collagen response develops gradually so the result keeps refining over the following weeks and months. Results are not permanent — the face continues to age — so maintenance treatments, good skincare, sun protection and healthy habits help results last longer.',
  },
  {
    cat: ['results'],
    q: 'When will I see results after an Aptos Thread Lift?',
    a: 'Many patients notice an early lifting effect after an Aptos Thread Lift because the threads reposition and support sagging tissue. In the first few days the result can look slightly swollen or tighter than expected, which is a normal part of early recovery, and it becomes more natural as swelling settles and the tissue adapts. Because collagen stimulation takes time, firmness and skin quality can keep improving after the initial lift — so it is best not to judge the final result too early.',
  },
  {
    cat: ['results'],
    q: 'What should Aptos Thread Lift before and after results look like?',
    a: 'Aptos Thread Lift before and after results should look refreshed, lifted and natural rather than dramatically altered — the aim is to improve facial support and definition while keeping your own features recognisable. Common improvements include a cleaner jawline, reduced jowl heaviness, lifted cheeks, softer lower-face sagging and a fresher facial contour, with the level of change depending on your starting point and how much laxity is present. Before-and-after images are useful for education, but results vary, so the best comparison is always your own facial structure.',
  },
  {
    cat: ['results'],
    q: 'Will an Aptos Thread Lift make me look unnatural?',
    a: 'An Aptos Thread Lift should not look unnatural when it is planned correctly and performed conservatively — the goal is to restore support and definition, not to create a pulled or exaggerated appearance. Unnatural results are more likely with unrealistic expectations, too much attempted lift, poor vector planning or incorrect patient selection, which is exactly why consultation and technique matter so much. At Dr Matla Aesthetics Clinic the focus is subtle, balanced facial rejuvenation that respects your original features and expression.',
  },
  {
    cat: ['results'],
    q: 'How long does swelling last after an Aptos Thread Lift?',
    a: 'Swelling after an Aptos Thread Lift is usually temporary and varies with the treatment area, number of threads, skin sensitivity and individual healing — some patients have mild swelling for a few days, while bruising or tenderness can take a little longer to fully settle. The face may initially feel tight or look slightly overcorrected, which often softens as the tissue settles, so it is best not to judge the final result too early. Following aftercare helps reduce swelling, and you should contact the clinic if swelling worsens or is linked to severe pain.',
  },
  {
    cat: ['results'],
    q: 'Can Aptos Thread Lift results be adjusted?',
    a: 'In many cases, Aptos Thread Lift results settle naturally without adjustment — mild asymmetry, tightness, dimpling or irregularity can improve as swelling reduces and the tissue adapts. If you have concerns, contact the treating clinic rather than massaging or manipulating the area yourself, so the doctor can assess whether it is normal healing or whether a review is needed. Follow-up care is an important part of thread-lift treatment, and reassurance plus review are available whenever needed.',
  },

  /* ── NEWCASTLE LOCAL & BOOKING ──────────────────────────────── */
  {
    cat: ['newcastle', 'popular'],
    q: 'Where can I get an Aptos Thread Lift in Newcastle?',
    a: 'Patients searching for an Aptos Thread Lift in Newcastle are usually looking for a trusted, doctor-led clinic offering natural-looking, non-surgical facial rejuvenation. Dr Matla Aesthetics Clinic is based in Newcastle upon Tyne and offers thread-lift treatments including APTOS and PDO options. A local consultation is valuable because the doctor can assess your face in person, explain the technique, discuss expected results and provide aftercare guidance — especially important for thread lifting, where facial anatomy and skin laxity must be evaluated carefully.',
  },
  {
    cat: ['newcastle'],
    q: 'Why choose a doctor-led Aptos clinic in Newcastle?',
    a: 'Choosing a doctor-led Aptos clinic in Newcastle matters because thread lifting involves deeper tissue placement, facial anatomy, sterile technique, careful patient selection and complication management — it should not be approached as a simple beauty procedure. A doctor-led consultation assesses whether Aptos is suitable, whether another treatment would be safer, and how to achieve a natural result, with clear medical consent, realistic expectations and professional aftercare. This is why experience and safety matter as much as price when you compare clinics.',
  },
  {
    cat: ['newcastle'],
    q: 'Is an Aptos Thread Lift available near Jesmond, Newcastle?',
    a: 'Yes — Dr Matla Aesthetics is a doctor-led clinic serving Newcastle upon Tyne, including patients near Jesmond and across the North East. If you are searching for a thread lift near me, an in-person consultation confirms whether the clinic is accessible and experienced with non-surgical facial lifting for your specific concern. Local patients from Newcastle, Jesmond and surrounding North East areas are welcome to book a doctor-led Aptos consultation.',
  },
  {
    cat: ['newcastle'],
    q: 'How do I book an Aptos Thread Lift consultation in Newcastle?',
    a: 'To book an Aptos Thread Lift consultation in Newcastle, contact the clinic or use the online booking option — a consultation is essential before treatment, because Aptos suitability cannot be decided from photos or price lists alone. During the consultation the doctor assesses facial laxity, explains treatment areas, discusses recovery, reviews your medical history and provides a personalised plan, giving you time to ask about cost, safety, results and aftercare. It is the right next step if you are already comparing clinics.',
  },
  {
    cat: ['newcastle'],
    q: 'What should I ask during an Aptos Thread Lift consultation?',
    a: 'During an Aptos Thread Lift consultation, ask about suitability, expected results, treatment areas, thread type, number of threads, recovery time, aftercare, possible side effects, cost and whether a combined treatment plan is recommended. It also helps to ask how the treatment will improve your specific concern — jowls, jawline definition, cheek sagging, neck laxity or brow position. A professional clinic explains both benefits and limitations, so you understand clearly what Aptos can and cannot achieve before deciding.',
  },
]

/** Return up to `limit` FAQs whose category tags include `catId`. */
export function faqsByCategory(catId, limit = 8) {
  return FAQS.filter(f => f.cat.includes(catId)).slice(0, limit)
}

/** Build a schema.org FAQPage object from a list of FAQ items. */
export function faqSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }
}
