---
title: "The preservation of information in the projections of human percepts"
excerpt: "A mathematic framing of Nietzsche's theory of projection"
category: "Philosophy"
tags: ["Philosophy", "Columbia", "Nietzsche"]
date: "2025-12-26"
readTime: "15 min read"
featured: true
status: "published"
---

### introduction
What stood out to me most in the exploration of Marx, Freud and Nietzsche was their discussions on state-like transitions. In the tracing of some argument there are two interweaving strands, that of the main thread which consists of the essence of the argument, highlights the events, the characters, their actions and predicted consequences. The other strand is that of time which gives to the main thread its foundation. Time provides the ultimate context. The events, arguments presented fade away without time. In the telling of history, it is time which provides the backbone for the events that take place. It is along the thread of time onto which these offer spin their arguments. Whether it be abstract arguments or explorations of actual history, both require some idea of time --of ordered actions or states. 

#### thesis
Tracing the realized traits of some individual through their genetic code requires the ability to traverse this line of time moving through the ordered set of individuals and analyzing exactly what portion of genetic code was transferred from one person to the next. Nietzche's arguments on projections and metaphor can be deciphered similarly. Given some final state realization and tracing back through previous states requires the same ability. I will give more proof to this statement now. I would like to propose, for the purposes of this essay, a lens through which, the reader and I can decipher a few elements of projection in Nietzche's "On Truth and Lies in a Nonmoral Sense". This lens will focus in on the function of information preservation in the process of his argument. By mathematizing Nietzsche's concept of projection we can quantifiably test its adherence to the preservation of information and discover whether the parameters that influence the degree of information loss are consistent with Nietzsche's outlook.


### description of information preservation
First, for the agreement of both the reader and I, the definition of information preservation must first be put forth. Information preservation is a term used to describe the loss of content in a movement from one state to another. A state can be thought of as any concrete or abstract time slice wherein is encapsulated all the necessary information required to describe the state in its entirety. Importantly, we assume the existence of time, meaning that these state changes are arranged chronologically and are singularly connected meaning that we can only move from possible states in one time slice to possible states in a time slice directly consecutive to our beginning time slice. For the purposes of the production of an argument these states are traced forward and often for its analysis or dissection authors make attempts to trace it backwards. A process that consists of a set of states that can be traced backwards we call invertible. 

The invertibility of a set of states is of particular interest because it implies a rather striking truth. In order to uncover this truth we must first delve deeper into the production side of a set of states. We use the following toy example: 

#### Example 1a: Toy Example
Imagine some beginning state $X_0$ which can be read, meaning that we can expose the innards of the state and read out its contents such that the information $I_0 = Read\{X_0\}$ can be used to recreate the state $X_0$ through some machine we call $f$ such that $f(I_0) = X_0$. Notice already that the extraction of this state requires one huge base assumption: the transformation is invertible. There exists some way to describe a state of being in a way so complete that we can recreate it the state just by reading out its contents. Imagine a room, or your favorite cafe. What would you require in order to recreate the room exactly as it is. Well you would need perhaps the coffee machine, the chairs and tables, the coffee beans, the baristas and maybe the other people in the coffee shop. If you could collect the name and position of every atom required for this reconstruction and store it some magical table you would in theory be able to recreate the state of the coffee shop. 

Now what happens when I ask you to recreate the same coffee shop but one day after. You need the scratches that have accumulated on the table tops, the tracked dirt and leaves from this mornings rain shower, the fingerprints on the glass door and so forth. You need the baristas exactly as they are: having undergone their past experiences. For the other people you require the same. And so now we can begin to recognize that the coffee shop inevitably goes through some state of change between the two days. Now I ask you to record the state in another magical table of the subsequent day. We have two magical tables and now I ask you, is it possible to deduce the sequence of actions that occurred in the coffee shop by just looking at the difference between the two coffee shops. Well at first glance you may think it silly, of course not! This is clear through the following observation: imagine that if in the mean time Bob had scratched the table under the window sometime at the beginning of day 1 and then at the end of the same day buffed out the scratch perfectly such that atomically it was the same as it was that morning. Reading the table for day 2 would provide no information on Bob's actions on day 1. However, if we move from a discrete time slice to a continuous one, this problem disappears. 

Using some calculus we can make every time slice infinitesimally small such that the portion of time claimed by every state goes to zero. This means that any action that occurs in a time greater than some $\epsilon$ where $\epsilon$ is the infinitesimal difference between states $X_i$ and $X_{i + \epsilon}$ will be captured in a separate state table meaning that we eliminate the risk of back to back actions taking place during the same time slice (of course this assumes that each reasonable action takes at least a time $\epsilon$ to transpire). 

