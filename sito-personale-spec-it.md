tonio.work è una semplice presenza professionale di Efrem Tonioni,
che usa le tecnologie: Vite, React, Carbon Design System.
Tutto il sito deve usare il font IBM Plex Mono.
Lingua del sito: solo inglese (i testi italiani qui sotto sono di riferimento).

Regole di aspetto
	- Pagina singola, con barra di navigazione in alto: Projects, Notes, Tools, Contact.
	- Tema chiaro o scuro in base alle impostazioni del sistema.
	- Tutte le sezioni (Projects, Personal Notes, Tools I Use) hanno lo stesso layout: testo semplice in colonna,
	  senza riquadri, sfondi grigi, bordi o etichette delle tecnologie.
	- Titoli delle sezioni e titoli delle singole voci in grassetto, dimensione normale.
	- In Tools I Use ogni strumento è diviso in "Strengths" e "Criticism".
	- Icona della scheda del browser: icona "Carbon" del Carbon Design System.

Come è composto ...


##Ruolo principale 
	Lead Role
	Software Developer


##Headline

	Results-driven professional with many years of multifaceted experience in the software industry. 


#Progetti a cui ho lavorato
	Projects I've Worked On

	La gestione degli ordini di vendita con Spring 
	Managing Sales Orders with Spring

		Ho sviluppato il backend con Spring Boot, strutturandolo su un'architettura a livelli.
		Modello dati: ho definito le entità (Order, OrderItem, Customer, Product) tramite Spring Data JPA su PostgreSQL, mappando le relazioni one-to-many tra ordini e singole righe.
		Business Logic: ho implementato un OrderService con @Transactional per validare la disponibilità a magazzino, calcolare imposte e totali, e governare la macchina a stati dell'ordine (Bozza, Pagato, Spedito, Annullato).
		API REST: ho esposto gli endpoint con Spring Web (@RestController) per creazione, tracking e cancellazione degli ordini.
		Sicurezza ed Eventi: ho protetto gli accessi con Spring Security (JWT), delegando le conferme di pagamento e le notifiche email a Spring Events in modo asincrono. 


		I developed the backend using Spring Boot, structuring it with a layered architecture.
        Data Model: I defined the entities (Order, OrderItem, Customer, Product) using Spring Data JPA on PostgreSQL, mapping the one-to-many relationships between orders and individual line items.
		Business Logic: I implemented an OrderService with @Transactional to validate inventory availability, calculate taxes and totals, and manage the order state machine (Draft, Paid, Shipped, Canceled).
		REST API: I exposed endpoints using Spring Web (@RestController) for creating, tracking, and deleting orders.
        Security and Events: I secured access with Spring Security (JWT), delegating payment confirmations and email notifications to Spring Events asynchronously.


	La gestione del magazzino con Android
	Warehouse Management with Android
		L'applicazione l'ho sviluppata in Java con architettura MVVM e approccio offline-first per contesti logistici.
		Per l'architettura ho usato questi componenti tecnici:
		1 - Scansione QR (CameraX + Google ML Kit): Elaborazione video on-device per letture istantanee anche in condizioni critiche di luce, con controllo della torcia LED.
		2 - Persistenza e sincronizzazione: Database locale Room (SQLite) per lavorare senza connettività; Retrofit per le chiamate API REST e WorkManager per accodare e sincronizzare i dati in background al ripristino della rete.
		3 - Feedback immediato: Segnali sonori (ToneGenerator) e vibrazioni aptiche distinte per confermare letture corrette o bloccare errori di scansione.
		I flussi funzionali che ho realizzato sono:
		- Ricevimento merci (Inbound): Lettura dei QR di bolle fornitore e singoli colli, con assegnazione rapida all'ubicazione corretta a scaffale.
		- Picking e spedizione: Verifica guidata delle liste di prelievo con blocco dell'operazione in caso di scansione di un articolo errato.
		- Inventario continuo: Scansione rapida di articoli e scaffali per consultare schede tecniche e rettificare le giacenze in pochi passaggi. 
	
		I developed the application in Java using an MVVM architecture and an offline-first approach for logistics contexts.
        For the architecture, I used the following technical components:
        1 - QR scanning (CameraX + Google ML Kit): On-device video processing for instant scans even in low-light conditions, with LED flash control.
		2 - Data persistence and synchronization: Local Room database (SQLite) for working without connectivity; Retrofit for REST API calls; and WorkManager for queuing and synchronizing data in the background once network connectivity is restored.
		3 - Immediate feedback: Distinct audio signals (ToneGenerator) and haptic vibrations to confirm correct scans or flag scanning errors.
        The functional workflows I implemented are:
        - Inbound goods receiving: Scanning QR codes on supplier packing slips and individual packages, with rapid assignment to the correct shelf location.
		- Picking and shipping: Guided verification of picking lists, with the operation halted if an incorrect item is scanned.
        - Continuous inventory: Quick scanning of items and shelves to view technical data sheets and adjust inventory levels in just a few steps.



	La migrazione da Talend a Python
	Migrating from Talend to Python
		Il progetto ha migrato i complessi processi ETL da Talend a una soluzione desktop modulare in Python, finalizzata all'estrazione, al controllo e alla riconciliazione contabile di incassi e pagamenti dal gestionale Oracle.
		L'architettura ha impiegato la libreria python-oracledb per l'acquisizione dei flussi finanziari e pandas per la normalizzazione dei dati, il matching tra fatture e bonifici e l'individuazione tempestiva degli sbilanci. L'interfaccia grafica in Tkinter ha consentito agli operatori amministrativi di avviare le elaborazioni, impostare i parametri d'indagine e visualizzare anteprime e log in tempo reale.
		L'innovazione chiave è stata l'assistente AI integrato: gli utenti potevano descrivere nuove regole di controllo in linguaggio naturale. L'intelligenza artificiale le traduceva automaticamente in script Python, validati tramite controlli di sicurezza ed eseguiti all'interno di una sandbox protetta.
		Distribuita come eseguibile autonomo per Windows, l'applicazione ha abbattuto l'occupazione di memoria, azzerato i costi di licenza ed eliminato la pesantezza della JVM, garantendo all'ufficio contabile rapidità e totale indipendenza dal reparto IT.

		The project migrated the complex ETL processes from Talend to a modular desktop solution written in Python, designed to extract, verify, and reconcile receipts and payments from the Oracle ERP system.
		The architecture utilized the python-oracledb library for capturing financial flows and pandas for data normalization, matching invoices with bank transfers, and promptly identifying discrepancies. The Tkinter graphical interface allowed administrative staff to initiate processing, set investigation parameters, and view previews and logs in real time.
		The key innovation was the integrated AI assistant: users could describe new control rules in natural language. The artificial intelligence automatically translated them into Python scripts, which were validated through security checks and executed within a secure sandbox.
		Deployed as a standalone executable for Windows, the application significantly reduced memory usage, eliminated licensing costs, and removed the overhead of the JVM, ensuring speed and complete independence from the IT department for the accounting office.

