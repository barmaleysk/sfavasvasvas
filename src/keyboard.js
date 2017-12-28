const kb = require('./keyboard-buttons')

module.exports = {
    home: [
        [kb.home.seo, kb.home.ppc],
        [kb.home.audit, kb.home.telega],
        [kb.home.zayavka]
    ],
    seo_prices: [
        [kb.seo_price.site_1],
        [kb.seo_price.site_2, kb.seo_price.site_3],
        [kb.back]
    ],
    ppc_prices: [
        [kb.ppc_price.price_1, kb.ppc_price.price_2],
        [kb.ppc_price.price_3, kb.ppc_price.price_4],
        [kb.back]
    ],
    audit_prices: [
        [kb.audit_price.audit_seo],
        [kb.audit_price.audit_ppc, kb.audit_price.audit_smm],
        [kb.back]
    ],
    telega_prices: [
        [kb.telega_price.telega_1],
        [kb.telega_price.telega_2, kb.telega_price.telega_3],
        [kb.back]
    ],
    zayavka_prices: [
        [kb.zayavka_call.zayavka_1], [kb.zayavka_call.zayavka_2],
        [kb.zayavka_call.zayavka_3],
        [kb.back]
    ]
}