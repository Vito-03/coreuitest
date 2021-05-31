import React, { useState } from "react";
import {
  CCard,
  CCardBody,
  CCardFooter,
  CContainer,
  CCardHeader,
  CCol,
  CRow,
  CCarousel,
  CCarouselCaption,
  CCarouselControl,
  CCarouselIndicators,
  CCarouselInner,
  CCarouselItem,
  CPopover,
  CLink,
  CWidgetBrand,
  CListGroup,
  CListGroupItem,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CNavbar,
  CNavbarNav,
  CDropdown,
  CToggler,
  CCollapse,
  CNavLink,
  CPagination,
  CNavbarBrand,
  CForm,
  CInput,
  CButton,
} from "@coreui/react";
// import CChartPie from "@coreui/react-chartjs";
import CIcon from "@coreui/icons-react";
import ChartLineSimple from "../charts/ChartLineSimple";

// const statoBarra= [useState(false)];
// const [isOpenDropdown, setIsOpenDropdown] = statoBarra

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CContainer>
      <CRow>
        <CCard>
          {/* <CCardBody> */}
          {/* <CNavbar class="navbar navbar-light" expandable="sm">
              <CToggler inNavbar onClick={() => setIsOpen(!isOpen)} />
              <CNavbarBrand>
                <h4>Barra di navigazione</h4>
              </CNavbarBrand>
              <CCollapse show={isOpen} navbar>
                <CNavbarNav>
                  <CNavLink>Home</CNavLink>
                </CNavbarNav>
                <CNavbarNav className="ml-auto">
                  <CForm inline>
                    <CInput
                      className="mr-sm-2"
                      placeholder="Search"
                      size="sm"
                    />
                    <CButton
                      color="light"
                      className="my-2 my-sm-0"
                      type="submit"
                    >
                      Search
                    </CButton>
                  </CForm>
                  <CDropdown inNav>
                    <CDropdownToggle color="primary">Lang</CDropdownToggle>
                    <CDropdownMenu>
                      <CDropdownItem>EN</CDropdownItem>
                      <CDropdownItem>ES</CDropdownItem>
                      <CDropdownItem>IT</CDropdownItem>
                    </CDropdownMenu>
                  </CDropdown>
                  <CDropdown inNav>
                    <CDropdownToggle color="success">User</CDropdownToggle>
                    <CDropdownMenu>
                      <CDropdownItem>Account</CDropdownItem>
                      <CDropdownItem>Impostazioni</CDropdownItem>
                    </CDropdownMenu>
                  </CDropdown>
                </CNavbarNav>
              </CCollapse>
            </CNavbar> */}
          {/* </CCardBody> */}
        </CCard>
      </CRow>
      <CRow>
        <CCol>
          <CCard
            borderColor="success"
            color="secondary"
            className="text-black text-center"
          >
            <CCardBody>
              <blockquote className="card-bodyquote">
                <h2>Lorem ipsum.</h2>
              </blockquote>
              <CCol>
                <CCard className="border-success">
                  <CCardHeader>Immagine del prodotto</CCardHeader>

                  <CCarousel animate>
                    <CCarouselIndicators />
                    <CCarouselInner>
                      <CCarouselItem>
                        <img
                          className="d-block w-100"
                          src="https://italycyclingtour.it/wp-content/uploads/2019/01/new-logo-Italy-Cycling-Tour.png"
                          alt="slide 1"
                        />
                        <CCarouselCaption>
                          <h5>Slide 1</h5>
                        </CCarouselCaption>
                      </CCarouselItem>
                      <CCarouselItem>
                        <img
                          className="d-block w-100"
                          src="test.jpg"
                          alt="slide 2"
                        />
                        <CCarouselCaption>
                          <h5>Slide 2</h5>
                        </CCarouselCaption>
                      </CCarouselItem>
                      <CCarouselItem>
                        <img
                          className="d-block w-100"
                          src="avatars/2.jpg"
                          alt="slide 3"
                        />
                        <CCarouselCaption>
                          <h5>Slide 3</h5>
                        </CCarouselCaption>
                      </CCarouselItem>
                    </CCarouselInner>
                    <CCarouselControl direction="prev" />
                    <CCarouselControl direction="next" />
                  </CCarousel>
                </CCard>
              </CCol>
            </CCardBody>
          </CCard>
        </CCol>

        {/* <CCard>
          <CCardHeader>Pie Chart</CCardHeader>
          <CCardBody>
            <CChartPie
              datasets={[
                {
                  backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],
                  data: [40, 20, 80, 10],
                },
              ]}
              labels={["VueJs", "EmberJs", "ReactJs", "AngularJs"]}
              options={{
                tooltips: {
                  enabled: true,
                },
              }}
            />
          </CCardBody>
        </CCard> */}
      </CRow>

      <CRow>
        <CCol>
          COLONNA 1
          <CCard>
            <CCardHeader>Card title</CCardHeader>
            <CCardBody>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat.
            </CCardBody>
          </CCard>
          <CCard>
            <CCardBody>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat.Lorem ipsum dolor sit amet, consectetuer adipiscing
              elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
              magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
              nostrud exerci tation ullamcorper suscipit lobortis nisl ut
              aliquip ex ea commodo consequat.
            </CCardBody>
            <CCardFooter>
              <h4>Pagine</h4>
              <CPagination size="sm" activePage pages={5} onActivePageChange />
              <br></br>
              <div className="d-md-down-none"></div>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol>
          COLONNA 2
          <CCard>
            <CCardHeader>Card title</CCardHeader>
            <CCardBody>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat.
            </CCardBody>
          </CCard>
          <CCard>
            <CCardBody>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat.Lorem ipsum dolor sit amet, consectetuer adipiscing
              elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
              magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
              nostrud exerci tation ullamcorper suscipit lobortis nisl ut
              aliquip ex ea commodo consequat.
            </CCardBody>
            <CCardFooter>
              <h4>Pagine</h4>
              <CPagination size="sm" activePage pages={5} onActivePageChange />
              <br></br>
              <div className="d-md-down-none"></div>
            </CCardFooter>
          </CCard>
        </CCol>

        <CRow>
          <CCol>
            <CCard>
              <CCardHeader>Contenuto</CCardHeader>
              <CCardBody>
                {/*eslint-disable-next-line*/}

                <p className="text-muted">
                  Hover over the links below to see popover:
                </p>

                <p className="muted">
                  Tight pants next level keffiyeh
                  <CPopover header="Popover header" content="Popover text">
                    <CLink> you probably </CLink>
                  </CPopover>
                  haven't heard of them. Photo booth beard raw denim letterpress
                  vegan messenger bag stumptown. Farm-to-table seitan,
                  mcsweeney's fixie sustainable quinoa 8-bit american apparel
                  <CPopover header="Popover header" content="Popover text">
                    <CLink> have a </CLink>
                  </CPopover>
                  terry richardson vinyl chambray. Beard stumptown, cardigans
                  banh mi lomo thundercats. Tofu biodiesel williamsburg marfa,
                  four loko mcsweeney''s cleanse vegan chambray. A really ironic
                  artisan
                  <CPopover header="Popover header" content="Popover text">
                    <CLink> whatever keytar </CLink>
                  </CPopover>
                  scenester farm-to-table banksy Austin
                  <CPopover header="Popover header" content="Popover text">
                    <CLink> twitter handle </CLink>
                  </CPopover>
                  freegan cred raw denim single-origin coffee viral.
                </p>
              </CCardBody>
            </CCard>
            <CCard>
              <CCardHeader>
                List group
                <small> custom content</small>
              </CCardHeader>
              <CCardBody>
                <CListGroup>
                  <CListGroupItem action active>
                    <h5 className="d-flex w-100 justify-content-between">
                      List group item heading
                      <small>3 days ago</small>
                    </h5>
                    <div className="mb-1">
                      Donec id elit non mi porta gravida at eget metus. Maecenas
                      sed diam eget risus varius blandit.
                      <small>Donec id elit non mi porta.</small>
                    </div>
                  </CListGroupItem>
                  <CListGroupItem action>
                    <h5>List group item heading</h5>
                    <div>
                      Donec id elit non mi porta gravida at eget metus. Maecenas
                      sed diam eget risus varius blandit.
                    </div>
                    <small>Small.</small>
                  </CListGroupItem>
                  <CListGroupItem action>
                    <h5>List group item heading</h5>
                    <div>
                      Donec id elit non mi porta gravida at eget metus. Maecenas
                      sed diam eget risus varius blandit.
                    </div>
                    <small>Small.</small>
                  </CListGroupItem>
                </CListGroup>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CRow>

      <CCard>
        <CRow>
          <CCol>
            <CWidgetBrand
              color="facebook"
              rightHeader="89k"
              rightFooter="friends"
              leftHeader="459"
              leftFooter="feeds"
            >
              <CIcon name="cib-facebook" height="52" className="my-4" />
              <ChartLineSimple
                className="position-absolute w-100 h-100"
                backgroundColor="rgba(255,255,255,.1)"
                dataPoints={[65, 59, 84, 84, 51, 55, 40]}
                label="Friends"
                labels="months"
              />
            </CWidgetBrand>
          </CCol>
          <CCol>
            <CWidgetBrand
              color="twitter"
              rightHeader="973k"
              rightFooter="followers"
              leftHeader="1.792"
              leftFooter="tweets"
            >
              <CIcon name="cib-twitter" height="52" className="my-4" />
              <ChartLineSimple
                className="position-absolute w-100 h-100"
                backgroundColor="rgba(255,255,255,.1)"
                dataPoints={[1, 13, 9, 17, 34, 41, 38]}
                label="Followers"
                labels="months"
              />
            </CWidgetBrand>
          </CCol>
          <CCol>
            <CWidgetBrand
            color="linkedin"
            rightHeader="500+"
            rightFooter="contracts"
            leftHeader="292"
            leftFooter="feeds"
          >
            <CIcon name="cib-linkedin" height="52" className="my-4" />
            <ChartLineSimple
              className="position-absolute w-100 h-100"
              backgroundColor="rgba(255,255,255,.1)"
              dataPoints={[78, 81, 80, 45, 34, 12, 40]}
              label="Contracts"
              labels="months"
            />
          </CWidgetBrand>
          </CCol>
          
        </CRow>
      </CCard>
    </CContainer>
  );
};

export default Dashboard;
