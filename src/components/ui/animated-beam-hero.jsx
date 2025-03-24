import { forwardRef, useRef } from 'react'
import { cn } from '@/lib/utils'
import { AnimatedBeam } from '@/components/ui/animated-beam'
import fssai from '/src/assets/fssai.png'
import pan from '/src/assets/pancardbanner.png'
import verification from '/src/assets/verification.png'
import document from '/src/assets/document.png'

const Circle = forwardRef(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'z-10 flex size-14 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]',
        className
      )}
    >
      {children}
    </div>
  )
})

Circle.displayName = 'Circle'

export function AnimatedBeamDemo() {
  const containerRef = useRef(null)
  const div1Ref = useRef(null)
  const div2Ref = useRef(null)
  const div3Ref = useRef(null)
  const div4Ref = useRef(null)
  const div5Ref = useRef(null)
  const div6Ref = useRef(null)
  const div7Ref = useRef(null)

  return (
    <div
      className="relative flex h-[400px] w-full items-center justify-center overflow-hidden p-10"
      ref={containerRef}
    >
      <div className="flex size-full max-h-[200px] max-w-lg flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref}>
            <Icons.panCard />
          </Circle>
          <Circle ref={div5Ref} className="size-14">
            <Icons.verification />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref} className="size-14">
            <Icons.aadhar />
          </Circle>
          <Circle ref={div4Ref} className="size-16">
            <Icons.openai />
          </Circle>
          <Circle ref={div6Ref}>
            <Icons.document />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref}>
            <Icons.fssai />
          </Circle>
          <Circle ref={div7Ref}>
            <Icons.photo />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
    </div>
  )
}

