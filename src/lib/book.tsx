export const sources = {
  la: {
    language: "Latin",
    authors: ["Benedictus Spinoza"],
    source: {
      name: "The Latin Library",
      links: [
        {
          label: "Part 1",
          link: "https://www.thelatinlibrary.com/spinoza.ethica1.html",
        },
        {
          label: "Part 2",
          link: "https://www.thelatinlibrary.com/spinoza.ethica2.html",
        },
        {
          label: "Part 3",
          link: "https://www.thelatinlibrary.com/spinoza.ethica3.html",
        },
        {
          label: "Part 4",
          link: "https://www.thelatinlibrary.com/spinoza.ethica4.html",
        },
        {
          label: "Part 5",
          link: "https://www.thelatinlibrary.com/spinoza.ethica5.html",
        },
      ],
    },
  },
  en: {
    language: "English",
    authors: ["R. H. M. Elwes"],
    source: {
      name: "Project Gutenberg eBook of Ethics",
      links: [
        {
          label: "Complete book",
          link: "https://www.gutenberg.org/cache/epub/3800/pg3800-images.html",
        },
      ],
    },
  },
  es: {
    language: "Spanish",
    authors: ["Vidal Peña"],
    source: {
      name: "Epub Libre eBook of the Ethics",
      links: [
        {
          label: "Complete book",
          link: "https://archive.org/details/etica-de-spinoza/mode/2up",
        },
      ],
    },
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
      // scholium must have parent as proof
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
      // scholium must have parent as proof
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
      // scholium must have parent as proof
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
      // scholium must have parent as proof
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
        en: `In the foregoing I have explained the nature and properties of God. I have shown that he necessarily exists, that he is one: that he is, and acts solely by the necessity of his own nature; that he is the free cause of all things, and how he is so; that all things are in God, and so depend on him, that without him they could neither exist nor be conceived; lastly, that all things are predetermined by God, not through his free will or absolute fiat, but from the very nature of God or infinite power. I have further, where occasion afforded, taken care to remove the prejudices, which might impede the comprehension of my demonstrations. Yet there still remain misconceptions not a few, which might and may prove very grave hindrances to the understanding of the concatenation of things, as I have explained it above. I have therefore thought it worth while to bring these misconceptions before the bar of reason. All such opinions spring from the notion commonly entertained, that all things in nature act as men themselves act, namely, with an end in view. It is accepted as certain, that God himself directs all things to a definite goal (for it is said that God made all things for man, and man that he might worship him). I will, therefore, consider this opinion, asking first, why it obtains general credence, and why all men are naturally so prone to adopt it? secondly, I will point out its falsity; and, lastly, I will show how it has given rise to prejudices about good and bad, right and wrong, praise and blame, order and confusion, beauty and ugliness, and the like. However, this is not the place to deduce these misconceptions from the nature of the human mind: it will be sufficient here, if I assume as a starting point, what ought to be universally admitted, namely, that all men are born ignorant of the causes of things, that all have the desire to seek for what is useful to them, and that they are conscious of such desire. Herefrom it follows, first, that men think themselves free inasmuch as they are conscious of their volitions and desires, and never even dream, in their ignorance, of the causes which have disposed them so to wish and desire. Secondly, that men do all things for an end, namely, for that which is useful to them, and which they seek. Thus it comes to pass that they only look for a knowledge of the final causes of events, and when these are learned, they are content, as having no cause for further doubt. If they cannot learn such causes from external sources, they are compelled to turn to considering themselves, and reflecting what end would have induced them personally to bring about the given event, and thus they necessarily judge other natures by their own. Further, as they find in themselves and outside themselves many means which assist them not a little in the search for what is useful, for instance, eyes for seeing, teeth for chewing, herbs and animals for yielding food, the sun for giving light, the sea for breeding fish, &c., they come to look on the whole of nature as a means for obtaining such conveniences. Now as they are aware, that they found these conveniences and did not make them, they think they have cause for believing, that some other being has made them for their use. As they look upon things as means, they cannot believe them to be self—created; but, judging from the means which they are accustomed to prepare for themselves, they are bound to believe in some ruler or rulers of the universe endowed with human freedom, who have arranged and adapted everything for human use. They are bound to estimate the nature of such rulers (having no information on the subject) in accordance with their own nature, and therefore they assert that the gods ordained everything for the use of man, in order to bind man to themselves and obtain from him the highest honor. Hence also it follows, that everyone thought out for himself, according to his abilities, a different way of worshipping God, so that God might love him more than his fellows, and direct the whole course of nature for the satisfaction of his blind cupidity and insatiable avarice. Thus the prejudice developed into superstition, and took deep root in the human mind; and for this reason everyone strove most zealously to understand and explain the final causes of things; but in their endeavor to show that nature does nothing in vain, i.e. nothing which is useless to man, they only seem to have demonstrated that nature, the gods, and men are all mad together. Consider, I pray you, the result: among the many helps of nature they were bound to find some hindrances, such as storms, earthquakes, diseases, &c.: so they declared that such things happen, because the gods are angry at some wrong done to them by men, or at some fault committed in their worship. Experience day by day protested and showed by infinite examples, that good and evil fortunes fall to the lot of pious and impious alike; still they would not abandon their inveterate prejudice, for it was more easy for them to class such contradictions among other unknown things of whose use they were ignorant, and thus to retain their actual and innate condition of ignorance, than to destroy the whole fabric of their reasoning and start afresh. They therefore laid down as an axiom, that God\'s judgments far transcend human understanding. Such a doctrine might well have sufficed to conceal the truth from the human race for all eternity, if mathematics had not furnished another standard of verity in considering solely the essence and properties of figures without regard to their final causes. There are other reasons (which I need not mention here) besides mathematics, which might have caused men\'s minds to be directed to these general prejudices, and have led them to the knowledge of the truth. I have now sufficiently explained my first point. There is no need to show at length, that nature has no particular goal in view, and that final causes are mere human figments. This, I think, is already evident enough, both from the causes and foundations on which I have shown such prejudice to be based, and also from Prop. xvi., and the Corollary of Prop. xxxii., and, in fact, all those propositions in which I have shown, that everything in nature proceeds from a sort of necessity, and with the utmost perfection. However, I will add a few remarks, in order to overthrow this doctrine of a final cause utterly. That which is really a cause it considers as an effect, and vice versâ: it makes that which is by nature first to be last, and that which is highest and most perfect to be most imperfect. Passing over the questions of cause and priority as self—evident, it is plain from Props. xxi., xxii., xxiii. that the effect is most perfect which is produced immediately by God; the effect which requires for its production several intermediate causes is, in that respect, more imperfect. But if those things which were made immediately by God were made to enable him to attain his end, then the things which come after, for the sake of which the first were made, are necessarily the most excellent of all. Further, this doctrine does away with the perfection of God: for, if God acts for an object, he necessarily desires something which he lacks. Certainly, theologians and metaphysicians draw a distinction between the object of want and the object of assimilation; still they confess that God made all things for the sake of himself, not for the sake of creation. They are unable to point to anything prior to creation, except God himself, as an object for which God should act, and are therefore driven to admit (as they clearly must), that God lacked those things for whose attainment he created means, and further that he desired them. We must not omit to notice that the followers of this doctrine, anxious to display their talent in assigning final causes, have imported a new method of argument in proof of their theory—namely, a reduction, not to the impossible, but to ignorance; thus showing that they have no other method of exhibiting their doctrine. For example, if a stone falls from a roof on to someone\'s head, and kills him, they will demonstrate by their new method, that the stone fell in order to kill the man; for, if it had not by God\'s will fallen with that object, how could so many circumstances (and there are often many concurrent circumstances) have all happened together by chance? Perhaps you will answer that the event is due to the facts that the wind was blowing, and the man was walking that way. "But why," they will insist, "was the wind blowing, and why was the man at that very time walking that way?" If you again answer, that the wind had then sprung up because the sea had begun to be agitated the day before, the weather being previously calm, and that the man had been invited by a friend, they will again insist: "But why was the sea agitated, and why was the man invited at that time?" So they will pursue their questions from cause to cause, till at last you take refuge in the will of God—in other words, the sanctuary of ignorance. So, again, when they survey the frame of the human body, they are amazed; and being ignorant of the causes of so great a work of art, conclude that it has been fashioned, not mechanically, but by divine and supernatural skill, and has been so put together that one part shall not hurt another. Hence anyone who seeks for the true causes of miracles, and strives to understand natural phenomena as an intelligent being, and not to gaze at them like a fool, is set down and denounced as an impious heretic by those, whom the masses adore as the interpreters of nature and the gods. Such persons know that, with the removal of ignorance, the wonder which forms their only available means for proving and preserving their authority would vanish also. But I now quit this subject, and pass on to my third point. After men persuaded themselves, that everything which is created is created for their sake, they were bound to consider as the chief quality in everything that which is most useful to themselves, and to account those things the best of all which have the most beneficial effect on mankind. Further, they were bound to form abstract notions for the explanation of the nature of things, such as goodness, badness, order, confusion, warmth, cold, beauty, deformity, and so on; and from the belief that they are free agents arose the further notions of praise and blame, sin and merit. I will speak of these latter hereafter, when I treat of human nature; the former I will briefly explain here. Everything which conduces to health and the worship of God they have called good, everything which hinders these objects they have styled bad; and inasmuch as those who do not understand the nature of things do not verify phenomena in any way, but merely imagine them after a fashion, and mistake their imagination for understanding, such persons firmly believe that there is an order in things, being really ignorant both of things and their own nature. When phenomena are of such a kind, that the impression they make on our senses requires little effort of imagination, and can consequently be easily remembered, we say that they are well—ordered; if the contrary, that they are ill—ordered or confused. Further, as things which are easily imagined are more pleasing to us, men prefer order to confusion—as though there were any order in nature, except in relation to our imagination—and say that God has created all things in order; thus, without knowing it, attributing imagination to God, unless, indeed, they would have it that God foresaw human imagination, and arranged everything, so that it should be most easily imagined. If this be their theory, they would not, perhaps, be daunted by the fact that we find an infinite number of phenomena, far surpassing our imagination, and very many others which confound its weakness. But enough has been said on this subject. The other abstract notions are nothing but modes of imagining, in which the imagination is differently affected: though they are considered by the ignorant as the chief attributes of things, inasmuch as they believe that everything was created for the sake of themselves; and, according as they are affected by it, style it good or bad, healthy or rotten and corrupt. For instance, if the motion which objects we see communicate to our nerves be conducive to health, the objects causing it are styled beautiful; if a contrary motion be excited, they are styled ugly. Things which are perceived through our sense of smell are styled fragrant or fetid; if through our taste, sweet or bitter, full—flavored or insipid; if through our touch, hard or soft, rough or smooth, &c. Whatsoever affects our ears is said to give rise to noise, sound, or harmony. In this last case, there are men lunatic enough to believe, that even God himself takes pleasure in harmony; and philosophers are not lacking who have persuaded themselves, that the motion of the heavenly bodies gives rise to harmony—all of which instances sufficiently show that everyone judges of things according to the state of his brain, or rather mistakes for things the forms of his imagination. We need no longer wonder that there have arisen all the controversies we have witnessed, and finally skepticism: for, although human bodies in many respects agree, yet in very many others they differ; so that what seems good to one seems bad to another; what seems well ordered to one seems confused to another; what is pleasing to one displeases another, and so on. I need not further enumerate, because this is not the place to treat the subject at length, and also because the fact is sufficiently well known. It is commonly said: "So many men, so many minds; everyone is wise in his own way; brains differ as completely as palates." All of which proverbs show, that men judge of things according to their mental disposition, and rather imagine than understand: for, if they understood phenomena, they would, as mathematicians attest, be convinced, if not attracted, by what I have urged. We have now perceived, that all the explanations commonly given of nature are mere modes of imagining, and do not indicate the true nature of anything, but only the constitution of the imagination; and, although they have names, as though they were entities, existing externally to the imagination, I call them entities imaginary rather than real; and, therefore, all arguments against us drawn from such abstractions are easily rebutted. Many argue in this way. If all things follow from a necessity of the absolutely perfect nature of God, why are there so many imperfections in nature? such, for instance, as things corrupt to the point of putridity, loathsome deformity, confusion, evil, sin, &c. But these reasoners are, as I have said, easily confuted, for the perfection of things is to be reckoned only from their own nature and power; things are not more or less perfect, according as they delight or offend human senses, or according as they are serviceable or repugnant to mankind. To those who ask why God did not so create all men, that they should be governed only by reason, I give no answer but this: because matter was not lacking to him for the creation of every degree of perfection from highest to lowest; or, more strictly, because the laws of his nature are so vast, as to suffice for the production of everything conceivable by an infinite intelligence, as I have shown in Prop. xvi. Such are the misconceptions I have undertaken to note; if there are any more of the same sort, everyone may easily dissipate them for himself with the aid of a little reflection.`,
        es: "",
        la: "",
      },
      // Here Spinoza says "corollariis propositionis 32" though
      // this  English translation puts it in the singular form, but I
      // assume that he means both corollaries taken as a single group:
      proof: ["e1p16", "e1p32cor1", "e1p32cor2", "e1p21", "e1p22", "e1p23"],
    },
  ],
  [
    "e2pref",
    {
      text: {
        en: "I now pass on to explaining the results, which must necessarily follow from the essence of God, or of the eternal and infinite being; not, indeed, all of them (for we proved in Part i., Prop. xvi., that an infinite number must follow in an infinite number of ways), but only those which are able to lead us, as it were by the hand, to the knowledge of the human mind and its highest blessedness.",
        es: "",
        la: "",
      },
      proof: ["e1p16"],
    },
  ],
  [
    "e2def1",
    {
      text: {
        en: "By body I mean a mode which expresses in a certain determinate manner the essence of God, in so far as he is considered as an extended thing. (See Pt. i., Prop. xxv., Coroll.)",
        es: "",
        la: "",
      },
      proof: [],
      // should we treat such a reference
      // here by Spinoza as "prooflike"?
      see: ["e1p25cor"],
    },
  ],
  [
    "e2def2",
    {
      text: {
        en: "I consider as belonging to the essence of a thing that, which being given, the thing is necessarily given also, and, which being removed, the thing is necessarily removed also; in other words, that without which the thing, and which itself without the thing, can neither be nor be conceived.",
        es: "",
        la: "",
      },
      proof: [],
    },
  ],
  [
    "e2def3",
    {
      text: {
        en: "By idea, I mean the mental conception which is formed by the mind as a thinking thing. Explanation.—I say conception rather than perception, because the word perception seems to imply that the mind is passive in respect to the object; whereas conception seems to express an activity of the mind.",
        es: "",
        la: "",
      },
      proof: [],
    },
  ],
  [
    "e2def4",
    {
      text: {
        en: "By an adequate idea, I mean an idea which, in so far as it is considered in itself, without relation to the object, has all the properties or intrinsic marks of a true idea. Explanation.—I say intrinsic, in order to exclude that mark which is extrinsic, namely, the agreement between the idea and its object (ideatum).",
        es: "",
        la: "",
      },
      proof: [],
    },
  ],
  [
    "e2def5",
    {
      text: {
        en: "Duration is the indefinite continuance of existing. Explanation.—I say indefinite, because it cannot be determined through the existence itself of the existing thing, or by its efficient cause, which necessarily gives the existence of the thing, but does not take it away.",
        es: "",
        la: "",
      },
      proof: [],
    },
  ],
  [
    "e2def6",
    {
      text: {
        en: "Reality and perfection I use as synonymous terms.",
        es: "",
        la: "",
      },
      proof: [],
    },
  ],
  [
    "e2def7",
    {
      text: {
        en: "By particular things, I mean things which are finite and have a conditioned existence; but if several individual things concur in one action, so as to be all simultaneously the effect of one cause, I consider them all, so far, as one particular thing.",
        es: "",
        la: "",
      },
      proof: [],
    },
  ],
  [
    "e2ax1",
    {
      text: {
        en: "The essence of man does not involve necessary existence, that is, it may, in the order of nature, come to pass that this or that man does or does not exist.",
        es: "",
        la: "",
      },
      proof: [],
    },
  ],
  [
    "e2ax2",
    {
      text: {
        en: "Man thinks.",
        es: "",
        la: "",
      },
      proof: [],
    },
  ],
  [
    "e2ax3",
    {
      text: {
        en: "Modes of thinking, such as love, desire, or any other of the passions, do not take place, unless there be in the same individual an idea of the thing loved, desired, &c. But the idea can exist without the presence of any other mode of thinking.",
        es: "",
        la: "",
      },
      proof: [],
    },
  ],
  [
    "e2ax4",
    {
      text: {
        en: "We perceive that a certain body is affected in many ways.",
        es: "",
        la: "",
      },
      proof: [],
    },
  ],
  [
    "e2ax5",
    {
      text: {
        en: "We feel and perceive no particular things, save bodies and modes of thought. N.B. The Postulates are given after the conclusion of Prop. xiii.",
        es: "",
        la: "",
      },
      proof: [],
      // Here Spinoza goes as far as pointing to a future
      // entry as a clarifying point for the present axiom.
      see: ["e2p13"],
    },
  ],
  [
    "e2p1",
    {
      text: {
        en: "Thought is an attribute of God, or God is a thinking thing. Proof.—Particular thoughts, or this and that thought, are modes which, in a certain conditioned manner, express the nature of God (Pt. i., Prop. xxv., Coroll.). God therefore possesses the attribute (Pt. i., Def. v.) of which the concept is involved in all particular thoughts, which latter are conceived thereby. Thought, therefore, is one of the infinite attributes of God, which express God's eternal and infinite essence (Pt. i., Def. vi.). In other words, God is a thinking thing. Q.E.D.",
        es: "",
        la: "",
      },
      proof: ["e1p25cor", "e1def5", "e1def6"],
    },
  ],
  [
    "e2p1sch",
    {
      text: {
        en: "Note.—This proposition is also evident from the fact, that we are able to conceive an infinite thinking being. For, in proportion as a thinking being is conceived as thinking more thoughts, so is it conceived as containing more reality or perfection. Therefore a being, which can think an infinite number of things in an infinite number of ways, is, necessarily, in respect of thinking, infinite. As, therefore, from the consideration of thought alone, we conceive an infinite being, thought is necessarily (Pt. i., Deff. iv. and vi.) one of the infinite attributes of God, as we were desirous of showing.",
        es: "",
        la: "",
      },
      // scholium must have parent as proof
      proof: ["e2p1", "e1def4", "e1def6"],
    },
  ],
  [
    "e2p2",
    {
      text: {
        en: "Extension is an attribute of God, or God is an extended thing. Proof.—The proof of this proposition is similar to that of the last.",
        es: "",
        la: "",
      },
      // If the proof is the same as the previous prop, we can just say that the previous prop
      // proves this one, but I also include the scholium for the sake of completeness:
      proof: ["e2p1", "e2p1sch"],
    },
  ],
  [
    "e2p3",
    {
      text: {
        en: "In God there is necessarily the idea not only of his essence, but also of all things which necessarily follow from his essence. Proof.—God (by the first Prop. of this Part) can think an infinite number of things in infinite ways, or (what is the same thing, by Prop. xvi., Part i.) can form the idea of his essence, and of all things which necessarily follow therefrom. Now all that is in the power of God necessarily is (Pt. i., Prop. xxxv.). Therefore, such an idea as we are considering necessarily is, and in God alone. Q.E.D. (Part i., Prop. xv.)",
        es: "",
        la: "",
      },
      proof: ["e2p1", "e1p16", "e1p35", "e1p15"],
    },
  ],
  [
    "e2p3sch",
    {
      text: {
        en: "Note.—The multitude understand by the power of God the free will of God, and the right over all things that exist, which latter are accordingly generally considered as contingent. For it is said that God has the power to destroy all things, and to reduce them to nothing. Further, the power of God is very often likened to the power of kings. But this doctrine we have refuted (Pt. i., Prop. xxxii., Corolls. i. and ii.), and we have shown (Part i., Prop. xvi.) that God acts by the same necessity, as that by which he understands himself; in other words, as it follows from the necessity of the divine nature (as all admit), that God understands himself, so also does it follow by the same necessity, that God performs infinite acts in infinite ways. We further showed (Part i., Prop. xxxiv.), that God's power is identical with God's essence in action; therefore it is as impossible for us to conceive God as not acting, as to conceive him as non—existent. If we might pursue the subject further, I could point out, that the power which is commonly attributed to God is not only human (as showing that God is conceived by the multitude as a man, or in the likeness of a man), but involves a negation of power. However, I am unwilling to go over the same ground so often. I would only beg the reader again and again, to turn over frequently in his mind what I have said in Part I from Prop. xvi. to the end. No one will be able to follow my meaning, unless he is scrupulously careful not to confound the power of God with the human power and right of kings.",
        es: "",
        la: "",
      },
      // scholium must have parent as proof
      proof: ["e2p3", "e1p32cor1", "e1p32cor2", "e1p16", "e1p34"],
    },
  ],
  [
    "e2p4",
    {
      text: {
        en: "The idea of God, from which an infinite number of things follow in infinite ways, can only be one. Proof.—Infinite intellect comprehends nothing save the attributes of God and his modifications (Part i., Prop. xxx.). Now God is one (Part i., Prop. xiv., Coroll.). Therefore the idea of God, wherefrom an infinite number of things follow in infinite ways, can only be one. Q.E.D.",
        es: "",
        la: "",
      },
      proof: ["e1p30", "e1p14cor1"],
    },
  ],
  [
    "e2p5",
    {
      text: {
        en: "The actual being of ideas owns God as its cause, only in so far as he is considered as a thinking thing, not in so far as he is unfolded in any other attribute; that is, the ideas both of the attributes of God and of particular things do not own as their efficient cause their objects (ideata) or the things perceived, but God himself in so far as he is a thinking thing. Proof.—This proposition is evident from Prop. iii. of this Part. We there drew the conclusion, that God can form the idea of his essence, and of all things which follow necessarily therefrom, solely because he is a thinking thing, and not because he is the object of his own idea. Wherefore the actual being of ideas owns for cause God, in so far as he is a thinking thing. It may be differently proved as follows: the actual being of ideas is (obviously) a mode of thought, that is (Part i., Prop. xxv., Coroll.) a mode which expresses in a certain manner the nature of God, in so far as he is a thinking thing, and therefore (Part i., Prop. x.) involves the conception of no other attribute of God, and consequently (by Part i., Ax. iv.) is not the effect of any attribute save thought. Therefore the actual being of ideas owns God as its cause, in so far as he is considered as a thinking thing, &c. Q.E.D.",
        es: "",
        la: "",
      },
      proof: ["e2p3", "e1p25cor", "e1p10", "e1ax4"],
    },
  ],
  [
    "e2p6",
    {
      text: {
        en: "The modes of any given attribute are caused by God, in so far as he is considered through the attribute of which they are modes, and not in so far as he is considered through any other attribute. Proof.—Each attribute is conceived through itself, without any other (Part i., Prop. x.); wherefore the modes of each attribute involve the conception of that attribute, but not of any other. Thus (Part i., Ax. iv.) they are caused by God, only in so far as he is considered through the attribute whose modes they are, and not in so far as he is considered through any other. Q.E.D.",
        es: "",
        la: "",
      },
      proof: ["e1p10", "e1ax4"],
    },
  ],
  [
    "e2p6cor",
    {
      text: {
        en: "",
        es: "",
        la: "",
      },
      // corollary must have parent as proof
      proof: ["e2p6"],
    },
  ],
  [
    "e2p7",
    {
      text: {
        en: "The order and connection of ideas is the same as the order and connection of things. Proof.—This proposition is evident from Part i., Ax. iv. For the idea of everything that is caused depends on a knowledge of the cause, whereof it is an effect.",
        es: "",
        la: "",
      },
      proof: ["e1ax4"],
    },
  ],
  [
    "e2p7cor",
    {
      text: {
        en: "",
        es: "",
        la: "",
      },
      // corollary must have parent as proof
      proof: ["e2p7"],
    },
  ],
  [
    "e2p7sch",
    {
      text: {
        en: "Note.—Before going any further, I wish to recall to mind what has been pointed out above—namely, that whatsoever can be perceived by the infinite intellect as constituting the essence of substance, belongs altogether only to one substance: consequently, substance thinking and substance extended are one and the same substance, comprehended now through one attribute, now through the other. So, also, a mode of extension and the idea of that mode are one and the same thing, though expressed in two ways. This truth seems to have been dimly recognized by those Jews who maintained that God, God's intellect, and the things understood by God are identical. For instance, a circle existing in nature, and the idea of a circle existing, which is also in God, are one and the same thing displayed through different attributes. Thus, whether we conceive nature under the attribute of extension, or under the attribute of thought, or under any other attribute, we shall find the same order, or one and the same chain of causes—that is, the same things following in either case. I said that God is the cause of an idea—for instance, of the idea of a circle,—in so far as he is a thinking thing; and of a circle, in so far as he is an extended thing, simply because the actual being of the idea of a circle can only be perceived as a proximate cause through another mode of thinking, and that again through another, and so on to infinity; so that, so long as we consider things as modes of thinking, we must explain the order of the whole of nature, or the whole chain of causes, through the attribute of thought only. And, in so far as we consider things as modes of extension, we must explain the order of the whole of nature through the attributes of extension only; and so on, in the case of the other attributes. Wherefore of things as they are in themselves God is really the cause, inasmuch as he consists of infinite attributes. I cannot for the present explain my meaning more clearly.",
        es: "",
        la: "",
      },
      // scholium must have parent as proof
      proof: ["e2p7"],
      // Maimonides? Anything concrete we can reference here?
      see: [
        "Jews who maintained that God, God's intellect, and the things understood by God are identical",
      ],
    },
  ],
  [
    "e2p8",
    {
      text: {
        en: "The ideas of particular things, or of modes, that do not exist, must be comprehended in the infinite idea of God, in the same way as the formal essences of particular things or modes are contained in the attributes of God. Proof.—This proposition is evident from the last; it is understood more clearly from the preceding note.",
        es: "",
        la: "",
      },
      proof: ["e2p7", "e2p7sch"],
    },
  ],
  [
    "e2p8cor",
    {
      text: {
        en: "Corollary.—Hence, so long as particular things do not exist, except in so far as they are comprehended in the attributes of God, their representations in thought or ideas do not exist, except in so far as the infinite idea of God exists; and when particular things are said to exist, not only in so far as they are involved in the attributes of God, but also in so far as they are said to continue, their ideas will also involve existence, through which they are said to continue.",
        es: "",
        la: "",
      },
      // corollary must have parent as proof
      proof: ["e2p8"],
    },
  ],
  [
    "e2p8sch",
    {
      text: {
        en: "Note.—If anyone desires an example to throw more light on this question, I shall, I fear, not be able to give him any, which adequately explains the thing of which I here speak, inasmuch as it is unique; however, I will endeavour to illustrate it as far as possible. The nature of a circle is such that if any number of straight lines intersect within it, the rectangles formed by their segments will be equal to one another; thus, infinite equal rectangles are contained in a circle. Yet none of these rectangles can be said to exist, except in so far as the circle exists; nor can the idea of any of these rectangles be said to exist, except in so far as they are comprehended in the idea of the circle. Let us grant that, from this infinite number of rectangles, two only exist. The ideas of these two not only exist, in so far as they are contained in the idea of the circle, but also as they involve the existence of those rectangles; wherefore they are distinguished from the remaining ideas of the remaining rectangles.",
        es: "",
        la: "",
      },
      // scholium must have parent as proof
      proof: ["e2p8"],
    },
  ],
  [
    "e2p9",
    {
      text: {
        en: "The idea of an individual thing actually existing is caused by God, not in so far as he is infinite, but in so far as he is considered as affected by another idea of a thing actually existing, of which he is the cause, in so far as he is affected by a third idea, and so on to infinity. Proof.—The idea of an individual thing actually existing is an individual mode of thinking, and is distinct from other modes (by the Corollary and note to Prop. viii. of this part); thus (by Prop. vi. of this part) it is caused by God, in so far only as he is a thinking thing. But not (by Prop. xxviii. of Part i.) in so far as he is a thing thinking absolutely, only in so far as he is considered as affected by another mode of thinking; and he is the cause of this latter, as being affected by a third, and so on to infinity. Now, the order and connection of ideas is (by Prop. vii. of this book) the same as the order and connection of causes. Therefore of a given individual idea another individual idea, or God, in so far as he is considered as modified by that idea, is the cause; and of this second idea God is the cause, in so far as he is affected by another idea, and so on to infinity. Q.E.D.",
        es: "",
        la: "",
      },
      proof: ["e2p8cor", "e2p8sch", "e2p6", "e1p28", "e2p7"],
    },
  ],
  [
    "e2p9cor",
    {
      text: {
        en: "Corollary.—Whatsoever takes place in the individual object of any idea, the knowledge thereof is in God, in so far only as he has the idea of the object. Proof.—Whatsoever takes place in the object of any idea, its idea is in God (by Prop. iii. of this part), not in so far as he is infinite, but in so far as he is considered as affected by another idea of an individual thing (by the last Prop.); but (by Prop. vii. of this part) the order and connection of ideas is the same as the order and connection of things. The knowledge, therefore, of that which takes place in any individual object will be in God, in so far only as he has the idea of that object. Q.E.D.",
        es: "",
        la: "",
      },
      // corollary must have parent as proof
      proof: ["e2p9", "e2p3", "e2p8", "e2p7"],
    },
  ],
  [
    "e2p10",
    {
      text: {
        en: 'The being of substance does not appertain to the essence of man—in other words, substance does not constitute the actual being["Forma"] of man. Proof.—The being of substance involves necessary existence (Part i., Prop. vii.). If, therefore, the being of substance appertains to the essence of man, substance being granted, man would necessarily be granted also (II. Def. ii.), and, consequently, man would necessarily exist, which is absurd (II. Ax. i.). Therefore, &c. Q.E.D.',
        es: "",
        la: "",
      },
      // scholium#1 says that this proposition can also
      // be proved by e1p5, which is why it's here:
      proof: ["e1p7", "e2def2", "e2ax1", "e1p5"],
    },
  ],
  [
    "e2p10sch1",
    {
      text: {
        en: "",
        es: "",
        la: "",
      },
      // Spinoza's wording suggests that e1p5 is more a member of the parent proposition,
      // but we still rely on it by the transitive dependency we have on the parent node:
      // scholium must have parent as proof
      proof: ["e2p10"],
    },
  ],
  [
    "e2p10cor",
    {
      text: {
        en: "Corollary.—Hence it follows, that the essence of man is constituted by certain modifications of the attributes of God. For (by the last Prop.) the being of substance does not belong to the essence of man. That essence therefore (by i. 15) is something which is in God, and which without God can neither be nor be conceived, whether it be a modification (i. 25. Coroll.), or a mode which expresses God's nature in a certain conditioned manner.",
        es: "",
        la: "",
      },
      // corollary must have parent as proof
      proof: ["e2p10", "e2p9", "e1p15", "e1p25cor"],
    },
  ],
  [
    "e2p10sch2",
    {
      text: {
        en: 'Note.—Everyone must surely admit, that nothing can be or be conceived without God. All men agree that God is the one and only cause of all things, both of their essence and of their existence; that is, God is not only the cause of things in respect to their being made (secundum fieri), but also in respect to their being (secundum esse). At the same time many assert, that that, without which a thing cannot be nor be conceived, belongs to the essence of that thing; wherefore they believe that either the nature of God appertains to the essence of created things, or else that created things can be or be conceived without God; or else, as is more probably the case, they hold inconsistent doctrines. I think the cause for such confusion is mainly, that they do not keep to the proper order of philosophic thinking. The nature of God, which should be reflected on first, inasmuch as it is prior both in the order of knowledge and the order of nature, they have taken to be last in the order of knowledge, and have put into the first place what they call the objects of sensation; hence, while they are considering natural phenomena, they give no attention at all to the divine nature, and, when afterwards they apply their mind to the study of the divine nature, they are quite unable to bear in mind the first hypotheses, with which they have overlaid the knowledge of natural phenomena, inasmuch as such hypotheses are no help towards understanding the divine nature. So that it is hardly to be wondered at, that these persons contradict themselves freely. However, I pass over this point. My intention her was only to give a reason for not saying, that that, without which a thing cannot be or be conceived, belongs to the essence of that thing: individual things cannot be or be conceived without God, yet God does not appertain to their essence. I said that "I considered as belonging to the essence of a thing that, which being given, the thing is necessarily given also, and which being removed, the thing is necessarily removed also; or that without which the thing, and which itself without the thing can neither be nor be conceived." (II. Def. ii.)',
        es: "",
        la: "",
      },
      // scholium must have parent as proof
      proof: ["e2p10", "e2def2"],
    },
  ],
  [
    "e2p11",
    {
      text: {
        en: "The first element, which constitutes the actual being of the human mind, is the idea of some particular thing actually existing. Proof.—The essence of man (by the Coroll. of the last Prop.) is constituted by certain modes of the attributes of God, namely (by II. Ax. ii.), by the modes of thinking, of all which (by II. Ax. iii.) the idea is prior in nature, and, when the idea is given, the other modes (namely, those of which the idea is prior in nature) must be in the same individual (by the same Axiom). Therefore an idea is the first element constituting the human mind. But not the idea of a non—existent thing, for then (II. viii. Coroll.) the idea itself cannot be said to exist; it must therefore be the idea of something actually existing. But not of an infinite thing. For an infinite thing (I. xxi., xxii.), must always necessarily exist; this would (by II. Ax. i.) involve an absurdity. Therefore the first element, which constitutes the actual being of the human mind, is the idea of something actually existing. Q.E.D.",
        es: "",
        la: "",
      },
      proof: [
        "e2p10cor",
        "e2ax2",
        "e2ax3",
        "e2p8cor",
        "e1p21",
        "e1p22",
        "e2ax1",
      ],
    },
  ],
  [
    "e2p11cor",
    {
      text: {
        en: "Corollary.—Hence it follows, that the human mind is part of the infinite intellect of God; thus when we say, that the human mind perceives this or that, we make the assertion, that God has this or that idea, not in so far as he is infinite, but in so far as he is displayed through the nature of the human mind, or in so far as he constitutes the essence of the human mind; and when we say that God has this or that idea, not only in so far as he constitutes the essence of the human mind, but also in so far as he, simultaneously with the human mind, has the further idea of another thing, we assert that the human mind perceives a thing in part or inadequately.",
        es: "",
        la: "",
      },
      // corollary must have parent as proof
      proof: ["e2p11"],
    },
  ],
  [
    "e2p11sch",
    {
      text: {
        en: "Note.—Here, I doubt not, readers will come to a stand, and will call to mind many things which will cause them to hesitate; I therefore beg them to accompany me slowly, step by step, and not to pronounce on my statements, till they have read to the end.",
        es: "",
        la: "",
      },
      // scholium must have parent as proof
      proof: ["e2p11"],
    },
  ],
  [
    "e2p12",
    {
      text: {
        en: "Whatsoever comes to pass in the object of the idea, which constitutes the human mind, must be perceived by the human mind, or there will necessarily be an idea in the human mind of the said occurrence. That is, if the object of the idea constituting the human mind be a body, nothing can take place in that body without being perceived by the mind. Proof.—Whatsoever comes to pass in the object of any idea, the knowledge thereof is necessarily in God (II. ix. Coroll.), in so far as he is considered as affected by the idea of the said object, that is (II. xi.), in so far as he constitutes the mind of anything. Therefore, whatsoever takes place in the object constituting the idea of the human mind, the knowledge thereof is necessarily in God, in so far as he constitutes the essence of the human mind; that is (by II. xi. Coroll.) the knowledge of the said thing will necessarily be in the mind, in other words the mind perceives it.",
        es: "",
        la: "",
      },
      // e2p12sch says that e2p7
      // is also a proof of this:
      proof: ["e2p9cor", "e2p11", "e2p11cor", "e2p7"],
    },
  ],
  [
    "e2p12sch",
    {
      text: {
        en: "Note.—This proposition is also evident, and is more clearly to be understood from II. vii., which see.",
        es: "",
        la: "",
      },
      // scholium must have parent as proof
      proof: ["e2p12"],
    },
  ],
  [
    "e2p13",
    {
      text: {
        en: "The object of the idea constituting the human mind is the body, in other words a certain mode of extension which actually exists, and nothing else. Proof.—If indeed the body were not the object of the human mind, the ideas of the modifications of the body would not be in God (II. ix. Coroll.) in virtue of his constituting our mind, but in virtue of his constituting the mind of something else; that is (II. xi. Coroll.) the ideas of the modifications of the body would not be in our mind: now (by II. Ax. iv.) we do possess the idea of the modifications of the body. Therefore the object of the idea constituting the human mind is the body, and the body as it actually exists (II. xi.). Further, if there were any other object of the idea constituting the mind besides body, then, as nothing can exist from which some effect does not follow (I. xxxvi.) there would necessarily have to be in our mind an idea, which would be the effect of that other object (II. xi.); but (I. Ax. v.) there is no such idea. Wherefore the object of our mind is the body as it exists, and nothing else. Q.E.D.",
        es: "",
        la: "",
      },
      proof: ["e2p9cor", "e2p11cor", "e2ax4", "e2p11", "e1p26", "e1ax5"],
    },
  ],
  [
    "e2p13sch",
    {
      text: {
        en: 'Note.—We thus comprehend, not only that the human mind is united to the body, but also the nature of the union between mind and body. However, no one will be able to grasp this adequately or distinctly, unless he first has adequate knowledge of the nature of our body. The propositions we have advanced hitherto have been entirely general, applying not more to men than to other individual things, all of which, though in different degrees, are animated.["Animata"] For of everything there is necessarily an idea in God, of which God is the cause, in the same way as there is an idea of the human body; thus whatever we have asserted of the idea of the human body must necessarily also be asserted of the idea of everything else. Still, on the other hand, we cannot deny that ideas, like objects, differ one from the other, one being more excellent than another and containing more reality, just as the object of one idea is more excellent than the object of another idea, and contains more reality. Wherefore, in order to determine, wherein the human mind differs from other things, and wherein it surpasses them, it is necessary for us to know the nature of its object, that is, of the human body. What this nature is, I am not able here to explain, nor is it necessary for the proof of what I advance, that I should do so. I will only say generally, that in proportion as any given body is more fitted than others for doing many actions or receiving many impressions at once, so also is the mind, of which it is the object, more fitted than others for forming many simultaneous perceptions; and the more the actions of the body depend on itself alone, and the fewer other bodies concur with it in action, the more fitted is the mind of which it is the object for distinct comprehension. We may thus recognize the superiority of one mind over others, and may further see the cause, why we have only a very confused knowledge of our body, and also many kindred questions, which I will, in the following propositions, deduce from what has been advanced. Wherefore I have thought it worth while to explain and prove more strictly my present statements. In order to do so, I must premise a few propositions concerning the nature of bodies.',
        es: "",
        la: "",
      },
      // scholium must have parent as proof
      proof: ["e2p13"],
    },
  ],
  [
    "e2ax1*",
    {
      text: {
        en: "All bodies are either in motion or at rest.",
        es: "",
        la: "",
      },
      proof: [],
    },
  ],
  [
    "e2ax2*",
    {
      text: {
        en: "Every body is moved sometimes more slowly, sometimes more quickly.",
        es: "",
        la: "",
      },
      proof: [],
    },
  ],
  [
    "e2p13lem1",
    {
      text: {
        en: "Bodies are distinguished from one another in respect of motion and rest, quickness and slowness, and not in respect of substance. Proof.—The first part of this proposition is, I take it, self—evident. That bodies are not distinguished in respect of substance, is plain both from I. v. and I. viii. It is brought out still more clearly from I. xv, note.",
        es: "",
        la: "",
      },
      proof: ["e1p5", "e1p8", "e1p15sch"],
    },
  ],
  [
    "e2p13lem2",
    {
      text: {
        en: "All bodies agree in certain respects. Proof.—All bodies agree in the fact, that they involve the conception of one and the same attribute (II., Def. i.). Further, in the fact that they may be moved less or more quickly, and may be absolutely in motion or at rest.",
        es: "",
        la: "",
      },
      proof: ["e2def1"],
    },
  ],
  [
    "e2p13lem3",
    {
      text: {
        en: "A body in motion or at rest must be determined to motion or rest by another body, which other body has been determined to motion or rest by a third body, and that third again by a fourth, and so on to infinity. Proof.—Bodies are individual things (II., Def. i.), which (Lemma I.) are distinguished one from the other in respect to motion and rest; thus (I. xxviii.) each must necessarily be determined to motion or rest by another individual thing, namely (II. vi.), by another body, which other body is also (Ax. i.) in motion or at rest. And this body again can only have been set in motion or caused to rest by being determined by a third body to motion or rest. This third body again by a fourth, and so on to infinity. Q.E.D.",
        es: "",
        la: "",
      },
      proof: ["e2def1", "e2p13lem1", "e1p28", "e2p6", "e2ax1*"],
    },
  ],
  [
    "e2p13lem3cor",
    {
      text: {
        en: "Corollary.—Hence it follows, that a body in motion keeps in motion, until it is determined to a state of rest by some other body; and a body at rest remains so, until it is determined to a state of motion by some other body. This is indeed self—evident. For when I suppose, for instance, that a given body, A, is at rest, and do not take into consideration other bodies in motion, I cannot affirm anything concerning the body A, except that it is at rest. If it afterwards comes to pass that A is in motion, this cannot have resulted from its having been at rest, for no other consequence could have been involved than its remaining at rest. If, on the other hand, A be given in motion, we shall, so long as we only consider A, be unable to affirm anything concerning it, except that it is in motion. If A is subsequently found to be at rest, this rest cannot be the result of A's previous motion, for such motion can only have led to continued motion; the state of rest therefore must have resulted from something, which was not in A, namely, from an external cause determining A to a state of rest.",
        es: "",
        la: "",
      },
      // corollary must have parent as proof
      proof: ["e2p13lem3"],
    },
  ],
  [
    "e2ax1**",
    {
      text: {
        en: "All modes, wherein one body is affected by another body, follow simultaneously from the nature of the body affected and the body affecting; so that one and the same body may be moved in different modes, according to the difference in the nature of the bodies moving it; on the other hand, different bodies may be moved in different modes by one and the same body.",
        es: "",
        la: "",
      },
      proof: [],
    },
  ],
  [
    "e2ax2**",
    {
      text: {
        en: "When a body in motion impinges on another body at rest, which it is unable to move, it recoils, in order to continue its motion, and the angle made by the line of motion in the recoil and the plane of the body at rest, whereon the moving body has impinged, will be equal to the angle formed by the line of motion of incidence and the same plane.",
        es: "",
        la: "",
      },
      proof: [],
    },
  ],
  [
    "e2def1*",
    {
      text: {
        en: "So far we have been speaking only of the most simple bodies, which are only distinguished one from the other by motion and rest, quickness and slowness. We now pass on to compound bodies. Definition.—When any given bodies of the same or different magnitude are compelled by other bodies to remain in contact, or if they be moved at the same or different rates of speed, so that their mutual movements should preserve among themselves a certain fixed relation, we say that such bodies are in union, and that together they compose one body or individual, which is distinguished from other bodies by the fact of this union.",
        es: "",
        la: "",
      },
      proof: [],
    },
  ],
  [
    "e2ax3**",
    {
      text: {
        en: "In proportion as the parts of an individual, or a compound body, are in contact over a greater or less superficies, they will with greater or less difficulty admit of being moved from their position; consequently the individual will, with greater or less difficulty, be brought to assume another form. Those bodies, whose parts are in contact over large superficies, are called hard; those, whose parts are in contact over small superficies, are called soft; those, whose parts are in motion among one another, are called fluid.",
        es: "",
        la: "",
      },
      proof: [],
    },
  ],
  [
    "e2p13lem4",
    {
      text: {
        en: "If from a body or individual, compounded of several bodies, certain bodies be separated, and if, at the same time, an equal number of other bodies of the same nature take their place, the individual will preserve its nature as before, without any change in its actuality (forma). Proof.—Bodies (Lemma i.) are not distinguished in respect of substance: that which constitutes the actuality (formam) of an individual consists (by the last Def.) in a union of bodies; but this union, although there is a continual change of bodies, will (by our hypothesis) be maintained; the individual, therefore, will retain its nature as before, both in respect of substance and in respect of mode. Q.E.D.",
        es: "",
        la: "",
      },
      proof: ["e2p13lem1", "e2def1*"],
    },
  ],
  [
    "e2p13lem5",
    {
      text: {
        en: "If the parts composing an individual become greater or less, but in such proportion, that they all preserve the same mutual relations of motion and rest, the individual will still preserve its original nature, and its actuality will not be changed. Proof.—The same as for the last Lemma.",
        es: "",
        la: "",
      },
      // if the proof is the same, then we
      // can treat lem4 as a proxy proof:
      proof: ["e2p13lem4"],
    },
  ],
  [
    "e2p13lem6",
    {
      text: {
        en: "If certain bodies composing an individual be compelled to change the motion, which they have in one direction, for motion in another direction, but in such a manner, that they be able to continue their motions and their mutual communication in the same relations as before, the individual will retain its own nature without any change of its actuality. Proof.—This proposition is self—evident, for the individual is supposed to retain all that, which, in its definition, we spoke of as its actual being.",
        es: "",
        la: "",
      },
      // "self-evident"
      proof: [],
    },
  ],
  [
    "e2p13lem7",
    {
      text: {
        en: "Furthermore, the individual thus composed preserves its nature, whether it be, as a whole, in motion or at rest, whether it be moved in this or that direction; so long as each part retains its motion, and preserves its communication with other parts as before. Proof.—This proposition is evident from the definition of an individual prefixed to Lemma iv.",
        es: "",
        la: "",
      },
      proof: ["e2def1*"],
    },
  ],
  [
    "e2p13lem7sch",
    {
      text: {
        en: "Note.—We thus see, how a composite individual may be affected in many different ways, and preserve its nature notwithstanding. Thus far we have conceived an individual as composed of bodies only distinguished one from the other in respect of motion and rest, speed and slowness; that is, of bodies of the most simple character. If, however, we now conceive another individual composed of several individuals of diverse natures, we shall find that the number of ways in which it can be affected, without losing its nature, will be greatly multiplied. Each of its parts would consist of several bodies, and therefore (by Lemma vi.) each part would admit, without change to its nature, of quicker or slower motion, and would consequently be able to transmit its motions more quickly or more slowly to the remaining parts. If we further conceive a third kind of individuals composed of individuals of this second kind, we shall find that they may be affected in a still greater number of ways without changing their actuality. We may easily proceed thus to infinity, and conceive the whole of nature as one individual, whose parts, that is, all bodies, vary in infinite ways, without any change in the individual as a whole. I should feel bound to explain and demonstrate this point at more length, if I were writing a special treatise on body. But I have already said that such is not my object; I have only touched on the question, because it enables me to prove easily that which I have in view.",
        es: "",
        la: "",
      },
      // scholium must have parent as proof
      proof: ["e2p13lem7", "e2p13lem6"],
    },
  ],
  [
    "e2post1",
    {
      text: {
        en: "The human body is composed of a number of individual parts, of diverse nature, each one of which is in itself extremely complex.",
        es: "",
        la: "",
      },
      proof: [],
    },
  ],
  [
    "e2post2",
    {
      text: {
        en: "Of the individual parts composing the human body some are fluid, some soft, some hard.",
        es: "",
        la: "",
      },
      proof: [],
    },
  ],
  [
    "e2post3",
    {
      text: {
        en: "The individual parts composing the human body, and consequently the human body itself, are affected in a variety of ways by external bodies.",
        es: "",
        la: "",
      },
      proof: [],
    },
  ],
  [
    "e2post4",
    {
      text: {
        en: "The human body stands in need for its preservation of a number of other bodies, by which it is continually, so to speak, regenerated.",
        es: "",
        la: "",
      },
      proof: [],
    },
  ],
  [
    "e2post5",
    {
      text: {
        en: "When the fluid part of the human body is determined by an external body to impinge often on another soft part, it changes the surface of the latter, and, as it were, leaves the impression thereupon of the external body which impels it.",
        es: "",
        la: "",
      },
      proof: [],
    },
  ],
  [
    "e2post6",
    {
      text: {
        en: "The human body can move external bodies, and arrange them in a variety of ways.",
        es: "",
        la: "",
      },
      proof: [],
    },
  ],
  [
    "e2p14",
    {
      text: {
        en: "The human mind is capable of perceiving a great number of things, and is so in proportion as its body is capable of receiving a great number of impressions. Proof.—The human body (by Post. iii. and vi.) is affected in very many ways by external bodies, and is capable in very many ways of affecting external bodies. But (II. xii.) the human mind must perceive all that takes place in the human body; the human mind is, therefore, capable of perceiving a great number of things, and is so in proportion, &c. Q.E.D.",
        es: "",
        la: "",
      },
      proof: ["e2post3", "e2post6", "e2p12"],
    },
  ],
  [
    "e2p15",
    {
      text: {
        en: "The idea, which constitutes the actual being of the human mind, is not simple, but compounded of a great number of ideas. Proof.—The idea constituting the actual being of the human mind is the idea of the body (II. xiii.), which (Post. i.) is composed of a great number of complex individual parts. But there is necessarily in God the idea of each individual part whereof the body is composed (II. viii. Coroll.); therefore (II. vii.), the idea of the human body is composed of these numerous ideas of its component parts. Q.E.D.",
        es: "",
        la: "",
      },
      proof: ["e2p13", "e2post1", "e2p8cor", "e2p7"],
    },
  ],
  [
    "e2p16",
    {
      text: {
        en: "The idea of every mode, in which the human body is affected by external bodies, must involve the nature of the human body, and also the nature of the external body. Proof.—All the modes, in which any given body is affected, follow from the nature of the body affected, and also from the nature of the affecting body (by Ax. i., after the Coroll. of Lemma iii.), wherefore their idea also necessarily (by I. Ax. iv.) involves the nature of both bodies; therefore, the idea of every mode, in which the human body is affected by external bodies, involves the nature of the human body and of the external body. Q.E.D.",
        es: "",
        la: "",
      },
      proof: ["e2ax1**", "e1ax4"],
    },
  ],
  [
    "e2p16cor1",
    {
      text: {
        en: "Hence it follows, first, that the human mind perceives the nature of a variety of bodies, together with the nature of its own.",
        es: "",
        la: "",
      },
      // corollary must have parent as proof
      proof: ["e2p16"],
    },
  ],
  [
    "e2p16cor2",
    {
      text: {
        en: "It follows, secondly, that the ideas, which we have of external bodies, indicate rather the constitution of our own body than the nature of external bodies. I have amply illustrated this in the Appendix to Part I.",
        es: "",
        la: "",
      },
      // corollary must have parent as proof
      proof: ["e2p16", "e1apx"],
    },
  ],
  [
    "e2p17",
    {
      text: {
        en: "If the human body is affected in a manner which involves the nature of any external body, the human mind will regard the said external body as actually existing, or as present to itself, until the human body be affected in such a way, as to exclude the existence or the presence of the said external body. Proof.—This proposition is self—evident, for so long as the human body continues to be thus affected, so long will the human mind (II. xii.) regard this modification of the body—that is (by the last Prop.), it will have the idea of the mode as actually existing, and this idea involves the nature of the external body. In other words, it will have the idea which does not exclude, but postulates the existence or presence of the nature of the external body; therefore the mind (by II. xvi., Coroll. i.) will regard the external body as actually existing, until it is affected, &c. Q.E.D.",
        es: "",
        la: "",
      },
      proof: ["e2p12", "e2p16", "e2p16cor1"],
    },
  ],
  [
    "e2p17cor",
    {
      text: {
        en: "Corollary.—The mind is able to regard as present external bodies, by which the human body has once been affected, even though they be no longer in existence or present. Proof.—When external bodies determine the fluid parts of the human body, so that they often impinge on the softer parts, they change the surface of the last named (Post. v.); hence (Ax. ii., after the Coroll. of Lemma iii.) they are refracted therefrom in a different manner from that which they followed before such change; and, further, when afterwards they impinge on the new surfaces by their own spontaneous movement, they will be refracted in the same manner, as though they had been impelled towards those surfaces by external bodies; consequently, they will, while they continue to be thus refracted, affect the human body in the same manner, whereof the mind (II. xii.) will again take cognizance—that is (II. xvii.), the mind will again regard the external body as present, and will do so, as often as the fluid parts of the human body impinge on the aforesaid surfaces by their own spontaneous motion. Wherefore, although the external bodies, by which the human body has once been affected, be no longer in existence, the mind will nevertheless regard them as present, as often as this action of the body is repeated. Q.E.D.",
        es: "",
        la: "",
      },
      // corollary must have parent as proof
      proof: ["e2p17", "e2post5", "e2ax2**", "e2p12"],
    },
  ],
  [
    "e2p17sch",
    {
      text: {
        en: "Note.—We thus see how it comes about, as is often the case, that we regard as present many things which are not. It is possible that the same result may be brought about by other causes; but I think it suffices for me here to have indicated one possible explanation, just as well as if I had pointed out the true cause. Indeed, I do not think I am very far from the truth, for all my assumptions are based on postulates, which rest, almost without exception, on experience, that cannot be controverted by those who have shown, as we have, that the human body, as we feel it, exists (Coroll. after II. xiii.). Furthermore (II. vii. Coroll., II. xvi. Coroll. ii.), we clearly understand what is the difference between the idea, say, of Peter, which constitutes the essence of Peter's mind, and the idea of the said Peter, which is in another man, say, Paul. The former directly answers to the essence of Peter's own body, and only implies existence so long as Peter exists; the latter indicates rather the disposition of Paul's body than the nature of Peter, and, therefore, while this disposition of Paul's body lasts, Paul's mind will regard Peter as present to itself, even though he no longer exists. Further, to retain the usual phraseology, the modifications of the human body, of which the ideas represent external bodies as present to us, we will call the images of things, though they do not recall the figure of things. When the mind regards bodies in this fashion, we say that it imagines. I will here draw attention to the fact, in order to indicate where error lies, that the imaginations of the mind, looked at in themselves, do not contain error. The mind does not err in the mere act of imagining, but only in so far as it is regarded as being without the idea, which excludes the existence of such things as it imagines to be present to it. If the mind, while imagining non—existent things as present to it, is at the same time conscious that they do not really exist, this power of imagination must be set down to the efficacy of its nature, and not to a fault, especially if this faculty of imagination depend solely on its own nature—that is (I. Def. vii.), if this faculty of imagination be free.",
        es: "",
        la: "",
      },
      // scholium must have parent as proof.
      // Assuming that e2p13lem3cor is what was
      // meant by "(Coroll. after II. xiii.)"
      proof: ["e2p17", "e2p13lem3cor", "e2p7cor", "e2p16cor2", "e1def7"],
    },
  ],
  [
    "e2p18",
    {
      text: {
        en: "If the human body has once been affected by two or more bodies at the same time, when the mind afterwards imagines any of them, it will straightway remember the others also. Proof.—The mind (II. xvii. Coroll.) imagines any given body, because the human body is affected and disposed by the impressions from an external body, in the same manner as it is affected when certain of its parts are acted on by the said external body; but (by our hypothesis) the body was then so disposed, that the mind imagined two bodies at once; therefore, it will also in the second case imagine two bodies at once, and the mind, when it imagines one, will straightway remember the other. Q.E.D.",
        es: "",
        la: "",
      },
      proof: ["e2p17cor"],
    },
  ],
  [
    "e2p18sch",
    {
      text: {
        en: "Note.—We now clearly see what Memory is. It is simply a certain association of ideas involving the nature of things outside the human body, which association arises in the mind according to the order and association of the modifications (affectiones) of the human body. I say, first, it is an association of those ideas only, which involve the nature of things outside the human body: not of ideas which answer to the nature of the said things: ideas of the modifications of the human body are, strictly speaking (II. xvi.), those which involve the nature both of the human body and of external bodies. I say, secondly, that this association arises according to the order and association of the modifications of the human body, in order to distinguish it from that association of ideas, which arises from the order of the intellect, whereby the mind perceives things through their primary causes, and which is in all men the same. And hence we can further clearly understand, why the mind from the thought of one thing, should straightway arrive at the thought of another thing, which has no similarity with the first; for instance, from the thought of the word pomum (an apple), a Roman would straightway arrive at the thought of the fruit apple, which has no similitude with the articulate sound in question, nor anything in common with it, except that the body of the man has often been affected by these two things; that is, that the man has often heard the word pomum, while he was looking at the fruit; similarly every man will go on from one thought to another, according as his habit has ordered the images of things in his body. For a soldier, for instance, when he sees the tracks of a horse in sand, will at once pass from the thought of a horse to the thought of a horseman, and thence to the thought of war, &c.; while a countryman will proceed from the thought of a horse to the thought of a plough, a field, &c. Thus every man will follow this or that train of thought, according as he has been in the habit of conjoining and associating the mental images of things in this or that manner.",
        es: "",
        la: "",
      },
      // scholium must have parent as proof
      proof: ["e2p18", "e2p16"],
    },
  ],
  [
    "e2p19",
    {
      text: {
        en: "The human mind has no knowledge of the body, and does not know it to exist, save through the ideas of the modifications whereby the body is affected. Proof.—The human mind is the very idea or knowledge of the human body (II. xiii.), which (II. ix.) is in God, in so far as he is regarded as affected by another idea of a particular thing actually existing: or, inasmuch as (Post. iv.) the human body stands in need of very many bodies whereby it is, as it were, continually regenerated; and the order and connection of ideas is the same as the order and connection of causes (II. vii.); this idea will therefore be in God, in so far as he is regarded as affected by the ideas of very many particular things. Thus God has the idea of the human body, or knows the human body, in so far as he is affected by very many other ideas, and not in so far as he constitutes the nature of the human mind; that is (by II. xi. Coroll.), the human mind does not know the human body. But the ideas of the modifications of body are in God, in so far as he constitutes the nature of the human mind, or the human mind perceives those modifications (II. xii.), and consequently (II. xvi.) the human body itself, and as actually existing; therefore the mind perceives thus far only the human body. Q.E.D.",
        es: "",
        la: "",
      },
      proof: ["e2p13", "e2p9", "e2post4", "e2p7", "e2p11cor", "e2p12", "e2p16"],
    },
  ],
  [
    "e2p20",
    {
      text: {
        en: " The idea or knowledge of the human mind is also in God, following in God in the same manner, and being referred to God in the same manner, as the idea or knowledge of the human body. Proof.—Thought is an attribute of God (II. i.); therefore (II. iii.) there must necessarily be in God the idea both of thought itself and of all its modifications, consequently also of the human mind (II. xi.). Further, this idea or knowledge of the mind does not follow from God, in so far as he is infinite, but in so far as he is affected by another idea of an individual thing (II. ix.). But (II. vii.) the order and connection of ideas is the same as the order and connection of causes; therefore this idea or knowledge of the mind is in God and is referred to God, in the same manner as the idea or knowledge of the body. Q.E.D.",
        es: "",
        la: "",
      },
      proof: ["e2p1", "e2p3", "e2p11", "e2p9", "e2p7"],
    },
  ],
  [
    "e2p21",
    {
      text: {
        en: "This idea of the mind is united to the mind in the same way as the mind is united to the body. Proof.—That the mind is united to the body we have shown from the fact, that the body is the object of the mind (II. xii. and xiii.); and so for the same reason the idea of the mind must be united with its object, that is, with the mind in the same manner as the mind is united to the body. Q.E.D.",
        es: "",
        la: "",
      },
      proof: ["e2p12", "e2p13"],
    },
  ],
  [
    "e2p21sch",
    {
      text: {
        en: "Note.—This proposition is comprehended much more clearly from what we have said in the note to II. vii. We there showed that the idea of body and body, that is, mind and body (II. xiii.), are one and the same individual conceived now under the attribute of thought, now under the attribute of extension; wherefore the idea of the mind and the mind itself are one and the same thing, which is conceived under one and the same attribute, namely, thought. The idea of the mind, I repeat, and the mind itself are in God by the same necessity and follow from him from the same power of thinking. Strictly speaking, the idea of the mind, that is, the idea of an idea, is nothing but the distinctive quality (forma) of the idea in so far as it is conceived as a mode of thought without reference to the object; if a man knows anything, he, by that very fact, knows that he knows it, and at the same time knows that he knows that he knows it, and so on to infinity. But I will treat of this hereafter.",
        es: "",
        la: "",
      },
      // scholium must have parent as proof
      proof: ["e2p21", "e2p13"],
    },
  ],
  [
    "e2p22",
    {
      text: {
        en: "The human mind perceives not only the modifications of the body, but also the ideas of such modifications. Proof.—The ideas of the ideas of modifications follow in God in the same manner, and are referred to God in the same manner, as the ideas of the said modifications. This is proved in the same way as II. xx. But the ideas of the modifications of the body are in the human mind (II. xii.), that is, in God, in so far as he constitutes the essence of the human mind; therefore the ideas of these ideas will be in God, in so far as he has the knowledge or idea of the human mind, that is (II. xxi.), they will be in the human mind itself, which therefore perceives not only the modifications of the body, but also the ideas of such modifications. Q.E.D.",
        es: "",
        la: "",
      },
      // e2p20 is a proxy proof
      proof: ["e2p20", "e2p12", "e2p21"],
    },
  ],
  [
    "e2p23",
    {
      text: {
        en: "The mind does not know itself, except in so far as it perceives the ideas of the modifications of the body. Proof.—The idea or knowledge of the mind (II. xx.) follows in God in the same manner, and is referred to God in the same manner, as the idea or knowledge of the body. But since (II. xix.) the human mind does not know the human body itself, that is (II. xi. Coroll.), since the knowledge of the human body is not referred to God, in so far as he constitutes the nature of the human mind; therefore, neither is the knowledge of the mind referred to God, in so far as he constitutes the essence of the human mind; therefore (by the same Coroll. II. xi.), the human mind thus far has no knowledge of itself. Further the ideas of the modifications, whereby the body is affected, involve the nature of the human body itself (II. xvi.), that is (II. xiii.), they agree with the nature of the mind; wherefore the knowledge of these ideas necessarily involves knowledge of the mind; but (by the last Prop.) the knowledge of these ideas is in the human mind itself; wherefore the human mind thus far only has knowledge of itself. Q.E.D.",
        es: "",
        la: "",
      },
      proof: ["e2p20", "e2p19", "e2p11cor", "e2p16", "e2p13"],
    },
  ],
  [
    "e2p24",
    {
      text: {
        en: "The human mind does not involve an adequate knowledge of the parts composing the human body. Proof.—The parts composing the human body do not belong to the essence of that body, except in so far as they communicate their motions to one another in a certain fixed relation (Def. after Lemma iii.), not in so far as they can be regarded as individuals without relation to the human body. The parts of the human body are highly complex individuals (Post. i.), whose parts (Lemma iv.) can be separated from the human body without in any way destroying the nature and distinctive quality of the latter, and they can communicate their motions (Ax. i., after Lemma iii.) to other bodies in another relation; therefore (II. iii.) the idea or knowledge of each part will be in God, inasmuch (II. ix.) as he is regarded as affected by another idea of a particular thing, which particular thing is prior in the order of nature to the aforesaid part (II. vii.). We may affirm the same thing of each part of each individual composing the human body; therefore, the knowledge of each part composing the human body is in God, in so far as he is affected by very many ideas of things, and not in so far as he has the idea of the human body only, in other words, the idea which constitutes the nature of the human mind (II. xiii); therefore (II. xi. Coroll.), the human mind does not involve an adequate knowledge of the human body. Q.E.D.",
        es: "",
        la: "",
      },
      proof: [
        "e2def1*",
        "e2post1",
        "e2p13lem4",
        "e2ax1**",
        "e2p3",
        "e2p9",
        "e2p7",
        "e2p13",
        "e2p11cor",
      ],
    },
  ],
  [
    "e2p25",
    {
      text: {
        en: "The idea of each modification of the human body does not involve an adequate knowledge of the external body. Proof.—We have shown that the idea of a modification of the human body involves the nature of an external body, in so far as that external body conditions the human body in a given manner. But, in so far as the external body is an individual, which has no reference to the human body, the knowledge or idea thereof is in God (II. ix.), in so far as God is regarded as affected by the idea of a further thing, which (II. vii.) is naturally prior to the said external body. Wherefore an adequate knowledge of the external body is not in God, in so far as he has the idea of the modification of the human body; in other words, the idea of the modification of the human body does not involve an adequate knowledge of the external body. Q.E.D.",
        es: "",
        la: "",
      },
      proof: ["e2p9", "e2p7"],
    },
  ],
  [
    "e2p26",
    {
      text: {
        en: "The human mind does not perceive any external body as actually existing, except through the ideas of the modifications of its own body. Proof.—If the human body is in no way affected by a given external body, then (II. vii.) neither is the idea of the human body, in other words, the human mind, affected in any way by the idea of the existence of the said external body, nor does it in any manner perceive its existence. But, in so far as the human body is affected in any way by a given external body, thus far (II. xvi. and Coroll.) it perceives that external body. Q.E.D.",
        es: "",
        la: "",
      },
      proof: ["e2p7", "e2p16", "e2p16cor1"],
    },
  ],
  [
    "e2p26cor",
    {
      text: {
        en: "Corollary.—In so far as the human mind imagines an external body, it has not an adequate knowledge thereof. Proof.—When the human mind regards external bodies through the ideas of the modifications of its own body, we say that it imagines (see II. xvii. note); now the mind can only imagine external bodies as actually existing. Therefore (by II. xxv.), in so far as the mind imagines external bodies, it has not an adequate knowledge of them. Q.E.D.",
        es: "",
        la: "",
      },
      // corollary must have parent as proof
      proof: ["e2p26", "e2p7sch", "e2p25"],
    },
  ],
  [
    "e2p27",
    {
      text: {
        en: "The idea of each modification of the human body does not involve an adequate knowledge of the human body itself. Proof.—Every idea of a modification of the human body involves the nature of the human body, in so far as the human body is regarded as affected in a given manner (II. xvi.). But, inasmuch as the human body is an individual which may be affected in many other ways, the idea of the said modification, &c. Q.E.D.",
        es: "",
        la: "",
      },
      proof: ["e2p16"],
    },
  ],
  [
    "e2p28",
    {
      text: {
        en: "The ideas of the modifications of the human body, in so far as they have reference only to the human mind, are not clear and distinct, but confused. Proof.—The ideas of the modifications of the human body involve the nature both of the human body and of external bodies (II. xvi.); they must involve the nature not only of the human body but also of its parts; for the modifications are modes (Post. iii.), whereby the parts of the human body, and, consequently, the human body as a whole are affected. But (by II. xxiv., xxv.) the adequate knowledge of external bodies, as also of the parts composing the human body, is not in God, in so far as he is regarded as affected by the human mind, but in so far as he is regarded as affected by other ideas. These ideas of modifications, in so far as they are referred to the human mind alone, are as consequences without premisses, in other words, confused ideas. Q.E.D.",
        es: "",
        la: "",
      },
      proof: ["e2p16", "e2post3", "e2p24", "e2p25"],
    },
  ],
  [
    "e2p28sch",
    {
      text: {
        en: "Note.—The idea which constitutes the nature of the human mind is, in the same manner, proved not to be, when considered in itself alone, clear and distinct; as also is the case with the idea of the human mind, and the ideas of the ideas of the modifications of the human body, in so far as they are referred to the mind only, as everyone may easily see.",
        es: "",
        la: "",
      },
      // scholium must have parent as proof
      proof: ["e2p28"],
    },
  ],
  [
    "e2p29",
    {
      text: {
        en: "The idea of the idea of each modification of the human body does not involve an adequate knowledge of the human mind. Proof.—The idea of a modification of the human body (II. xxvii.) does not involve an adequate knowledge of the said body, in other words, does not adequately express its nature; that is (II. xiii.) it does not agree with the nature of the mind adequately; therefore (I. Ax. vi) the idea of this idea does not adequately express the nature of the human mind, or does not involve an adequate knowledge thereof.",
        es: "",
        la: "",
      },
      proof: ["e2p27", "e2p13", "e1ax6"],
    },
  ],
  [
    "e2p29cor",
    {
      text: {
        en: "Corollary.—Hence it follows that the human mind, when it perceives things after the common order of nature, has not an adequate but only a confused and fragmentary knowledge of itself, of its own body, and of external bodies. For the mind does not know itself, except in so far as it perceives the ideas of the modifications of body (II. xxiii.). It only perceives its own body (II. xix.) through the ideas of the modifications, and only perceives external bodies through the same means; thus, in so far as it has such ideas of modification, it has not an adequate knowledge of itself (II. xxix.), nor of its own body (II. xxvii.), nor of external bodies (II. xxv.), but only a fragmentary and confused knowledge thereof (II. xxviii. and note). Q.E.D.",
        es: "",
        la: "",
      },
      // corollary must have parent as proof
      proof: ["e2p29", "e2p23", "e2p19", "e2p27", "e2p25", "e2p28", "e2p28sch"],
    },
  ],
  [
    "e2p29sch",
    {
      text: {
        en: "Note.—I say expressly, that the mind has not an adequate but only a confused knowledge of itself, its own body, and of external bodies, whenever it perceives things after the common order of nature; that is, whenever it is determined from without, namely, by the fortuitous play of circumstance, to regard this or that; not at such times as it is determined from within, that is, by the fact of regarding several things at once, to understand their points of agreement, difference, and contrast. Whenever it is determined in anywise from within, it regards things clearly and distinctly, as I will show below.",
        es: "",
        la: "",
      },
      // scholium must have parent as proof
      proof: ["e2p29"],
    },
  ],
  [
    "e2p30",
    {
      text: {
        en: "We can only have a very inadequate knowledge of the duration of our body. Proof.—The duration of our body does not depend on its essence (II. Ax. i.), nor on the absolute nature of God (I. xxi.). But (I. xxviii.) it is conditioned to exist and operate by causes, which in their turn are conditioned to exist and operate in a fixed and definite relation by other causes, these last again being conditioned by others, and so on to infinity. The duration of our body therefore depends on the common order of nature, or the constitution of things. Now, however a thing may be constituted, the adequate knowledge of that thing is in God, in so far as he has the ideas of all things, and not in so far as he has the idea of the human body only. (II. ix. Coroll.) Wherefore the knowledge of the duration of our body is in God very inadequate, in so far as he is only regarded as constituting the nature of the human mind; that is (II. xi. Coroll.), this knowledge is very inadequate to our mind. Q.E.D.",
        es: "",
        la: "",
      },
      proof: ["e2ax1", "e1p21", "e1p28", "e2p9cor", "e2p11cor"],
    },
  ],
  [
    "e2p31",
    {
      text: {
        en: "We can only have a very inadequate knowledge of the duration of particular things external to ourselves. Proof.—Every particular thing, like the human body, must be conditioned by another particular thing to exist and operate in a fixed and definite relation; this other particular thing must likewise be conditioned by a third, and so on to infinity. (I. xxviii.) As we have shown in the foregoing proposition, from this common property of particular things, we have only a very inadequate knowledge of the duration of our body; we must draw a similar conclusion with regard to the duration of particular things, namely, that we can only have a very inadequate knowledge of the duration thereof. Q.E.D.",
        es: "",
        la: "",
      },
      proof: ["e1p28"],
    },
  ],
  [
    "e2p31cor",
    {
      text: {
        en: "Corollary.—Hence it follows that all particular things are contingent and perishable. For we can have no adequate idea of their duration (by the last Prop.), and this is what we must understand by the contingency and perishableness of things. (I. xxxiii., Note i.) For (I. xxix.), except in this sense, nothing is contingent.",
        es: "",
        la: "",
      },
      // corollary must have parent as proof
      proof: ["e2p31", "e2p30", "e1p33sch1", "e1p29"],
    },
  ],
  [
    "e2p32",
    {
      text: {
        en: "All ideas, in so far as they are referred to God, are true. Proof.—All ideas which are in God agree in every respect with their objects (II. vii. Coroll.), therefore (I. Ax. vi.) they are all true. Q.E.D.",
        es: "",
        la: "",
      },
      proof: ["e2p7cor", "e1ax6"],
    },
  ],
  [
    "e2p33",
    {
      text: {
        en: "There is nothing positive in ideas, which causes them to be called false. Proof.—If this be denied, conceive, if possible, a positive mode of thinking, which should constitute the distinctive quality of falsehood. Such a mode of thinking cannot be in God (II. xxxii.); external to God it cannot be or be conceived (I. xv.). Therefore there is nothing positive in ideas which causes them to be called false. Q.E.D.",
        es: "",
        la: "",
      },
      proof: ["e2p32", "e1p15"],
    },
  ],
  [
    "e2p34",
    {
      text: {
        en: "Every idea, which in us is absolute or adequate and perfect, is true. Proof.—When we say that an idea in us is adequate and perfect, we say, in other words (II. xi. Coroll.), that the idea is adequate and perfect in God, in so far as he constitutes the essence of our mind; consequently (II. xxxii.), we say that such an idea is true. Q.E.D.",
        es: "",
        la: "",
      },
      proof: ["e2p11cor", "e2p32"],
    },
  ],
  [
    "e2p35",
    {
      text: {
        en: "Falsity consists in the privation of knowledge, which inadequate, fragmentary, or confused ideas involve. Proof.—There is nothing positive in ideas, which causes them to be called false (II. xxxiii.); but falsity cannot consist in simple privation (for minds, not bodies, are said to err and to be mistaken), neither can it consist in absolute ignorance, for ignorance and error are not identical; wherefore it consists in the privation of knowledge, which inadequate, fragmentary, or confused ideas involve. Q.E.D.",
        es: "",
        la: "",
      },
      proof: ["e2p33"],
    },
  ],
  [
    "e2p35sch",
    {
      text: {
        en: "Note.—In the note to II. xvii. I explained how error consists in the privation of knowledge, but in order to throw more light on the subject I will give an example. For instance, men are mistaken in thinking themselves free; their opinion is made up of consciousness of their own actions, and ignorance of the causes by which they are conditioned. Their idea of freedom, therefore, is simply their ignorance of any cause for their actions. As for their saying that human actions depend on the will, this is a mere phrase without any idea to correspond thereto. What the will is, and how it moves the body, they none of them know; those who boast of such knowledge, and feign dwellings and habitations for the soul, are wont to provoke either laughter or disgust. So, again, when we look at the sun, we imagine that it is distant from us about two hundred feet; this error does not lie solely in this fancy, but in the fact that, while we thus imagine, we do not know the sun's true distance or the cause of the fancy. For although we afterwards learn, that the sun is distant from us more than six hundred of the earth's diameters, we none the less shall fancy it to be near; for we do not imagine the sun as near us, because we are ignorant of its true distance, but because the modification of our body involves the essence of the sun, in so far as our said body is affected thereby.",
        es: "",
        la: "",
      },
      // scholium must have parent as proof
      proof: ["e2p35", "e2p17"],
    },
  ],
  [
    "e2p36",
    {
      text: {
        en: "Inadequate and confused ideas follow by the same necessity, as adequate or clear and distinct ideas. Proof.—All ideas are in God (I. xv.), and in so far as they are referred to God are true (II. xxxii.) and (II. vii. Coroll.) adequate; therefore there are no ideas confused or inadequate, except in respect to a particular mind (cf. II. xxiv. and xxviii.); therefore all ideas, whether adequate or inadequate, follow by the same necessity (II. vi.). Q.E.D.",
        es: "",
        la: "",
      },
      // the Elwes translation has a mistake here,
      // it's meant to be "e2p6cor" not the root "e2p6":
      proof: ["e1p15", "e2p32", "e2p7cor", "e2p24", "e2p28", "e2p6cor"],
    },
  ],
  [
    "e2p37",
    {
      text: {
        en: "That which is common to all (cf. Lemma II., above), and which is equally in a part and in the whole, does not constitute the essence of any particular thing. Proof.—If this be denied, conceive, if possible, that it constitutes the essence of some particular thing; for instance, the essence of B. Then (II. Def. ii.) it cannot without B either exist or be conceived; but this is against our hypothesis. Therefore it does not appertain to B's essence, nor does it constitute the essence of any particular thing. Q.E.D.",
        es: "",
        la: "",
      },
      // though e2p13lem2 is mentioned in the proposition and
      // not the proof, it seems to satisfy the role of a proof:
      proof: ["e2def2", "e2p13lem2"],
    },
  ],
  [
    "e2p38",
    {
      text: {
        en: "Those things, which are common to all, and which are equally in a part and in the whole, cannot be conceived except adequately. Proof.—Let A be something, which is common to all bodies, and which is equally present in the part of any given body and in the whole. I say A cannot be conceived except adequately. For the idea thereof in God will necessarily be adequate (II. vii. Coroll.), both in so far as God has the idea of the human body, and also in so far as he has the idea of the modifications of the human body, which (II. xvi., xxv., xxvii.) involve in part the nature of the human body and the nature of external bodies; that is (II. xii., xiii.), the idea in God will necessarily be adequate, both in so far as he constitutes the human mind, and in so far as he has the ideas, which are in the human mind. Therefore the mind (II. xi. Coroll.) necessarily perceives A adequately, and has this adequate perception, both in so far as it perceives itself, and in so far as it perceives its own or any external body, nor can A be conceived in any other manner. Q.E.D.",
        es: "",
        la: "",
      },
      proof: [
        "e2p7cor",
        "e2p16",
        "e2p25",
        "e2p27",
        "e2p12",
        "e2p13",
        "e2p11cor",
      ],
    },
  ],
  [
    "e2p38cor",
    {
      text: {
        en: "Corollary—Hence it follows that there are certain ideas or notions common to all men; for (by Lemma ii.) all bodies agree in certain respects, which (by the foregoing Prop.) must be adequately or clearly and distinctly perceived by all.",
        es: "",
        la: "",
      },
      // corollary must have parent as proof
      proof: ["e2p38", "e2p13lem2"],
    },
  ],
  [
    "e2p39",
    {
      text: {
        en: "That, which is common to and a property of the human body and such other bodies as are wont to affect the human body, and which is present equally in each part of either, or in the whole, will be represented by an adequate idea in the mind.",
        es: "",
        la: "",
      },
      proof: ["e2p7cor", "e2p16", "e2p13", "e2p11cor"],
    },
  ],
  [
    "e2p39cor",
    {
      text: {
        en: "Corollary.—Hence it follows that the mind is fitted to perceive adequately more things, in proportion as its body has more in common with other bodies.",
        es: "",
        la: "",
      },
      // corollary must have parent as proof
      proof: ["e2p39"],
    },
  ],
  [
    "e2p40",
    {
      text: {
        en: "Whatsoever ideas in the mind follow from ideas which are therein adequate, are also themselves adequate. Proof.—This proposition is self—evident. For when we say that an idea in the human mind follows from ideas which are therein adequate, we say, in other words (II. xi. Coroll.), that an idea is in the divine intellect, whereof God is the cause, not in so far as he is infinite, nor in so far as he is affected by the ideas of very many particular things, but only in so far as he constitutes the essence of the human mind.",
        es: "",
        la: "",
      },
      proof: ["e2p11cor"],
    },
  ],
  [
    "e2p40sch1",
    {
      text: {
        en: "Note I.—I have thus set forth the cause of those notions, which are common to all men, and which form the basis of our ratiocination. But there are other causes of certain axioms or notions, which it would be to the purpose to set forth by this method of ours; for it would thus appear what notions are more useful than others, and what notions have scarcely any use at all. Furthermore, we should see what notions are common to all men, and what notions are only clear and distinct to those who are unshackled by prejudice, and we should detect those which are ill—founded. Again we should discern whence the notions called secondary derived their origin, and consequently the axioms on which they are founded, and other points of interest connected with these questions. But I have decided to pass over the subject here, partly because I have set it aside for another treatise, partly because I am afraid of wearying the reader by too great prolixity. Nevertheless, in order not to omit anything necessary to be known, I will briefly set down the causes, whence are derived the terms styled transcendental, such as Being, Thing, Something. These terms arose from the fact, that the human body, being limited, is only capable of distinctly forming a certain number of images (what an image is I explained in the II. xvii. note) within itself at the same time; if this number be exceeded, the images will begin to be confused; if this number of images, of which the body is capable of forming distinctly within itself, be largely exceeded, all will become entirely confused one with another. This being so, it is evident (from II. Prop. xvii. Coroll., and xviii.) that the human mind can distinctly imagine as many things simultaneously, as its body can form images simultaneously. When the images become quite confused in the body, the mind also imagines all bodies confusedly without any distinction, and will comprehend them, as it were, under one attribute, namely, under the attribute of Being, Thing, &c. The same conclusion can be drawn from the fact that images are not always equally vivid, and from other analogous causes, which there is no need to explain here; for the purpose which we have in view it is sufficient for us to consider one only. All may be reduced to this, that these terms represent ideas in the highest degree confused. From similar causes arise those notions, which we call general, such as man, horse, dog, &c. They arise, to wit, from the fact that so many images, for instance, of men, are formed simultaneously in the human mind, that the powers of imagination break down, not indeed utterly, but to the extent of the mind losing count of small differences between individuals (e.g. colour, size, &c.) and their definite number, and only distinctly imagining that, in which all the individuals, in so far as the body is affected by them, agree; for that is the point, in which each of the said individuals chiefly affected the body; this the mind expresses by the name man, and this it predicates of an infinite number of particular individuals. For, as we have said, it is unable to imagine the definite number of individuals. We must, however, bear in mind, that these general notions are not formed by all men in the same way, but vary in each individual according as the point varies, whereby the body has been most often affected and which the mind most easily imagines or remembers. For instance, those who have most often regarded with admiration the stature of man, will by the name of man understand an animal of erect stature; those who have been accustomed to regard some other attribute, will form a different general image of man, for instance, that man is a laughing animal, a two—footed animal without feathers, a rational animal, and thus, in other cases, everyone will form general images of things according to the habit of his body. It is thus not to be wondered at, that among philosophers, who seek to explain things in nature merely by the images formed of them, so many controversies should have arisen.",
        es: "",
        la: "",
      },
      // scholium must have parent as proof
      proof: ["e2p40", "e2p17sch", "e2p17cor", "e2p18"],
    },
  ],
  [
    "e2p40sch2",
    {
      text: {
        en: "Note II.—From all that has been said above it is clear, that we, in many cases, perceive and form our general notions:—(1.) From particular things represented to our intellect fragmentarily, confusedly, and without order through our senses (II. xxix. Coroll.); I have settled to call such perceptions by the name of knowledge from the mere suggestions of experience.(2.) From symbols, e.g., from the fact of having read or heard certain words we remember things and form certain ideas concerning them, similar to those through which we imagine things (II. xviii. note). I shall call both these ways of regarding things knowledge of the first kind, opinion, or imagination. (3.) From the fact that we have notions common to all men, and adequate ideas of the properties of things (II. xxxviii. Coroll., xxxix. and Coroll. and xl.); this I call reason and knowledge of the second kind. Besides these two kinds of knowledge, there is, as I will hereafter show, a third kind of knowledge, which we will call intuition. This kind of knowledge proceeds from an adequate idea of the absolute essence of certain attributes of God to the adequate knowledge of the essence of things. I will illustrate all three kinds of knowledge by a single example. Three numbers are given for finding a fourth, which shall be to the third as the second is to the first. Tradesmen without hesitation multiply the second by the third, and divide the product by the first; either because they have not forgotten the rule which they received from a master without any proof, or because they have often made trial of it with simple numbers, or by virtue of the proof of the nineteenth proposition of the seventh book of Euclid, namely, in virtue of the general property of proportionals. But with very simple numbers there is no need of this. For instance, one, two, three, being given, everyone can see that the fourth proportional is six; and this is much clearer, because we infer the fourth number from an intuitive grasping of the ratio, which the first bears to the second.",
        es: "",
        la: "",
      },
      // scholium must have parent as proof
      proof: [
        "e2p40",
        "e2p29cor",
        "e2p18sch",
        "e2p38cor",
        "e2p39",
        "e2p39cor",
        "e2p40",
      ],
      see: ["nineteenth proposition of the seventh book of Euclid"],
    },
  ],
  [
    "e2p41",
    {
      text: {
        en: "Knowledge of the first kind is the only source of falsity, knowledge of the second and third kinds is necessarily true. Proof.—To knowledge of the first kind we have (in the foregoing note) assigned all those ideas, which are inadequate and confused; therefore this kind of knowledge is the only source of falsity (II. xxxv.). Furthermore, we assigned to the second and third kinds of knowledge those ideas which are adequate; therefore these kinds are necessarily true (II. xxxiv.). Q.E.D.",
        es: "",
        la: "",
      },
      proof: ["e2p35", "e2p34"],
    },
  ],
  [
    "e2p42",
    {
      text: {
        en: "Knowledge of the second and third kinds, not knowledge of the first kind, teaches us to distinguish the true from the false. Proof.—This proposition is self—evident. He, who knows how to distinguish between true and false, must have an adequate idea of true and false. That is (II. xl., note ii.), he must know the true and the false by the second or third kind of knowledge.",
        es: "",
        la: "",
      },
      proof: ["e2p40sch2"],
    },
  ],
  [
    "e2p43",
    {
      text: {
        en: "He, who has a true idea, simultaneously knows that he has a true idea, and cannot doubt of the truth of the thing perceived. Proof.—A true idea in us is an idea which is adequate in God, in so far as he is displayed through the nature of the human mind (II. xi. Coroll.). Let us suppose that there is in God, in so far as he is displayed through the human mind, an adequate idea, A. The idea of this idea must also necessarily be in God, and be referred to him in the same way as the idea A (by II. xx., whereof the proof is of universal application). But the idea A is supposed to be referred to God, in so far as he is displayed through the human mind; therefore, the idea of the idea A must be referred to God in the same manner; that is (by II. xi. Coroll.), the adequate idea of the idea A will be in the mind, which has the adequate idea A; therefore he, who has an adequate idea or knows a thing truly (II. xxxiv.), must at the same time have an adequate idea or true knowledge of his knowledge; that is, obviously, he must be assured. Q.E.D.",
        es: "",
        la: "",
      },
      proof: ["e2p11cor", "e2p20", "e2p34"],
    },
  ],
  [
    "e2p43sch",
    {
      text: {
        en: "Note.—I explained in the note to II. xxi. what is meant by the idea of an idea; but we may remark that the foregoing proposition is in itself sufficiently plain. No one, who has a true idea, is ignorant that a true idea involves the highest certainty. For to have a true idea is only another expression for knowing a thing perfectly, or as well as possible. No one, indeed, can doubt of this, unless he thinks that an idea is something lifeless, like a picture on a panel, and not a mode of thinking—namely, the very act of understanding. And who, I ask, can know that he understands anything, unless he do first understand it? In other words, who can know that he is sure of a thing, unless he be first sure of that thing? Further, what can there be more clear, and more certain, than a true idea as a standard of truth? Even as light displays both itself and darkness, so is truth a standard both of itself and of falsity. I think I have thus sufficiently answered these questions—namely, if a true idea is distinguished from a false idea, only in so far as it is said to agree with its object, a true idea has no more reality or perfection than a false idea (since the two are only distinguished by an extrinsic mark); consequently, neither will a man who has a true idea have any advantage over him who has only false ideas. Further, how comes it that men have false ideas? Lastly, how can anyone be sure, that he has ideas which agree with their objects? These questions, I repeat, I have, in my opinion, sufficiently answered. The difference between a true idea and a false idea is plain: from what was said in II. xxxv., the former is related to the latter as being is to not—being. The causes of falsity I have set forth very clearly in II. xix. and II. xxxv. with the note. From what is there stated, the difference between a man who has true ideas, and a man who has only false ideas, is made apparent. As for the last question—as to how a man can be sure that he has ideas that agree with their objects, I have just pointed out, with abundant clearness, that his knowledge arises from the simple fact, that he has an idea which corresponds with its object—in other words, that truth is its own standard. We may add that our mind, in so far as it perceives things truly, is part of the infinite intellect of God (II. xi. Coroll.); therefore, the clear and distinct ideas of the mind are as necessarily true as the ideas of God.",
        es: "",
        la: "",
      },
      // scholium must have parent as proof
      proof: ["e2p43", "e2p21sch", "e2p35", "e2p19", "e2p35sch", "e2p11cor"],
    },
  ],
  [
    "e2p44",
    {
      text: {
        en: "It is not in the nature of reason to regard things as contingent, but as necessary. Proof.—It is in the nature of reason to perceive things truly (II. xli.), namely (I. Ax. vi.), as they are in themselves—that is (I. xxix.), not as contingent, but as necessary. Q.E.D.",
        es: "",
        la: "",
      },
      proof: ["e2p41", "e1ax6", "e1p29"],
    },
  ],
  [
    "e2p44cor1",
    {
      text: {
        en: "Corollary I.—Hence it follows, that it is only through our imagination that we consider things, whether in respect to the future or the past, as contingent.",
        es: "",
        la: "",
      },
      // corollary must have parent as proof
      proof: ["e2p44"],
    },
  ],
  [
    "e2p44sch",
    {
      text: {
        en: "Note.—How this way of looking at things arises, I will briefly explain. We have shown above (II. xvii. and Coroll.) that the mind always regards things as present to itself, even though they be not in existence, until some causes arise which exclude their existence and presence. Further (II. xviii.), we showed that, if the human body has once been affected by two external bodies simultaneously, the mind, when it afterwards imagines one of the said external bodies, will straightway remember the other—that is, it will regard both as present to itself, unless there arise causes which exclude their existence and presence. Further, no one doubts that we imagine time, from the fact that we imagine bodies to be moved some more slowly than others, some more quickly, some at equal speed. Thus, let us suppose that a child yesterday saw Peter for the first time in the morning, Paul at noon, and Simon in the evening; then, that today he again sees Peter in the morning. It is evident, from II. Prop. xviii., that, as soon as he sees the morning light, he will imagine that the sun will traverse the same parts of the sky, as it did when he saw it on the preceding day; in other words, he will imagine a complete day, and, together with his imagination of the morning, he will imagine Peter; with noon, he will imagine Paul; and with evening, he will imagine Simon—that is, he will imagine the existence of Paul and Simon in relation to a future time; on the other hand, if he sees Simon in the evening, he will refer Peter and Paul to a past time, by imagining them simultaneously with the imagination of a past time. If it should at any time happen, that on some other evening the child should see James instead of Simon, he will, on the following morning, associate with his imagination of evening sometimes Simon, sometimes James, not both together: for the child is supposed to have seen, at evening, one or other of them, not both together. His imagination will therefore waver; and, with the imagination of future evenings, he will associate first one, then the other—that is, he will imagine them in the future, neither of them as certain, but both as contingent. This wavering of the imagination will be the same, if the imagination be concerned with things which we thus contemplate, standing in relation to time past or time present: consequently, we may imagine things as contingent, whether they be referred to time present, past, or future.",
        es: "",
        la: "",
      },
      // scholium must have parent as proof
      proof: ["e2p44", "e2p17", "e2p17cor", "e2p18"],
    },
  ],
  [
    "e2p44cor2",
    {
      text: {
        en: "Corollary II.—It is in the nature of reason to perceive things under a certain form of eternity (sub quâdam æternitatis specie). Proof.—It is in the nature of reason to regard things, not as contingent, but as necessary (II. xliv.). Reason perceives this necessity of things (II. xli.) truly—that is (I. Ax. vi.), as it is in itself. But (I. xvi.) this necessity of things is the very necessity of the eternal nature of God; therefore, it is in the nature of reason to regard things under this form of eternity. We may add that the bases of reason are the notions (II. xxxviii.), which answer to things common to all, and which (II. xxxvii.) do not answer to the essence of any particular thing: which must therefore be conceived without any relation to time, under a certain form of eternity.",
        es: "",
        la: "",
      },
      // corollary must have parent as proof
      proof: ["e2p44", "e2p41", "e1ax6", "e1p16", "e2p38", "e2p37"],
    },
  ],
  [
    "e2p45",
    {
      text: {
        en: "Every idea of every body, or of every particular thing actually existing, necessarily involves the eternal and infinite essence of God. Proof.—The idea of a particular thing actually existing necessarily involves both the existence and the essence of the said thing (II. viii.). Now particular things cannot be conceived without God (I. xv.); but, inasmuch as (II. vi.) they have God for their cause, in so far as he is regarded under the attribute of which the things in question are modes, their ideas must necessarily involve (I. Ax. iv.) the conception of the attributes of those ideas—that is (I. vi.), the eternal and infinite essence of God. Q.E.D.",
        es: "",
        la: "",
      },
      proof: ["e2p8", "e1p15", "e2p6", "e1ax4", "e1p6"],
    },
  ],
  [
    "e2p45sch",
    {
      text: {
        en: "Note.—By existence I do not here mean duration—that is, existence in so far as it is conceived abstractedly, and as a certain form of quantity. I am speaking of the very nature of existence, which is assigned to particular things, because they follow in infinite numbers and in infinite ways from the eternal necessity of God's nature (I. xvi.). I am speaking, I repeat, of the very existence of particular things, in so far as they are in God. For although each particular thing be conditioned by another particular thing to exist in a given way, yet the force whereby each particular thing perseveres in existing follows from the eternal necessity of God's nature (cf. I. xxiv. Coroll.).",
        es: "",
        la: "",
      },
      // scholium must have parent as proof
      proof: ["e2p45", "e1p16", "e1p24cor"],
    },
  ],
  [
    "e2p46",
    {
      text: {
        en: "The knowledge of the eternal and infinite essence of God which every idea involves is adequate and perfect. Proof.—The proof of the last proposition is universal; and whether a thing be considered as a part or a whole, the idea thereof, whether of the whole or of a part (by the last Prop.), will involve God's eternal and infinite essence. Wherefore, that, which gives knowledge of the eternal and infinite essence of God, is common to all, and is equally in the part and in the whole; therefore (II. xxxviii.) this knowledge will be adequate. Q.E.D.",
        es: "",
        la: "",
      },
      proof: ["e2p45", "e2p38"],
    },
  ],
  [
    "e2p47",
    {
      text: {
        en: "The human mind has an adequate knowledge of the eternal and infinite essence of God. Proof.—The human mind has ideas (II. xxii.), from which (II. xxiii.) it perceives itself and its own body (II. xix.) and external bodies (II. xvi. Coroll. i. and II. xvii.) as actually existing; therefore (II. xlv. and xlvi.) it has an adequate knowledge of the eternal and infinite essence of God. Q.E.D.",
        es: "",
        la: "",
      },
      proof: [
        "e2p22",
        "e2p23",
        "e2p19",
        "e2p16cor1",
        "e2p17",
        "e2p45",
        "e2p46",
      ],
    },
  ],
  [
    "e2p47sch",
    {
      text: {
        en: "Note.—Hence we see, that the infinite essence and the eternity of God are known to all. Now as all things are in God, and are conceived through God, we can from this knowledge infer many things, which we may adequately know, and we may form that third kind of knowledge of which we spoke in the note to II. xl., and of the excellence and use of which we shall have occasion to speak in Part V. Men have not so clear a knowledge of God as they have of general notions, because they are unable to imagine God as they do bodies, and also because they have associated the name God with images of things that they are in the habit of seeing, as indeed they can hardly avoid doing, being, as they are, men, and continually affected by external bodies. Many errors, in truth, can be traced to this head, namely, that we do not apply names to things rightly. For instance, when a man says that the lines drawn from the centre of a circle to its circumference are not equal, he then, at all events, assuredly attaches a meaning to the word circle different from that assigned by mathematicians. So again, when men make mistakes in calculation, they have one set of figures in their mind, and another on the paper. If we could see into their minds, they do not make a mistake; they seem to do so, because we think, that they have the same numbers in their mind as they have on the paper. If this were not so, we should not believe them to be in error, any more than I thought that a man was in error, whom I lately heard exclaiming that his entrance hall had flown into a neighbour's hen, for his meaning seemed to me sufficiently clear. Very many controversies have arisen from the fact, that men do not rightly explain their meaning, or do not rightly interpret the meaning of others. For, as a matter of fact, as they flatly contradict themselves, they assume now one side, now another, of the argument, so as to oppose the opinions, which they consider mistaken and absurd in their opponents.",
        es: "",
        la: "",
      },
      // Elwes translation is missing that Spinoza
      // points out e2p40sch(2), not just any sch;
      // scholium must have parent as proof
      proof: ["e2p47", "e2p40sch2"],
    },
  ],
  [
    "e2p48",
    {
      text: {
        en: "In the mind there is no absolute or free will; but the mind is determined to wish this or that by a cause, which has also been determined by another cause, and this last by another cause, and so on to infinity. Proof.—The mind is a fixed and definite mode of thought (II. xi.), therefore it cannot be the free cause of its actions (I. xvii. Coroll. ii.); in other words, it cannot have an absolute faculty of positive or negative volition; but (by I. xxviii.) it must be determined by a cause, which has also been determined by another cause, and this last by another, &c. Q.E.D.",
        es: "",
        la: "",
      },
      proof: ["e2p11", "e1p17cor2", "e1p28"],
    },
  ],
  [
    "e2p48sch",
    {
      text: {
        en: 'Note.—In the same way it is proved, that there is in the mind no absolute faculty of understanding, desiring, loving, &c. Whence it follows, that these and similar faculties are either entirely fictitious, or are merely abstract and general terms, such as we are accustomed to put together from particular things. Thus the intellect and the will stand in the same relation to this or that idea, or this or that volition, as "lapidity" to this or that stone, or as "man" to Peter and Paul. The cause which leads men to consider themselves free has been set forth in the Appendix to Part I. But, before I proceed further, I would here remark that, by the will to affirm and decide, I mean the faculty, not the desire. I mean, I repeat, the faculty, whereby the mind affirms or denies what is true or false, not the desire, wherewith the mind wishes for or turns away from any given thing. After we have proved, that these faculties of ours are general notions, which cannot be distinguished from the particular instances on which they are based, we must inquire whether volitions themselves are anything besides the ideas of things. We must inquire, I say, whether there is in the mind any affirmation or negation beyond that, which the idea, in so far as it is an idea, involves. On which subject see the following proposition, and II. Def. iii., lest the idea of pictures should suggest itself. For by ideas I do not mean images such as are formed at the back of the eye, or in the midst of the brain, but the conceptions of thought.',
        es: "",
        la: "",
      },
      // scholium must have parent as proof
      proof: ["e2p48", "e1apx", "e2def3"],
      // Curiously, this scholium points to
      // next proposition almost as a proof:
      see: ["e2p49"],
    },
  ],
  [
    "e2p49",
    {
      text: {
        en: "There is in the mind no volition or affirmation and negation, save that which an idea, inasmuch as it is an idea, involves. Proof.—There is in the mind no absolute faculty of positive or negative volition, but only particular volitions, namely, this or that affirmation, and this or that negation. Now let us conceive a particular volition, namely, the mode of thinking whereby the mind affirms, that the three interior angles of a triangle are equal to two right angles. This affirmation involves the conception or idea of a triangle, that is, without the idea of a triangle it cannot be conceived. It is the same thing to say, that the concept A must involve the concept B, as it is to say, that A cannot be conceived without B. Further, this affirmation cannot be made (II. Ax. iii.) without the idea of a triangle. Therefore, this affirmation can neither be nor be conceived, without the idea of a triangle. Again, this idea of a triangle must involve this same affirmation, namely, that its three interior angles are equal to two right angles. Wherefore, and vice versâ, this idea of a triangle can neither be nor be conceived without this affirmation, therefore, this affirmation belongs to the essence of the idea of a triangle, and is nothing besides. What we have said of this volition (inasmuch as we have selected it at random) may be said of any other volition, namely, that it is nothing but an idea. Q.E.D.",
        es: "",
        la: "",
      },
      proof: ["e2ax3"],
    },
  ],
  [
    "e2p49cor",
    {
      text: {
        en: "Corollary.—Will and understanding are one and the same. Proof.—Will and understanding are nothing beyond the individual volitions and ideas (II. xlviii. and note). But a particular volition and a particular idea are one and the same (by the foregoing Prop.); therefore, will and understanding are one and the same. Q.E.D.",
        es: "",
        la: "",
      },
      // corollary must have parent as proof
      proof: ["e2p49", "e2p48", "e2p48sch"],
    },
  ],
  [
    "e2p49sch",
    {
      text: {
        en: "Note.—We have thus removed the cause which is commonly assigned for error. For we have shown above, that falsity consists solely in the privation of knowledge involved in ideas which are fragmentary and confused. Wherefore, a false idea, inasmuch as it is false, does not involve certainty. When we say, then, that a man acquiesces in what is false, and that he has no doubts on the subject, we do not say that he is certain, but only that he does not doubt, or that he acquiesces in what is false, inasmuch as there are no reasons, which should cause his imagination to waver (see II. xliv. note). Thus, although the man be assumed to acquiesce in what is false, we shall never say that he is certain. For by certainty we mean something positive (II. xliii. and note), not merely the absence of doubt. However, in order that the foregoing proposition may be fully explained, I will draw attention to a few additional points, and I will furthermore answer the objections which may be advanced against our doctrine. Lastly, in order to remove every scruple, I have thought it worth while to point out some of the advantages, which follow therefrom. I say \"some,\" for they will be better appreciated from what we shall set forth in the fifth part. I begin, then, with the first point, and warn my readers to make an accurate distinction between an idea, or conception of the mind, and the images of things which we imagine. It is further necessary that they should distinguish between idea and words, whereby we signify things. These three—namely, images, words, and ideas—are by many persons either entirely confused together, or not distinguished with sufficient accuracy or care, and hence people are generally in ignorance, how absolutely necessary is a knowledge of this doctrine of the will, both for philosophic purposes and for the wise ordering of life. Those who think that ideas consist in images which are formed in us by contact with external bodies, persuade themselves that the ideas of those things, whereof we can form no mental picture, are not ideas, but only figments, which we invent by the free decree of our will; they thus regard ideas as though they were inanimate pictures on a panel, and, filled with this misconception, do not see that an idea, inasmuch as it is an idea, involves an affirmation or negation. Again, those who confuse words with ideas, or with the affirmation which an idea involves, think that they can wish something contrary to what they feel, affirm, or deny. This misconception will easily be laid aside by one, who reflects on the nature of knowledge, and seeing that it in no wise involves the conception of extension, will therefore clearly understand, that an idea (being a mode of thinking) does not consist in the image of anything, nor in words. The essence of words and images is put together by bodily motions, which in no wise involve the conception of thought. These few words on this subject will suffice: I will therefore pass on to consider the objections, which may be raised against our doctrine. Of these, the first is advanced by those, who think that the will has a wider scope than the understanding, and that therefore it is different therefrom. The reason for their holding the belief, that the will has wider scope than the understanding, is that they assert, that they have no need of an increase in their faculty of assent, that is of affirmation or negation, in order to assent to an infinity of things which we do not perceive, but that they have need of an increase in their faculty of understanding. The will is thus distinguished from the intellect, the latter being finite and the former infinite. Secondly, it may be objected that experience seems to teach us especially clearly, that we are able to suspend our judgment before assenting to things which we perceive; this is confirmed by the fact that no one is said to be deceived, in so far as he perceives anything, but only in so far as he assents or dissents. For instance, he who feigns a winged horse, does not therefore admit that a winged horse exists; that is, he is not deceived, unless he admits in addition that a winged horse does exist. Nothing therefore seems to be taught more clearly by experience, than that the will or faculty of assent is free and different from the faculty of understanding. Thirdly, it may be objected that one affirmation does not apparently contain more reality than another; in other words, that we do not seem to need for affirming, that what is true is true, any greater power than for affirming, that what is false is true. We have, however, seen that one idea has more reality or perfection than another, for as objects are some more excellent than others, so also are the ideas of them some more excellent than others; this also seems to point to a difference between the understanding and the will. Fourthly, it may be objected, if man does not act from free will, what will happen if the incentives to action are equally balanced, as in the case of Buridan's ass? Will he perish of hunger and thirst? If I say that he would, I shall seem to have in my thoughts an ass or the statue of a man rather than an actual man. If I say that he would not, he would then determine his own action, and would consequently possess the faculty of going and doing whatever he liked. Other objections might also be raised, but, as I am not bound to put in evidence everything that anyone may dream, I will only set myself to the task of refuting those I have mentioned, and that as briefly as possible. To the first objection I answer, that I admit that the will has a wider scope than the understanding, if by the understanding be meant only clear and distinct ideas; but I deny that the will has a wider scope than the perceptions, and the faculty of forming conceptions; nor do I see why the faculty of volition should be called infinite, any more than the faculty of feeling: for, as we are able by the same faculty of volition to affirm an infinite number of things (one after the other, for we cannot affirm an infinite number simultaneously), so also can we, by the same faculty of feeling, feel or perceive (in succession) an infinite number of bodies. If it be said that there is an infinite number of things which we cannot perceive, I answer, that we cannot attain to such things by any thinking, nor, consequently, by any faculty of volition. But, it may still be urged, if God wished to bring it about that we should perceive them, he would be obliged to endow us with a greater faculty of perception, but not a greater faculty of volition than we have already. This is the same as to say that, if God wished to bring it about that we should understand an infinite number of other entities, it would be necessary for him to give us a greater understanding, but not a more universal idea of entity than that which we have already, in order to grasp such infinite entities. We have shown that will is a universal entity or idea, whereby we explain all particular volitions—in other words, that which is common to all such volitions. As, then, our opponents maintain that this idea, common or universal to all volitions, is a faculty, it is little to be wondered at that they assert, that such a faculty extends itself into the infinite, beyond the limits of the understanding: for what is universal is predicated alike of one, of many, and of an infinite number of individuals. To the second objection I reply by denying, that we have a free power of suspending our judgment: for, when we say that anyone suspends his judgment, we merely mean that he sees, that he does not perceive the matter in question adequately. Suspension of judgment is, therefore, strictly speaking, a perception, and not free will. In order to illustrate the point, let us suppose a boy imagining a horse, and perceive nothing else. Inasmuch as this imagination involves the existence of the horse (II. xvii. Coroll.), and the boy does not perceive anything which would exclude the existence of the horse, he will necessarily regard the horse as present: he will not be able to doubt of its existence, although he be not certain thereof. We have daily experience of such a state of things in dreams; and I do not suppose that there is anyone, who would maintain that, while he is dreaming, he has the free power of suspending his judgment concerning the things in his dream, and bringing it about that he should not dream those things, which he dreams that he sees; yet it happens, notwithstanding, that even in dreams we suspend our judgment, namely, when we dream that we are dreaming. Further, I grant that no one can be deceived, so far as actual perception extends—that is, I grant that the mind's imaginations, regarded in themselves, do not involve error (II. xvii. note); but I deny, that a man does not, in the act of perception, make any affirmation. For what is the perception of a winged horse, save affirming that a horse has wings? If the mind could perceive nothing else but the winged horse, it would regard the same as present to itself: it would have no reasons for doubting its existence, nor any faculty of dissent, unless the imagination of a winged horse be joined to an idea which precludes the existence of the said horse, or unless the mind perceives that the idea which it possess of a winged horse is inadequate, in which case it will either necessarily deny the existence of such a horse, or will necessarily be in doubt on the subject. I think that I have anticipated my answer to the third objection, namely, that the will is something universal which is predicated of all ideas, and that it only signifies that which is common to all ideas, namely, an affirmation, whose adequate essence must, therefore, in so far as it is thus conceived in the abstract, be in every idea, and be, in this respect alone, the same in all, not in so far as it is considered as constituting the idea's essence: for, in this respect, particular affirmations differ one from the other, as much as do ideas. For instance, the affirmation which involves the idea of a circle, differs from that which involves the idea of a triangle, as much as the idea of a circle differs from the idea of a triangle. Further, I absolutely deny, that we are in need of an equal power of thinking, to affirm that that which is true is true, and to affirm that that which is false is true. These two affirmations, if we regard the mind, are in the same relation to one another as being and not—being; for there is nothing positive in ideas, which constitutes the actual reality of falsehood (II. xxxv. note, and xlvii. note). We must therefore conclude, that we are easily deceived, when we confuse universals with singulars, and the entities of reason and abstractions with realities. As for the fourth objection, I am quite ready to admit, that a man placed in the equilibrium described (namely, as perceiving nothing but hunger and thirst, a certain food and a certain drink, each equally distant from him) would die of hunger and thirst. If I am asked, whether such an one should not rather be considered an ass than a man; I answer, that I do not know, neither do I know how a man should be considered, who hangs himself, or how we should consider children, fools, madmen, &c. It remains to point out the advantages of a knowledge of this doctrine as bearing on conduct, and this may be easily gathered from what has been said. The doctrine is good, 1. Inasmuch as it teaches us to act solely according to the decree of God, and to be partakers in the Divine nature, and so much the more, as we perform more perfect actions and more and more understand God. Such a doctrine not only completely tranquilizes our spirit, but also shows us where our highest happiness or blessedness is, namely, solely in the knowledge of God, whereby we are led to act only as love and piety shall bid us. We may thus clearly understand, how far astray from a true estimate of virtue are those who expect to be decorated by God with high rewards for their virtue, and their best actions, as for having endured the direst slavery; as if virtue and the service of God were not in itself happiness and perfect freedom. 2. Inasmuch as it teaches us, how we ought to conduct ourselves with respect to the gifts of fortune, or matters which are not in our power, and do not follow from our nature. For it shows us, that we should await and endure fortune's smiles or frowns with an equal mind, seeing that all things follow from the eternal decree of God by the same necessity, as it follows from the essence of a triangle, that the three angles are equal to two right angles. 3. This doctrine raises social life, inasmuch as it teaches us to hate no man, neither to despise, to deride, to envy, or to be angry with any. Further, as it tells us that each should be content with his own, and helpful to his neighbour, not from any womanish pity, favour, or superstition, but solely by the guidance of reason, according as the time and occasion demand, as I will show in Part III. 4. Lastly, this doctrine confers no small advantage on the commonwealth; for it teaches how citizens should be governed and led, not so as to become slaves, but so that they may freely do whatsoever things are best. I have thus fulfilled the promise made at the beginning of this note, and I thus bring the second part of my treatise to a close. I think I have therein explained the nature and properties of the human mind at sufficient length, and, considering the difficulty of the subject, with sufficient clearness. I have laid a foundation, whereon may be raised many excellent conclusions of the highest utility and most necessary to be known, as will, in what follows, be partly made plain.",
        es: "",
        la: "",
      },
      proof: [
        "e2p49",
        "e2p44sch",
        "e2p43",
        "e2p43sch",
        "e2p17cor",
        "e2p17sch",
        "e2p35sch",
        "e2p47sch",
      ],
      see: ["Buridan's ass", "suicide and madness", "e3"],
    },
  ],
  [
    "e3pref",
    {
      text: {
        en: "Most writers on the emotions and on human conduct seem to be treating rather of matters outside nature than of natural phenomena following nature's general laws. They appear to conceive man to be situated in nature as a kingdom within a kingdom: for they believe that he disturbs rather than follows nature's order, that he has absolute control over his actions, and that he is determined solely by himself. They attribute human infirmities and fickleness, not to the power of nature in general, but to some mysterious flaw in the nature of man, which accordingly they bemoan, deride, despise, or, as usually happens, abuse: he, who succeeds in hitting off the weakness of the human mind more eloquently or more acutely than his fellows, is looked upon as a seer. Still there has been no lack of very excellent men (to whose toil and industry I confess myself much indebted), who have written many noteworthy things concerning the right way of life, and have given much sage advice to mankind. But no one, so far as I know, has defined the nature and strength of the emotions, and the power of the mind against them for their restraint. I do not forget, that the illustrious Descartes, though he believed, that the mind has absolute power over its actions, strove to explain human emotions by their primary causes, and, at the same time, to point out a way, by which the mind might attain to absolute dominion over them. However, in my opinion, he accomplishes nothing beyond a display of the acuteness of his own great intellect, as I will show in the proper place. For the present I wish to revert to those, who would rather abuse or deride human emotions than understand them. Such persons will, doubtless think it strange that I should attempt to treat of human vice and folly geometrically, and should wish to set forth with rigid reasoning those matters which they cry out against as repugnant to reason, frivolous, absurd, and dreadful. However, such is my plan. Nothing comes to pass in nature, which can be set down to a flaw therein; for nature is always the same, and everywhere one and the same in her efficacy and power of action; that is, nature's laws and ordinances, whereby all things come to pass and change from one form to another, are everywhere and always the same; so that there should be one and the same method of understanding the nature of all things whatsoever, namely, through nature's universal laws and rules. Thus the passions of hatred, anger, envy, and so on, considered in themselves, follow from this same necessity and efficacy of nature; they answer to certain definite causes, through which they are understood, and possess certain properties as worthy of being known as the properties of anything else, whereof the contemplation in itself affords us delight. I shall, therefore, treat of the nature and strength of the emotions according to the same method, as I employed heretofore in my investigations concerning God and the mind. I shall consider human actions and desires in exactly the same manner, as though I were concerned with lines, planes, and solids.",
        es: "",
        la: "",
      },
      proof: [],
      see: ["Descartes"],
    },
  ],
  [
    "e3def1",
    {
      text: {
        en: "By an adequate cause, I mean a cause through which its effect can be clearly and distinctly perceived. By an inadequate or partial cause, I mean a cause through which, by itself, its effect cannot be understood.",
        es: "",
        la: "",
      },
      proof: [],
    },
  ],
  [
    "e3def2",
    {
      text: {
        en: "I say that we act when anything takes place, either within us or externally to us, whereof we are the adequate cause; that is (by the foregoing definition) when through our nature something takes place within us or externally to us, which can through our nature alone be clearly and distinctly understood. On the other hand, I say that we are passive as regards something when that something takes place within us, or follows from our nature externally, we being only the partial cause.",
        es: "",
        la: "",
      },
      proof: [],
    },
  ],
  [
    "e3def3",
    {
      text: {
        en: "By emotion I mean the modifications of the body, whereby the active power of the said body is increased or diminished, aided or constrained, and also the ideas of such modifications. N.B. If we can be the adequate cause of any of these modifications, I then call the emotion an activity, otherwise I call it a passion, or state wherein the mind is passive.",
        es: "",
        la: "",
      },
      proof: [],
    },
  ],
  [
    "e3post1",
    {
      text: {
        en: "The human body can be affected in many ways, whereby its power of activity is increased or diminished, and also in other ways which do not render its power of activity either greater or less. N.B. This postulate or axiom rests on Postulate i. and Lemmas v. and vii., which see after II. xiii.",
        es: "",
        la: "",
      },
      proof: ["e2post1", "e2p13lem5", "e2p13lem7"],
    },
  ],
  [
    "e3post2",
    {
      text: {
        en: "The human body can undergo many changes, and, nevertheless, retain the impressions or traces of objects (cf. II. Post. v.), and, consequently, the same images of things (see note II. xvii.).",
        es: "",
        la: "",
      },
      proof: ["e2post5", "e2p17sch"],
    },
  ],
  [
    "e3p1",
    {
      text: {
        en: "Our mind is in certain cases active, and in certain cases passive. In so far as it has adequate ideas it is necessarily active, and in so far as it has inadequate ideas, it is necessarily passive. Proof.—In every human mind there are some adequate ideas, and some ideas that are fragmentary and confused (II. xl. note). Those ideas which are adequate in the mind are adequate also in God, inasmuch as he constitutes the essence of the mind (II. xl. Coroll.), and those which are inadequate in the mind are likewise (by the same Coroll.) adequate in God, not inasmuch as he contains in himself the essence of the given mind alone, but as he, at the same time, contains the minds of other things. Again, from any given idea some effect must necessarily follow (I. 36); of this effect God is the adequate cause (III. Def. i.), not inasmuch as he is infinite, but inasmuch as he is conceived as affected by the given idea (II. ix.). But of that effect whereof God is the cause, inasmuch as he is affected by an idea which is adequate in a given mind, of that effect, I repeat, the mind in question is the adequate cause (II. xi. Coroll.). Therefore our mind, in so far as it has adequate ideas (III. Def. ii.), is in certain cases necessarily active; this was our first point. Again, whatsoever necessarily follows from the idea which is adequate in God, not by virtue of his possessing in himself the mind of one man only, but by virtue of his containing, together with the mind of that one man, the minds of other things also, of such an effect (II. xi. Coroll.) the mind of the given man is not an adequate, but only a partial cause; thus (III. Def. ii.) the mind, inasmuch as it has inadequate ideas, is in certain cases necessarily passive; this was our second point. Therefore our mind, &c. Q.E.D.",
        es: "",
        la: "",
      },
      // English translations make it seem like it's only one scholium, but the latin speaks of
      // "per scholia", in the plural form; also, Elwes translation says "constitutes the essence
      // of the mind (II. xl. Coroll.)" which is a mistake, where the latin says "mentis essentiam
      // constituit (per corollarium propositionis 11 partis II)"; e.i, "e2p11cor" not "e2p40cor":
      proof: ["e2p40sch1", "e2p40sch2", "e2p11cor", "e1p36", "e3def1", "e2p9"],
    },
  ],
  [
    "",
    {
      text: {
        en: "",
        es: "",
        la: "",
      },
      proof: [],
    },
  ],
] as const

export const nodeOpts = book.map((n) => n[0])
