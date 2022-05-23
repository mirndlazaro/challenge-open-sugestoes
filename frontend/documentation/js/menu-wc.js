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
                    <a href="index.html" data-type="index-link">argon-dashboard-angular documentation</a>
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
                            <a href="changelog.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CHANGELOG
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
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
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminLayoutModule.html" data-type="entity-link" >AdminLayoutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdminLayoutModule-2b657d9d672487848ccad0ee0bad2c0dc9dbe9a32a32fcb6c9b3944facbf15a9254a33bad310b06d1ce711d4c8b918ba00b4a36c159f9ff27af457f87d78215b"' : 'data-target="#xs-components-links-module-AdminLayoutModule-2b657d9d672487848ccad0ee0bad2c0dc9dbe9a32a32fcb6c9b3944facbf15a9254a33bad310b06d1ce711d4c8b918ba00b4a36c159f9ff27af457f87d78215b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminLayoutModule-2b657d9d672487848ccad0ee0bad2c0dc9dbe9a32a32fcb6c9b3944facbf15a9254a33bad310b06d1ce711d4c8b918ba00b4a36c159f9ff27af457f87d78215b"' :
                                            'id="xs-components-links-module-AdminLayoutModule-2b657d9d672487848ccad0ee0bad2c0dc9dbe9a32a32fcb6c9b3944facbf15a9254a33bad310b06d1ce711d4c8b918ba00b4a36c159f9ff27af457f87d78215b"' }>
                                            <li class="link">
                                                <a href="components/AddDepartmentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddDepartmentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddSuggestionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddSuggestionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DepartmentsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DepartmentsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SuggestionsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SuggestionsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserProfileComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-860ce9c9405419752d9a79c6024f9562498821fba252e4f011da9f877e2eadb899c4781a1649ff7fe24434119043e2994bcb283698d7263998a6d16ce7eed5b3"' : 'data-target="#xs-components-links-module-AppModule-860ce9c9405419752d9a79c6024f9562498821fba252e4f011da9f877e2eadb899c4781a1649ff7fe24434119043e2994bcb283698d7263998a6d16ce7eed5b3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-860ce9c9405419752d9a79c6024f9562498821fba252e4f011da9f877e2eadb899c4781a1649ff7fe24434119043e2994bcb283698d7263998a6d16ce7eed5b3"' :
                                            'id="xs-components-links-module-AppModule-860ce9c9405419752d9a79c6024f9562498821fba252e4f011da9f877e2eadb899c4781a1649ff7fe24434119043e2994bcb283698d7263998a6d16ce7eed5b3"' }>
                                            <li class="link">
                                                <a href="components/AdminLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-860ce9c9405419752d9a79c6024f9562498821fba252e4f011da9f877e2eadb899c4781a1649ff7fe24434119043e2994bcb283698d7263998a6d16ce7eed5b3"' : 'data-target="#xs-injectables-links-module-AppModule-860ce9c9405419752d9a79c6024f9562498821fba252e4f011da9f877e2eadb899c4781a1649ff7fe24434119043e2994bcb283698d7263998a6d16ce7eed5b3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-860ce9c9405419752d9a79c6024f9562498821fba252e4f011da9f877e2eadb899c4781a1649ff7fe24434119043e2994bcb283698d7263998a6d16ce7eed5b3"' :
                                        'id="xs-injectables-links-module-AppModule-860ce9c9405419752d9a79c6024f9562498821fba252e4f011da9f877e2eadb899c4781a1649ff7fe24434119043e2994bcb283698d7263998a6d16ce7eed5b3"' }>
                                        <li class="link">
                                            <a href="injectables/DepartmentService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DepartmentService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SuggestionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SuggestionService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ComponentsModule.html" data-type="entity-link" >ComponentsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ComponentsModule-b11f810b1921f052302f07cebb5c861d4e6115ebd045e1e0ffeb3eaa23d6af1c6a2d394cde6519beab56a4a51500512e89efdfb19272b58f1a280a798c28a825"' : 'data-target="#xs-components-links-module-ComponentsModule-b11f810b1921f052302f07cebb5c861d4e6115ebd045e1e0ffeb3eaa23d6af1c6a2d394cde6519beab56a4a51500512e89efdfb19272b58f1a280a798c28a825"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ComponentsModule-b11f810b1921f052302f07cebb5c861d4e6115ebd045e1e0ffeb3eaa23d6af1c6a2d394cde6519beab56a4a51500512e89efdfb19272b58f1a280a798c28a825"' :
                                            'id="xs-components-links-module-ComponentsModule-b11f810b1921f052302f07cebb5c861d4e6115ebd045e1e0ffeb3eaa23d6af1c6a2d394cde6519beab56a4a51500512e89efdfb19272b58f1a280a798c28a825"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidebarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SidebarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link" >AppPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/Department.html" data-type="entity-link" >Department</a>
                            </li>
                            <li class="link">
                                <a href="classes/Employee.html" data-type="entity-link" >Employee</a>
                            </li>
                            <li class="link">
                                <a href="classes/Suggestion.html" data-type="entity-link" >Suggestion</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/DepartmentService.html" data-type="entity-link" >DepartmentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SuggestionService.html" data-type="entity-link" >SuggestionService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/RouteInfo.html" data-type="entity-link" >RouteInfo</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#pipes-links"' :
                                'data-target="#xs-pipes-links"' }>
                                <span class="icon ion-md-add"></span>
                                <span>Pipes</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="pipes-links"' : 'id="xs-pipes-links"' }>
                                <li class="link">
                                    <a href="pipes/SearchFilterPipe.html" data-type="entity-link" >SearchFilterPipe</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
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
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});