const Icons = {
  aadhar: () => (
    <svg
      width="105"
      height="105"
      viewBox="0 0 244 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M227.656 77.5331L227.654 77.535H227.657C226.315 80.1124 225.828 83.2152 225.419 86.4498C224.918 90.3884 224.39 94.1694 223.294 97.876C221.977 102.319 219.766 107.269 215.917 111.144C211.917 97.3783 206.095 84.7379 198.827 73.6833C203.413 71.3534 207.914 71.3897 211.615 72.1654C214.689 72.8121 217.529 74.1208 220.464 75.5385C222.871 76.7068 225.229 77.7223 227.656 77.5331Z"
        fill="#FAB60F"
      />
      <path
        d="M183 20.7744L182.998 20.7773L183.001 20.7763C182.853 23.86 183.651 26.8567 184.57 29.9175C185.685 33.6479 186.715 37.2579 187.224 41.165C187.835 45.8727 187.863 51.6006 186.025 57.4345C177.315 48.2093 167.357 40.8259 156.518 35.761C159.573 30.8288 163.485 28.0002 166.996 26.3199C169.912 24.9271 172.887 24.2555 175.987 23.6174C178.53 23.0986 180.972 22.4806 183 20.7744Z"
        fill="#FAB60F"
      />
      <path
        d="M220.619 133.426C225.472 134.338 229.335 137.215 232.221 140.225C234.627 142.739 236.572 145.677 238.557 148.772C240.181 151.311 241.824 153.689 243.999 155.068H222.086C222.079 147.689 221.574 140.461 220.619 133.426Z"
        fill="#FAB60F"
      />
      <path
        d="M60.9985 20.7764L61 20.7783V20.7754C63.0278 22.4806 65.4696 23.0987 68.0137 23.6193C71.1124 24.2565 74.0871 24.928 77.0032 26.3199C80.5145 28.0002 84.4272 30.8298 87.4816 35.7619C76.6409 40.8259 66.6842 48.2103 57.9742 57.4355C56.1366 51.6015 56.1637 45.8736 56.7755 41.165C57.2843 37.2589 58.3139 33.6479 59.4293 29.9165C60.3477 26.8577 61.1473 23.86 60.9985 20.7764Z"
        fill="#FAB60F"
      />
      <path
        d="M16.3423 77.536L16.3445 77.537L16.3438 77.5341C18.7699 77.7223 21.1283 76.7068 23.5356 75.5395C26.4704 74.1218 29.3106 72.8131 32.3838 72.1654C36.0853 71.3907 40.5864 71.3553 45.1717 73.6843C37.9033 84.7389 32.0832 97.3802 28.0818 111.145C24.233 107.269 22.0219 102.321 20.7052 97.8769C19.6094 94.1704 19.081 90.3894 18.5797 86.4498C18.1709 83.2161 17.6838 80.1124 16.3423 77.536Z"
        fill="#FAB60F"
      />
      <path
        d="M0 155.068C2.17504 153.69 3.81647 151.312 5.44287 148.772C7.42626 145.679 9.37132 142.74 11.7778 140.227C14.6646 137.217 18.5239 134.339 23.3791 133.427C22.4238 140.461 21.9195 147.69 21.9135 155.068H0Z"
        fill="#FAB60F"
      />
      <path
        d="M122 0V0.002857L122.001 0C123.086 2.76555 124.957 4.85284 126.956 6.92008C129.389 9.44109 131.702 11.9134 133.679 14.9722C136.062 18.6644 138.34 23.6089 139.042 29.8345C133.503 28.6261 127.811 27.9899 122.001 27.9899C116.19 27.9899 110.498 28.6261 104.958 29.8345C105.66 23.6099 107.939 18.6644 110.321 14.9731C112.299 11.9134 114.611 9.44108 117.045 6.91912C119.043 4.85379 120.915 2.76555 122 0Z"
        fill="#FAB60F"
      />
      <path
        d="M101.645 155.097L109.176 155.069C110.165 146.984 108.23 140.76 101.796 142.245C96.3743 143.497 90.5504 150.343 87.0308 155.069L96.9598 155.013C98.0661 154.089 100.231 153.034 101.12 153.819C101.453 154.114 101.627 154.531 101.645 155.097Z"
        fill="#D52736"
      />
      <path
        d="M135.511 155.071H144.906C145.353 140.969 143.566 126.406 138.408 113.807C133.717 102.344 125.962 94.5515 115.923 92.6686C101.267 89.9203 86.4791 97.8062 73.9767 109.088C60.3643 121.372 49.1283 138.055 39.3091 155.071L51.7197 155.048C62.8926 134.919 88.591 104.36 107.495 104.161C113.52 104.098 119.645 105.895 124.174 111.03C127.455 114.752 131.433 121.979 131.239 127.844C131.123 131.322 128.695 132.388 126.366 131.311C124.557 130.474 123.28 128.372 122.014 126.163C117.901 118.985 111.485 115.472 104.447 116.696C96.0533 118.155 85.6486 126.439 78.9378 133.973C73.1507 140.471 67.8379 147.582 62.8264 155.071H76.1698C81.0603 147.566 86.2243 141.167 92.8629 135.911C94.9635 134.247 97.5504 132.489 100.27 131.3C107.129 128.304 113.956 129.062 116.987 139.918C118.178 144.186 118.353 147.93 118.006 154.791L118.005 155.071H127.078L127.101 154.718C127.108 150.961 127.044 148.43 127.31 144.706C127.54 141.497 128.324 138.172 130.669 137.776C135.653 136.449 135.414 150.542 135.511 155.071Z"
        fill="#D52736"
      />
      <path
        d="M154.785 155.07H164.258C164.717 141.986 163.834 126.486 160.504 112.951C159.846 110.281 159.096 107.689 158.243 105.215C156.226 99.3661 153.513 94.0719 150.278 89.1789C146.683 83.7433 142.399 78.8561 137.569 75.0063C136.144 73.8704 134.667 72.8215 133.141 71.8738V71.872C131.627 70.931 130.061 70.0894 128.45 69.3624L128.444 69.3595C109.996 61.0342 91.3387 66.9551 75.688 77.7747C72.6366 79.8849 69.7002 82.1795 66.9044 84.5897C64.1093 86.998 61.448 89.5285 58.9453 92.1087L58.94 92.1145C55.9691 95.1771 52.2518 99.368 48.5729 104.321C47.8484 105.296 47.1329 106.29 46.4369 107.294C44.5753 109.976 41.7065 113.737 42.5581 117.625C43.2322 120.709 46.3625 119.801 47.453 118.738C49.1268 117.597 50.9651 115.787 52.5381 114.096C54.6681 111.804 56.68 109.336 58.789 107.013C67.3193 97.614 76.2103 90.3653 84.9684 85.46C86.8774 84.391 88.7886 83.429 90.6931 82.5788C92.5908 81.7315 94.4787 80.9978 96.3501 80.3797L96.3591 80.3769C112.655 74.9986 130.364 78.4825 141.702 95.3749C152.625 111.645 154.619 133.426 154.785 155.07ZM37.249 136.676C38.2666 135.468 39.3038 133.893 40.3845 132.149C41.8967 129.711 42.0485 127.35 41.451 125.646C41.2285 125.01 40.9001 124.462 40.501 124.038C40.1049 123.618 39.6375 123.318 39.1332 123.171C37.9006 122.813 36.4268 123.373 35.1754 125.309C33.7602 127.496 31.8061 131.239 31.407 134.549C31.3326 135.169 31.3123 135.772 31.3627 136.338C31.4115 136.888 31.5273 137.411 31.7219 137.889L31.7234 137.894L31.7242 137.893C32.0429 138.67 32.5802 139.08 33.2972 139.115C33.4468 139.121 33.6084 139.113 33.7805 139.089C33.9481 139.065 34.13 139.023 34.3231 138.966L34.3239 138.967L34.3329 138.965C35.2979 138.67 36.2629 137.845 37.249 136.676Z"
        fill="#D52736"
      />
      <path
        d="M178.481 155.075L178.549 155.073H178.582C179.574 155.142 181.294 154.562 182.286 152.435C182.484 152.009 182.654 151.523 182.782 150.971C182.914 150.409 183.005 149.772 183.043 149.057H183.044L183.05 148.91C183.804 115.469 175.745 87.7855 162.064 68.9778C159.408 65.3258 156.534 62.0033 153.469 59.0371C150.407 56.0728 147.157 53.4678 143.746 51.2458L143.745 51.2467L143.691 51.2123L143.689 51.2104C132.19 43.741 119.149 40.8723 106.348 42.2508C103.851 42.5192 101.369 42.9482 98.9168 43.5337C96.4584 44.1212 94.0203 44.8673 91.6183 45.7682L91.5845 45.7815C78.42 50.7309 66.1694 60.556 56.1863 73.4476C54.242 75.959 52.3841 78.5832 50.627 81.3067C49.7529 82.6594 48.9021 84.0389 48.0776 85.4393C55.0785 77.7617 62.5897 71.0269 70.4458 65.6763C72.215 64.4717 73.9948 63.3397 75.7797 62.2908C77.567 61.239 79.3767 60.2579 81.2053 59.3542L81.2106 59.3514L81.2158 59.3485C88.1566 55.92 94.9989 53.7334 101.843 52.7561C108.686 51.7788 115.535 52.011 122.489 53.4162C127.438 54.4173 132.269 56.0643 136.621 58.3684C137.465 58.8155 138.296 59.2903 139.109 59.7918C139.912 60.2866 140.703 60.812 141.477 61.368H141.478L141.49 61.3756L141.489 61.3766C156.811 72.0405 167.455 93.9223 172.144 118.628C173.058 123.446 173.746 128.368 174.198 133.326C174.649 138.282 174.866 143.293 174.839 148.294V148.296L174.837 148.584C174.915 151.26 175.636 153.498 176.873 154.506C177.103 154.693 177.352 154.839 177.617 154.934H177.619C177.889 155.032 178.177 155.081 178.481 155.075Z"
        fill="#D52736"
      />
      <path
        d="M151.085 43.6245C187.923 59.0896 214.545 103.121 214.7 155.072H196.473C197.679 109.691 182.097 68.7285 151.085 43.6245Z"
        fill="#FAB60F"
      />
      <path
        d="M44.1287 191.51H36.7558L34.9302 199.675H29.0537L36.8287 168.406H44.2745L52.2682 199.675H46.1361L44.1287 191.51ZM37.5953 186.221H43.2524C41.7688 180.112 40.8075 175.921 40.3693 173.648H40.2957L39.1278 179.587L37.5953 186.221ZM71.2107 191.51H63.8371L62.0123 199.675H56.1358L63.91 168.406H71.3566L79.3502 199.675H73.2182L71.2107 191.51ZM64.6766 186.221H70.3344C68.8501 180.112 67.8888 175.921 67.4506 173.648H67.3777L66.2098 179.587L64.6766 186.221ZM84.969 199.537V168.823C87.4026 168.359 90.006 168.127 92.78 168.127C98.0245 168.127 101.79 169.519 104.072 172.31C106.353 175.101 107.49 178.752 107.49 183.252C107.49 188.572 106.195 192.693 103.597 195.616C100.999 198.539 96.9903 200 91.576 200C89.0695 200 86.8674 199.845 84.969 199.537ZM90.6268 173.926V194.294C90.9432 194.387 91.6249 194.433 92.6711 194.433C95.4812 194.433 97.6592 193.49 99.1984 191.611C100.738 189.732 101.504 187.041 101.504 183.53C101.504 180.314 100.805 177.862 99.3991 176.176C97.9937 174.491 95.9682 173.648 93.3279 173.648C92.2209 173.648 91.3205 173.741 90.6268 173.926ZM113.547 168.406H119.205V180.421H128.878V168.406H134.536V199.675H128.878V186.638H119.205V199.675H113.547V168.406ZM155.047 191.51H147.674L145.849 199.675H139.972L147.747 168.406H155.193L163.187 199.675H157.055L155.047 191.51ZM148.513 186.221H154.171C152.687 180.112 151.726 175.921 151.287 173.648H151.215L150.047 179.587L148.513 186.221ZM182.129 191.51H174.755L172.93 199.675H167.054L174.828 168.406H182.275L190.268 199.675H184.136L182.129 191.51ZM175.595 186.221H181.253C179.768 180.112 178.807 175.921 178.369 173.648H178.296L177.128 179.587L175.595 186.221ZM195.887 199.675V168.823C197.956 168.359 200.499 168.127 203.516 168.127C207.24 168.127 209.916 168.908 211.546 170.47C213.177 172.032 213.992 174.267 213.992 177.174C213.992 178.906 213.584 180.468 212.763 181.868C211.942 183.267 210.877 184.257 209.575 184.829V185.014C211.109 185.741 212.216 187.66 212.897 190.767C214.15 196.366 214.831 199.335 214.941 199.675H209.174C208.687 198.516 208.103 196.088 207.421 192.391C207.081 190.536 206.619 189.237 206.035 188.495C205.451 187.752 204.514 187.381 203.224 187.381H201.472V199.675H195.887ZM201.472 173.648V182.231H203.808C205.219 182.231 206.332 181.821 207.148 181.009C207.963 180.198 208.371 179.107 208.371 177.73C208.371 176.354 208.006 175.287 207.27 174.537C206.534 173.787 205.487 173.416 204.137 173.416C202.811 173.416 201.922 173.494 201.472 173.648Z"
        fill="#D52736"
      />
    </svg>
  ),
  openai: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.8749 17.6249V2L51.9995 29.8436L80.125 2V17.6249L51.9995 45.75L23.8749 17.6249ZM23.8749 86.3745V102L51.9995 74.156L80.125 102V86.3745L51.9995 58.25L23.8749 86.3745ZM86.3745 80.125H102L74.156 51.9995L102 23.8749H86.3745L58.25 51.9995L86.3745 80.125ZM17.6249 80.125H2L29.8436 51.9995L2 23.8749H17.6249L45.75 51.9995L17.6249 80.125Z"
        fill="#020617"
      />
    </svg>
  ),
  panCard: () => <img src={pan} alt="" width={100} height={100} />,
  fssai: () => <img src={fssai} alt="" width={100} height={100} />,
  verification: () => (
    <img src={verification} alt="" width={100} height={100} />
  ),
  document: () => <img src={document} alt="" width={100} height={100} />,
  photo: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100" height="100" fill="white" />
      <path
        d="M48.9017 44.509C55.4724 44.509 60.799 39.1824 60.799 32.6117C60.799 26.041 55.4724 20.7144 48.9017 20.7144C42.331 20.7144 37.0044 26.041 37.0044 32.6117C37.0044 39.1824 42.331 44.509 48.9017 44.509Z"
        stroke="#2B2B2B"
        strokeWidth="4"
        strokeMiterlimit="10"
      />
      <path
        d="M9 35.1741V9H35.1741"
        stroke="#2B2B2B"
        strokeWidth="4"
        strokeMiterlimit="10"
      />
      <path
        d="M35.1741 88.8035H9V62.6294"
        stroke="#2B2B2B"
        strokeWidth="4"
        strokeMiterlimit="10"
      />
      <path
        d="M62.6294 9H88.8035V35.1741"
        stroke="#2B2B2B"
        strokeWidth="4"
        strokeMiterlimit="10"
      />
      <path
        d="M71.5985 73.0625C68.8529 73.0625 66.6565 75.2589 66.6565 78.0045C66.6565 80.75 68.8529 82.9464 71.5985 82.9464C74.344 82.9464 76.5404 80.75 76.5404 78.0045C76.5404 75.2589 74.344 73.0625 71.5985 73.0625Z"
        fill="#2B2B2B"
      />
      <path
        d="M82.0312 67.9375L81.116 63.7277C80.933 62.8125 80.2009 62.2634 79.2857 62.2634H63.7276C62.8125 62.2634 62.0803 62.8125 61.8973 63.7277L60.9821 67.9375H55.491C53.4776 67.9375 51.8303 69.5849 51.8303 71.5983V87.3393C51.8303 89.3527 53.4776 91 55.491 91H87.3393C89.3526 91 91 89.3527 91 87.3393V71.4152C91 69.4018 89.3526 67.7545 87.3393 67.7545H82.0312V67.9375ZM71.5982 88.4375C65.741 88.4375 61.1651 83.6786 61.1651 78.0045C61.1651 72.1474 65.9241 67.5715 71.5982 67.5715C77.2723 67.5715 82.0312 72.3304 82.0312 78.0045C82.0312 83.8616 77.2723 88.4375 71.5982 88.4375Z"
        fill="#2B2B2B"
      />
      <path
        d="M24.741 78.5535C24.741 65.1919 35.5401 54.3928 48.9017 54.3928C50.732 54.3928 52.3794 54.5759 54.0267 54.9419"
        stroke="#2B2B2B"
        strokeWidth="4"
        strokeMiterlimit="10"
      />
    </svg>
  ),
}