Now we have solved that issue. We have our two magical tables and the sequence of magical tables in between these two tables each recording a state of the coffee shop at infinitesimal intervals. This means that by looking at the tables, one after the other, I can track Bob entering the coffee shop, him brandishing his scratching weapon, and then him slowly lowering that weapon to the table and making the scratch. I can do this because I know the atomic state of the room at every interval of action. This means that given the set of magical tables $M$ where the first magical table is $M_0$ (day 1) and the last $M_n$ (day 2) I can use this set to trace back and read out the actions that took place in forward or reverse order.
$$
M_0 \rightarrow M_1 \rightarrow M_2 ... \rightarrow M_{n - 2} \rightarrow M_{n - 1} \rightarrow M_{n}
$$

$$
M_0 \leftarrow M_1 \leftarrow M_2 ... \leftarrow M_{n - 2} \leftarrow M_{n - 1} \leftarrow M_{n}
$$

This means the process is invertible because, in the rules we have described, given the last state and a description of all actions that took place between then and the origin, I can perfectly reconstruct the original state. This means our set $M$ is invertible and because there exists our machine $f$ we can from $M$ create $f(M) = X$ which is our set of states meaning that $X$ is also invertible. This means we have an information preserving process because given some set of states $X$ it is possible to transform $X_t$ into $X_{t - 1}$ without losing information on $X_t$. A set of states is invertible if and only if the movement between consecutive states is information preserving. With this in mind we can move on. 

#### Example 1b: Nietzsche Truth and Lies

Nietzsche's chief complaint is the disfigurement of truth. That the synthesizing of the human brain immutably transforms the truth into what he calls illusions. These illusions are infinitely distant falsifications of truth. Lies of mans making. They very machinations of nature are hidden artifacts inaccessible to us. He asks "does nature not conceal most things from him – even concerning his own body – in order to confine and lock him within a proud, deceptive consciousness, aloof from the coils of the bowels, the rapid flow of the blood stream, and the intricate quivering of the fibers!". Man is left untethered from the truth. The machinations that produce his consciousness left unable to comprehend the intricacies of reality. Nature has not only hidden her works from us, obscured them behind some veil. It is not as if possibly they are accesible. She has rendered truth nonexistent, unconnected from our creations, "she threw away the key" (Nietszche, 115). For the creator the truth is "something quite incomprehensible... and something not in the least worth striving for" (Nietzsche, 116). The "thing in itself" lives separately from our creators set of relations and so we can describe mathematically a new schema. We have as our substrate the relations of truth. These relations of truth exist outside of the manosphere. They are base reality. The universe as it is unadulterated by our perceptions of it. Sitting on top of this base reality is the set of human relations described as language. We therefore have two sets, one of truth which we shall call $T$ and the other of language which we call set $L$. These two sets are disjoint meaning that they overlap at no point. He proposes that the man has invented the word, language, as a layer of abstraction hovering just above the truth, not in anyway connected but a false form. 

Continuing we he describes the origin, in this simplified case, as "a nerve stimulus" which conducts the transfer into the first image (Nietzche 116). Here we have our first projection, our first state transition, from what Nietzsche determines to be the first connection between ourselves and our environment. The environment, before we perceive it, is the base reality, the ground truth. Photons beamed down from the sun enter our atmosphere, they reflect off of objects in our environment, off of the trees, their bark and leaves. They reflect off of the water, off of the sand. Some don't reflect off of anything and reach us unaltered. These photons as they are reflected by different objects are imbued in a systematic way with information specific to that object. This information transfer manifests itself as a change in the fundamental properties of the photon. Although one could analyze this already as a state transition and could question how complete the information transfer is between the photon and the object, for the purposes of this essay we assume perfect information transfer. The transformed photon then hits our eye where it is funneled through the cornea, iris and then the lens which projects it onto the retina. The retina converts the light into neural signals. The optic nerve carries these signals to where they are organized, mapped and processed by different components of the brain. Somewhere at the end of this pipeline we are left with this first image which we shall call $I_0$. The relationship between the ground truth and the first image can be expressed using a mapping from truth to image.
$$
\Phi : \mathbf{T} \rightarrow \mathbf{I_0}
$$
where $\Phi$ represents the entire perceptual pipeline. Any specific first image $I_0 \in \mathbf{I_0}$ can be produced by a specific truth $T \in \mathbf{T}$ such that: 
$$
I_0 = \Phi(T)
$$

