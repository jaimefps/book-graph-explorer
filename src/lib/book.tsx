import { Tooltip } from "@mui/material"

export const BookLink: React.FC<{
  node: string
  onClickProof: (node: string) => void
  children: React.ReactNode
}> = ({ children, node, onClickProof }) => (
  <Tooltip title={<span style={{ fontSize: 14 }}>{node}</span>}>
    <span className="book-link" onClick={() => onClickProof(node)}>
      {children}
    </span>
  </Tooltip>
)

export const sample = {
  en: ({ onClickProof }: { onClickProof: (node: string) => void }) => (
    <span>
      Substance is by nature prior to its modifications. Proof.—This is clear
      from Deff.{" "}
      <BookLink node="e1def3" onClickProof={onClickProof}>
        iii
      </BookLink>
      . and{" "}
      <BookLink node="e1def5" onClickProof={onClickProof}>
        v
      </BookLink>
      .
    </span>
  ),
  es: "",
  la: "",
}

export const sources = {
  la: {
    authors: ["Benedictus Spinoza"],
    sources: [
      {
        label: "Part 1",
        link: "https://www.thelatinlibrary.com/spinoza.ethica1.html",
      },
      {
        label: "Part II",
        link: "https://www.thelatinlibrary.com/spinoza.ethica2.html",
      },
      {
        label: "Part III",
        link: "https://www.thelatinlibrary.com/spinoza.ethica3.html",
      },
      {
        label: "Part IV",
        link: "https://www.thelatinlibrary.com/spinoza.ethica4.html",
      },
      {
        label: "Part V",
        link: "https://www.thelatinlibrary.com/spinoza.ethica5.html",
      },
    ],
  },
  en: {
    authors: ["R. H. M. Elwes"],
    sources: [
      {
        label: "Browser version",
        link: "https://www.gutenberg.org/cache/epub/3800/pg3800-images.html",
      },
      {
        label: "All versions",
        link: "https://www.gutenberg.org/ebooks/3800",
      },
    ],
  },
} as const

