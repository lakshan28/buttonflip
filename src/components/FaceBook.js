import React from "react";
const iframe =
  '<iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FcampusYakune%2F%3F__tn__%3DkCH-R%26eid%3DARA-lgbXRpoxah6fL81WWyjhUPWz28-IHosCXsejolQy_hIN4euudvy-Ib5Ew5DWkrrvZXtsZp1bDqmT%26hc_ref%3DARRwBqfFJC7vmsVo_egW26ryRi3ScIyg_JOwQzF-P8KQroyvmBjfbyrBf-WLjhTHXME%26fref%3Dnf%26__xts__[0]%3D68.ARBS1vIQOM1C0jxL8OD8JjyyN_MLo41nzoTTqfdj778XEwJehIuBziT5Ks4o5xZMbk5lqZFJhJbjqrqflx6qH0mPEyGqfe32hAY8PvPArEge1n3hC-QS56gO1ve0ejhrFEn4hhOzwlHEeQ22LQk74PxM9u4pbbB9EAycP6SNLCl6YY9FQOIsP7KrWpoe0p_9otMYZ2MkXp5Mhak5GzBpFFCHKOMVwMuhKOjTGYfjxuvKE2kmARRkYGiPoyJCaDfboZp-6RoGVA69z9D4MZTagjwrTPcAT1hKeR495wC-4eQUssMnLdy_E7ujyzvf1p7lHwyXMm8OqLkyRFHVOne1JE4&width=400&layout=button&action=like&size=large&share=true&height=65&appId" width="400" height="65" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>';

function Iframe(props) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
    />
  );
}
export default function FaceBook() {
  return (
    <div>
      <h1>Like the Page</h1>
      <Iframe iframe={iframe} />,
    </div>
  );
}