This gives us the first image as a function of the truth. We can characterize the information loss via a projection operator $P_0$ such that: 
$$
\phi(T) = P_0(T)
$$
where the $\text{rank}(P_0) < \text{dim}(\mathbf{T})$. This implies a dimensionality reduction which occurs due to fact that humans physically can not perceive ground truth through the use of our nerves alone. However, through the use of measurement devices and other specialized technology we can interpret all the pieces of this ground truth. For the purposes of this essay we will not address this loss of information.

He goes on to describe the second image occurring from a second state transition moving from this image to an imitated sound. This second transition is actually the reverse of the first in the sense that we take some brain image and convert it back into some real world signal (sound wave). Where in the first projection we took a true signal and converted into a brain image now we take a brain image and convert it back into a physical signal. The second image we will call $I_1$ which is a function of $I_0$. 
$$
\Psi : \mathbf{I_0} \rightarrow \mathbf{I_1}
$$

This maps conceptual images to concepts/words. He states that "every word instantly becomes a concept precisely insofar as it is not supposed to serve as a reminder of the unique and entirely individual original experience to which it owes its origin; but rather, a word becomes a concept insofar as it simultaneously has to fit countless more or less similar cases". The example he gives is the leaf. The idea is that concept of the leaf was not formed to identify the specific atomic structure and position of, for example, a maple leaf that person $X$ saw, but that they are used to identify what are perceived to be leaf-like structures. This means for any concept $C$ there is some recognition region $R_c \subseteq \mathbf{I_0}$ in perceptual space. $R_c$ is the set of all perceptual experiences that get labeled with a concept $c$. For example: 
$$
I^{\text{maple}}_{0}, I^{\text{oak}}_{0}, I^{\text{birch}}_{0} \in R_{\textbf{"leaf"}}
$$
Even though these perceptual images are different they all trigger the same concept. 

The use of the phrase 'supposed to' is rather confusing. One can imagine forming concepts of every increasing granularity. We could define as a word the magical table $M$ of the object that it represents. This would still be a concept in that technically it is a word, however, it could be used only in the equating of equal things. The granularity of a concept would be defined as a discrimination threshold: 
$$
g = \frac{1}{\delta_{min}}
$$
where $\delta_{min}$ is the smallest difference we want to capture between concepts. If $\delta_{min}$ is small we distinguish fine features and if it is high we conjoin perceptual experiences that differ by a lot. From this we can construct our recognition region for a concept in relation to its granularity such that: 
$$
R_c = \{I_0 \in \mathbf{I_0} : d(I_0, \mu_c) < \frac{1}{g} \}
$$
which describes a set of perceptual experiences that are at most $\frac{1}{g}$ away from an original model $\mu_c$. Nietzsche's conclusion matches this result as it implies that "in addition to the leaves, there exists in nature the “leaf”: the original model according to which all the leaves were perhaps woven, sketched, measured, colored, curled, and painted". Constructing reconstruction regions...

Next we need a function to recognize whether a perceptual experience $I_0$ is in the region $R_c$ or not. This we define as: 
$$
1_{R_c(g)}(I_0) = \begin{cases}
1 \text{ if } I_0 \in R_c \\
0 \text{ if } I_0 \notin R_c
\end{cases}
$$
We assign words to each concept $c \in C$ with an associated symbol $w_c \in W$ where $W$ is the set of all linguistic symbols.  Whether a concept is a concept only when it equates unequal things or whether a concept attempts to equate equal things but always fails is not clear. Nonetheless, following from Nietzsche, this final state $I_1$ is a language mapped from perception such that: 
$$
\Psi_g : \mathbf{I_0} \rightarrow \mathbf{I_1}
$$
$$
I_1 = \Psi_g(I_0) = \sum_{c \in C} 1_{R_c(g)}(I_0) \cdot w_c
$$
This takes some perceptual image $I_0$, checks which recognition contains $I_0$ and then returns the corresponding word(s) for that region. Granularity effects the mapping by changing the region size. Large regions mean many different perceptions map to the same word while smaller regions need more specific words. Sliding along the spectrum adjusts the specificity of the concepts within the language. 

