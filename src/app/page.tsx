"use client";

import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useRef, useState } from "react";
import { Gallery, ThumbnailImageProps } from "react-grid-gallery";

const images = [
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128113565472133150/VRChat_2023-07-07_22-55-22.png",
		width: 1920,
		height: 1080
	},
	{
		src: "https://media.discordapp.net/attachments/1032954836016173066/1128091832979566742/file_dad791ab-7e04-4475-b4d3-8b447bc7a4bb.png",
		width: 1280,
		height: 720
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128091833466093568/VRChat_2023-06-02_15-23-47.942_2560x1440.png",
		width: 2560,
		height: 1440
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128091834153963590/VRChat_2023-06-10_21-53-07.420_1080x1920.png",
		width: 1080,
		height: 1920
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128091834674065549/VRChat_2023-06-22_00-43-15.789_2560x1440.png",
		width: 2560,
		height: 1440
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128091835307393114/VRChat_2023-06-22_01-52-46.822_2560x1440.png",
		width: 1440,
		height: 2560
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128091835835879424/VRChat_2023-06-22_02-22-48.593_2560x1440.png",
		width: 2560,
		height: 1440
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128091836385341581/VRChat_2023-06-28_21-52-27.121_1920x1080.png",
		width: 1920,
		height: 1080
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128091836821536798/VRChat_2023-06-28_22-31-12.505_2560x1440.png",
		width: 2560,
		height: 1440
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128097500545429504/VRChat_2023-06-10_20-22-39.138_1920x1080.png",
		width: 1920,
		height: 1080
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128097501145223268/VRChat_2023-06-20_11-29-06.283_2560x1440.png",
		width: 2560,
		height: 1440
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128097501862432768/VRChat_2023-06-27_03-21-22.758_2560x1440.png",
		width: 2560,
		height: 1440
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128097502449643580/VRChat_2023-06-28_22-33-13.422_2560x1440.png",
		width: 2560,
		height: 1440
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128097558699458590/VRChat_2023-07-03_21-18-52.423_2560x1440.png",
		width: 2560,
		height: 1440
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128097747187273828/VRChat_2023-04-22_01-48-59.095_1920x1080.png",
		width: 1920,
		height: 1080
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128097747933876304/VRChat_2023-04-22_02-19-12.689_2560x1440.png",
		width: 2560,
		height: 1440
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128097748693024810/VRChat_2023-04-22_02-43-10.607_2560x1440.png",
		width: 2560,
		height: 1440
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128098111491936316/VRChat_2023-03-01_01-47-04.032_1920x1080.png",
		width: 1920,
		height: 1080
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128098111999463525/VRChat_2023-03-20_00-07-49.213_1920x1080.png",
		width: 1920,
		height: 1080
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128098112485986304/VRChat_2023-03-22_01-58-10.864_1920x1080.png",
		width: 1920,
		height: 1080
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128098271596912712/ciOnSx6.png",
		width: 1920,
		height: 1080
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128098272158957608/VRChat_2023-02-12_19-10-13.png",
		width: 1920,
		height: 1080
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128098272658075709/VRChat_2023-02-12_21-15-45.962_1920x1080.png",
		width: 1920,
		height: 1080
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128098273010393159/VRChat_2023-02-25_14-49-14.061_1920x1080.png",
		width: 1920,
		height: 1080
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128098273513717800/VRChat_2023-02-25_23-00-10.202_1920x1080.png",
		width: 1920,
		height: 1080
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128098494322852032/VRChat_2023-02-25_22-38-10.077_1920x1080.png",
		width: 1920,
		height: 1080
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128098494792597524/VRChat_2023-02-25_22-40-04.199_1920x1080.png",
		width: 1920,
		height: 1080
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128098495325290616/VRChat_2023-02-25_23-00-52.009_1920x1080.png",
		width: 1920,
		height: 1080
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128098496071872574/VRChat_2023-02-25_23-24-49.239_1920x1080.png",
		width: 1920,
		height: 1080
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128098496482918450/VRChat_2023-02-25_23-30-15.675_1920x1080.png",
		width: 1920,
		height: 1080
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128098497124630538/VRChat_2023-02-25_23-31-39.924_1920x1080.png",
		width: 1920,
		height: 1080
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128098894140678144/VRChat_2023-01-01_12-13-55.818_1920x1080.png",
		width: 1920,
		height: 1080
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128098895323463791/VRChat_2023-01-28_00-49-58.812_1920x1080.png",
		width: 1920,
		height: 1080
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128098896007151638/VRChat_2023-01-28_01-10-41.022_1920x1080.png",
		width: 1920,
		height: 1080
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128098896686612490/VRChat_2022-12-16_20-59-47.572_2560x1440.png",
		width: 2560,
		height: 1440
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128098897403854938/VRChat_2022-12-18_23-36-02.707_1920x1080.png",
		width: 1920,
		height: 1080
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128098898095898735/VRChat_2022-12-27_01-01-06.073_1920x1080.png",
		width: 1920,
		height: 1080
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128098898725060729/VRChat_2022-12-27_01-56-51.156_1920x1080.png",
		width: 1920,
		height: 1080
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128099212974895215/VRChat_2022-11-06_23-11-56.343_1920x1080.png",
		width: 1920,
		height: 1080
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128099213599854632/VRChat_2022-11-07_00-13-02.800_1920x1080.png",
		width: 1920,
		height: 1080
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128099214174453790/VRChat_2022-11-23_00-07-02.180_1920x1080.png",
		width: 1920,
		height: 1080
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128099214728122439/b7zhwb.jpg",
		width: 1400,
		height: 787
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128099215202070630/VRChat_2022-10-02_00-14-12.896_1920x1080.png",
		width: 1920,
		height: 1080
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128099215768309841/VRChat_2022-10-02_17-26-29.029_1920x1080.png",
		width: 1920,
		height: 1080
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128099216321949826/VRChat_2022-10-28_19-44-51.948_1920x1080.png",
		width: 1920,
		height: 1080
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128099216967860274/VRChat_2022-10-28_23-52-43.622_1920x1080.png",
		width: 1920,
		height: 1080
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128099383154589786/VRChat_1920x1080_2022-09-04_07-01-3g_retouch.png",
		width: 1920,
		height: 1080
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128099383611773068/VRChat_1920x1080_2022-09-04_07-20-1g_retouch.png",
		width: 1920,
		height: 1080
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128099384177999924/VRChat_1920x1080_2022-09-04_07-22-1g_retouch.png",
		width: 1920,
		height: 1080
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128099384719069194/VRChat_1920x1080_2022-09-04_06-33-0g_retouch.png",
		width: 1920,
		height: 1080
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128099385268502619/VRChat_1920x1080_2022-09-04_06-39-1g_retouch.png",
		width: 1920,
		height: 1080
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128099385855721563/VRChat_1920x1080_2022-09-04_06-48-5g_retouch.png",
		width: 1920,
		height: 1080
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128099386635866192/VRChat_7680x4320_2022-09-04_09-13-19.628g_retouch.png",
		width: 1920,
		height: 1080
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128100114200797284/VRChat_1920x1080_2022-08-19_14-27-58.296.png",
		width: 1920,
		height: 1080
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128100114590871742/VRChat_1920x1080_2022-08-21_19-11-5.png",
		width: 1920,
		height: 1080
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128100115110953120/VRChat_1920x1080_2022-08-26_21-41-1.png",
		width: 1920,
		height: 1080
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128100115689775215/VRChat_1920x1080_2022-07-15_20-37-31.331.png",
		width: 1920,
		height: 1080
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128100116511862855/VRChat_1920x1080_2022-07-17_00-34-21.159.png",
		width: 1920,
		height: 1080
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128100116851589142/buramiegimme.png",
		width: 490,
		height: 581
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128100117220696086/VRChat_1920x1080_2022-06-22_21-44-46.988.png",
		width: 1920,
		height: 1080
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128100321130975376/VRChat_1920x1080_2022-04-04_22-36-30.473.png",
		width: 1920,
		height: 1080
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128100321638481990/VRChat_1920x1080_2022-04-04_22-41-58.303.png",
		width: 1920,
		height: 1080
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128100322540261466/VRChat_1920x1080_2022-04-11_20-37-33.163.png",
		width: 1920,
		height: 1080
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128100322846441513/VRChat_1920x1080_2022-04-20_19-55-17.261.png",
		width: 1920,
		height: 1080
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128100323257495552/VRChat_1920x1080_2022-03-18_02-27-14.079.png",
		width: 1920,
		height: 1080
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128100323609808967/VRChat_1920x1080_2022-03-20_18-03-31.566.png",
		width: 1920,
		height: 1080
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128100324377374771/VRChat_1920x1080_2022-03-23_00-20-21.596.png",
		width: 1920,
		height: 1080
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128100325828591647/VRChat_5760x3240_2022-03-18_18-36-19.685.png",
		width: 5760,
		height: 3240
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128100398394245221/VRChat_1920x1080_2022-01-01_01-13-51.123.png",
		width: 1920,
		height: 1080
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128100398994038904/VRChat_1920x1080_2022-01-04_22-42-29.547.png",
		width: 1920,
		height: 1080
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128100399442837554/VRChat_1920x1080_2022-01-04_22-50-58.374.png",
		width: 1920,
		height: 1080
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128100399904202843/VRChat_1920x1080_2022-01-06_17-23-43.767.png",
		width: 1920,
		height: 1080
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128100563188461588/236.jpg",
		width: 1440,
		height: 1440
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128100563486249030/238.jpg",
		width: 1440,
		height: 1440
	},
	{
		src: "https://cdn.discordapp.com/attachments/1032954836016173066/1128100563767283772/VRChat_1280x720_2021-03-28_12-11-41.686.png",
		width: 1280,
		height: 720
	}
];