export const book = [
  [
    "e1def1",
    {
      text: {
        en: "By that which is self—caused, I mean that of which the essence involves existence, or that of which the nature is only conceivable as existent.",
        es: "",
        la: "",
      },
      proof: [],
    },
  ],
  [
    "e1def2",
    {
      text: {
        en: "A thing is called finite after its kind, when it can be limited by another thing of the same nature; for instance, a body is called finite because we always conceive another greater body. So, also, a thought is limited by another thought, but a body is not limited by thought, nor a thought by body.",
        es: "",
        la: "",
      },
      proof: [],
    },
  ],
  [
    "e1def3",
    {
      text: {
        en: "By substance, I mean that which is in itself, and is conceived through itself: in other words, that of which a conception can be formed independently of any other conception.",
        es: "",
        la: "",
      },
      proof: [],
    },
  ],
  [
    "e1def4",
    {
      text: {
        en: "By attribute, I mean that which the intellect perceives as constituting the essence of substance.",
        es: "",
        la: "",
      },
      proof: [],
    },
  ],
  [
    "e1def5",
    {
      text: {
        en: "By mode, I mean the modifications of substance, or that which exists in, and is conceived through, something other than itself.",
        es: "",
        la: "",
      },
      proof: [],
    },
  ],
  [
    "e1def6",
    {
      text: {
        en: "By God, I mean a being absolutely infinite—that is, a substance consisting in infinite attributes, of which each expresses eternal and infinite essentiality. Explanation—I say absolutely infinite, not infinite after its kind: for, of a thing infinite only after its kind, infinite attributes may be denied; but that which is absolutely infinite, contains in its essence whatever expresses reality, and involves no negation.",
        es: "",
        la: "",
      },
      proof: [],
    },
  ],
  [
    "e1def7",
    {
      text: {
        en: "That thing is called free, which exists solely by the necessity of its own nature, and of which the action is determined by itself alone. On the other hand, that thing is necessary, or rather constrained, which is determined by something external to itself to a fixed and definite method of existence or action.",
        es: "",
        la: "",
      },
      proof: [],
    },
  ],
  [
    "e1def8",
    {
      text: {
        en: "By eternity, I mean existence itself, in so far as it is conceived necessarily to follow solely from the definition of that which is eternal. Explanation—Existence of this kind is conceived as an eternal truth, like the essence of a thing, and, therefore, cannot be explained by means of continuance or time, though continuance may be conceived without a beginning or end.",
        es: "",
        la: "",
      },
      proof: [],
    },
  ],
  [
    "e1ax1",
    {
      text: {
        en: "Everything which exists, exists either in itself or in something else.",
        es: "",
        la: "",
      },
      proof: [],
    },
  ],
  [
    "e1ax2",
    {
      text: {
        en: "That which cannot be conceived through anything else must be conceived through itself.",
        es: "",
        la: "",
      },
      proof: [],
    },
  ],
  [
    "e1ax3",
    {
      text: {
        en: "From a given definite cause an effect necessarily follows; and, on the other hand, if no definite cause be granted, it is impossible that an effect can follow.",
        es: "",
        la: "",
      },
      proof: [],
    },
  ],
  [
    "e1ax4",
    {
      text: {
        en: "The knowledge of an effect depends on and involves the knowledge of a cause.",
        es: "",
        la: "",
      },
      proof: [],
    },
  ],
  [
    "e1ax5",
    {
      text: {
        en: "Things which have nothing in common cannot be understood, the one by means of the other; the conception of one does not involve the conception of the other.",
        es: "",
        la: "",
      },
      proof: [],
    },
  ],
  [
    "e1ax6",
    {
      text: {
        en: "A true idea must correspond with its ideate or object.",
        es: "",
        la: "",
      },
      proof: [],
    },
  ],
  [
    "e1ax7",
    {
      text: {
        en: "If a thing can be conceived as non—existing, its essence does not involve existence.",
        es: "",
        la: "",
      },
      proof: [],
    },
  ],
  [
    "e1p1",
    {
      text: {
        en: "Substance is by nature prior to its modifications. Proof.—This is clear from Deff. iii. and v.",
        es: "",
        la: "",
      },
      proof: ["e1def3", "e1def5"],
    },
  ],
  [
    "e1p2",
    {
      text: {
        en: "Two substances, whose attributes are different, have nothing in common. Proof.—Also evident from Def. iii. For each must exist in itself, and be conceived through itself; in other words, the conception of one does not imply the conception of the other.",
        es: "",
        la: "",
      },
      proof: ["e1def3"],
    },
  ],
  [
    "e1p3",
    {
      text: {
        en: "Things which have nothing in common cannot be one the cause of the other. Proof.—If they have nothing in common, it follows that one cannot be apprehended by means of the other (Ax. v.), and, therefore, one cannot be the cause of the other (Ax. iv.). Q.E.D.",
        es: "",
        la: "",
      },
      proof: ["e1ax5", "e1ax4"],
    },
  ],
  [
    "e1p4",
    {
      text: {
        en: "Two or more distinct things are distinguished one from the other, either by the difference of the attributes of the substances, or by the difference of their modifications. Proof.—Everything which exists, exists either in itself or in something else (Ax. i.),—that is (by Deff. iii. and v.), nothing is granted in addition to the understanding, except substance and its modifications. Nothing is, therefore, given besides the understanding, by which several things may be distinguished one from the other, except the substances, or, in other words (see Ax. iv.), their attributes and modifications. Q.E.D.",
        es: "",
        la: "",
      },
      proof: ["e1ax1", "e1def3", "e1def5", "e1ax4"],
    },
  ],
  [
    "e1p5",
    {
      text: {
        en: "There cannot exist in the universe two or more substances having the same nature or attribute. Proof.—If several distinct substances be granted, they must be distinguished one from the other, either by the difference of their attributes, or by the difference of their modifications (Prop. iv.). If only by the difference of their attributes, it will be granted that there cannot be more than one with an identical attribute. If by the difference of their modifications—as substance is naturally prior to its modifications (Prop. i.),—it follows that setting the modifications aside, and considering substance in itself, that is truly, (Deff. iii. and vi.), there cannot be conceived one substance different from another,—that is (by Prop. iv.), there cannot be granted several substances, but one substance only. Q.E.D.",
        es: "",
        la: "",
      },
      proof: ["e1p4", "e1p1", "e1def3", "e1def6"],
    },
  ],
  [
    "e1p6",
    {
      text: {
        en: "One substance cannot be produced by another substance. Proof.—It is impossible that there should be in the universe two substances with an identical attribute, i.e. which have anything common to them both (Prop. ii.), and, therefore (Prop. iii.), one cannot be the cause of the other, neither can one be produced by the other. Q.E.D.",
        es: "",
        la: "",
      },
      proof: ["e1p2", "e1p3"],
    },
  ],
  [
    "e1p6cor",
    {
      text: {
        en: "Corollary.—Hence it follows that a substance cannot be produced by anything external to itself. For in the universe nothing is granted, save substances and their modifications (as appears from Ax. i. and Deff. iii. and v.). Now (by the last Prop.) substance cannot be produced by another substance, therefore it cannot be produced by anything external to itself. Q.E.D. This is shown still more readily by the absurdity of the contradictory. For, if substance be produced by an external cause, the knowledge of it would depend on the knowledge of its cause (Ax. iv.), and (by Def. iii.) it would itself not be substance.",
        es: "",
        la: "",
      },
      // corollary must have parent as proof:
      proof: ["e1p6", "e1ax1", "e1def3", "e1def5", "e1p5", "e1ax4"],
    },
  ],
  [
    "e1p7",
    {
      text: {
        en: "Existence belongs to the nature of substances. Proof.—Substance cannot be produced by anything external (Corollary, Prop vi.), it must, therefore, be its own cause—that is, its essence necessarily involves existence, or existence belongs to its nature.",
        es: "",
        la: "",
      },
      proof: ["e1p6cor"],
    },
  ],
  [
    "e1p8",
    {
      text: {
        en: "Every substance is necessarily infinite. Proof.—There can only be one substance with an identical attribute, and existence follows from its nature (Prop. vii.); its nature, therefore, involves existence, either as finite or infinite. It does not exist as finite, for (by Def. ii.) it would then be limited by something else of the same kind, which would also necessarily exist (Prop. vii.); and there would be two substances with an identical attribute, which is absurd (Prop. v.). It therefore exists as infinite. Q.E.D.",
        es: "",
        la: "",
      },
      proof: ["e1p7", "e1def2", "e1p5"],
    },
  ],
  [
    "e1p8sch1",
    {
      text: {
        en: "Note I.—As finite existence involves a partial negation, and infinite existence is the absolute affirmation of the given nature, it follows (solely from Prop. vii.) that every substance is necessarily infinite.",
        es: "",
        la: "",
      },
      // scholium must have parent as proof
      proof: ["e1p8", "e1p7"],
    },
  ],
  [
    "e1p8sch2",
    {
      text: {
        en: "Note II.—No doubt it will be difficult for those who think about things loosely, and have not been accustomed to know them by their primary causes, to comprehend the demonstration of Prop. vii.: for such persons make no distinction between the modifications of substances and the substances themselves, and are ignorant of the manner in which things are produced; hence they may attribute to substances the beginning which they observe in natural objects. Those who are ignorant of true causes, make complete confusion—think that trees might talk just as well as men—that men might be formed from stones as well as from seed; and imagine that any form might be changed into any other. So, also, those who confuse the two natures, divine and human, readily attribute human passions to the deity, especially so long as they do not know how passions originate in the mind. But, if people would consider the nature of substance, they would have no doubt about the truth of Prop. vii. In fact, this proposition would be a universal axiom, and accounted a truism. For, by substance, would be understood that which is in itself, and is conceived through itself—that is, something of which the conception requires not the conception of anything else; whereas modifications exist in something external to themselves, and a conception of them is formed by means of a conception of the thing in which they exist. Therefore, we may have true ideas of non—existent modifications; for, although they may have no actual existence apart from the conceiving intellect, yet their essence is so involved in something external to themselves that they may through it be conceived. Whereas the only truth substances can have, external to the intellect, must consist in their existence, because they are conceived through themselves. Therefore, for a person to say that he has a clear and distinct—that is, a true—idea of a substance, but that he is not sure whether such substance exists, would be the same as if he said that he had a true idea, but was not sure whether or no it was false (a little consideration will make this plain); or if anyone affirmed that substance is created, it would be the same as saying that a false idea was true—in short, the height of absurdity. It must, then, necessarily be admitted that the existence of substance as its essence is an eternal truth. And we can hence conclude by another process of reasoning—that there is but one such substance. I think that this may profitably be done at once; and, in order to proceed regularly with the demonstration, we must premise:—— 1. The true definition of a thing neither involves nor expresses anything beyond the nature of the thing defined. From this it follows that—— 2. No definition implies or expresses a certain number of individuals, inasmuch as it expresses nothing beyond the nature of the thing defined. For instance, the definition of a triangle expresses nothing beyond the actual nature of a triangle: it does not imply any fixed number of triangles. 3. There is necessarily for each individual existent thing a cause why it should exist. 4. This cause of existence must either be contained in the nature and definition of the thing defined, or must be postulated apart from such definition. It therefore follows that, if a given number of individual things exist in nature, there must be some cause for the existence of exactly that number, neither more nor less. For example, if twenty men exist in the universe (for simplicity's sake, I will suppose them existing simultaneously, and to have had no predecessors), and we want to account for the existence of these twenty men, it will not be enough to show the cause of human existence in general; we must also show why there are exactly twenty men, neither more nor less: for a cause must be assigned for the existence of each individual. Now this cause cannot be contained in the actual nature of man, for the true definition of man does not involve any consideration of the number twenty. Consequently, the cause for the existence of these twenty men, and, consequently, of each of them, must necessarily be sought externally to each individual. Hence we may lay down the absolute rule, that everything which may consist of several individuals must have an external cause. And, as it has been shown already that existence appertains to the nature of substance, existence must necessarily be included in its definition; and from its definition alone existence must be deducible. But from its definition (as we have shown, notes ii., iii.), we cannot infer the existence of several substances; therefore it follows that there is only one substance of the same nature. Q.E.D.",
        es: "",
        la: "",
      },
      // scholium must have parent as proof
      proof: ["e1p8", "e1p7"],
    },
  ],
  [
    "e1p9",
    {
      text: {
        en: "The more reality or being a thing has, the greater the number of its attributes (Def. iv.).",
        es: "",
        la: "",
      },
      proof: ["e1def4"],
    },
  ],
  [
    "e1p10",
    {
      text: {
        en: "Each particular attribute of the one substance must be conceived through itself. Proof.—An attribute is that which the intellect perceives of substance, as constituting its essence (Def. iv.), and, therefore, must be conceived through itself (Def. iii.). Q.E.D.",
        es: "",
        la: "",
      },
      proof: ["e1def4", "e1def3"],
    },
  ],
  [
    "e1p10sch",
    {
      text: {
        en: "Note—It is thus evident that, though two attributes are, in fact, conceived as distinct—that is, one without the help of the other—yet we cannot, therefore, conclude that they constitute two entities, or two different substances. For it is the nature of substance that each of its attributes is conceived through itself, inasmuch as all the attributes it has have always existed simultaneously in it, and none could be produced by any other; but each expresses the reality or being of substance. It is, then, far from an absurdity to ascribe several attributes to one substance: for nothing in nature is more clear than that each and every entity must be conceived under some attribute, and that its reality or being is in proportion to the number of its attributes expressing necessity or eternity and infinity. Consequently it is abundantly clear, that an absolutely infinite being must necessarily be defined as consisting in infinite attributes, each of which expresses a certain eternal and infinite essence. If anyone now ask, by what sign shall he be able to distinguish different substances, let him read the following propositions, which show that there is but one substance in the universe, and that it is absolutely infinite, wherefore such a sign would be sought in vain.",
        es: "",
        la: "",
      },
      // scholium must have parent as proof
      proof: ["e1p10"],
    },
  ],
  [
    "e1p11",
    {
      text: {
        en: "God, or substance, consisting of infinite attributes, of which each expresses eternal and infinite essentiality, necessarily exists. Proof.—If this be denied, conceive, if possible, that God does not exist: then his essence does not involve existence. But this (Prop. vii.) is absurd. Therefore God necessarily exists. Another proof.—Of everything whatsoever a cause or reason must be assigned, either for its existence, or for its non—existence—e.g. if a triangle exist, a reason or cause must be granted for its existence; if, on the contrary, it does not exist, a cause must also be granted, which prevents it from existing, or annuls its existence. This reason or cause must either be contained in the nature of the thing in question, or be external to it. For instance, the reason for the non—existence of a square circle is indicated in its nature, namely, because it would involve a contradiction. On the other hand, the existence of substance follows also solely from its nature, inasmuch as its nature involves existence. (See Prop. vii.) But the reason for the existence of a triangle or a circle does not follow from the nature of those figures, but from the order of universal nature in extension. From the latter it must follow, either that a triangle necessarily exists, or that it is impossible that it should exist. So much is self—evident. It follows therefrom that a thing necessarily exists, if no cause or reason be granted which prevents its existence. If, then, no cause or reason can be given, which prevents the existence of God, or which destroys his existence, we must certainly conclude that he necessarily does exist. If such a reason or cause should be given, it must either be drawn from the very nature of God, or be external to him—that is, drawn from another substance of another nature. For if it were of the same nature, God, by that very fact, would be admitted to exist. But substance of another nature could have nothing in common with God (by Prop. ii.), and therefore would be unable either to cause or to destroy his existence. As, then, a reason or cause which would annul the divine existence cannot be drawn from anything external to the divine nature, such cause must perforce, if God does not exist, be drawn from God's own nature, which would involve a contradiction. To make such an affirmation about a being absolutely infinite and supremely perfect is absurd; therefore, neither in the nature of God, nor externally to his nature, can a cause or reason be assigned which would annul his existence. Therefore, God necessarily exists. Q.E.D. Another proof.—The potentiality of non—existence is a negation of power, and contrariwise the potentiality of existence is a power, as is obvious. If, then, that which necessarily exists is nothing but finite beings, such finite beings are more powerful than a being absolutely infinite, which is obviously absurd; therefore, either nothing exists, or else a being absolutely infinite necessarily exists also. Now we exist either in ourselves, or in something else which necessarily exists (see Axiom. i. and Prop. vii.). Therefore a being absolutely infinite—in other words, God (Def. vi.)—necessarily exists. Q.E.D.",
        es: "",
        la: "",
      },
      proof: ["e1p7", "e1p2", "e1ax1", "e1def6"],
    },
  ],
  [
    "e1p11sch",
    {
      text: {
        en: "Note.—In this last proof, I have purposely shown God's existence à posteriori, so that the proof might be more easily followed, not because, from the same premises, God's existence does not follow à priori. For, as the potentiality of existence is a power, it follows that, in proportion as reality increases in the nature of a thing, so also will it increase its strength for existence. Therefore a being absolutely infinite, such as God, has from himself an absolutely infinite power of existence, and hence he does absolutely exist. Perhaps there will be many who will be unable to see the force of this proof, inasmuch as they are accustomed only to consider those things which flow from external causes. Of such things, they see that those which quickly come to pass—that is, quickly come into existence—quickly also disappear; whereas they regard as more difficult of accomplishment—that is, not so easily brought into existence—those things which they conceive as more complicated. However, to do away with this misconception, I need not here show the measure of truth in the proverb, \"What comes quickly, goes quickly,\" nor discuss whether, from the point of view of universal nature, all things are equally easy, or otherwise: I need only remark that I am not here speaking of things, which come to pass through causes external to themselves, but only of substances which (by Prop. vi.) cannot be produced by any external cause. Things which are produced by external causes, whether they consist of many parts or few, owe whatsoever perfection or reality they possess solely to the efficacy of their external cause; and therefore their existence arises solely from the perfection of their external cause, not from their own. Contrariwise, whatsoever perfection is possessed by substance is due to no external cause; wherefore the existence of substance must arise solely from its own nature, which is nothing else but its essence. Thus, the perfection of a thing does not annul its existence, but, on the contrary, asserts it. Imperfection, on the other hand, does annul it; therefore we cannot be more certain of the existence of anything, than of the existence of a being absolutely infinite or perfect—that is, of God. For inasmuch as his essence excludes all imperfection, and involves absolute perfection, all cause for doubt concerning his existence is done away, and the utmost certainty on the question is given. This, I think, will be evident to every moderately attentive reader.",
        es: "",
        la: "",
      },
      // scholium must have parent as proof
      proof: ["e1p11", "e1p6"],
    },
  ],
  [
    "e1p12",
    {
      text: {
        en: "No attribute of substance can be conceived from which it would follow that substance can be divided. Proof.—The parts into which substance as thus conceived would be divided either will retain the nature of substance, or they will not. If the former, then (by Prop. viii.) each part will necessarily be infinite, and (by Prop. vi.) self—caused, and (by Prop. v.) will perforce consist of a different attribute, so that, in that case, several substances could be formed out of one substance, which (by Prop. vi.) is absurd. Moreover, the parts (by Prop. ii.) would have nothing in common with their whole, and the whole (by Def. iv. and Prop. x.) could both exist and be conceived without its parts, which everyone will admit to be absurd. If we adopt the second alternative—namely, that the parts will not retain the nature of substance—then, if the whole substance were divided into equal parts, it would lose the nature of substance, and would cease to exist, which (by Prop. vii.) is absurd.",
        es: "",
        la: "",
      },
      proof: ["e1p8", "e1p6", "e1p5", "e1p2", "e1def4", "e1p10", "e1p7"],
    },
  ],
  [
    "e1p13",
    {
      text: {
        en: "Substance absolutely infinite is indivisible. Proof.—If it could be divided, the parts into which it was divided would either retain the nature of absolutely infinite substance, or they would not. If the former, we should have several substances of the same nature, which (by Prop. v.) is absurd. If the latter, then (by Prop. vii.) substance absolutely infinite could cease to exist, which (by Prop. xi.) is also absurd.",
        es: "",
        la: "",
      },
      proof: ["e1p5", "e1p7", "e1p9"],
    },
  ],
  [
    "e1p13cor",
    {
      text: {
        en: "Corollary.—It follows, that no substance, and consequently no extended substance, in so far as it is substance, is divisible.",
        es: "",
        la: "",
      },
      // corollary must have parent as proof:
      proof: ["e1p13"],
    },
  ],
  [
    "e1p13sch",
    {
      text: {
        en: "Note.—The indivisibility of substance may be more easily understood as follows. The nature of substance can only be conceived as infinite, and by a part of substance, nothing else can be understood than finite substance, which (by Prop. viii) involves a manifest contradiction.",
        es: "",
        la: "",
      },
      // scholium must have parent as proof
      proof: ["e1p13", "e1p8"],
    },
  ],
  [
    "e1p14",
    {
      text: {
        en: "Besides God no substance can be granted or conceived. Proof.—As God is a being absolutely infinite, of whom no attribute that expresses the essence of substance can be denied (by Def. vi.), and he necessarily exists (by Prop. xi.); if any substance besides God were granted, it would have to be explained by some attribute of God, and thus two substances with the same attribute would exist, which (by Prop. v.) is absurd; therefore, besides God no substance can be granted, or, consequently, be conceived. If it could be conceived, it would necessarily have to be conceived as existent; but this (by the first part of this proof) is absurd. Therefore, besides God no substance can be granted or conceived. Q.E.D.",
        es: "",
        la: "",
      },
      proof: ["e1def6", "e1p11", "e1p5"],
    },
  ],
  [
    "e1p14cor1",
    {
      text: {
        en: "Corollary I.—Clearly, therefore: 1. God is one, that is (by Def. vi.) only one substance can be granted in the universe, and that substance is absolutely infinite, as we have already indicated (in the note to Prop. x.).",
        es: "",
        la: "",
      },
      // corollary must have parent as proof:
      proof: ["e1p14", "e1def6", "e1p10"],
    },
  ],
  [
    "e1p14cor2",
    {
      text: {
        en: "",
        es: "",
        la: "",
      },
      // corollary must have parent as proof:
      proof: ["e1p14", "e1ax1"],
    },
  ],
  [
    "e1p15",
    {
      text: {
        en: "Whatsoever is, is in God, and without God nothing can be, or be conceived. Proof.—Besides God, no substance is granted or can be conceived (by Prop. xiv.), that is (by Def. iii.) nothing which is in itself and is conceived through itself. But modes (by Def. v.) can neither be, nor be conceived without substance; wherefore they can only be in the divine nature, and can only through it be conceived. But substances and modes form the sum total of existence (by Ax. i.), therefore, without God nothing can be, or be conceived. Q.E.D.",
        es: "",
        la: "",
      },
      proof: ["e1p14", "e1def3", "e1def5", "e1ax1"],
    },
  ],
  [
    "e1p15sch",
    {
      text: {
        en: "Note.—Some assert that God, like a man, consists of body and mind, and is susceptible of passions. How far such persons have strayed from the truth is sufficiently evident from what has been said. But these I pass over. For all who have in anywise reflected on the divine nature deny that God has a body. Of this they find excellent proof in the fact that we understand by body a definite quantity, so long, so broad, so deep, bounded by a certain shape, and it is the height of absurdity to predicate such a thing of God, a being absolutely infinite. But meanwhile by other reasons with which they try to prove their point, they show that they think corporeal or extended substance wholly apart from the divine nature, and say it was created by God. Wherefrom the divine nature can have been created, they are wholly ignorant; thus they clearly show, that they do not know the meaning of their own words. I myself have proved sufficiently clearly, at any rate in my own judgment (Coroll. Prop. vi, and note 2, Prop. viii.), that no substance can be produced or created by anything other than itself. Further, I showed (in Prop. xiv.), that besides God no substance can be granted or conceived. Hence we drew the conclusion that extended substance is one of the infinite attributes of God. However, in order to explain more fully, I will refute the arguments of my adversaries, which all start from the following points:—— Extended substance, in so far as it is substance, consists, as they think, in parts, wherefore they deny that it can be infinite, or consequently, that it can appertain to God. This they illustrate with many examples, of which I will take one or two. If extended substance, they say, is infinite, let it be conceived to be divided into two parts; each part will then be either finite or infinite. If the former, then infinite substance is composed of two finite parts, which is absurd. If the latter, then one infinite will be twice as large as another infinite, which is also absurd. Further, if an infinite line be measured out in foot lengths, it will consist of an infinite number of such parts; it would equally consist of an infinite number of parts, if each part measured only an inch: therefore, one infinity would be twelve times as great as the other. Lastly, if from a single point there be conceived to be drawn two diverging lines which at first are at a definite distance apart, but are produced to infinity, it is certain that the distance between the two lines will be continually increased, until at length it changes from definite to indefinable. As these absurdities follow, it is said, from considering quantity as infinite, the conclusion is drawn, that extended substance must necessarily be finite, and, consequently, cannot appertain to the nature of God. The second argument is also drawn from God's supreme perfection. God, it is said, inasmuch as he is a supremely perfect being, cannot be passive; but extended substance, insofar as it is divisible, is passive. It follows, therefore, that extended substance does not appertain to the essence of God. Such are the arguments I find on the subject in writers, who by them try to prove that extended substance is unworthy of the divine nature, and cannot possibly appertain thereto. However, I think an attentive reader will see that I have already answered their propositions; for all their arguments are founded on the hypothesis that extended substance is composed of parts, and such a hypothesis I have shown (Prop. xii., and Coroll. Prop. xiii.) to be absurd. Moreover, anyone who reflects will see that all these absurdities (if absurdities they be, which I am not now discussing), from which it is sought to extract the conclusion that extended substance is finite, do not at all follow from the notion of an infinite quantity, but merely from the notion that an infinite quantity is measurable, and composed of finite parts therefore, the only fair conclusion to be drawn is that: infinite quantity is not measurable, and cannot be composed of finite parts. This is exactly what we have already proved (in Prop. xii.). Wherefore the weapon which they aimed at us has in reality recoiled upon themselves. If, from this absurdity of theirs, they persist in drawing the conclusion that extended substance must be finite, they will in good sooth be acting like a man who asserts that circles have the properties of squares, and, finding himself thereby landed in absurdities, proceeds to deny that circles have any center, from which all lines drawn to the circumference are equal. For, taking extended substance, which can only be conceived as infinite, one, and indivisible (Props. viii., v., xii.) they assert, in order to prove that it is finite, that it is composed of finite parts, and that it can be multiplied and divided. So, also, others, after asserting that a line is composed of points, can produce many arguments to prove that a line cannot be infinitely divided. Assuredly it is not less absurd to assert that extended substance is made up of bodies or parts, than it would be to assert that a solid is made up of surfaces, a surface of lines, and a line of points. This must be admitted by all who know clear reason to be infallible, and most of all by those who deny the possibility of a vacuum. For if extended substance could be so divided that its parts were really separate, why should not one part admit of being destroyed, the others remaining joined together as before? And why should all be so fitted into one another as to leave no vacuum? Surely in the case of things, which are really distinct one from the other, one can exist without the other, and can remain in its original condition. As, then, there does not exist a vacuum in nature (of which anon), but all parts are bound to come together to prevent it, it follows from this that the parts cannot really be distinguished, and that extended substance in so far as it is substance cannot be divided. If anyone asks me the further question, Why are we naturally so prone to divide quantity? I answer, that quantity is conceived by us in two ways; in the abstract and superficially, as we imagine it; or as substance, as we conceive it solely by the intellect. If, then, we regard quantity as it is represented in our imagination, which we often and more easily do, we shall find that it is finite, divisible, and compounded of parts; but if we regard it as it is represented in our intellect, and conceive it as substance, which it is very difficult to do, we shall then, as I have sufficiently proved, find that it is infinite, one, and indivisible. This will be plain enough to all who make a distinction between the intellect and the imagination, especially if it be remembered, that matter is everywhere the same, that its parts are not distinguishable, except in so far as we conceive matter as diversely modified, whence its parts are distinguished, not really, but modally. For instance, water, in so far as it is water, we conceive to be divided, and its parts to be separated one from the other; but not in so far as it is extended substance; from this point of view it is neither separated nor divisible. Further, water, in so far as it is water, is produced and corrupted; but, in so far as it is substance, it is neither produced nor corrupted. I think I have now answered the second argument; it is, in fact, founded on the same assumption as the first—namely, that matter, in so far as it is substance, is divisible, and composed of parts. Even if it were so, I do not know why it should be considered unworthy of the divine nature, inasmuch as besides God (by Prop. xiv.) no substance can be granted, wherefrom it could receive its modifications. All things, I repeat, are in God, and all things which come to pass, come to pass solely through the laws of the infinite nature of God, and follow (as I will shortly show) from the necessity of his essence. Wherefore it can in nowise be said, that God is passive in respect to anything other than himself, or that extended substance is unworthy of the Divine nature, even if it be supposed divisible, so long as it is granted to be infinite and eternal. But enough of this for the present.",
        es: "",
        la: "",
      },
      // scholium must have parent as proof
      proof: [
        "e1p15",
        "e1p6cor",
        "e1p8sch2",
        "e1p14",
        "e1p12",
        "e1p13cor",
        "e1p8",
        "e1p5",
      ],
      // In Vidal Peña's translation, he suggests that when Spinoza speaks of the impossibility
      // of void in Extension, Spinoza might be referring to his arguments in PCP part 2 prop 3:
      ext: ["pcp2p3"],
    },
  ],
  [
    "e1p16",
    {
      text: {
        en: "From the necessity of the divine nature must follow an infinite number of things in infinite ways—that is, all things which can fall within the sphere of infinite intellect. Proof.—This proposition will be clear to everyone, who remembers that from the given definition of any thing the intellect infers several properties, which really necessarily follow therefrom (that is, from the actual essence of the thing defined); and it infers more properties in proportion as the definition of the thing expresses more reality, that is, in proportion as the essence of the thing defined involves more reality. Now, as the divine nature has absolutely infinite attributes (by Def. vi.), of which each expresses infinite essence after its kind, it follows that from the necessity of its nature an infinite number of things (that is, everything which can fall within the sphere of an infinite intellect) must necessarily follow. Q.E.D.",
        es: "",
        la: "",
      },
      proof: ["e1def6"],
    },
  ],
  [
    "e1p16cor1",
    {
      text: {
        en: "Corollary I.—Hence it follows, that God is the efficient cause of all that can fall within the sphere of an infinite intellect.",
        es: "",
        la: "",
      },
      // corollary must have parent as proof:
      proof: ["e1p16"],
    },
  ],
  [
    "e1p16cor2",
    {
      text: {
        en: "Corollary II.—It also follows that God is a cause in himself, and not through an accident of his nature.",
        es: "",
        la: "",
      },
      // corollary must have parent as proof:
      proof: ["e1p16"],
    },
  ],
  [
    "e1p16cor3",
    {
      text: {
        en: "Corollary III.—It follows, thirdly, that God is the absolutely first cause.",
        es: "",
        la: "",
      },
      // corollary must have parent as proof:
      proof: ["e1p16"],
    },
  ],
  [
    "e1p17",
    {
      text: {
        en: "God acts solely by the laws of his own nature, and is not constrained by anyone. Proof.—We have just shown (in Prop. xvi.), that solely from the necessity of the divine nature, or, what is the same thing, solely from the laws of his nature, an infinite number of things absolutely follow in an infinite number of ways; and we proved (in Prop. xv.), that without God nothing can be nor be conceived but that all things are in God. Wherefore nothing can exist; outside himself, whereby he can be conditioned or constrained to act. Wherefore God acts solely by the laws of his own nature, and is not constrained by anyone. Q.E.D.",
        es: "",
        la: "",
      },
      proof: ["e1p16", "e1p15"],
    },
  ],
  [
    "e1p17cor1",
    {
      text: {
        en: "Corollary I.—It follows: 1. That there can be no cause which, either extrinsically or intrinsically, besides the perfection of his own nature, moves God to act.",
        es: "",
        la: "",
      },
      // corollary must have parent as proof:
      proof: ["e1p17"],
    },
  ],
  [
    "e1p17cor2",
    {
      text: {
        en: "Corollary II.—It follows: 2. That God is the sole free cause. For God alone exists by the sole necessity of his nature (by Prop. xi. and Prop. xiv., Coroll. i.), and acts by the sole necessity of his own nature, wherefore God is (by Def. vii.) the sole free cause. Q.E.D.",
        es: "",
        la: "",
      },
      // corollary must have parent as proof:
      proof: ["e1p17", "e1p11", "e1p14cor1", "e1def7"],
    },
  ],
  [
    "e1p17sch",
    {
      text: {
        en: "Note.—Others think that God is a free cause, because he can, as they think, bring it about, that those things which we have said follow from his nature—that is, which are in his power, should not come to pass, or should not be produced by him. But this is the same as if they said, that God could bring it about, that it should follow from the nature of a triangle that its three interior angles should not be equal to two right angles; or that from a given cause no effect should follow, which is absurd. Moreover, I will show below, without the aid of this proposition, that neither intellect nor will appertain to God's nature. I know that there are many who think that they can show, that supreme intellect and free will do appertain to God's nature; for they say they know of nothing more perfect, which they can attribute to God, than that which is the highest perfection in ourselves. Further, although they conceive God as actually supremely intelligent, they yet do not believe that he can bring into existence everything which he actually understands, for they think that they would thus destroy God's power. If, they contend, God had created everything which is in his intellect, he would not be able to create anything more, and this, they think, would clash with God's omnipotence; therefore, they prefer to asset that God is indifferent to all things, and that he creates nothing except that which he has decided, by some absolute exercise of will, to create. However, I think I have shown sufficiently clearly (by Prop. xvi.), that from God's supreme power, or infinite nature, an infinite number of things—that is, all things have necessarily flowed forth in an infinite number of ways, or always flow from the same necessity; in the same way as from the nature of a triangle it follows from eternity and for eternity, that its three interior angles are equal to two right angles. Wherefore the omnipotence of God has been displayed from all eternity, and will for all eternity remain in the same state of activity. This manner of treating the question attributes to God an omnipotence, in my opinion, far more perfect. For, otherwise, we are compelled to confess that God understands an infinite number of creatable things, which he will never be able to create, for, if he created all that he understands, he would, according to this showing, exhaust his omnipotence, and render himself imperfect. Wherefore, in order to establish that God is perfect, we should be reduced to establishing at the same time, that he cannot bring to pass everything over which his power extends; this seems to be a hypothesis most absurd, and most repugnant to God's omnipotence. Further (to say a word here concerning the intellect and the will which we attribute to God), if intellect and will appertain to the eternal essence of God, we must take these words in some significance quite different from those they usually bear. For intellect and will, which should constitute the essence of God, would perforce be as far apart as the poles from the human intellect and will, in fact, would have nothing in common with them but the name; there would be about as much correspondence between the two as there is between the Dog, the heavenly constellation, and a dog, an animal that barks. This I will prove as follows. If intellect belongs to the divine nature, it cannot be in nature, as ours is generally thought to be, posterior to, or simultaneous with the things understood, inasmuch as God is prior to all things by reason of his causality (Prop. xvi., Coroll. i.). On the contrary, the truth and formal essence of things is as it is, because it exists by representation as such in the intellect of God. Wherefore the intellect of God, in so far as it is conceived to constitute God's essence, is, in reality, the cause of things, both of their essence and of their existence. This seems to have been recognized by those who have asserted, that God's intellect, God's will, and God's power, are one and the same. As, therefore, God's intellect is the sole cause of things, namely, both of their essence and existence, it must necessarily differ from them in respect to its essence, and in respect to its existence. For a cause differs from a thing it causes, precisely in the quality which the latter gains from the former. For example, a man is the cause of another man's existence, but not of his essence (for the latter is an eternal truth), and, therefore, the two men may be entirely similar in essence, but must be different in existence; and hence if the existence of one of them cease, the existence of the other will not necessarily cease also; but if the essence of one could be destroyed, and be made false, the essence of the other would be destroyed also. Wherefore, a thing which is the cause both of the essence and of the existence of a given effect, must differ from such effect both in respect to its essence, and also in respect to its existence. Now the intellect of God is the cause both of the essence and the existence of our intellect; therefore, the intellect of God in so far as it is conceived to constitute the divine essence, differs from our intellect both in respect to essence and in respect to existence, nor can it in anywise agree therewith save in name, as we said before. The reasoning would be identical in the case of the will, as anyone can easily see.",
        es: "",
        la: "",
      },
      // scholium must have parent as proof
      proof: ["e1p17", "e1p16", "e1p16cor1"],
    },
  ],
  [
    "e1p18",
    {
      text: {
        en: "God is the indwelling and not the transient cause of all things. Proof.—All things which are, are in God, and must be conceived through God (by Prop. xv.), therefore (by Prop. xvi., Coroll. i.) God is the cause of those things which are in him. This is our first point. Further, besides God there can be no substance (by Prop. xiv.), that is nothing in itself external to God. This is our second point. God, therefore, is the indwelling and not the transient cause of all things. Q.E.D.",
        es: "",
        la: "",
      },
      proof: ["e1p15", "e1p16cor1", "e1p14"],
    },
  ],
  [
    "e1p19",
    {
      text: {
        en: "God, and all the attributes of God, are eternal. Proof.—God (by Def. vi.) is substance, which (by Prop. xi.) necessarily exists, that is (by Prop. vii.) existence appertains to its nature, or (what is the same thing) follows from its definition; therefore, God is eternal (by Def. viii.). Further, by the attributes of God we must understand that which (by Def. iv.) expresses the essence of the divine substance—in other words, that which appertains to substance: that, I say, should be involved in the attributes of substance. Now eternity appertains to the nature of substance (as I have already shown in Prop. vii.); therefore, eternity must appertain to each of the attributes, and thus all are eternal. Q.E.D.",
        es: "",
        la: "",
      },
      proof: ["e1def6", "e1p11", "e1p7", "e1def8", "e1def4"],
    },
  ],
  [
    "e1p19sch",
    {
      text: {
        en: 'Note.—This proposition is also evident from the manner in which (in Prop. xi.) I demonstrated the existence of God; it is evident, I repeat, from that proof, that the existence of God, like his essence, is an eternal truth. Further (in Prop. xix. of my "Principles of the Cartesian Philosophy"), I have proved the eternity of God, in another manner, which I need not here repeat.',
        es: "",
        la: "",
      },
      // scholium must contain parent as proof:
      proof: ["e1p19"],
      // here Spinoza explicitly
      // mentions outside source:
      ext: ["pcp1p19"],
    },
  ],
  [
    "e1p20",
    {
      text: {
        en: "The existence of God and his essence are one and the same. Proof.—God (by the last Prop.) and all his attributes are eternal, that is (by Def. viii.) each of his attributes expresses existence. Therefore the same attributes of God which explain his eternal essence, explain at the same time his eternal existence—in other words, that which constitutes God's essence constitutes at the same time his existence. Wherefore God's existence and God's essence are one and the same. Q.E.D.",
        es: "",
        la: "",
      },
      proof: ["e1p19", "e1def8"],
    },
  ],
  [
    "e1p20cor1",
    {
      text: {
        en: "Coroll. I.—Hence it follows that God's existence, like his essence, is an eternal truth.",
        es: "",
        la: "",
      },
      // corollary must have parent as proof:
      proof: ["e1p20"],
    },
  ],
  [
    "e1p20cor2",
    {
      text: {
        en: "Coroll. II—Secondly, it follows that God, and all the attributes of God, are unchangeable. For if they could be changed in respect to existence, they must also be able to be changed in respect to essence—that is, obviously, be changed from true to false, which is absurd.",
        es: "",
        la: "",
      },
      // corollary must have parent as proof:
      proof: ["e1p20"],
    },
  ],
  [
    "e1p21",
    {
      text: {
        en: "All things which follow from the absolute nature of any attribute of God must always exist and be infinite, or, in other words, are eternal and infinite through the said attribute. Proof.—Conceive, if it be possible (supposing the proposition to be denied), that something in some attribute of God can follow from the absolute nature of the said attribute, and that at the same time it is finite, and has a conditioned existence or duration; for instance, the idea of God expressed in the attribute thought. Now thought, in so far as it is supposed to be an attribute of God, is necessarily (by Prop. xi.) in its nature infinite. But, in so far as it possesses the idea of God, it is supposed finite. It cannot, however, be conceived as finite, unless it be limited by thought (by Def. ii.); but it is not limited by thought itself, in so far as it has constituted the idea of God (for so far it is supposed to be finite); therefore, it is limited by thought, in so far as it has not constituted the idea of God, which nevertheless (by Prop. xi.) must necessarily exist. We have now granted, therefore, thought not constituting the idea of God, and, accordingly, the idea of God does not naturally follow from its nature in so far as it is absolute thought (for it is conceived as constituting, and also as not constituting, the idea of God), which is against our hypothesis. Wherefore, if the idea of God expressed in the attribute thought, or, indeed, anything else in any attribute of God (for we may take any example, as the proof is of universal application) follows from the necessity of the absolute nature of the said attribute, the said thing must necessarily be infinite, which was our first point. Furthermore, a thing which thus follows from the necessity of the nature of any attribute cannot have a limited duration. For if it can, suppose a thing, which follows from the necessity of the nature of some attribute, to exist in some attribute of God, for instance, the idea of God expressed in the attribute thought, and let it be supposed at some time not to have existed, or to be about not to exist. Now thought being an attribute of God, must necessarily exist unchanged (by Prop. xi., and Prop. xx., Coroll. ii.); and beyond the limits of the duration of the idea of God (supposing the latter at some time not to have existed, or not to be going to exist) thought would perforce have existed without the idea of God, which is contrary to our hypothesis, for we supposed that, thought being given, the idea of God necessarily flowed therefrom. Therefore the idea of God expressed in thought, or anything which necessarily follows from the absolute nature of some attribute of God, cannot have a limited duration, but through the said attribute is eternal, which is our second point. Bear in mind that the same proposition may be affirmed of anything, which in any attribute necessarily follows from God's absolute nature.",
        es: "",
        la: "",
      },
      proof: ["e1p11", "e1def2", "e1p20cor2"],
    },
  ],
  [
    "e1p22",
    {
      text: {
        en: "Whatsoever follows from any attribute of God, in so far as it is modified by a modification, which exists necessarily and as infinite, through the said attribute, must also exist necessarily and as infinite. Proof.—The proof of this proposition is similar to that of the preceding one.",
        es: "",
        la: "",
      },
      // But what is the proof?
      // For now assuming it has the
      // same dependencies as e1p21; so
      // e1p21 can be its proxy parent:
      proof: ["e1p21"],
    },
  ],
  [
    "e1p23",
    {
      text: {
        en: "Every mode, which exists both necessarily and as infinite, must necessarily follow either from the absolute nature of some attribute of God, or from an attribute modified by a modification which exists necessarily, and as infinite. Proof.—A mode exists in something else, through which it must be conceived (Def. v.), that is (Prop. xv.), it exists solely in God, and solely through God can be conceived. If therefore a mode is conceived as necessarily existing and infinite, it must necessarily be inferred or perceived through some attribute of God, in so far as such attribute is conceived as expressing the infinity and necessity of existence, in other words (Def. viii.) eternity; that is, in so far as it is considered absolutely. A mode, therefore, which necessarily exists as infinite, must follow from the absolute nature of some attribute of God, either immediately (Prop. xxi.) or through the means of some modification, which follows from the absolute nature of the said attribute; that is (by Prop. xxii.), which exists necessarily and as infinite.",
        es: "",
        la: "",
      },
      proof: ["e1def5", "e1p15", "e1def8", "e1p21", "e1p22"],
    },
  ],
  [
    "e1p24",
    {
      text: {
        en: "The essence of things produced by God does not involve existence. Proof.—This proposition is evident from Def. i. For that of which the nature (considered in itself) involves existence is self—caused, and exists by the sole necessity of its own nature.",
        es: "",
        la: "",
      },
      proof: ["e1def1"],
    },
  ],
  [
    "e1p24cor",
    {
      text: {
        en: "Corollary.—Hence it follows that God is not only the cause of things coming into existence, but also of their continuing in existence, that is, in scholastic phraseology, God is cause of the being of things (essendi rerum). For whether things exist, or do not exist, whenever we contemplate their essence, we see that it involves neither existence nor duration; consequently, it cannot be the cause of either the one or the other. God must be the sole cause, inasmuch as to him alone does existence appertain. (Prop. xiv. Coroll. i.) Q.E.D.",
        es: "",
        la: "",
      },
      // corollary must have parent as proof:
      proof: ["e1p24", "e1p14cor1"],
    },
  ],
  [
    "e1p25",
    {
      text: {
        en: "God is the efficient cause not only of the existence of things, but also of their essence. Proof.—If this be denied, then God is not the cause of the essence of things; and therefore the essence of things can (by Ax. iv.) be conceived without God. This (by Prop. xv.) is absurd. Therefore, God is the cause of the essence of things. Q.E.D.",
        es: "",
        la: "",
      },
      // note: e1p25sch says that e1p16 is an
      // even better proof of this proposition:
      proof: ["e1ax4", "e1p15", "e1p16"],
    },
  ],
  [
    "e1p25sch",
    {
      text: {
        en: "Note.—This proposition follows more clearly from Prop. xvi. For it is evident thereby that, given the divine nature, the essence of things must be inferred from it, no less than their existence—in a word, God must be called the cause of all things, in the same sense as he is called the cause of himself. This will be made still clearer by the following corollary.",
        es: "",
        la: "",
      },
      // scholium must have parent as proof;
      // note: we insert e1p16 in the parent, instead of
      // here, since the explanation suggests as much; and by
      // the transitive relation, it still continues to be a part
      // of the proof here as this relies on the parent statement:
      proof: ["e1p25"],
    },
  ],
  [
    "e1p25cor",
    {
      text: {
        en: "Corollary.—Individual things are nothing but modifications of the attributes of God, or modes by which the attributes of God are expressed in a fixed and definite manner. The proof appears from Prop. xv. and Def. v.",
        es: "",
        la: "",
      },
      // corollary must have parent as proof:
      proof: ["e1p25", "e1p15", "e1def5"],
    },
  ],
  [
    "e1p26",
    {
      text: {
        en: "A thing which is conditioned to act in a particular manner, has necessarily been thus conditioned by God; and that which has not been conditioned by God cannot condition itself to act. Proof.—That by which things are said to be conditioned to act in a particular manner is necessarily something positive (this is obvious); therefore both of its essence and of its existence God by the necessity of his nature is the efficient cause (Props. xxv. and xvi.); this is our first point. Our second point is plainly to be inferred therefrom. For if a thing, which has not been conditioned by God, could condition itself, the first part of our proof would be false, and this, as we have shown is absurd.",
        es: "",
        la: "",
      },
      proof: ["e1p25", "e1p16"],
    },
  ],
  [
    "e1p27",
    {
      text: {
        en: "A thing, which has been conditioned by God to act in a particular way, cannot render itself unconditioned. Proof.—This proposition is evident from the third axiom.",
        es: "",
        la: "",
      },
      proof: ["e1ax3"],
    },
  ],
  [
    "e1p28",
    {
      text: {
        en: "Every individual thing, or everything which is finite and has a conditioned existence, cannot exist or be conditioned to act, unless it be conditioned for existence and action by a cause other than itself, which also is finite, and has a conditioned existence; and likewise this cause cannot in its turn exist, or be conditioned to act, unless it be conditioned for existence and action by another cause, which also is finite, and has a conditioned existence, and so on to infinity. Proof.—Whatsoever is conditioned to exist and act, has been thus conditioned by God (by Prop. xxvi. and Prop. xxiv., Coroll.). But that which is finite, and has a conditioned existence, cannot be produced by the absolute nature of any attribute of God; for whatsoever follows from the absolute nature of any attribute of God is infinite and eternal (by Prop. xxi.). It must, therefore, follow from some attribute of God, in so far as the said attribute is considered as in some way modified; for substance and modes make up the sum total of existence (by Ax. i. and Def. iii., v.), while modes are merely modifications of the attributes of God. But from God, or from any of his attributes, in so far as the latter is modified by a modification infinite and eternal, a conditioned thing cannot follow. Wherefore it must follow from, or be conditioned for, existence and action by God or one of his attributes, in so far as the latter are modified by some modification which is finite, and has a conditioned existence. This is our first point. Again, this cause or this modification (for the reason by which we established the first part of this proof) must in its turn be conditioned by another cause, which also is finite, and has a conditioned existence, and, again, this last by another (for the same reason); and so on (for the same reason) to infinity. Q.E.D.",
        es: "",
        la: "",
      },
      proof: ["e1p26", "e1p24cor", "e1p21", "e1ax1", "e1def3", "e1def5"],
    },
  ],
  [
    "e1p28sch",
    {
      text: {
        en: "Note.—As certain things must be produced immediately by God, namely those things which necessarily follow from his absolute nature, through the means of these primary attributes, which, nevertheless, can neither exist nor be conceived without God, it follows:—1. That God is absolutely the proximate cause of those things immediately produced by him. I say absolutely, not after his kind, as is usually stated. For the effects of God cannot either exist or be conceived without a cause (Prop. xv. and Prop. xxiv. Coroll.). 2. That God cannot properly be styled the remote cause of individual things, except for the sake of distinguishing these from what he immediately produces, or rather from what follows from his absolute nature. For, by a remote cause, we understand a cause which is in no way conjoined to the effect. But all things which are, are in God, and so depend on God, that without him they can neither be nor be conceived.",
        es: "",
        la: "",
      },
      // scholium must have parent as proof:
      proof: ["e1p28", "e1p15", "e1p24cor"],
    },
  ],
  [
    "e1p29",
    {
      text: {
        en: "Nothing in the universe is contingent, but all things are conditioned to exist and operate in a particular manner by the necessity of the divine nature. Proof.—Whatsoever is, is in God (Prop. xv.). But God cannot be called a thing contingent. For (by Prop. xi.) he exists necessarily, and not contingently. Further, the modes of the divine nature follow therefrom necessarily, and not contingently (Prop. xvi.); and they thus follow, whether we consider the divine nature absolutely, or whether we consider it as in any way conditioned to act (Prop. xxvii.). Further, God is not only the cause of these modes, in so far as they simply exist (by Prop. xxiv, Coroll.), but also in so far as they are considered as conditioned for operating in a particular manner (Prop. xxvi.). If they be not conditioned by God (Prop. xxvi.), it is impossible, and not contingent, that they should condition themselves; contrariwise, if they be conditioned by God, it is impossible, and not contingent, that they should render themselves unconditioned. Wherefore all things are conditioned by the necessity of the divine nature, not only to exist, but also to exist and operate in a particular manner, and there is nothing that is contingent. Q.E.D.",
        es: "",
        la: "",
      },
      proof: ["e1p15", "e1p11", "e1p16", "e1p27", "e1p24cor", "e1p26"],
    },
  ],
  [
    "e1p29sch",
    {
      text: {
        en: "Note.—Before going any further, I wish here to explain, what we should understand by nature viewed as active (natura naturans), and nature viewed as passive (natura naturata). I say to explain, or rather call attention to it, for I think that, from what has been said, it is sufficiently clear, that by nature viewed as active we should understand that which is in itself, and is conceived through itself, or those attributes of substance, which express eternal and infinite essence, in other words (Prop. xiv., Coroll. i., and Prop. xvii., Coroll. ii) God, in so far as he is considered as a free cause. By nature viewed as passive I understand all that which follows from the necessity of the nature of God, or of any of the attributes of God, that is, all the modes of the attributes of God, in so far as they are considered as things which are in God, and which without God cannot exist or be conceived.",
        es: "",
        la: "",
      },
      // scholium must have parent as proof:
      proof: ["e1p29", "e1p14cor1", "e1p17cor2"],
    },
  ],
  [
    "e1p30",
    {
      text: {
        en: "Intellect, in function (actu) finite, or in function infinite, must comprehend the attributes of God and the modifications of God, and nothing else. Proof.—A true idea must agree with its object (Ax. vi.); in other words (obviously), that which is contained in the intellect in representation must necessarily be granted in nature. But in nature (by Prop. xiv., Coroll. i.) there is no substance save God, nor any modifications save those (Prop. xv.) which are in God, and cannot without God either be or be conceived. Therefore the intellect, in function finite, or in function infinite, must comprehend the attributes of God and the modifications of God, and nothing else. Q.E.D.",
        es: "",
        la: "",
      },
      proof: ["e1ax6", "e1p14cor1", "e1p15"],
    },
  ],
  [
    "e1p31",
    {
      text: {
        en: "The intellect in function, whether finite or infinite, as will, desire, love, &c., should be referred to passive nature and not to active nature. Proof.—By the intellect we do not (obviously) mean absolute thought, but only a certain mode of thinking, differing from other modes, such as love, desire, &c., and therefore (Def. v.) requiring to be conceived through absolute thought. It must (by Prop. xv. and Def. vi.), through some attribute of God which expresses the eternal and infinite essence of thought, be so conceived, that without such attribute it could neither be nor be conceived. It must therefore be referred to nature passive rather than to nature active, as must also the other modes of thinking. Q.E.D.",
        es: "",
        la: "",
      },
      proof: ["e1def5", "e1p15", "e1def6"],
    },
  ],
  [
    "e1p31sch",
    {
      text: {
        en: "Note.—I do not here, by speaking of intellect in function, admit that there is such a thing as intellect in potentiality: but, wishing to avoid all confusion, I desire to speak only of what is most clearly perceived by us, namely, of the very act of understanding, than which nothing is more clearly perceived. For we cannot perceive anything without adding to our knowledge of the act of understanding.",
        es: "",
        la: "",
      },
      // scholium must have parent as proof:
      proof: ["e1p31"],
    },
  ],
  [
    "e1p32",
    {
      text: {
        en: "Will cannot be called a free cause, but only a necessary cause. Proof.—Will is only a particular mode of thinking, like intellect; therefore (by Prop. xxviii.) no volition can exist, nor be conditioned to act, unless it be conditioned by some cause other than itself, which cause is conditioned by a third cause, and so on to infinity. But if will be supposed infinite, it must also be conditioned to exist and act by God, not by virtue of his being substance absolutely infinite, but by virtue of his possessing an attribute which expresses the infinite and eternal essence of thought (by Prop. xxiii.). Thus, however it be conceived, whether as finite or infinite, it requires a cause by which it should be conditioned to exist and act. Thus (Def. vii.) it cannot be called a free cause, but only a necessary or constrained cause. Q.E.D.",
        es: "",
        la: "",
      },
      proof: ["e1p28", "e1p23", "e1def7"],
    },
  ],
  [
    "e1p32cor1",
    {
      text: {
        en: "Coroll. I.—Hence it follows, first, that God does not act according to freedom of the will.",
        es: "",
        la: "",
      },
      // corollary must have parent as proof:
      proof: ["e1p32"],
    },
  ],
  [
    // here again Spinoza speaks of the corollary of e1p32 in singular form,
    // but I assume that he means both corollaries taken as a single group:
    "e1p32cor2",
    {
      text: {
        en: "Coroll. II.—It follows, secondly, that will and intellect stand in the same relation to the nature of God as do motion, and rest, and absolutely all natural phenomena, which must be conditioned by God (Prop. xxix.) to exist and act in a particular manner. For will, like the rest, stands in need of a cause, by which it is conditioned to exist and act in a particular manner. And although, when will or intellect be granted, an infinite number of results may follow, yet God cannot on that account be said to act from freedom of the will, any more than the infinite number of results from motion and rest would justify us in saying that motion and rest act by free will. Wherefore will no more appertains to God than does anything else in nature, but stands in the same relation to him as motion, rest, and the like, which we have shown to follow from the necessity of the divine nature, and to be conditioned by it to exist and act in a particular manner.",
        es: "",
        la: "",
      },
      // corollary must have parent as proof:
      proof: ["e1p32", "e1p29"],
    },
  ],
  [
    "e1p33",
    {
      text: {
        en: "hings could not have been brought into being by God in any manner or in any order different from that which has in fact obtained. Proof—All things necessarily follow from the nature of God (Prop. xvi.), and by the nature of God are conditioned to exist and act in a particular way (Prop. xxix.). If things, therefore, could have been of a different nature, or have been conditioned to act in a different way, so that the order of nature would have been different, God's nature would also have been able to be different from what it now is; and therefore (by Prop. xi.) that different nature also would have perforce existed, and consequently there would have been able to be two or more Gods. This (by Prop. xiv., Coroll. i.) is absurd. Therefore things could not have been brought into being by God in any other manner, &c. Q.E.D.",
        es: "",
        la: "",
      },
      proof: ["e1p16", "e1p29", "e1p11", "e1p14cor1"],
    },
  ],
  [
    "e1p33sch1",
    {
      text: {
        en: "",
        es: "",
        la: "",
      },
      // scholium must have parent as proof
      proof: ["e1p33"],
    },
  ],
  [
    "e1p33sch2",
    {
      text: {
        en: "Note II.—It clearly follows from what we have said, that things have been brought into being by God in the highest perfection, inasmuch as they have necessarily followed from a most perfect nature. Nor does this prove any imperfection in God, for it has compelled us to affirm his perfection. From its contrary proposition, we should clearly gather (as I have just shown), that God is not supremely perfect, for if things had been brought into being in any other way, we should have to assign to God a nature different from that, which we are bound to attribute to him from the consideration of an absolutely perfect being. I do not doubt, that many will scout this idea as absurd, and will refuse to give their minds up to contemplating it, simply because they are accustomed to assign to God a freedom very different from that which we (Def. vii.) have deduced. They assign to him, in short, absolute free will. However, I am also convinced that if such persons reflect on the matter, and duly weigh in their minds our series of propositions, they will reject such freedom as they now attribute to God, not only as nugatory, but also as a great impediment to organized knowledge. There is no need for me to repeat what I have said in the note to Prop. xvii. But, for the sake of my opponents, I will show further, that although it be granted that will pertains to the essence of God, it nevertheless follows from his perfection, that things could not have been by him created other than they are, or in a different order; this is easily proved, if we reflect on what our opponents themselves concede, namely, that it depends solely on the decree and will of God, that each thing is what it is. If it were otherwise, God would not be the cause of all things. Further, that all the decrees of God have been ratified from all eternity by God himself. If it were otherwise, God would be convicted of imperfection or change. But in eternity there is no such thing as when, before, or after; hence it follows solely from the perfection of God, that God never can decree, or never could have decreed anything but what is; that God did not exist before his decrees, and would not exist without them. But, it is said, supposing that God had made a different universe, or had ordained other decrees from all eternity concerning nature and her order, we could not therefore conclude any imperfection in God. But persons who say this must admit that God can change his decrees. For if God had ordained any decrees concerning nature and her order, different from those which he has ordained—in other words, if he had willed and conceived something different concerning nature—he would perforce have had a different intellect from that which he has, and also a different will. But if it were allowable to assign to God a different intellect and a different will, without any change in his essence or his perfection, what would there be to prevent him changing the decrees which he has made concerning created things, and nevertheless remaining perfect? For his intellect and will concerning things created and their order are the same, in respect to his essence and perfection, however they be conceived. Further, all the philosophers whom I have read admit that God's intellect is entirely actual, and not at all potential; as they also admit that God's intellect, and God's will, and God's essence are identical, it follows that, if God had had a different actual intellect and a different will, his essence would also have been different; and thus, as I concluded at first, if things had been brought into being by God in a different way from that which has obtained, God's intellect and will, that is (as is admitted) his essence would perforce have been different, which is absurd. As these things could not have been brought into being by God in any but the actual way and order which has obtained; and as the truth of this proposition follows from the supreme perfection of God; we can have no sound reason for persuading ourselves to believe that God did not wish to create all the things which were in his intellect, and to create them in the same perfection as he had understood them. But, it will be said, there is in things no perfection nor imperfection; that which is in them, and which causes them to be called perfect or imperfect, good or bad, depends solely on the will of God. If God had so willed, he might have brought it about that what is now perfection should be extreme imperfection, and vice versâ. What is such an assertion, but an open declaration that God, who necessarily understands that which he wishes, might bring it about by his will, that he should understand things differently from the way in which he does understand them? This (as we have just shown) is the height of absurdity. Wherefore, I may turn the argument against its employers, as follows:—All things depend on the power of God. In order that things should be different from what they are, God's will would necessarily have to be different. But God's will cannot be different (as we have just most clearly demonstrated) from God's perfection. Therefore neither can things be different. I confess, that the theory which subjects all things to the will of an indifferent deity, and asserts that they are all dependent on his fiat, is less far from the truth than the theory of those, who maintain that God acts in all things with a view of promoting what is good. For these latter persons seem to set up something beyond God, which does not depend on God, but which God in acting looks to as an exemplar, or which he aims at as a definite goal. This is only another name for subjecting God to the dominion of destiny, an utter absurdity in respect to God, whom we have shown to be the first and only free cause of the essence of all things and also of their existence. I need, therefore, spend no time in refuting such wild theories.",
        es: "",
        la: "",
      },
      // scholium must have parent as proof
      proof: ["e1p33", "e1def7", "e1p17"],
    },
  ],
  [
    "e1p34",
    {
      text: {
        en: "God's power is identical with his essence. Proof.—From the sole necessity of the essence of God it follows that God is the cause of himself (Prop. xi.) and of all things (Prop. xvi. and Coroll.). Wherefore the power of God, by which he and all things are and act, is identical with his essence. Q.E.D.",
        es: "",
        la: "",
      },
      // e1p16 has multiple corollaries, but here Spinoza just says "per propositionem 16 ejusque corollarium",
      // as in the singular form, so here I assume he meant all three as a single thing; i.e., as a group:
      proof: ["e1p11", "e1p16", "e1p16cor1", "e1p16cor2", "e1p16cor3"],
    },
  ],
  [
    "e1p35",
    {
      text: {
        en: "Whatsoever we conceive to be in the power of God, necessarily exists. Proof.—Whatsoever is in God's power, must (by the last Prop.) be comprehended in his essence in such a manner, that it necessarily follows therefrom, and therefore necessarily exists. Q.E.D.",
        es: "",
        la: "",
      },
      proof: ["e1p34"],
    },
  ],
  [
    "e1p36",
    {
      text: {
        en: "There is no cause from whose nature some effect does not follow. Proof.—Whatsoever exists expresses God's nature or essence in a given conditioned manner (by Prop. xxv., Coroll.); that is, (by Prop. xxxiv.), whatsoever exists, expresses in a given conditioned manner God's power, which is the cause of all things, therefore an effect must (by Prop. xvi.) necessarily follow. Q.E.D.",
        es: "",
        la: "",
      },
      proof: ["e1p25cor", "e1p34", "e1p16"],
    },
  ],
  [
    "e1apx",
    {
      text: {
        en: 'In the foregoing I have explained the nature and properties of God. I have shown that he necessarily exists, that he is one: that he is, and acts solely by the necessity of his own nature; that he is the free cause of all things, and how he is so; that all things are in God, and so depend on him, that without him they could neither exist nor be conceived; lastly, that all things are predetermined by God, not through his free will or absolute fiat, but from the very nature of God or infinite power. I have further, where occasion afforded, taken care to remove the prejudices, which might impede the comprehension of my demonstrations. Yet there still remain misconceptions not a few, which might and may prove very grave hindrances to the understanding of the concatenation of things, as I have explained it above. I have therefore thought it worth while to bring these misconceptions before the bar of reason. All such opinions spring from the notion commonly entertained, that all things in nature act as men themselves act, namely, with an end in view. It is accepted as certain, that God himself directs all things to a definite goal (for it is said that God made all things for man, and man that he might worship him). I will, therefore, consider this opinion, asking first, why it obtains general credence, and why all men are naturally so prone to adopt it? secondly, I will point out its falsity; and, lastly, I will show how it has given rise to prejudices about good and bad, right and wrong, praise and blame, order and confusion, beauty and ugliness, and the like. However, this is not the place to deduce these misconceptions from the nature of the human mind: it will be sufficient here, if I assume as a starting point, what ought to be universally admitted, namely, that all men are born ignorant of the causes of things, that all have the desire to seek for what is useful to them, and that they are conscious of such desire. Herefrom it follows, first, that men think themselves free inasmuch as they are conscious of their volitions and desires, and never even dream, in their ignorance, of the causes which have disposed them so to wish and desire. Secondly, that men do all things for an end, namely, for that which is useful to them, and which they seek. Thus it comes to pass that they only look for a knowledge of the final causes of events, and when these are learned, they are content, as having no cause for further doubt. If they cannot learn such causes from external sources, they are compelled to turn to considering themselves, and reflecting what end would have induced them personally to bring about the given event, and thus they necessarily judge other natures by their own. Further, as they find in themselves and outside themselves many means which assist them not a little in the search for what is useful, for instance, eyes for seeing, teeth for chewing, herbs and animals for yielding food, the sun for giving light, the sea for breeding fish, &c., they come to look on the whole of nature as a means for obtaining such conveniences. Now as they are aware, that they found these conveniences and did not make them, they think they have cause for believing, that some other being has made them for their use. As they look upon things as means, they cannot believe them to be self—created; but, judging from the means which they are accustomed to prepare for themselves, they are bound to believe in some ruler or rulers of the universe endowed with human freedom, who have arranged and adapted everything for human use. They are bound to estimate the nature of such rulers (having no information on the subject) in accordance with their own nature, and therefore they assert that the gods ordained everything for the use of man, in order to bind man to themselves and obtain from him the highest honor. Hence also it follows, that everyone thought out for himself, according to his abilities, a different way of worshipping God, so that God might love him more than his fellows, and direct the whole course of nature for the satisfaction of his blind cupidity and insatiable avarice. Thus the prejudice developed into superstition, and took deep root in the human mind; and for this reason everyone strove most zealously to understand and explain the final causes of things; but in their endeavor to show that nature does nothing in vain, i.e. nothing which is useless to man, they only seem to have demonstrated that nature, the gods, and men are all mad together. Consider, I pray you, the result: among the many helps of nature they were bound to find some hindrances, such as storms, earthquakes, diseases, &c.: so they declared that such things happen, because the gods are angry at some wrong done to them by men, or at some fault committed in their worship. Experience day by day protested and showed by infinite examples, that good and evil fortunes fall to the lot of pious and impious alike; still they would not abandon their inveterate prejudice, for it was more easy for them to class such contradictions among other unknown things of whose use they were ignorant, and thus to retain their actual and innate condition of ignorance, than to destroy the whole fabric of their reasoning and start afresh. They therefore laid down as an axiom, that God\'s judgments far transcend human understanding. Such a doctrine might well have sufficed to conceal the truth from the human race for all eternity, if mathematics had not furnished another standard of verity in considering solely the essence and properties of figures without regard to their final causes. There are other reasons (which I need not mention here) besides mathematics, which might have caused men\'s minds to be directed to these general prejudices, and have led them to the knowledge of the truth. I have now sufficiently explained my first point. There is no need to show at length, that nature has no particular goal in view, and that final causes are mere human figments. This, I think, is already evident enough, both from the causes and foundations on which I have shown such prejudice to be based, and also from Prop. xvi., and the Corollary of Prop. xxxii., and, in fact, all those propositions in which I have shown, that everything in nature proceeds from a sort of necessity, and with the utmost perfection. However, I will add a few remarks, in order to overthrow this doctrine of a final cause utterly. That which is really a cause it considers as an effect, and vice versâ: it makes that which is by nature first to be last, and that which is highest and most perfect to be most imperfect. Passing over the questions of cause and priority as self—evident, it is plain from Props. xxi., xxii., xxiii. that the effect is most perfect which is produced immediately by God; the effect which requires for its production several intermediate causes is, in that respect, more imperfect. But if those things which were made immediately by God were made to enable him to attain his end, then the things which come after, for the sake of which the first were made, are necessarily the most excellent of all. Further, this doctrine does away with the perfection of God: for, if God acts for an object, he necessarily desires something which he lacks. Certainly, theologians and metaphysicians draw a distinction between the object of want and the object of assimilation; still they confess that God made all things for the sake of himself, not for the sake of creation. They are unable to point to anything prior to creation, except God himself, as an object for which God should act, and are therefore driven to admit (as they clearly must), that God lacked those things for whose attainment he created means, and further that he desired them. We must not omit to notice that the followers of this doctrine, anxious to display their talent in assigning final causes, have imported a new method of argument in proof of their theory—namely, a reduction, not to the impossible, but to ignorance; thus showing that they have no other method of exhibiting their doctrine. For example, if a stone falls from a roof on to someone\'s head, and kills him, they will demonstrate by their new method, that the stone fell in order to kill the man; for, if it had not by God\'s will fallen with that object, how could so many circumstances (and there are often many concurrent circumstances) have all happened together by chance? Perhaps you will answer that the event is due to the facts that the wind was blowing, and the man was walking that way. "But why," they will insist, "was the wind blowing, and why was the man at that very time walking that way?" If you again answer, that the wind had then sprung up because the sea had begun to be agitated the day before, the weather being previously calm, and that the man had been invited by a friend, they will again insist: "But why was the sea agitated, and why was the man invited at that time?" So they will pursue their questions from cause to cause, till at last you take refuge in the will of God—in other words, the sanctuary of ignorance. So, again, when they survey the frame of the human body, they are amazed; and being ignorant of the causes of so great a work of art, conclude that it has been fashioned, not mechanically, but by divine and supernatural skill, and has been so put together that one part shall not hurt another. Hence anyone who seeks for the true causes of miracles, and strives to understand natural phenomena as an intelligent being, and not to gaze at them like a fool, is set down and denounced as an impious heretic by those, whom the masses adore as the interpreters of nature and the gods. Such persons know that, with the removal of ignorance, the wonder which forms their only available means for proving and preserving their authority would vanish also. But I now quit this subject, and pass on to my third point. After men persuaded themselves, that everything which is created is created for their sake, they were bound to consider as the chief quality in everything that which is most useful to themselves, and to account those things the best of all which have the most beneficial effect on mankind. Further, they were bound to form abstract notions for the explanation of the nature of things, such as goodness, badness, order, confusion, warmth, cold, beauty, deformity, and so on; and from the belief that they are free agents arose the further notions of praise and blame, sin and merit. I will speak of these latter hereafter, when I treat of human nature; the former I will briefly explain here. Everything which conduces to health and the worship of God they have called good, everything which hinders these objects they have styled bad; and inasmuch as those who do not understand the nature of things do not verify phenomena in any way, but merely imagine them after a fashion, and mistake their imagination for understanding, such persons firmly believe that there is an order in things, being really ignorant both of things and their own nature. When phenomena are of such a kind, that the impression they make on our senses requires little effort of imagination, and can consequently be easily remembered, we say that they are well—ordered; if the contrary, that they are ill—ordered or confused. Further, as things which are easily imagined are more pleasing to us, men prefer order to confusion—as though there were any order in nature, except in relation to our imagination—and say that God has created all things in order; thus, without knowing it, attributing imagination to God, unless, indeed, they would have it that God foresaw human imagination, and arranged everything, so that it should be most easily imagined. If this be their theory, they would not, perhaps, be daunted by the fact that we find an infinite number of phenomena, far surpassing our imagination, and very many others which confound its weakness. But enough has been said on this subject. The other abstract notions are nothing but modes of imagining, in which the imagination is differently affected: though they are considered by the ignorant as the chief attributes of things, inasmuch as they believe that everything was created for the sake of themselves; and, according as they are affected by it, style it good or bad, healthy or rotten and corrupt. For instance, if the motion which objects we see communicate to our nerves be conducive to health, the objects causing it are styled beautiful; if a contrary motion be excited, they are styled ugly. Things which are perceived through our sense of smell are styled fragrant or fetid; if through our taste, sweet or bitter, full—flavored or insipid; if through our touch, hard or soft, rough or smooth, &c. Whatsoever affects our ears is said to give rise to noise, sound, or harmony. In this last case, there are men lunatic enough to believe, that even God himself takes pleasure in harmony; and philosophers are not lacking who have persuaded themselves, that the motion of the heavenly bodies gives rise to harmony—all of which instances sufficiently show that everyone judges of things according to the state of his brain, or rather mistakes for things the forms of his imagination. We need no longer wonder that there have arisen all the controversies we have witnessed, and finally skepticism: for, although human bodies in many respects agree, yet in very many others they differ; so that what seems good to one seems bad to another; what seems well ordered to one seems confused to another; what is pleasing to one displeases another, and so on. I need not further enumerate, because this is not the place to treat the subject at length, and also because the fact is sufficiently well known. It is commonly said: "So many men, so many minds; everyone is wise in his own way; brains differ as completely as palates." All of which proverbs show, that men judge of things according to their mental disposition, and rather imagine than understand: for, if they understood phenomena, they would, as mathematicians attest, be convinced, if not attracted, by what I have urged. We have now perceived, that all the explanations commonly given of nature are mere modes of imagining, and do not indicate the true nature of anything, but only the constitution of the imagination; and, although they have names, as though they were entities, existing externally to the imagination, I call them entities imaginary rather than real; and, therefore, all arguments against us drawn from such abstractions are easily rebutted. Many argue in this way. If all things follow from a necessity of the absolutely perfect nature of God, why are there so many imperfections in nature? such, for instance, as things corrupt to the point of putridity, loathsome deformity, confusion, evil, sin, &c. But these reasoners are, as I have said, easily confuted, for the perfection of things is to be reckoned only from their own nature and power; things are not more or less perfect, according as they delight or offend human senses, or according as they are serviceable or repugnant to mankind. To those who ask why God did not so create all men, that they should be governed only by reason, I give no answer but this: because matter was not lacking to him for the creation of every degree of perfection from highest to lowest; or, more strictly, because the laws of his nature are so vast, as to suffice for the production of everything conceivable by an infinite intelligence, as I have shown in Prop. xvi. Such are the misconceptions I have undertaken to note; if there are any more of the same sort, everyone may easily dissipate them for himself with the aid of a little reflection.',
        es: "",
        la: "",
      },
      // Here Spinoza says "corollariis propositionis 32" though
      // this  English translation puts it in the singular form, but I
      // assume that he means both corollaries taken as a single group:
      proof: ["e1p16", "e1p32cor1", "e1p32cor2", "e1p21", "e1p22", "e1p23"],
    },
  ],
] as const

export const nodeOpts = book.map((n) => n[0])