##Appunti personali
  Personal Notes

	La perfezione viene con la ripetizione
	Perfection comes with practice

		Un collega "smart" una volta mi ha detto: l'affinamento è un'attività essenziale, ed è fatta di: cicli di feedback con gli utenti, revisioni del codice, riscrittura di moduli oscuri. Il prodotto perfetto non è quello disegnato in una torre d'avorio all'inizio, ma quello che converge verso i requisiti reali attraverso iterazioni successive.

		A “smart” colleague once told me: refinement is an essential activity, and it consists of feedback loops with users, code reviews, and rewriting obscure modules. The perfect product isn't the one designed in an ivory tower at the beginning, but the one that converges toward real requirements through successive iterations.

	Da cosa nasce cosa
	One thing leads to another
		A volte quando si deve creare un prodotto nuovo, ci si ferma davanti al foglio bianco. In questi casi ho trovato utile l'adagio: da cosa nasce cosa. Pensare astrattamente al problema e cercare soluzioni a cose molto diverse, ma con elementi comuni. Per poi trasformare l'idea più volte, fino ad avere qualcosa di molto diverso.

		Sometimes, when you have to create a new product, you find yourself staring at a blank page. In these cases, I’ve found the saying “one thing leads to another” to be helpful. Think about the problem abstractly and look for solutions in very different areas that share common elements. Then transform the idea repeatedly until you end up with something very different.


	Dibattito sull'AI
	Debate on AI

		Quando si parla di AI sento frequentemente alcune opinioni a confronto. Chi pensa che l'AI faccia le cose al posto nostro con le conseguenze positive e negative. Chi è contrario all'uso, perché ci disabitua a ragionare. Chi dice che un giorno sarà senziente come gli umani.
		Io voglio aggiungere un'opinione, forse bizzarra. Oggi all'AI mancano due componenti della mente umana: desideri e paure. Fino a che questo sarà vero, usare l'AI consente di avere qualcosa che non possiamo avere con nessun altro: un confronto che ci consente di ordinare i pensieri, eliminare le contraddizioni, colmare le lacune. L'idea che ne deriva è esattamente la nostra, proprio quella che volevamo, se avessimo avuto il tempo di perfezionarla. Se il confronto fosse avvenuto altrimenti, con un'altra persona, ci avrebbe spinto verso un'altra idea. Infine, la nostra idea: ma solo un compromesso.

		When it comes to AI, I often hear contrasting opinions. Some believe that AI does things for us, with both positive and negative consequences. Others oppose its use because it makes us lose the habit of thinking for ourselves. Still others say that one day it will be sentient like humans.
		I’d like to add a perspective—perhaps a bit unconventional. Today, AI lacks two components of the human mind: desires and fears. As long as this remains true, using AI allows us to have something we cannot have through any other means: a dialogue that allows us to organize our thoughts, eliminate contradictions, and fill in the gaps. The idea that emerges is exactly ours—precisely the one we wanted, had we had the time to perfect it. If the dialogue had taken a different course, with another person, it would have led us toward a different idea. Ultimately, our idea—but only a compromise.

	La legge di Brooks
	Brooks's Law

		Un collega "smart" una volta mi ha detto: aggiungere sviluppatori a un progetto in ritardo moltiplica i canali di comunicazione e assorbe i senior in riunioni, ritardando il rilascio. Per superare questo vincolo occorrono cinque strategie:
		1 - Tagliare lo scope: Rilasciare subito un Minimum Viable Product, eliminando le feature non essenziali.
		2 - Disaccoppiare l'architettura: Fissare API e contratti stabili per lavorare in parallelo senza coordinamento continuo.
		3 - Proteggere il percorso critico: Usare il modello "chirurgico": un lead dev sul codice centrale, schermato da burocrazia e mentoring.
		4 - Assegnare task non bloccanti: Dirottare i nuovi su test, CI/CD e debito tecnico isolato.
		5 - Onboarding self-service: Fornire container e documentazione asincrona per evitare di sottrarre tempo ai senior.

		A “smart” colleague once told me: adding developers to a project that’s behind schedule multiplies the communication channels and ties up senior staff in meetings, delaying the release. To overcome this constraint, five strategies are needed:
        1 - Cut the scope: Release a Minimum Viable Product right away, eliminating non-essential features.
		2 - Decouple the architecture: Establish stable APIs and contracts to enable parallel work without constant coordination.
        3 - Protect the critical path: Use the “surgical” model: a lead developer focused on the core code, shielded from bureaucracy and mentoring.
		4 - Assign non-blocking tasks: Direct new hires toward testing, CI/CD, and isolated technical debt.
        5 - Self-service onboarding: Provide containers and asynchronous documentation to avoid taking time away from senior developers.

