import { Check, X } from "lucide-react"

export default function RewardsBenefitsComparison() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Benefits Comparison by Level</h2>
      <p className="text-lg text-neutral-600 mb-8 max-w-3xl">
        Discover the exclusive advantages you'll unlock as you progress in your OneBite membership.
      </p>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="text-left p-4 bg-neutral-100">Benefits</th>
              <th className="p-4 bg-amber-700 text-white text-center">Bronze</th>
              <th className="p-4 bg-amber-500 text-white text-center">Silver</th>
              <th className="p-4 bg-amber-400 text-amber-950 text-center">Gold</th>
              <th className="p-4 bg-neutral-800 text-white text-center">Platinum</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-neutral-200">
              <td className="p-4 font-medium">Points per $1 spent</td>
              <td className="p-4 text-center">1 point</td>
              <td className="p-4 text-center">1 point</td>
              <td className="p-4 text-center">1.2 points</td>
              <td className="p-4 text-center">1.5 points</td>
            </tr>
            <tr className="border-b border-neutral-200 bg-neutral-50">
              <td className="p-4 font-medium">Priority reservations</td>
              <td className="p-4 text-center">
                <X className="h-5 w-5 text-neutral-400 mx-auto" />
              </td>
              <td className="p-4 text-center">
                <Check className="h-5 w-5 text-amber-600 mx-auto" />
              </td>
              <td className="p-4 text-center">
                <Check className="h-5 w-5 text-amber-600 mx-auto" />
              </td>
              <td className="p-4 text-center">
                <Check className="h-5 w-5 text-amber-600 mx-auto" />
              </td>
            </tr>
            <tr className="border-b border-neutral-200">
              <td className="p-4 font-medium">Discount on experiences</td>
              <td className="p-4 text-center">
                <X className="h-5 w-5 text-neutral-400 mx-auto" />
              </td>
              <td className="p-4 text-center">5%</td>
              <td className="p-4 text-center">10%</td>
              <td className="p-4 text-center">15%</td>
            </tr>
            <tr className="border-b border-neutral-200 bg-neutral-50">
              <td className="p-4 font-medium">Birthday special offer</td>
              <td className="p-4 text-center">
                <X className="h-5 w-5 text-neutral-400 mx-auto" />
              </td>
              <td className="p-4 text-center">
                <Check className="h-5 w-5 text-amber-600 mx-auto" />
              </td>
              <td className="p-4 text-center">
                <Check className="h-5 w-5 text-amber-600 mx-auto" />
              </td>
              <td className="p-4 text-center">
                <Check className="h-5 w-5 text-amber-600 mx-auto" />
              </td>
            </tr>
            <tr className="border-b border-neutral-200">
              <td className="p-4 font-medium">Access to exclusive events</td>
              <td className="p-4 text-center">
                <X className="h-5 w-5 text-neutral-400 mx-auto" />
              </td>
              <td className="p-4 text-center">Selected</td>
              <td className="p-4 text-center">Quarterly</td>
              <td className="p-4 text-center">Monthly</td>
            </tr>
            <tr className="border-b border-neutral-200 bg-neutral-50">
              <td className="p-4 font-medium">Concierge service</td>
              <td className="p-4 text-center">
                <X className="h-5 w-5 text-neutral-400 mx-auto" />
              </td>
              <td className="p-4 text-center">
                <X className="h-5 w-5 text-neutral-400 mx-auto" />
              </td>
              <td className="p-4 text-center">Chat</td>
              <td className="p-4 text-center">24/7</td>
            </tr>
            <tr className="border-b border-neutral-200">
              <td className="p-4 font-medium">Chef's table access</td>
              <td className="p-4 text-center">
                <X className="h-5 w-5 text-neutral-400 mx-auto" />
              </td>
              <td className="p-4 text-center">
                <X className="h-5 w-5 text-neutral-400 mx-auto" />
              </td>
              <td className="p-4 text-center">
                <X className="h-5 w-5 text-neutral-400 mx-auto" />
              </td>
              <td className="p-4 text-center">Priority</td>
            </tr>
            <tr className="border-b border-neutral-200 bg-neutral-50">
              <td className="p-4 font-medium">Complimentary upgrades</td>
              <td className="p-4 text-center">
                <X className="h-5 w-5 text-neutral-400 mx-auto" />
              </td>
              <td className="p-4 text-center">
                <X className="h-5 w-5 text-neutral-400 mx-auto" />
              </td>
              <td className="p-4 text-center">
                <X className="h-5 w-5 text-neutral-400 mx-auto" />
              </td>
              <td className="p-4 text-center">
                <Check className="h-5 w-5 text-amber-600 mx-auto" />
              </td>
            </tr>
            <tr className="border-b border-neutral-200">
              <td className="p-4 font-medium">Access to exclusive restaurants</td>
              <td className="p-4 text-center">
                <X className="h-5 w-5 text-neutral-400 mx-auto" />
              </td>
              <td className="p-4 text-center">
                <X className="h-5 w-5 text-neutral-400 mx-auto" />
              </td>
              <td className="p-4 text-center">Limited</td>
              <td className="p-4 text-center">Full</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-8 bg-amber-50 p-6 rounded-lg border border-amber-200">
        <h3 className="text-xl font-semibold mb-3 text-amber-800">How to Level Up?</h3>
        <p className="text-neutral-700 mb-4">
          Your level is determined by the number of points accumulated in your account. As you earn more points, you'll
          automatically level up and unlock new benefits.
        </p>
        <ul className="space-y-2">
          <li className="flex items-center">
            <span className="bg-amber-700 text-white text-xs font-medium rounded-full w-5 h-5 flex items-center justify-center mr-2">
              B
            </span>
            <span>
              <strong>Bronze:</strong> 0 points (starting level)
            </span>
          </li>
          <li className="flex items-center">
            <span className="bg-amber-500 text-white text-xs font-medium rounded-full w-5 h-5 flex items-center justify-center mr-2">
              S
            </span>
            <span>
              <strong>Silver:</strong> 1,000+ accumulated points
            </span>
          </li>
          <li className="flex items-center">
            <span className="bg-amber-400 text-amber-950 text-xs font-medium rounded-full w-5 h-5 flex items-center justify-center mr-2">
              G
            </span>
            <span>
              <strong>Gold:</strong> 5,000+ accumulated points
            </span>
          </li>
          <li className="flex items-center">
            <span className="bg-neutral-800 text-white text-xs font-medium rounded-full w-5 h-5 flex items-center justify-center mr-2">
              P
            </span>
            <span>
              <strong>Platinum:</strong> 10,000+ accumulated points
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}
