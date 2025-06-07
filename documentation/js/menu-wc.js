'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">learning-nest-js documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-fd797c9be21f706f37763eadc64705e6f1b38f9309f125285dddb14ebd2be2de0666dfc080bff5d31a1a977aaed9d7ed0bfc4736309aa7cb38ac0143e663d2c3"' : 'data-bs-target="#xs-controllers-links-module-AppModule-fd797c9be21f706f37763eadc64705e6f1b38f9309f125285dddb14ebd2be2de0666dfc080bff5d31a1a977aaed9d7ed0bfc4736309aa7cb38ac0143e663d2c3"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-fd797c9be21f706f37763eadc64705e6f1b38f9309f125285dddb14ebd2be2de0666dfc080bff5d31a1a977aaed9d7ed0bfc4736309aa7cb38ac0143e663d2c3"' :
                                            'id="xs-controllers-links-module-AppModule-fd797c9be21f706f37763eadc64705e6f1b38f9309f125285dddb14ebd2be2de0666dfc080bff5d31a1a977aaed9d7ed0bfc4736309aa7cb38ac0143e663d2c3"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-fd797c9be21f706f37763eadc64705e6f1b38f9309f125285dddb14ebd2be2de0666dfc080bff5d31a1a977aaed9d7ed0bfc4736309aa7cb38ac0143e663d2c3"' : 'data-bs-target="#xs-injectables-links-module-AppModule-fd797c9be21f706f37763eadc64705e6f1b38f9309f125285dddb14ebd2be2de0666dfc080bff5d31a1a977aaed9d7ed0bfc4736309aa7cb38ac0143e663d2c3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-fd797c9be21f706f37763eadc64705e6f1b38f9309f125285dddb14ebd2be2de0666dfc080bff5d31a1a977aaed9d7ed0bfc4736309aa7cb38ac0143e663d2c3"' :
                                        'id="xs-injectables-links-module-AppModule-fd797c9be21f706f37763eadc64705e6f1b38f9309f125285dddb14ebd2be2de0666dfc080bff5d31a1a977aaed9d7ed0bfc4736309aa7cb38ac0143e663d2c3"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-89521842cd2213f27e9390272c73fe5a4beabbe0827b83bad8b1671286951ac6d49430bdd30a9d3598e9ff6f9242fe00e51428df53e090f5d4d83a77954b6a86"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-89521842cd2213f27e9390272c73fe5a4beabbe0827b83bad8b1671286951ac6d49430bdd30a9d3598e9ff6f9242fe00e51428df53e090f5d4d83a77954b6a86"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-89521842cd2213f27e9390272c73fe5a4beabbe0827b83bad8b1671286951ac6d49430bdd30a9d3598e9ff6f9242fe00e51428df53e090f5d4d83a77954b6a86"' :
                                            'id="xs-controllers-links-module-AuthModule-89521842cd2213f27e9390272c73fe5a4beabbe0827b83bad8b1671286951ac6d49430bdd30a9d3598e9ff6f9242fe00e51428df53e090f5d4d83a77954b6a86"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-89521842cd2213f27e9390272c73fe5a4beabbe0827b83bad8b1671286951ac6d49430bdd30a9d3598e9ff6f9242fe00e51428df53e090f5d4d83a77954b6a86"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-89521842cd2213f27e9390272c73fe5a4beabbe0827b83bad8b1671286951ac6d49430bdd30a9d3598e9ff6f9242fe00e51428df53e090f5d4d83a77954b6a86"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-89521842cd2213f27e9390272c73fe5a4beabbe0827b83bad8b1671286951ac6d49430bdd30a9d3598e9ff6f9242fe00e51428df53e090f5d4d83a77954b6a86"' :
                                        'id="xs-injectables-links-module-AuthModule-89521842cd2213f27e9390272c73fe5a4beabbe0827b83bad8b1671286951ac6d49430bdd30a9d3598e9ff6f9242fe00e51428df53e090f5d4d83a77954b6a86"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostsModule-df8fcdd60651a702a87f77a55afcaa0eca042b0670e2bfa15569bbf2bf9b0a6b219b4a5458fa2a09b081e8329289a7b6e13ba127d1f945efb71a9146beeea3c9"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-df8fcdd60651a702a87f77a55afcaa0eca042b0670e2bfa15569bbf2bf9b0a6b219b4a5458fa2a09b081e8329289a7b6e13ba127d1f945efb71a9146beeea3c9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-df8fcdd60651a702a87f77a55afcaa0eca042b0670e2bfa15569bbf2bf9b0a6b219b4a5458fa2a09b081e8329289a7b6e13ba127d1f945efb71a9146beeea3c9"' :
                                            'id="xs-controllers-links-module-PostsModule-df8fcdd60651a702a87f77a55afcaa0eca042b0670e2bfa15569bbf2bf9b0a6b219b4a5458fa2a09b081e8329289a7b6e13ba127d1f945efb71a9146beeea3c9"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-df8fcdd60651a702a87f77a55afcaa0eca042b0670e2bfa15569bbf2bf9b0a6b219b4a5458fa2a09b081e8329289a7b6e13ba127d1f945efb71a9146beeea3c9"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-df8fcdd60651a702a87f77a55afcaa0eca042b0670e2bfa15569bbf2bf9b0a6b219b4a5458fa2a09b081e8329289a7b6e13ba127d1f945efb71a9146beeea3c9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-df8fcdd60651a702a87f77a55afcaa0eca042b0670e2bfa15569bbf2bf9b0a6b219b4a5458fa2a09b081e8329289a7b6e13ba127d1f945efb71a9146beeea3c9"' :
                                        'id="xs-injectables-links-module-PostsModule-df8fcdd60651a702a87f77a55afcaa0eca042b0670e2bfa15569bbf2bf9b0a6b219b4a5458fa2a09b081e8329289a7b6e13ba127d1f945efb71a9146beeea3c9"' }>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-29c7b69bf04973a1af5eb2554f06b2ab9a3fcf60652c22dbf7c4c1a9552a8364439e03048741e63dd2db7999cc78ec053bfff871d8832c75777fc3da5155e9a1"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-29c7b69bf04973a1af5eb2554f06b2ab9a3fcf60652c22dbf7c4c1a9552a8364439e03048741e63dd2db7999cc78ec053bfff871d8832c75777fc3da5155e9a1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-29c7b69bf04973a1af5eb2554f06b2ab9a3fcf60652c22dbf7c4c1a9552a8364439e03048741e63dd2db7999cc78ec053bfff871d8832c75777fc3da5155e9a1"' :
                                            'id="xs-controllers-links-module-UsersModule-29c7b69bf04973a1af5eb2554f06b2ab9a3fcf60652c22dbf7c4c1a9552a8364439e03048741e63dd2db7999cc78ec053bfff871d8832c75777fc3da5155e9a1"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-29c7b69bf04973a1af5eb2554f06b2ab9a3fcf60652c22dbf7c4c1a9552a8364439e03048741e63dd2db7999cc78ec053bfff871d8832c75777fc3da5155e9a1"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-29c7b69bf04973a1af5eb2554f06b2ab9a3fcf60652c22dbf7c4c1a9552a8364439e03048741e63dd2db7999cc78ec053bfff871d8832c75777fc3da5155e9a1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-29c7b69bf04973a1af5eb2554f06b2ab9a3fcf60652c22dbf7c4c1a9552a8364439e03048741e63dd2db7999cc78ec053bfff871d8832c75777fc3da5155e9a1"' :
                                        'id="xs-injectables-links-module-UsersModule-29c7b69bf04973a1af5eb2554f06b2ab9a3fcf60652c22dbf7c4c1a9552a8364439e03048741e63dd2db7999cc78ec053bfff871d8832c75777fc3da5155e9a1"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostMetaOptionsDto.html" data-type="entity-link" >CreatePostMetaOptionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUsersParamDto.html" data-type="entity-link" >GetUsersParamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchPostDto.html" data-type="entity-link" >PatchPostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchUserDto.html" data-type="entity-link" >PatchUserDto</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});