##Strumenti che uso
	Tools I Use

	Spring
		Di Spring posso dire che è un ecosistema enterprise immenso e collaudato, ha un'architettura solida guidata dalla Dependency Injection, ha supporto nativo completo per microservizi, sicurezza e gestione dei dati. Se dovessi fare una critica direi che l'apprendimento necessario iniziale è notevole, il consumo di risorse di memoria è elevato ed il debugging è un po' ostico a causa dell'eccessiva astrazione e "magia" delle annotazioni.

		About Spring, I can say that it is a vast and proven enterprise ecosystem; it has a solid architecture driven by dependency injection, and it offers comprehensive native support for microservices, security, and data management. If I had to offer a criticism, I would say that the initial learning curve is steep, memory consumption is high, and debugging can be a bit challenging due to the excessive abstraction and the “magic” of annotations.

	React
		Di React posso dire che ha un ecosistema immenso e l'architettura basata su componenti riutilizzabili evita inutili ripetizioni. Il modello dichiarativo offre grande flessibilità e prestazioni elevate nell'aggiornamento delle interfacce. Se dovessi fare una critica potrei dire che la gestione dei re-render e degli hook può diventare complessa.

		As for React, I can say that it has a vast ecosystem, and its architecture—based on reusable components—avoids unnecessary repetition. The declarative model offers great flexibility and high performance when updating user interfaces. If I had to offer a criticism, I’d say that managing re-renders and hooks can become complex.

	Android
		Di Android devo dire che ha un dominio globale del mercato. L'ecosistema è aperto. L'ecosistema offre inoltre flessibilità estrema sull'hardware e un processo di pubblicazione adatto al mercato enterprise. Personalmente, allo sviluppo moderno con Kotlin preferisco quello in Java. Se dovessi fare una critica direi che ha un po' di frammentazione di dispositivi, schermi e versioni OS, che complica i test e la manutenzione.

		As for Android, I have to say it dominates the global market. The ecosystem is open, and it offers extreme flexibility in terms of hardware and a release process suited to the enterprise market. Personally, I prefer developing in Java to modern development with Kotlin. If I had to offer a criticism, I’d say there’s some fragmentation among devices, screens, and OS versions, which complicates testing and maintenance.

	Docker
		Di Docker devo dire che ha una portabilità assoluta, elimina il problema del "funziona sulla mia macchina", ha una grande leggerezza e l'avvio è istantaneo rispetto alle macchine virtuali tradizionali. Ha un ecosistema molto vasto che semplifica l'allineamento tra ambienti di sviluppo e produzione. Se dovessi fare una critica direi che ha un po' di overhead prestazionale ed il consumo di risorse su macOS e Windows è alto. La gestione della persistenza dati è un po' complessa, così come il networking avanzato.

		As for Docker, I have to say that it offers absolute portability, eliminates the “it works on my machine” problem, is very lightweight, and starts up instantly compared to traditional virtual machines. It has a very extensive ecosystem that simplifies alignment between development and production environments. If I had to offer a criticism, I’d say it has a bit of a performance overhead, and resource consumption on macOS and Windows is high. Managing data persistence is a bit complex, as is advanced networking.


##Contact Me

	Mi piace scambiare idee con chi costruisce software. Che si tratti di un progetto, di una domanda o solo di due chiacchiere di tecnologia, scrivimi un messaggio.

	I enjoy exchanging ideas with people who build software. Whether it’s a project, a question, or just a chat about tech, drop me a message.

	https://www.linkedin.com/in/efremtonioni/