let back_button, add_button, del_button, comp_button;

// 追加アクション
add_button = document.getElementById("add");
add_button.addEventListener("click", () => onClickAdd());

// 戻す処理の関数
const create_imcomp_el = () => {
  del_button = document.createElement("button");
  del_button.innerHTML = "削除";
  comp_button = document.createElement("button");
  comp_button.innerHTML = "完了";
  // 削除アクション
  del_button.addEventListener("click", (el) => {
    delete_list(el.target.parentNode, "imcomp");
  });
  // 完了アクション
  comp_button.addEventListener("click", (el) => {
    delete_list(el.target.parentNode, "imcomp");
    create_comp_el(el.target.parentNode);
  });
};

// 完了処理の関数
const create_comp_el = (node) => {
  back_button = document.createElement("button");
  back_button.innerHTML = "戻す";

  const txt = node.firstChild.innerHTML;
  create_node(txt, "comp");

  // 戻すアクション
  back_button.addEventListener("click", (el) => {
    create_imcomp_el();
    const node = el.target.parentNode;
    delete_list(node, "comp");
    const txt = node.firstChild.innerHTML;
    create_node(txt, "imcomp");
  });
};

// 追加ボタンの処理
const onClickAdd = () => {
  create_imcomp_el();

  // 入力したテキスト値を取得
  const el = document.getElementById("inp_txt");
  const txt_val = el.value;
  el.value = "";

  // リスト追加、ノード新規作成
  create_node(txt_val, "imcomp");
};

// リストへの追加関数
const create_node = (txt_val, list_kbn) => {
  let div, li;
  // 追加するエレメントを生成
  div = document.createElement("div");
  div.className = "list-row";
  li = document.createElement("li");
  li.innerHTML = txt_val;
  div.appendChild(li);

  // 未完了または完了のリストに追加し、必要なボタンを付加
  switch (list_kbn) {
    case "imcomp":
      div.appendChild(comp_button);
      div.appendChild(del_button);
      break;
    case "comp":
      div.appendChild(back_button);
      break;
    default:
      break;
  }
  // DOMに反映
  document.getElementById(list_kbn).appendChild(div);
};

// 削除処理の関数
const delete_list = (target, list_type) => {
  document.getElementById(list_type).removeChild(target);
};