Using an unspecific concept, Nietzsche says "we call a person “honest,” and then we ask “why has he behaved so honestly today?” Our usual answer is, “on account of his honesty.”". Concepts with an insufficient level of granularity can no longer be traced back to meaningfully specific ground truth. The ground truths after they have been conceptualized are then referred to not as their relation to the ground truth but instead in relation to the concept itself. This is because "we know nothing whatsoever about an essential quality called “honesty”; but we do know of countless individualized and consequently unequal actions which we equate by omitting the aspects in which they are unequal and which we now designate as “honest” actions." The formation of the concept 'honesty' is not sufficiently granular for us to know the exact ground truth from which this concept was projected. Honesty could refer to any number of honest situations. We equate these types of honesty because they contain a sufficient amount of what we have observed and classified from the ground truth to be honest. Honesty and all other concepts, therefore, have a granularity $g$ that is extremely low. A perception $I_0$ which is mapped to a word $w_c$ (conceptualization). When someone hearing the word $w_c$ mapped from a perception  $I_0$ attempts to reconstruct the original perception they fail because the space of possible matches is too large and so they default to the prototypical case $\mu_c$. The error in their understanding is the distance between the actual perception and the prototype, $d(I_0, \mu_c)$. This difference represents a distortion of the original perception. This is a form of information loss. The information loss $\mathcal{L}$ is defined as: 
$$
\mathcal{L}_{\text{langauge}} = \sum P(I_0 \in R_c(g)) \cdot \mathbb{E}[d(I_0, \mu_c) | I_0 \in R_c(g)]
$$
Which is the sum of products between the probability that the perception falls under region $c$ and the average distance from the prototype within that region. For a region with radius $\frac{1}{g}$ in $n$-dimensional space, the average square difference from the center (which is the information loss) is then:
$$
\mathcal{L}_{\text{langauge}} = \frac{n}{n + 2} \cdot \frac{1}{g^2}
$$

Looking at our equation we can see that as the granularity $g$ decreases, the loss increases. At the limit as we push $g$ to zero the loss goes to infinity and as we push $g$ to infinity the loss goes to zero. Note that infinite loss does not make sense so we assume a threshold value $g_{\text{critical}}$ that sets the floor for the value $g$ such that the loss does not overcome the information contained in $I_0$. Information loss in language is simply a function of how granular we define its concepts. Nietzsche says that "we obtain the concept, as we do the form, by overlooking what is individual and actual" which naturally leads to low values for granularity. Nature on the other hand "is acquainted with no forms and no concepts, and likewise with no species, but only with an X". Every object exists as its individual and actual realization. There are no other objects $Y$ which could fit object $X$'s features. It is infinitely granular. Nature guarantees for its citizenry each a unique signature, a signature which we can not even measure. It can not be comprehended, it "remains inaccessible and undefinable for us". The creation of a language with infinite granularity or even a granularity to match that of natures is, for Nietzsche, impossible. 

The succession of states we have followed so far implies a transformation to produce a language $L$ from $T$ such that $Q(T) = L$. Using the axiom derived from the toy example, the loss of information implies that there exists no additional transformation $Q^{-1}$ such that $Q^{-1}(L) = T$.  We can therefore conclude that Nietzsche's theory deems human language as non-invertible.

Nietzsche states that for a projection "each time there is a complete overleaping of one sphere, right into the middle of an entirely new and different one" or previously that we "know nothing about the essential quality" of concepts contradict idea of conceptualization which comes from that first image. This implies a production of some language $L$ without the presence of $T$. Given two chronologically consecutive states there would be nothing to tell us that they are even related. If one really is "overleaping one sphere, right into the next" then one can appear in one sphere without any prior knowledge of any of the previous spheres. These are then perfectly information destroying transformations. Drawing from our model we can assume that Nietzsche ascribes to human language an infinitesimally small granularity $g$: the dictionary is essentially empty. This means a maximum loss of information from our first perception $I_0$. Language, as he defines it, can not define nature and so can never even approach a $g > g_{\text{critical}}$. We are stuck in a state of unknowing. Our attempts to understand the natural world around us through exploration, observation and replication are not only fruitless, they are destructive. Each production of a new concept is the destruction of yet another perception and its accompanying ground truth. They are projections that strip the truth from its individuality, reducing it to a pointless form. 

Yet our model shows also that building the dictionary, growing the number of concepts, striving for knowledge increases the value $g$ in turn reducing information loss. Language is not condemned to some detached layer of abstraction. The ever slow grind of specificity is but the task of humankind. It is our observations of nature, the experiments we conduct on it and our classifications into concepts which build the repository of language. As long as the language grows so to does the loss shrink. We are not stuck. 

Nietzsche describes a world where we engage in the destruction of truth rather than its recreation. I would say that is quite morbid.

