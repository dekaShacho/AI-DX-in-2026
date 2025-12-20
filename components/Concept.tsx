import React from 'react';

const Concept: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl font-black mb-12 text-slate-900">
          Larkで
          <span className="relative inline-block mx-1">
            <span className="relative z-10 text-blue-600">業務改善</span>
            <span className="absolute -inset-1 bg-orange-100 rounded-full rotate-[-2deg] -z-0 top-0 bottom-0 left-[-5px] right-[-5px]"></span>
          </span>
          を仕事にする。<br />
          そんな未来が、もう来ています。
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 text-left items-center">
          <div className="space-y-6 text-slate-600 text-lg">
            <p>
              「Larkを入れたけど、使いこなせていない」<br />
              そんな企業が今、日本中に溢れています。
            </p>
            <p>
              これは裏を返せば、<br />
              <strong className="text-slate-900 underline decoration-orange-400 decoration-4 underline-offset-4">「Larkで業務を整理できる人」</strong>の価値が<br />
              爆上がりしているということ。
            </p>
            <p>
              ただの設定代行ではありません。<br />
              チームの働き方を変え、ムダを無くし、<br />
              みんなが笑顔で働ける環境をつくる。<br />
              そんなクリエイティブな「業務改善」の領域が広がっています。
            </p>
          </div>
          <div className="bg-blue-50 p-8 rounded-2xl relative">
            <i className="fas fa-quote-left text-4xl text-blue-200 absolute top-4 left-4"></i>
            <p className="font-bold text-xl text-slate-800 mb-4 relative z-10">
              まだプレイヤーが少ない今だからこそ、<br />
              いち早くこの領域に飛び込んでほしい。<br />
              一緒に市場を作っていく仲間が必要です。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Concept;