const ImageComponent: FC<ThumbnailImageProps> = (props) => {
	return (
		<Image
			className="bg-black"
			{...props.imageProps}
			alt="Picture of Buramie"
			height={props.item.height}
			title=""
			width={props.item.width}
		/>
	);
};

export default function Home() {
	const reference = useRef<HTMLVideoElement>(null);
	const [playing, setPlaying] = useState(false);

	useEffect(() => {
		if (!reference.current) return;

		if (playing) {
			reference.current.volume = 0.3;
			reference.current.currentTime = 0;
			void reference.current.play();
			return;
		}

		reference.current.pause();
	}, [playing]);

	return (
		<div className="relative flex h-screen w-screen items-center justify-center text-white">
			<Gallery
				enableImageSelection={false}
				images={images}
				margin={0}
				thumbnailImageComponent={ImageComponent}
				onClick={() => setPlaying((playing) => !playing)}
			/>
			<video className="hidden" ref={reference} src={"/rindo.mp4"} />
			<div className="fixed bottom-0 flex w-full flex-col items-center justify-between px-4 py-3 backdrop-blur-sm backdrop-brightness-75 sm:flex-row">
				<span>
					Made for Buramie with <span className="text-red-500">❤</span>.
				</span>
				<div className="flex flex-col text-center text-xs brightness-75 sm:text-right">
					<span>Images are property of their respective owners.</span>
					<span>
						&copy; {new Date().getFullYear()}{" "}
						<Link
							className="border-b-2 border-transparent hover:border-current"
							href="https://ariesclark.com"
							target="_blank"
						>
							ariesclark.com
						</Link>
						, All rights reserved.
					</span>
				</div>
			</div>
		</div>
	);
}
