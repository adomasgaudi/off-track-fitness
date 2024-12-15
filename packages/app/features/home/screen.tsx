import {
  Anchor,
  Button,
  H1,
  Paragraph,
  Separator,
  Sheet,
  useToastController,
  SwitchThemeButton,
  SwitchRouterButton,
  XStack,
  YStack,
  Input,
  H3,
} from '@my/ui'
import { ChevronDown, ChevronUp, X } from '@tamagui/lucide-icons'
import { useState } from 'react'
import { Platform } from 'react-native'
import { useLink } from 'solito/navigation'

export function HomeScreen({ pagesMode = false }: { pagesMode?: boolean }) {
  const linkTarget = pagesMode ? '/pages-example-user' : '/user'
  const linkProps = useLink({
    href: `${linkTarget}/nate`,
  })

  const [reps, setReps] = useState(0);
  const [weight, setWeight] = useState(0);

  // Calculate total volume and 1RM using Epley's formula
  const totalVolume = reps * weight;
  const oneRepMax = reps > 0 ? weight * (1 + reps / 30) : 0;

  return (
   <YStack ai="center" pt="20px">
      <H1 mb="10px">X-RepMax Calculator</H1>
      <XStack space="$4">
        {/* Input Column */}
        <YStack space="$2">
          <Input
            keyboardType="numeric"
            placeholder="Reps"
            value={String(reps)}
            onChangeText={(text) => setReps(Number(text) || 0)}
            width="80px"
            textAlign="center"
          />
          <Input
            keyboardType="numeric"
            placeholder="Weight"
            value={String(weight)}
            onChangeText={(text) => setWeight(Number(text) || 0)}
            width="80px"
            textAlign="center"
          />
        </YStack>

        {/* Results Column */}
        <YStack space="$2">
          <H3 textAlign="center" width="80px">
            {totalVolume}
          </H3>
          <H3 textAlign="center" width="80px">
            {oneRepMax.toFixed(1)}
          </H3>
        </YStack>
      </XStack>
    </YStack>
    // <YStack
    //   f={1}
    //   jc="center"
    //   ai="center"
    //   gap="$8"
    //   p="$4"
    //   bg="$background"
    // >
    //   <XStack
    //     pos="absolute"
    //     w="100%"
    //     t="$6"
    //     gap="$6"
    //     jc="center"
    //     fw="wrap"
    //     $sm={{ pos: 'relative', t: 0 }}
    //   >
    //     {Platform.OS === 'web' && (
    //       <>
    //         <SwitchRouterButton pagesMode={pagesMode} />
    //         <SwitchThemeButton />
    //       </>
    //     )}
    //   </XStack>

    //   <YStack gap="$4">
    //     <H1
    //       ta="center"
    //       col="$color12"
    //     >
    //       Welcome to Tamagui.
    //     </H1>
    //     <Paragraph
    //       col="$color10"
    //       ta="center"
    //     >
    //       Here's a basic starter to show navigating from one screen to another.
    //     </Paragraph>
    //     <Separator />
    //     <Paragraph ta="center">
    //       This screen uses the same code on Next.js and React Native.
    //     </Paragraph>
    //     <Separator />
    //   </YStack>

    //   <Button {...linkProps}>Link to user</Button>

    //   <SheetDemo />
    // </YStack>
  )
}

// function SheetDemo() {
//   const toast = useToastController()

//   const [open, setOpen] = useState(false)
//   const [position, setPosition] = useState(0)

//   return (
//     <>
//       <Button
//         size="$6"
//         icon={open ? ChevronDown : ChevronUp}
//         circular
//         onPress={() => setOpen((x) => !x)}
//       />
//       <Sheet
//         modal
//         animation="medium"
//         open={open}
//         onOpenChange={setOpen}
//         snapPoints={[80]}
//         position={position}
//         onPositionChange={setPosition}
//         dismissOnSnapToBottom
//       >
//         <Sheet.Overlay
//           animation="lazy"
//           enterStyle={{ opacity: 0 }}
//           exitStyle={{ opacity: 0 }}
//         />
//         <Sheet.Handle bg="$gray8" />
//         <Sheet.Frame
//           ai="center"
//           jc="center"
//           gap="$10"
//           bg="$color2"
//         >
//           <XStack gap="$2">
//             <Paragraph ta="center">Made by</Paragraph>
//             <Anchor
//               col="$blue10"
//               href="https://twitter.com/natebirdman"
//               target="_blank"
//             >
//               @natebirdman,
//             </Anchor>
//             <Anchor
//               color="$purple10"
//               href="https://github.com/tamagui/tamagui"
//               target="_blank"
//               rel="noreferrer"
//             >
//               give it a ⭐️
//             </Anchor>
//           </XStack>

//           <Button
//             size="$6"
//             circular
//             icon={ChevronDown}
//             onPress={() => {
//               setOpen(false)
//               toast.show('Sheet closed!', {
//                 message: 'Just showing how toast works...',
//               })
//             }}
//           />
//         </Sheet.Frame>
//       </Sheet>
//     </>
//   )
// }
