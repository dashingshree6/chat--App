import React from "react";
import Button from "@mui/material/Button";
import "./login.css";
import { auth, provider } from "../firebaseConfig";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../Reducer";

export default function Login() {
  const [{ user }, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login_container">
        <img
          alt="chatbot"
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQDxAPEBAQEA8QDw8QDxAQFRAPDg8PFREWFhUSFRYYHSggGBomHRUWIjEhJiksMC46Fx8zODMsNygvLisBCgoKDg0OFxAQGi0dHyUtLS0tLS0tLS0tLS0tLSstLS0tLS0uLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIEBQYHAwj/xABNEAACAgACBQYICgYIBgMAAAABAgADBBEFBhIhMRNBUWFxgQciMlORobHRFBUWI0JSYnKSojM0Q3OCwRckRGOTstLwVGWks8Ljg6Pi/8QAGwEAAgMBAQEAAAAAAAAAAAAAAAECBAUDBgf/xAA5EQACAQIBBwkGBgMBAAAAAAAAAQIDEQQFEiExQVHRE2FxgZGhscHwFBUiMjNSNFNyotLhQmLxgv/aAAwDAQACEQMRAD8A1cIQnoT5iEIQgAQhCABCEQmAxYhMSITABYRu1ELRDsPJjdqeReMNsLjzbnuWibUjG6MN0VyWYS9qG3IXLw5eFx5hN24bUhcvAXxXDkydtRQ0hi6OF0dxZhLzjs5FFk9BZHcjm2PaAMYGihoxWH5xY2AMBDoRM4sACEIQEEIQgAQhCABCEIAEIQgAQiRIDAmEI0tABSZ5s0azzwstkSaW09Wsnk90tMBq5dbkz/MoedhmxHUvH05TRYHQeHpyITbf69njHPqXgPRK1TFQjq0vm4mvhckV6ulrNXPw19tukx+FwF936GpmHT5A9O6WtOqdp8u1K+pc7G93rmuLE/73Rspyxc3q0G1SyJh4fO3LuXdp7yip1ToHlNbZ3hR6hn65Lr0BhV/YDvaw+0yyhOLrVHrky/HA4aOqnHsT8bkddHUjhRV+EH2w+A0/8PT+BfdPayxV8pgv3iF9s8RjqjuFtRPU6e+QznvO6pw3LsQx9FYc8cPV3Ar7JEt1awjfsWTrV39hJEtl3jMbx0jeISSqSWpvtZzlhaE/mhF9SM3iNT6z+jues/aVbB6sjKzF6q4lN9excPstsv6Dl/ObeE6RxNRbb9JVqZKws/8AHNfM2u7Su45hcHqOzYjVt0MCp7s+MVL5021A67LqrqeKsAynuMoNJao0vmaWND9G96j3Hevce6WYYxP5lYysRkOcbuk87m1Pg+4zCXT2WyRtJaNvwp+dTJSclsXxkb+Lm7DlPCu+XIzTV1pMOrQlCTjJWe5lorT0BkGu2e6PJ3K7jY94oMYDHCSIDoRucdAAhCEBBCEIAEIQgAQhEMBgYhhGsYDQjGeLvCx5I0Tox8U5A8WtfLs6Ps9ZnOUlFXeo70aMqs1CCu2eGCwlmIfYqXM/SY7go6SZsNFaFqw+TeXb5xhuB+yvN28ZMwuGSpBXWuyg9LH6zHnM9ZlVsTKpoWhHsMDkunh7Sl8Ut+xdHHwWgCYQhK5qhI2kMfVh6zbfYlVa8XchV6h1nqG+UWumuVOja8j87iXXOqgHIkcNtz9FM+fny3dXP9E6t4/TrrjMdc1WGO+sgZZqebD1ncq/bOef2orjSLfTXhYBbktHYdrnO5bLQ4DH7FS+M3fkeqV3xXrDpDfZa+GrbIgPZ8EXLo2KgX7mE6XoHVzC4FNnDUqhIyaw+Nc/3nO89nDqlrCw77jktXgddztX45Sx47NTOxP32ff6JIbwNVZbsY+fXShH+adShCwrs5E3goxlGbYPHoG5suWwbH+JC0Y2ltP6M33o2JoXizhcTXsjn5Svx17WnYIQsFzC6t+E/CYoql+eEtbIDbIbDseqzm/iA7TNyDnvHA7weYiZPWjwf4THBnC/BsQczy1QADH+8Tg/buPXMNg9LaQ1fuXD4lTfgmOSAHNCvOaHPktl9A7uzPagFr6js0JC0RpSnF0riMO4sqfgRuKnnVhxVhzgybGIRgCCpAZSMmVgCrDoIPGZbTeqIOdmE8VuJoJ8VvuE8D1Hd2TVQk4TlB3Rwr4anXjm1FfxRyhbCrFWBVlOTKwIYHoI5pLqum10/oBMWu0MkvUeJZzH7D9I6+I9U586vVY1VilLEOTKeb3jrmlRrqa5zyeOyfPDvTpT1P1t8S2R57qZWU3Sajy0mZUo2JEUGMUx0kch0IgiwAIQhAQQhCABGmKYkBjTPJ2j3Mi3vIk0t5IwGCbEWipd3O7cyrzt7hN5hsOlSLXWNlFG4c5POx6SZB0Do74PSAR86+TWdP2V7h685YzIxFbPlZake2yXgVh6WdJfG9fNzcd75rBCEJXNQJndd9aU0bhuUOT32Zph6vrPlvZuhF4nuHPL+61UVndgqIpZ2O4KoGZJ6gBONaKofWDSz32hhgqMjsHgKQTydPUzkFm/i6omNInahanvj7DpTSWdq2Nt1V2f2g81jjzY4KvA5fVyz60JUaX07ThAEy2nAGzUmQ2RluzPBR/vKZTGa4YhyeT2KhzbKhjl1ls/YJWq4ylSea3d7kX8Nk3EYhZyVlvejs2vwOhQnNPlJi/Pn8vuifKTFeeb8vunD3nS3Pu4lz3BiPvj+7+J0yE5n8pMV59vy+6HykxXn2/L7oe86W593EPcFf74/u/idMhOZ/KTFefb8vuh8pMV59vy+6HvOlufdxD3BX++P7v4nTJE0ro2rFUvRegsqcb1PEHmZTxDDmInP11lxY/anvCH/wAZZ4DXSxSBciuvOyeK4/kfVJQyjRk7O66Vwuc6mQ8TFXi4y6G/NJd5jSuJ1bx4ObXYG89gurHMeZblz7D2Hd2PA4yu+pLqmD1WKHRhwKn2HqlTpTBYbS2Csp2gVbyWH6Si4eS2XMR6wSOBmD8F2lrMHi7tD4rxfnH5IHgl43sq/ZdfGH/6l2LTSa0oypRabUlZrWdZhCEkQCUus+gxi69pABiKweTbhtrx2GPsPN3mXUJKMnF3Rzq0o1YOE1dM5FRYQcjmCCQQdxBHEGWNFkstfNFcnYuLQZLadm4DgLMtzd4HpHXKDD2zVpVFJXR4vF4WVGbg9nfz+uguUae4Mg0vJSGWDNkrHpFiRRJEBYQhAQQhEgAkDCI0CR4WGStXcLyuKTMZogNj9ByA2R6SJCuM0epdGVdtvO7og7FXM+s+qVsTPNps08lUOVxME9S0vq4uy6GaEnOEITHPchCEIAYLwxaa5DAjDqcnxblW6RQmTWeklV/iMTQNfxTomlAAMXihyz55Zq7gHM/dXZXt75jfCfpWu3TCJZm+GwnI12ooBLjaFlwXMgZkME3n6Ms8VrN8ZO14ratFPJIjEMQAAxO7dvLGVMXVlTpNx16u00cm4eNevGM9KWm2+2zjzHm9hYlmJLEkkneSTxJMhaR0jXQM3O8+Si72PuHXPfE3itGsPBFLHry5pgMTiGsdnc5sxzPQOgDqEysJhuWbctS7/W89FlLH+zRSgryfYl61f0XtmtLZ+LSoH2iSfVPP5U2ebq/NKEwVgeBB7Jqex0PtXfxPP+8sZrz32LgX3yps81V6Wh8qbPNVelpQwj9jofau/iL3ni/zH2LgX3yps81V6Wh8qrPNVfmlDAsM8sxn0c8XsdD7V38RrKWMeqb7FwNNhtaRnlZXkPrVnPLuMv8AD3rYodGDKeBE51LfVvHmq4IT4lpCkcwY7lb+UrYnAwzXKnoa2bC9gMrVOUUKzunovtT2ata2eZv9E6SfDWixDu4Ov0WXnU/73Tx8K+E34PTGFOyWKIzDitqePS56xkyn7qieEjaa1orXBYnRl1TtygW2ixSpFdmYZQQct20vEZ+UZyydVec6ex6fXSWMuYeLpqt/knbpT4bObqOu6E0kuKw1GJXcLqksy+qxHjL3HMd0nTnngW0pymCtwxPjYa0lRz8lbmw/MHnQ5tHlmEIQgBH0lghiKLaG4WJsg/VfijdxAM5HhyVJVhkykqw5wwORHpnZJy7W/D8lpC/LcHK2D+JQT+balvCzs2jGyxRvCNTdo7dPrpHYd5PrMqcK0sqTNKJ5OoiUsURqxwnQ4DoQhAiESLEgAka0dGvAkiHeZsNU1ywVZ+s1p/Pl/KY7ETYaotngqx9V7Qe9tr+co435OvyZv5C/EP8AS/GJcQhCZh60JE0vj1w2HuxD+RTU9hHOdkZ5DrPDvkuZLwrMRofFbOfHDA5fVOJqB9UAODYrENbY9rnN7Hexz0uzFj6zNRqf+gf98f8AIsyU1up/6B/3x/yLKGUPovpRs5G/FdT8iVrGf6pb/wDGP/sExE2+sn6pb21/9wTESOTfpS/V5I6Zc/ER/SvGRqfB7h6nxLmwKzpUWqV8iAdobTgdIGXpMu/CNh6vg6WEKLuWCKdwd02W2gekDcervnPq7CpDKSrA5hlJVgekEcJ6YnFWWnaststYDIGx2cgdA2uE144hKi6ebrPI1cmznjo4pTslbRt0aLLZZ7evfo8IQhK5qgeBy45bp2PReCoGGSutK2oepTwDLcGG9n+uT1zjkk1461UNa3WrWc80WxxWc+Pigyxhq6ottq9/X/TLyrk6WNhCMZ5tnfm06O1bOl6ULpJEW+9ajnUt1orPH5sOdnfzjrnhUcmU9BU+uMjq/KXtX2yu95pwTikr3ttevpfO9p0huJmN1q/WT+7r9hmybiZjda/1k/u6/YZh5N+r1cD1+XPw/wD6XmWngw0x8F0lUCcq8T/VrOgFz823bthR2MZ3+fLeAJF1JXyhbUV6doOMvXPqVuJ7Zuo8fISEIRkQnO/CQMsXQfrYdc+52E6JOc+El88ZUv1cMufe7mdsP9RFDKX4eXV4lThDLWgyowktqJrQPGVtZNSOjEj51KrHQjYQEOiRYkBCRrx0YwgSRDvE0eo+J2q7qedGrcdjDI+wemZ+4T00Bjvg+LQsckfOuzoCnn7tx7pVxMc6DRq5Mr8liISerU+v+9J0GECMjlCZB7cJA09o0YvC34YnLlqnQN9ViPFbuOR7pPhAD5ZxWGeqx6rVKWVsUsU8VYHIiajU/wDQP++P+RZ1LXLUTD6RPK7RoxIGQuQBg4A3CxN21l05g9eW6YZNXH0cXw9jrYWYWK6gqGUqBwPDeDKGUPo9aNnIrviep+RA1k/VLe2v/uCYidA0lhuVpsrHFl8X7w3j1ic/y6dx5xzgznk2S5OS5/FLgdsuxarQlscbdjfFBJWE0fbcHNVVlgrAL8mpfZB4bufhwEiyforS12FYtS+znltKRtVuBwDDv7Zpxzb/ABauYwKrqKD5K2dsve3XbT/diARxHONxHODCa86zYXEfruCBs4crUBn27yHHZtGNNuhl8bk8S2W8Lm/83H+adeSi9KnG3Pdd1il7fUjoqUKif+tprtTXgjMYbDvawStHdzwVAWPb1DriYihq3auxSjocmU8QZp79cRWprwOGrw6nizKvKH+FTln1ktMxiL2sdrHYu7HNmO8kyE4wirJ3fRZcTth6uIqSbqQUI7Fe8uu3wpW2fNc8o6vyl7V9sbJuh8Mbb61HAMGbqVTmfd3zjOSjFyewvU4Oc4wjrbS7dBvW4mY3Wr9ZP7uv2GbEx2D1AfSVhxBvFNI2ayAhexiACdneAOI37+yYuTvrW5n5Hqst6cM3/svMzfg30KcXpKgZfNUMMTcfs1kFF6832R2Z9E+hJivB1oammzHXYdSKOVXCUux2mtGHzFtpPOWtZxu3ZIMptZuo8e2EIQjEAE5Lrdi+W0jiCDmqOK17EAU+sNOm6b0iMLhrsQcs60OwD9K1tyL6SJxrCgk5k5knMk8STxMtYaN22ZGVqqUYw6/LiWuEEtqBK7CrwlnSJpRPKVWSkjoxBHidCqwyhHQjEEIQgIQxrRxiGBIjWCV+KSWbyDiRISOtNmz1V0t8Io2GPz1ICPnxdeZv5HrHXLqct0RfbXiqTRvsYqAp8l1Y5FW6sufmyz5p1RwM93CZGIpqE9G09tkzEutR+LXHRff/AHvGwhCcDRCUGt2hziKg9Yztqz2RzsnOvbzjv6ZfwkKlONSDhLUztQryoVFUhrXprrOOkSk0zoLlSbKiFsO9lO5bD09RnXdO6rpiCbKyKrTx3fNselhzHrHoMyWL1dxVZ/Qsw+tX84D6N/qmI6FfDTzoq/OtK6168z1ccXhMdTzZtLmbs0+Z+a6Gthy63RV6nI02fwjlB6Vznn8X3+Yu/A/unTfiq/zF/wDh2e6J8U3+Yv8AwWe6dvb632eJX9zYfZUfbHgcz+L7/MXfgf3Q+L7/ADF34H906Z8U3+Yv/BZ7ofFN/mL/AMFnuh7fV+zxF7lw/wCY+7gcz+L7/MXfgf3Q+L7/ADF34H906Z8U3+Yv/BZ7ofFN/mL/AMFnuh7fV+zxD3Lh/wAx93A55htCXuf0ZQc7WeKB3cfVNTorRi4dch4zt5bnieodAl2uicQdwov/AMOz3SxwGqV9h8cClel/K7lG/wBOU41KuIxHwqOjck+98XYsUcNg8F8bmr721fqS4N85U4DCPdYtVYzZj3Ac7HoAmz0za2Gop0bgz/XMSrJU3HkU/bYtxzBcyR0kqIt9tGi0WqlGxGMxHi00gjl8Qw5yfoVjiW4DrPGbq9oZqTZiMQ4ux2IyN9o8hEHk4eoHya1z7zmTxmhg8LyKbl8z7ubiYmU8oe1SUYaILve/gv8AinaK0fXhqKsPUMq6a1rQc+QHE9JJzJPWZLhCXjKCAEJmNdtZvglfIUn+t2LxH7Cs/TP2jzDv7XGLk7IhUqRpxcpakZzwh6bF94wlZzqw7E2ZcHt4Edi7x2kyhwtch4WqXGGqmnSpqKsjyOLxDqTcmS8MksKhI9CSWglpGTN3Y9Y4RBFEmcR0IQgIIQhABDEMUxDAZ5PIeIktzIjoXYIozZmCqOkk5ASDO0NZd6j6Ozd8Uw3LmlX3iN7DsBy/imvnjgsIKKkpXhWuWf1nO9m7znPaYtWefNs97g8PyFGMNu3pevh0WCEITmWghCEACEIQAIQhC4rIIQhC4WRQ6f1wwWBsWrE3bNjLt7CpZYwXPIFtkHLPI8eiVn9J2jPP2f4N/wDpnjrl4O00hiPhK4lsPYUVLByYuRtncpA2lKnLdxPASg/oa/5j/wBN/wC6F2O0TS/0naM8/Z/g3/6ZIOtRxeVeik+EOQNvFWq9eCw2Yz8ckBrH/u139JEyX9DX/Mf+m/8AdOgar6CTAYVMLWzOFLszvkGd2bMnIbgOYDq5+MQ7JahNBaBTDF7WdsRi7QOXxVuXK2ZcEUDdXWOZF3dst4QjEEJ54m9KkNlrrXWvF3IVR7z1Tn+sWvrPnTgdpEO5ryMrWH92v0B1nf2ScIOb0HGtiKdFXk+rb66S91t1tTBg007NmLI4fQpz536W6F9PXzIbVjtZYxd3JZmbezMecwpoz3neScyTvJJ5zLHD4eX6VJRPN4zGyqvToW71t5ww1MtKKoyimTq0lqMTHqTHVpPdREUR86WKzYRREAjoyIQhCAghCJABM4jRY1oEkeVkttUsDtWNew3V+KnW7Df/AL7JUWTS4fS+Gw1SVCxnKjM7CsSxO8nxsv8AYlXEuWZmxV7+BrZJjS5blKsklHTpa0vZbfv0bkXkJksbrqRmKsOD0O7Fh6Bl7ZQY7WrG2ZgXcmOitUT18fXKCw1TboPSTyth18rcuhcbHTbDsjaYhVHFmIUDvMpcdrXgqvKxCMeioNb61GXrnLMUHtO1Y72N0szOfSZ5jCzosLvZVnldv5IpdOnwt4m5xnhKqXMUYayzrtZa17chtGWOh9ecJfkLC2GsPNZvqz6rBwH3spzcYWBwvVJPDRscVlWqnd2fNb0zt1bBlDKQ6neGQhlI6iITi2DstoO1TZZUefk2YA9oG498v8JrvjK9z8neP7xNl/xJl7JylhpLU79xdpZWpS+dNd/rsOlQmMw3hCT9rhrE663Wz1MF9ssKtecE3F7a/v1k5fgJnJ0prYXI4yhLVNeHiaOEpE1uwB/tQH3kuX2rPQ61YL/ik/DZ/pkcyW46KvSeqS7UW8JQ2a5YAf2rP7tVzf8AjIl/hAwa+St9h+ygQfmYeyPk57iLxVFa5rtXkamEwOK8I7bxThFHQ1lhb0qoHtlJjtbsfdmOW5JT9GlRX+byvXJqhN8xXnlKhHU2+hcbHUNIY+nDrtX210jm22AZvurxJ7BMjpfwiIua4So2N520Fax1hBvPflMFyBZizEsx4sxLMe0njJFWFneGGW3SZ1bKs3oh8Pe/XUJpHG34t9vEWtYR5IO5E6lUbhEpw0mVYaTKsPLUYWMmpXbd2yNTh5PppnrXTJKVzrGJSnUuNrrnuqwVY8CdEiu2AEWEWMiAiwhAAhCEBBCEIANiGOMSAzxcSNakmkTyZZFnSLsV1lU8DRLU1xnJSOadVOxWfB44YaWQqjxVDNHypWjDRfg0seThycM0jypVthp5NhpcmqeZphmklVKRsLPI4WXjURhw8jmnRV2UZwnVGnC9UvDh434PFmE+XKX4J1RwwvVLj4PFGHizA5cqVws9VwstBh48USWaRdZlcmGnumHk5aZ6rXHmnJ1bkRKJIWqeoSegWTscnM81SegEcBCOxzbEyiwyixiACLCEACEIQEEIQgAQhCACGJCEBiZRCIQgAmzDYhCKw7hsxdmEIBcdsxMoQjC4hWJswhEFxNmNKRYQHcbycOTiwiHcbycXk4QgFxdiKEhCMVxwWKBCELCuOyhCEYBlFEIQELCEICCEIQAIQhAAhCEAP//Z"
        />
        <div className="login_text">
          <h1>SIGN IN </h1>
        </div>
        <Button onClick={signIn} variant="outlined">
          SIGN IN WITH GOOGLE
        </Button>
      </div>
    </div>
  );
}